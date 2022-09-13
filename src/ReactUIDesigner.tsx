import React, { FC, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { confirmDialog } from 'primereact/confirmdialog';
import { EditorItem } from './editors/management/EditorCreator';
import EditorManager from './editors/management/EditorManager';
import './ReactUIDesigner.scss';
import TabSelection from './editors/management/TabSelection';
import VariableProvider, { variableContext } from './VariableProvider';
import { sendRequest } from './RequestService';
import { Toast } from 'primereact/toast';
import { generateCSS } from './util/GenerateCSS';

interface IReactUIDesigner {
  isCorporation: boolean
  uploadUrl?: string
}

const ReactUIDesigner: FC<IReactUIDesigner> = (props) => {
  const context = useContext(variableContext);

  const [themeName, setThemeName] = useState<string>(context.themeName);

  const [schemeName, setSchemeName] = useState<string>(context.schemeName);

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const tabChangeCallBack = useCallback((index: number) => setActiveTabIndex(index), []);

  const previousThemeName = useRef<string>(context.themeName);

  const isPreviewMode = useMemo(() => props.children !== undefined, [props.children]);

  const [previewValuesChanged, setPreviewValuesChanges] = useState<boolean>(false);

  const [, setResetFlag] = useState<boolean>(false);

  const uploadUrl = useMemo(() => props.uploadUrl || "PASTE URL HERE", [props.uploadUrl]);

  const toastRef = useRef<Toast>(null);

  const handleDownload = () => {
    const fileNameScheme = context.schemeName + ".css";
    const schemeCSS = generateCSS("scheme", isPreviewMode, props.isCorporation, context);

    const fileNameTheme = context.themeName + ".css";
    const themeCSS = generateCSS("theme", isPreviewMode, props.isCorporation, context);

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(themeCSS));
    element.setAttribute('download', fileNameTheme);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(schemeCSS));
    element.setAttribute('download', fileNameScheme);
    element.click();
    document.body.removeChild(element);
  }

  const handleUpload = (uploadUrl:string) => {
    const fileNameScheme = context.schemeName + ".css";
    const schemeCSS = generateCSS("scheme", isPreviewMode, props.isCorporation, context);

    const fileNameTheme = context.themeName + ".css";
    const themeCSS = generateCSS("theme", isPreviewMode, props.isCorporation, context);

    const formData = new FormData();

    formData.set("theme-file-name", fileNameTheme);
    formData.set("theme-css", themeCSS);

    formData.set("scheme-file-name", fileNameScheme);
    formData.set("scheme-css", schemeCSS);

    sendRequest({ formData: formData }, uploadUrl)
    .then(() => {
      if (toastRef.current) {
        toastRef.current.show({ severity: "success", summary: "Upload successful!", detail: "The CSS Files have been uploaded to the server." })
      }
    })
    .catch((error) => {
      if (toastRef.current) {
        toastRef.current.show({ severity: "error", summary: "Upload failed!", detail: "The CSS Files could not be uploaded. " + error })
      }
      console.error(error)
    });
  }

  useEffect(() => {
    context.themeName = themeName;
  }, [themeName]);

  useEffect(() => {
    context.schemeName = schemeName;
  }, [schemeName]);

  useEffect(() => {
    const docStyle = window.getComputedStyle(document.documentElement);
    if (isPreviewMode) {
      context.defaultValues.forEach((value, key) => {
        context.defaultValues.set(key, docStyle.getPropertyValue(key))
      })

      context.variables.forEach((variableMap) => {
        variableMap.forEach((editorItems) => {
          editorItems.forEach(editorItem => {
            editorItem.value = docStyle.getPropertyValue(editorItem.variable)
          })
        })
      })
      setPreviewValuesChanges(true);
    }
  }, [isPreviewMode]);

  const confirm = () => {
    const acceptFunc = () => {
      context.variables.forEach((variableMap) => {
        variableMap.forEach((editorItems) => {
          editorItems.forEach((editorItem) => {
            const foundDefaultValue = context.defaultValues.get(editorItem.variable);
            if (foundDefaultValue) {
              editorItem.value = foundDefaultValue;
              document.documentElement.style.setProperty(editorItem.variable, foundDefaultValue)
            }
          });
        });
      });
      setResetFlag(prevState => !prevState)
    }

    confirmDialog({
      message: "Are you sure you want to reset to default?",
      header: "Resetting Variables",
      icon: "pi pi-question-circle",
      accept: () => acceptFunc(),
    })
  }

  return (
    <VariableProvider>
      <Toast ref={toastRef} />
      <div className='designer-main'>
        <div className='designer-frame'>
          <div className='designer-topbar'>
            <div className='designer-topbar-left'>
              <span className='designer-topbar-header'>ReactUI-Designer</span>
              <Button className='designer-topbar-reset-button' icon='fas fa-undo' onClick={confirm} />
            </div>
            <img className='designer-topbar-logo' alt='company logo' src={process.env.PUBLIC_URL + '/assets/logo_big.png'} />
          </div>
          <div className='designer-panel-wrapper'>
            <div className='designer-panel-options'>
              <div className='designer-panel-options-inputs'>
                <span className='designer-panel-options-header'>Theme:</span>
                <InputText
                  value={themeName}
                  onChange={event => setThemeName(event.target.value)}
                  onBlur={() => {
                    context.variables.forEach(varTab => {
                      varTab.forEach(varGroup => {
                        varGroup.forEach(varItem => {
                          if (varItem.cssType === "theme") {
                            const getNewSelectorMap = (usageMap?: Map<string, string[]>) => {
                              if (usageMap && usageMap.size) {
                                const newMap = new Map<string, string[]>();
                                const variableEntries = usageMap.entries();
                                let entry = variableEntries.next();
                                while (!entry.done) {
                                  entry.value[0] = entry.value[0].replaceAll(previousThemeName.current, themeName);
                                  newMap.set(entry.value[0], entry.value[1]);
                                  entry = variableEntries.next();
                                }
                                return newMap;
                              }
                              return usageMap;
                            }
                            varItem.usage = getNewSelectorMap(varItem.usage) as Map<string, string[]>;
                            varItem.usage960 = getNewSelectorMap(varItem.usage960);
                            varItem.usage530 = getNewSelectorMap(varItem.usage530);
                          }
                        })
                      })
                    });
                    previousThemeName.current = themeName;
                  }}
                  className='designer-panel-options-inputtext' />
              </div>
              <div className='designer-panel-options-inputs'>
                <span className='designer-panel-options-header'>Scheme:</span>
                <InputText value={schemeName} onChange={event => setSchemeName(event.target.value)} className='designer-panel-options-inputtext' />
              </div>
              <Button className={uploadUrl ? 'designer-panel-options-button' : 'designer-panel-options-button-solo'} icon='fas fa-file-download' onClick={handleDownload} />
              {uploadUrl && <Button className='designer-panel-options-button' icon='fas fa-cloud-upload-alt' onClick={() => handleUpload(uploadUrl)} />}
            </div>
            <EditorManager
              isPreviewMode={isPreviewMode} 
              isCorporation={props.isCorporation}
              activeIndex={activeTabIndex} />
          </div>
        </div>
        <div className='designer-content basti'>
          {isPreviewMode ? props.children : <TabSelection tabChangedCallback={tabChangeCallBack} />}
        </div>
      </div>
    </VariableProvider>
  );
}

export default ReactUIDesigner;

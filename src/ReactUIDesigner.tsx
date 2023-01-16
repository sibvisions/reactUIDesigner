/* Copyright 2022 SIB Visions GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import React, { FC, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { confirmDialog } from 'primereact/confirmdialog';
import EditorManager from './editors/management/EditorManager';
import TabSelection from './previews/TabSelection';
import VariableProvider, { variableContext } from './VariableProvider';
import { sendRequest } from './RequestService';
import { Toast } from 'primereact/toast';
import { generateCSS } from './util/GenerateCSS';
import TopBar from './previews/topbar/TopBar';
import { concatClassnames } from './util/ConcatClassNames';
import ExpressDialog from './ExpressDialog';
import { addCSSDynamically } from './util/AddCSSDynamically';

export type DesignerSubscriptionManager = {
  notifyFontSizeChanged: Function,
  notifyStdHeaderChanged: Function,
  notifyButtonPaddingChanged: Function,
  notifyButtonBackgroundChanged: Function,
  notifyTopbarColorChanged: Function,
  notifyCheckboxSizeChanged: Function,
  notifyRadiobuttonSizeChanged: Function,
  notifyIconOnlyPaddingChanged: Function,
  notifyInputButtonPaddingChanged: Function,
  notifyMenuButtonPaddingChanged: Function,
  notifyStdMenuWidthChanged: Function,
  notifyStdMenuCollapsedWidthChanged: Function,
  notifyCorpHeaderChanged: Function,
  notifyCorpMenubarChanged: Function,
  notifyInputLRPaddingChanged: Function,
  notifyInputTBPaddingChanged: Function,
  notifyTabPaddingChanged: Function,
  notifyTableHeaderPaddingChanged: Function,
  notifyTableDataHeightChanged: Function,
  notifyMenuBarHeightChanged: Function,
  notifyAll: Function
}

interface IReactUIDesigner {
  isCorporation: boolean
  changeImages: () => void
  uploadUrl?: string
  isLogin: boolean
  logoBig: string
  logoSmall: string
  logoLogin: string
  designerSubscription: DesignerSubscriptionManager|undefined
  appName:string
  setShowDesigner: () => void
  changeTheme: (value: string) => void
  uploadCallback: (schemeName: string, themeName: string) => void
}

const ReactUIDesigner: FC<IReactUIDesigner> = (props) => {
  const context = useContext(variableContext);

  const [themeName, setThemeName] = useState<string>(context.themeName);

  const [schemeName, setSchemeName] = useState<string>(context.schemeName);

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const tabChangeCallBack = useCallback((index: number) => setActiveTabIndex(index), []);

  const previousThemeName = useRef<string>(context.themeName);

  const isPreviewMode = useMemo(() => props.children !== undefined, [props.children]);

  const [, setPreviewValuesChanges] = useState<boolean>(false);

  const [, setReset] = useState<boolean>(false);

  const uploadUrl = useMemo(() => props.uploadUrl || "PASTE URL HERE", [props.uploadUrl]);

  const toastRef = useRef<Toast>(null);

  const [expressVisible, setExpressVisible] = useState<boolean>(false);

  const [presetTheme, setPresetTheme] = useState<string>("notSet");

  const [expressConfirm, setExpressConfirm] = useState<boolean>()

  const [presetScheme, setPresetScheme] = useState<string>("notSet");

  const [variablesReady, setVariablesReady] = useState<boolean>(false);

  useEffect(() => {
    if (!isPreviewMode) {
      addCSSDynamically('color-schemes/default.css', "schemeCSS", () => setPresetScheme("default"));
      addCSSDynamically('themes/basti.css', "themeCSS", () => setPresetTheme("basti"));
    }
  }, [])

  useEffect(() => {
    const docStyle = window.getComputedStyle(document.documentElement)
    context.variables.forEach((map) => {
      map.forEach(editorGroup => {
        editorGroup.items.forEach(editorItem => {
            const propertyValue = docStyle.getPropertyValue(editorItem.variable);
            editorItem.value = propertyValue
            
            if (context.defaultValues.has(editorItem.variable)) {
              context.defaultValues.set(editorItem.variable, propertyValue)
            }
        })
      })
    })
    setVariablesReady(prevState => !prevState);

    if (props.designerSubscription) {
      props.designerSubscription.notifyAll()
    }
  }, [presetScheme, presetTheme]);

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

  const handleUpload = (uploadUrl: string) => {
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
          toastRef.current.show({ severity: "success", summary: "Upload successful!", detail: "The new styles: " + fileNameTheme + " and " + fileNameScheme + " were set for the application " + props.appName + "." });
          props.uploadCallback(fileNameScheme, fileNameTheme);
        }
      })
      .catch((error) => {
        if (toastRef.current) {
          toastRef.current.show({ severity: "error", summary: "Upload failed!", detail: "The new styles could not be set for application " + props.appName + ". " + error })
        }
        console.error(error)
      });
  }

  useEffect(() => {
    context.themeName = themeName;
  }, [themeName, context]);

  useEffect(() => {
    context.schemeName = schemeName;
  }, [schemeName, context]);

  useEffect(() => {
    const docStyle = window.getComputedStyle(document.documentElement);
    if (isPreviewMode) {
      context.defaultValues.forEach((value, key) => {
        context.defaultValues.set(key, docStyle.getPropertyValue(key))
      })

      context.variables.forEach((variableMap) => {
        variableMap.forEach((editorGroup) => {
          editorGroup.items.forEach(editorItem => {
            editorItem.value = docStyle.getPropertyValue(editorItem.variable)
          })
        })
      })
      setPreviewValuesChanges(true);
    }
  }, [isPreviewMode, context.defaultValues, context.variables]);

  const confirm = () => {
    const acceptFunc = () => {
      context.variables.forEach((variableMap) => {
        variableMap.forEach((editorGroup) => {
          editorGroup.items.forEach((editorItem) => {
            const foundDefaultValue = context.defaultValues.get(editorItem.variable);
            if (foundDefaultValue) {
              editorItem.value = foundDefaultValue;
              document.documentElement.style.setProperty(editorItem.variable, foundDefaultValue);
            }
          });
        });
      });
      if (props.designerSubscription) {
        props.designerSubscription.notifyButtonBackgroundChanged();
        props.designerSubscription.notifyButtonPaddingChanged();
        props.designerSubscription.notifyCheckboxSizeChanged();
        props.designerSubscription.notifyCorpHeaderChanged();
        props.designerSubscription.notifyCorpMenubarChanged();
        props.designerSubscription.notifyFontSizeChanged();
        props.designerSubscription.notifyIconOnlyPaddingChanged();
        props.designerSubscription.notifyInputButtonPaddingChanged();
        props.designerSubscription.notifyInputLRPaddingChanged();
        props.designerSubscription.notifyInputTBPaddingChanged();
        props.designerSubscription.notifyMenuBarHeightChanged();
        props.designerSubscription.notifyMenuButtonPaddingChanged();
        props.designerSubscription.notifyRadiobuttonSizeChanged();
        props.designerSubscription.notifyStdHeaderChanged();
        props.designerSubscription.notifyStdMenuCollapsedWidthChanged();
        props.designerSubscription.notifyStdMenuWidthChanged();
        props.designerSubscription.notifyTabPaddingChanged();
        props.designerSubscription.notifyTableDataHeightChanged();
        props.designerSubscription.notifyTableHeaderPaddingChanged();
        props.designerSubscription.notifyTopbarColorChanged();
      }
      setReset(prevState => !prevState)
    }

    confirmDialog({
      message: "Are you sure you want to reset to default?",
      header: "Resetting Variables",
      icon: "pi pi-question-circle",
      accept: () => acceptFunc(),
    })
  }

  const uploadImage = (type: "login" | "menu" | "small") => {
    const inputElem = document.createElement('input');
    inputElem.type = 'file';
    //@ts-ignore
    inputElem.showPicker()
    inputElem.onchange = (e) => {
      // @ts-ignore
      const tmppath = URL.createObjectURL(e.target.files[0]);
      const imgElem = document.getElementById(type + "-image") as HTMLImageElement;
      imgElem.src = tmppath;
      const formData = new FormData();
      switch (type) {
        case "login":
          // @ts-ignore
          formData.set("login-image", e.target.files[0]);
          break;
        case "menu":
          // @ts-ignore
          formData.set("menu-image", e.target.files[0]);
          break;
        case "small":
          // @ts-ignore
          formData.set("menu-image-small", e.target.files[0]);
          break;
      }

      sendRequest({ formData: formData }, uploadUrl)
      .then(() => {
        props.changeImages();
        if (toastRef.current) {
          toastRef.current.show({ severity: "success", summary: "Upload successful!", detail: "The image has been uploaded to the server." })
        }
      })
      .catch((error) => {
        if (toastRef.current) {
          toastRef.current.show({ severity: "error", summary: "Upload failed!", detail: "The image could not be uploaded. " + error })
        }
        console.error(error)
      });
    }
  }

  return (
    <VariableProvider>
      <Toast ref={toastRef} />
      <TopBar>
      <ExpressDialog 
        visible={expressVisible} 
        handleClose={() => setExpressVisible(false)} 
        setPresetScheme={(val) => {
          setPresetScheme(val);
          setSchemeName(val);
        }} 
        setPresetTheme={(val) => {
          setPresetTheme(val);
          setThemeName(val);
        }}
        handleConfirm={() => setExpressConfirm(prevState => !prevState)}
        showToast={() => {
          if (toastRef.current) {
            toastRef.current.show({ severity: "error", summary: "Invalid Color!", detail: "This color is invalid please use a valid color." })
          }
        }}
        changeTheme={props.changeTheme} />
        <div className='designer-main'>
          <div className='designer-frame' style={{ zIndex: props.isLogin ? "1003" : "" }}>
            <div className='designer-topbar'>
              <div className='designer-topbar-left'>
                {isPreviewMode && <Button className='designer-topbar-buttons' icon='fas fa-palette' onClick={() => props.setShowDesigner()} />}
                <Button className='designer-topbar-buttons' icon='fas fa-undo' onClick={confirm} />
                <Button className='designer-topbar-buttons' icon='fas fa-fast-forward' onClick={() => setExpressVisible(true)} />
              </div>
              <span className='designer-topbar-header'>App-Designer</span>
            </div>
            <div className='designer-panel-wrapper'>
            <div className='designer-panel-options'>
            <div>
              <div className='designer-panel-row'>
                <span className='designer-panel-header'>Theme:</span>
                <InputText
                  value={themeName}
                  onChange={event => setThemeName(event.target.value)}
                  onBlur={() => {
                    context.variables.forEach(varTab => {
                      varTab.forEach(varGroup => {
                        varGroup.items.forEach(varItem => {
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
                  className='designer-panel-inputtext' />
              </div>
              <div className='designer-panel-row'>
                <span className='designer-panel-header'>Scheme:</span>
                <InputText value={schemeName} onChange={event => setSchemeName(event.target.value)} className='designer-panel-inputtext' />
              </div>
            </div>
            <div className='designer-panel-row'>
              <Button className={uploadUrl ? 'designer-panel-button download-button' : 'designer-panel-button-solo'} tooltip='Download' icon='fas fa-file-download' onClick={handleDownload} />
              {uploadUrl && <Button className='designer-panel-button upload-button' icon='fas fa-save' tooltip='Save' onClick={() => handleUpload(uploadUrl)} />}
            </div>
            </div>
              <EditorManager
                isPreviewMode={isPreviewMode}
                isCorporation={props.isCorporation}
                activeIndex={activeTabIndex}
                designerSubscription={props.designerSubscription}
                uploadImage={(type:"login"|"small"|"menu") => uploadImage(type)}
                logoLogin={props.logoLogin}
                logoBig={props.logoBig}
                logoSmall={props.logoSmall}
                variablesReady={variablesReady}
                />
            </div>
          </div>
          <div className={concatClassnames(
            'designer-content',
            !isPreviewMode ? 'reactUI ' + presetTheme : ''
            )}>
            {isPreviewMode ? props.children : <TabSelection tabChangedCallback={tabChangeCallBack} />}
          </div>
        </div>
      </TopBar>

    </VariableProvider>
  );
}

export default ReactUIDesigner;

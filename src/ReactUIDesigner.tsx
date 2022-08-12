import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
import EditorManager from './editors/EditorManager';
import './ReactUIDesigner.scss';
import TabSelection from './TabSelection';
import VariableProvider, { variableContext } from './VariableProvider';

const ReactUIDesigner: FC = () => {
  const context = useContext(variableContext);

  const [themeName, setThemeName] = useState<string>(context.themeName);

  const [schemeName, setSchemeName] = useState<string>(context.schemeName);

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const tabChangeCallBack = useCallback((index: number) => setActiveTabIndex(index), []);

  const previousThemeName = useRef<string>(context.themeName);

  const handleDownload = () => {
    const text = `Hello World!\nThis is my string\n${context.defaultValues.get('--login-mask-background')}`;
    const filename = "Test.txt";

    // const element = document.createElement('a');
    // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    // element.setAttribute('download', filename);
    // element.style.display = 'none';
    // document.body.appendChild(element);
    // element.click();
    // document.body.removeChild(element);
    console.log(context)
  }

  useEffect(() => {
    context.themeName = themeName;
  }, [themeName]);

  useEffect(() => {
    context.schemeName = schemeName;
  }, [schemeName]);

  return (
    <VariableProvider>
      <div className='designer-main'>
        <div className='designer-frame'>
          <div className='designer-topbar'>
            <span className='designer-topbar-header'>ReactUI-Designer</span>
            <img className='designer-topbar-logo' alt='company logo' src={process.env.PUBLIC_URL + '/assets/sib-logo.png'} />
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
              <Button className='designer-panel-options-download-button' icon='fas fa-file-download' onClick={handleDownload} />
            </div>

            <EditorManager activeIndex={activeTabIndex} />
          </div>
        </div>
        <div className='designer-content basti'>
          <TabSelection tabChangedCallback={tabChangeCallBack} />
        </div>
      </div>
    </VariableProvider>
  );
}

export default ReactUIDesigner;

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
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
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
import { Tooltip } from 'primereact/tooltip';
import { getCSSValue } from './util/GetCSSValue';
import { translation } from './util/Translation';

// Type for the DesignerSubscriptionManager
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

// Interface for the Designer
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
  uploadCallback: (schemeName: string, themeName: string) => void,
  transferType: "full"|"partial"|"all",
  translation: Map<string, string>
  children?: React.ReactNode
}

/** 
 * A Designer for the ReactUI which can adjust the theme and scheme of the application. 
 * The newly created scheme and theme can be uploaded to the server and downloaded.
 */
const ReactUIDesigner: FC<IReactUIDesigner> = (props) => {
  /** The context to gain access to the variables, defaultValues and more. */
  const context = useContext(variableContext);

  /** The name of the theme */
  const [themeName, setThemeName] = useState<string>(context.themeName);

  /** The name of the scheme */
  const [schemeName, setSchemeName] = useState<string>(context.schemeName);

  /** The currently active tab, relevant for non previewmode */
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  /** A function to set the tabindex */
  const tabChangeCallBack = useCallback((index: number) => setActiveTabIndex(index), []);

  /** Helper for previous theme name */
  const previousThemeName = useRef<string>(context.themeName);

  /** True, if the designer is used with the reactui */
  const isPreviewMode = useMemo(() => props.children !== undefined, [props.children]);

  /** Reset flag */
  const [, setReset] = useState<boolean>(false);

  /** The url to upload the css files/images to the server */
  const uploadUrl = useMemo(() => props.uploadUrl, [props.uploadUrl]);

  /** The reference of the toast component */
  const toastRef = useRef<Toast>(null);

  /** True if the express popup is visible */
  const [expressVisible, setExpressVisible] = useState<boolean>(false);

  /** The preset theme set initially or by the express mode */
  const [presetTheme, setPresetTheme] = useState<string>("notSet");

  /** The preset scheme set initially or by the express mode */
  const [presetScheme, setPresetScheme] = useState<string>("notSet");

  /** True, if the variables have loaded */
  const [variablesReady, setVariablesReady] = useState<boolean|undefined>(undefined);

  /** The name of the last used theme */
  const lastPreTheme = useRef<string>(presetTheme);

  /** The name of the last used scheme */
  const lastPreScheme = useRef<string>(presetScheme);

  /** Initially load the basic theme and scheme if it isn't in preview mode */
  useEffect(() => {
    if (!isPreviewMode) {
      addCSSDynamically('color-schemes/default.css', "schemeCSS", () => setPresetScheme("default"));
      addCSSDynamically('themes/basti.css', "themeCSS", () => setPresetTheme("basti"));
    }

    // Can't directly set translation because it is an import
    props.translation.forEach((value, key) => {
      translation.set(key, value);
    })
  }, []);

  /** Sets the default and normal variables */
  const setContextVariableValues = useCallback((type: "scheme"|"theme"|"all") => {
    const docStyle = window.getComputedStyle(document.documentElement)
    context.variables.forEach((map) => {
      map.forEach(editorGroup => {
        editorGroup.items.forEach(editorItem => {
          if (editorItem.cssType === type || type === "all") {
            // Set the default values, when the designer is initialising
            if ((presetScheme === "notSet" && presetTheme === "notSet" && isPreviewMode && !context.defaultValues.has(editorItem.variable)) || !isPreviewMode) {
              context.defaultValues.set(editorItem.variable, docStyle.getPropertyValue(editorItem.variable));
            }
            // Set the values of the editors with the values extracted from the css files
            editorItem.value = getCSSValue(editorItem, context.appName, lastPreTheme.current, lastPreScheme.current, isPreviewMode, variablesReady);
          }
        });
      })
    });

    if (type === "scheme" || type === "all") {
      lastPreScheme.current = presetScheme;
    }
    
    if (type === "theme" || type === "all") {
      lastPreTheme.current = presetTheme;
    }
    
    setVariablesReady(prevState => prevState === undefined ? true : !prevState);

    // Notify all components, that their values changed
    if (props.designerSubscription) {
      props.designerSubscription.notifyAll()
    }
  }, [presetScheme, presetTheme, context.defaultValues, context.variables])

  /** Set the variables for scheme and theme when the presetScheme or presetTheme changes */
  useEffect(() => {
    if (!isPreviewMode || variablesReady === undefined) {
      setTimeout(() => setContextVariableValues("all"), 0) 
    }
  }, [presetScheme, presetTheme, setContextVariableValues]);

  /** Adds the css files to the header and set's the variables after loading */
  const reloadCSSFile = useCallback((type: "scheme"|"theme", filename: string, upload:boolean) => {
    if (isPreviewMode && presetScheme !== "notSet" && presetTheme !== "notSet") {
      let path = '';
      if (type === "scheme") {
        path = 'color-schemes/' + filename + "?version=" + Math.random().toString(36).slice(2);
      }
      else {
        path = 'themes/' + filename + "?version=" + Math.random().toString(36).slice(2);
      }
      addCSSDynamically(path, type === "scheme" ? "schemeCSS" : "themeCSS", () => !upload ? setTimeout(() => setContextVariableValues(type), 0) : {});
    }
  }, [setContextVariableValues, isPreviewMode])

  /** Reloads the CSS files when the color-scheme changes */
  useEffect(() => {
    reloadCSSFile("scheme", presetScheme + ".css", false)
  }, [presetScheme, reloadCSSFile]);

  /** Reloads the CSS files when the color-scheme changes */
  useEffect(() => {
    reloadCSSFile("theme", presetTheme + ".css", false)
  }, [presetTheme, reloadCSSFile])

  /** Generates the scheme and theme css files and downloades them */
  const handleDownload = () => {
    if (context.schemeName === "factory-default" || context.themeName === "factory-basti") {
      confirmDialog({
        message: translation.get("The set name(s) of the color-scheme and/or theme is not allowed!"),
        header: translation.get("Unallowed Names!"),
        icon: "pi pi-times-circle"
      });
    }
    else {
      const fileNameScheme = context.schemeName + ".css";
      const schemeCSS = generateCSS("scheme", context);
      const fileNameTheme = context.themeName + ".css";
      const themeCSS = generateCSS("theme", context);
  
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
  }

  /**
   * Generates the theme and scheme css files and uploads them to the server if it is successful a message is shown and if it fails an error is shown.
   * On successful upload, the theme and scheme is saved in the sessionstorage to be used on reload
   * 
   */
  const handleUpload = (uploadUrl: string) => {
    if (context.schemeName === "factory-default" || context.themeName === "factory-basti") {
      confirmDialog({
        message: translation.get("The set name(s) of the color-scheme and/or theme is not allowed!"),
        header: translation.get("Unallowed Names!"),
        icon: "pi pi-times-circle"
      });
    }
    else {
      const fileNameScheme = context.schemeName + ".css";
      const schemeCSS = generateCSS("scheme", context);
  
      const fileNameTheme = context.themeName + ".css";
      const themeCSS = generateCSS("theme", context);
  
      const formData = new FormData();
  
      formData.set("theme-file-name", fileNameTheme);
      formData.set("theme-css", themeCSS);
  
      formData.set("scheme-file-name", fileNameScheme);
      formData.set("scheme-css", schemeCSS);
  
      sendRequest({ formData: formData }, uploadUrl)
        .then(() => {
          if (toastRef.current) {
            toastRef.current.show({ severity: "success", summary: translation.get("Upload successful!"), detail: translation.get("The new styles were set for the application.") });
            sessionStorage.setItem("reactui-designer-scheme-" + props.appName, fileNameScheme.substring(0, fileNameScheme.indexOf(".")));
            sessionStorage.setItem("reactui-designer-theme-" + props.appName, fileNameTheme.substring(0, fileNameTheme.indexOf(".")));
          }
        })
        .catch((error) => {
          if (toastRef.current) {
            if (uploadUrl === "PASTE URL HERE" || !uploadUrl) {
              toastRef.current.show({ severity: "error", summary: translation.get("Upload failed!"), detail: translation.get("The new styles could not be set for application. The Upload-URL is wrong!") })
            }
            else {
              toastRef.current.show({ severity: "error", summary: translation.get("Upload failed!"), detail: translation.get("The new styles could not be set for application.")})
            }
          }
          console.error(error)
        });
    }
  }

  // Sets context appname when props appname changes
  useEffect(() => {
    context.appName = props.appName;
  }, [props.appName])

  // Sets context themename when themename changes
  useEffect(() => {
    context.themeName = themeName;
  }, [themeName, context]);

  // Sets context schemename when schemename changes
  useEffect(() => {
    context.schemeName = schemeName;
  }, [schemeName, context]);

  /** Overwrites the context values with the current style values */
  const overwriteStyleToContext = () => {
    const docStyle = window.getComputedStyle(document.documentElement);
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
  };

  /** Overwrites the current style values with the context values */
  const overwriteContextToStyle = () => {
    const docStyle = document.documentElement.style;
    context.variables.forEach((variableMap) => {
      variableMap.forEach((editorGroup) => {
        editorGroup.items.forEach(editorItem => {
          docStyle.setProperty(editorItem.variable, editorItem.value);
        })
      })
    })
  }

  /** Show a confirmdialog and when confirmed reset the changes to the theme and scheme of the current scheme and theme name */
  const resetToDefault = () => {
    const acceptFunc = () => {
      context.variables.forEach((variableMap) => {
        variableMap.forEach((editorGroup) => {
          editorGroup.items.forEach((editorItem) => {
            const foundDefaultValue = context.defaultValues.get(editorItem.variable);
            if (foundDefaultValue) {
              const variableName = editorItem.variable.replace("--", "");
              sessionStorage.removeItem("reactui-designer-" + variableName + "-" + context.appName);
              editorItem.value = foundDefaultValue;
              document.documentElement.style.setProperty(editorItem.variable, foundDefaultValue);
            }
          });
        });
      });
      if (props.designerSubscription) {
        props.designerSubscription.notifyAll();
      }
      setReset(prevState => !prevState)
    }

    confirmDialog({
      message: translation.get("Are you sure you want to reset to default?"),
      header: translation.get("Resetting Variables"),
      icon: "pi pi-question-circle",
      accept: () => acceptFunc(),
    })
  }

  /** Show a confirmdialog and when confirmed reset to the default and basti scheme/theme */
  const resetToFactory = () => {
    const acceptFunc = () => {
      let schemeReady = false;
      let themeReady = false;

      let loginImgReady = false;
      let bigImgReady = false;
      let smallImgReady = false;

      const readyCheck = () => {
        if (schemeReady && themeReady) {
          // after the color-scheme and theme have loaded, save the variables from the DOM-Tree into the contect
          overwriteStyleToContext();
          if (props.designerSubscription) {
            props.designerSubscription.notifyAll();
          }
          // Remove the factory files again
          for (let link of document.head.getElementsByTagName('link')) {
            if (link.href.includes("factory-default.css") || link.href.includes("factory-basti.css")) {
              document.head.removeChild(link);
            }
          }
          // Then write the context to the style again (because the files have been removed and the styles need to be set again)
          overwriteContextToStyle()
          setVariablesReady(prevState => prevState === undefined ? true : !prevState);
        }
      }

      // Remove all previously set styles and re-add the height and width
      document.documentElement.removeAttribute("style");
      document.documentElement.style.setProperty("--main-height", "calc(100vh - 70px - 0.5rem - 0.5rem)");
      document.documentElement.style.setProperty("--main-width", "calc(100vw - 300px - 0.5rem - 0.5rem)");

      const formData = new FormData();

      const imgElemLogin = document.getElementById("login-image")
      const imgElemBig = document.getElementById("menu-image")
      const imgElemSmall = document.getElementById("small-image")

      if (imgElemLogin) {
        (imgElemLogin as HTMLImageElement).src = "/assets/factory-images/factory_login.png";
      }
      
      if (imgElemBig) {
        (imgElemBig as HTMLImageElement).src = "/assets/factory-images/factory_big.png";
      }
      
      if (imgElemSmall) {
        (imgElemSmall as HTMLImageElement).src = "/assets/factory-images/factory_small.png";
      }
      
      const imageReadyCheck = () => {
        if (loginImgReady && smallImgReady && bigImgReady && uploadUrl) {
          sendRequest({ formData: formData }, uploadUrl)
            .then(() => {
              props.changeImages();
            })
            .catch((error) => {
              console.error(error)
            });
        }
      }

      // reset the images to default
      fetch("assets/factory-images/factory_login.png")
      .then(response => response.arrayBuffer())
      .then(buf => new File([buf], "logo_login.png", { type: "image/png" }))
      .then(file => {
        formData.set("login-image", file);
        loginImgReady = true;
        imageReadyCheck();
      });

      fetch("assets/factory-images/factory_big.png")
      .then(response => response.arrayBuffer())
      .then(buf => new File([buf], "logo_big.png", { type: "image/png" }))
      .then(file => {
        formData.set("menu-image", file);
        bigImgReady = true;
        imageReadyCheck();
      });

      fetch("assets/factory-images/factory_small.png")
      .then(response => response.arrayBuffer())
      .then(buf => new File([buf], "logo_small.png", { type: "image/png" }))
      .then(file => {
        formData.set("menu-image-small", file);
        smallImgReady = true;
        imageReadyCheck();
      });

      // reset the themes, after loading call the readycheck
      addCSSDynamically("color-schemes/factory-default.css", "factoryCSS", () => {
        setTimeout(() => {
          schemeReady = true;
          readyCheck();
        }, 0);
      });
      addCSSDynamically("themes/factory-basti.css", "factoryCSS", () => {
        setTimeout(() => {
          themeReady = true;
          readyCheck();
        }, 0)
      })
    }

    confirmDialog({
      message: translation.get("Are you sure you want to reset to factory default?"),
      header: translation.get("Resetting to Factory Default"),
      icon: "pi pi-question-circle",
      accept: () => acceptFunc(),
    })
  }

  /**
   * Uploads an image to the server based on the type for login, the menu or collapsed menu
   * @param type - the type of the image
   */
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
      const fileNameTheme = context.themeName + ".css";
      formData.set("theme-file-name", fileNameTheme);
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

      if (uploadUrl) {
        sendRequest({ formData: formData }, uploadUrl)
        .then(() => {
          props.changeImages();
          if (toastRef.current) {
            toastRef.current.show({ severity: "success", summary: translation.get("Upload successful!"), detail: translation.get("The image has been uploaded to the server.") })
          }
        })
        .catch((error) => {
          if (toastRef.current) {
            toastRef.current.show({ severity: "error", summary: translation.get("Upload failed!"), detail: translation.get("The image could not be uploaded.") })
          }
          console.error(error)
        });
      }
      else if (toastRef.current) {
        toastRef.current.show({ severity: "error", summary: translation.get("Upload failed!"), detail: translation.get("The image could not be uploaded. Because the Upload-URL is not set!") })
      }
    }
  }

  return (
    <VariableProvider>
      <Toast ref={toastRef} />
      <TopBar>
      <ConfirmDialog />
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
        showToast={() => {
          if (toastRef.current) {
            toastRef.current.show({ severity: "error", summary: translation.get("Invalid Color!"), detail: translation.get("This color is invalid please use a valid color.") })
          }
        }}
        changeTheme={props.changeTheme}
        isPreviewMode={isPreviewMode} />
        <div className='designer-main'>
          <div className='designer-frame' style={{ zIndex: props.isLogin ? "1003" : "" }}>
            <div className='designer-topbar'>
              <div className='designer-topbar-left'>
                {isPreviewMode && <Tooltip target={"#close-designer-button"} />}
                {isPreviewMode && <Button id={"close-designer-button"} className='designer-topbar-buttons' icon='fas fa-palette' onClick={() => props.setShowDesigner()} data-pr-tooltip={translation.get("Close Style-Designer")} />}
                <Tooltip target={"#reset-default-button"} />
                <Button id={"reset-default-button"} className='designer-topbar-buttons' icon='fas fa-undo' onClick={resetToDefault} data-pr-tooltip={translation.get("Reset to Default")} />
                <Tooltip target={"#reset-factory-button"} />
                <Button id={"reset-factory-button"} className='designer-topbar-buttons' icon='fas fa-industry' onClick={resetToFactory} data-pr-tooltip={translation.get("Reset to Factory Default")} />
                <Tooltip target={"#express-mode-button"} />
                <Button id={"express-mode-button"} className='designer-topbar-buttons' icon='fas fa-fast-forward' onClick={() => setExpressVisible(true)} data-pr-tooltip={translation.get("Express-Mode")} />
              </div>
              <span className='designer-topbar-header'>{translation.get("Style-Designer")}</span>
            </div>
            <div className='designer-panel-wrapper'>
            <div className='designer-panel-options'>
            <div>
              <div className='designer-panel-row'>
                <span className='designer-panel-header'>{translation.get("Theme")}</span>
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
                <span className='designer-panel-header'>{translation.get("Scheme")}</span>
                <InputText value={schemeName} onChange={event => setSchemeName(event.target.value)} className='designer-panel-inputtext' />
              </div>
            </div>
            <div className='designer-panel-row'>
              <Button className={uploadUrl ? 'designer-panel-button download-button' : 'designer-panel-button-solo'} tooltip={translation.get("Download")} icon='fas fa-file-download' onClick={handleDownload} />
              {uploadUrl && <Button className='designer-panel-button upload-button' icon='fas fa-save' tooltip={translation.get("Save")} onClick={() => handleUpload(uploadUrl)} />}
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
                transferType={props.transferType}
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

import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all popup variables.
 * @var variable - the name of the variable which is being edited
 * @var label - the label which is being displayed in the designer
 * @var type - the type of the editor, color is a colorpicker, color-text is a text input for colors, and text is just a text.
 * @var cssType - either scheme or theme to know in which css file the variable is saved
 * @var value - the current value of the variable
 * @var usage - a Map which contains the CSS selector as key and the styles as value, to generate the css file
 * @var usage960 - optional, same as usage but for media query 960px
 * @var usage530 - optional, same as usage but for media query 530px
 * @var tooltip - optional, displays a tooltip for the variable
 */
export const popupEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Popup",
        {
            name: "Popup",
            visible: true,
            items: [
                {
                    variable: "--dialog-header-background",
                    label: "Header Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--dialog-header-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-popup .p-dialog-header, .error-dialog .p-dialog-header", ["background: var(--dialog-header-background);"])
                        .set(".rc-message-dialog .p-dialog-header", ["background: var(--dialog-header-background);"]),
                    tooltip: "The background-color of the header."
                },
                {
                    variable: "--dialog-header-text-color",
                    label: "Header Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--dialog-header-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-popup .p-dialog-header, .error-dialog .p-dialog-header", ["color: var(--dialog-header-text-color);"])
                        .set(".rc-popup .p-dialog-header .p-dialog-header-icon", ["color: var(--dialog-header-text-color);"]),
                    tooltip: "The text-color of the header."
                },
                {
                    variable: "--dialog-header-close-hover-background",
                    label: "Close Hover Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--dialog-header-close-hover-background'),
                    usage: new Map<string, string[]>().set(".rc-popup .p-dialog-header .p-dialog-header-icon:enabled:hover", ["background: var(--dialog-header-close-hover-background);"]),
                    tooltip: "The hover background-color of the 'x' to close the popup."
                },
                {
                    variable: "--dialog-header-close-hover-color",
                    label: "Close Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--dialog-header-close-hover-color'),
                    usage: new Map<string, string[]>().set(".rc-popup .p-dialog-header .p-dialog-header-icon:enabled:hover", ["color: var(--dialog-header-close-hover-color);"]),
                    tooltip: "The hover text-color of the 'x' to close the popup."
                    
                },
                {
                    variable: "--dialog-header-border",
                    label: "Header Border",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--dialog-header-border'),
                    usage: new Map<string, string[]>().set(".rc-popup .p-dialog-header, .error-dialog .p-dialog-header", ["border-bottom: var(--dialog-header-border);"]),
                    tooltip: "The border which seperates header and content of a popup."
                },
                {
                    variable: "--dialog-header-padding",
                    label: "Header Padding",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--dialog-header-padding'),
                    usage: new Map<string, string[]>().set(".p-dialog .p-dialog-header", ["padding: var(--dialog-header-padding);"]),
                    tooltip: "The padding of the header."
                },
                {
                    variable: "--dialog-content-background",
                    label: "Content Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--dialog-content-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-popup .p-dialog-content, .error-dialog .p-dialog-content", ["background: var(--dialog-content-background);"])
                        .set(".error-dialog .p-dialog-footer", ["background: var(--dialog-content-background);"])
                        .set(".rc-message-dialog .p-dialog-content, .rc-message-dialog .p-dialog-footer", ["background: var(--dialog-content-background);"])
                        .set("#toast-info .p-toast-message", ["background: var(--dialog-content-background);"]),
                    tooltip: "The background-color of the popup-content."
                },
                {
                    variable: "--dialog-border-radius",
                    label: "Border-Radius",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--dialog-border-radius'),
                    usage: new Map<string, string[]>()
                        .set(".rc-popup .p-dialog-header, .error-dialog .p-dialog-header", ["border-top-left-radius: var(--dialog-border-radius);", "border-top-right-radius: var(--dialog-border-radius);"])
                        .set(".rc-popup .p-dialog-content, .error-dialog .p-dialog-content", ["border-bottom-left-radius: var(--dialog-border-radius);", "border-bottom-right-radius: var(--dialog-border-radius);"])
                        .set(".error-dialog .p-dialog-footer", ["border-bottom-left-radius: var(--dialog-border-radius);", "border-bottom-right-radius: var(--dialog-border-radius);"])
                        .set(".rc-message-dialog .p-dialog-header", ["border-top-left-radius: var(--dialog-border-radius);", "border-top-right-radius: var(--dialog-border-radius);"])
                        .set(".rc-message-dialog .p-dialog-footer", ["border-bottom-left-radius: var(--dialog-border-radius);", "border-bottom-right-radius: var(--dialog-border-radius);"])
                        .set(".rc-message-dialog.message-dialog-no-footer .p-dialog-content", ["border-bottom-left-radius: var(--dialog-border-radius);", "border-bottom-right-radius: var(--dialog-border-radius);"]),
                    tooltip: "The border-radius of the popup (rounds corners)."
                }
            ]
        }
    )
    .set("Error-Popup",
        {
            name: "Error Popup",
            visible: true,
            items: [
                {
                    variable: "--message-error-header-background",
                    label: "Header Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-error-header-background'),
                    usage: new Map<string, string[]>()
                        .set(".error-dialog .p-dialog-header", ["background: var(--message-error-header-background);"]),
                    tooltip: "The header background-color of the error-popup."
                },
                {
                    variable: "--message-error-header-color",
                    label: "Header Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-error-header-color'),
                    usage: new Map<string, string[]>()
                        .set(".error-dialog .p-dialog-header", ["color: var(--message-error-header-color);"])
                        .set(".error-dialog .p-dialog-header .p-dialog-header-icon:enabled", ["color: var(--message-error-header-color);"])
                        .set(".error-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover", ["color: var(--message-error-header-color);"]),
                    tooltip: "The header text-color of the error-popup."
                },
                {
                    variable: "--message-error-header-close-hover",
                    label: "Header Close Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-error-header-close-hover'),
                    usage: new Map<string, string[]>()
                        .set(".error-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover", ["background: var(--message-error-header-close-hover);"]),
                    tooltip: "The hover background-color of the 'x' to close the error-popup."
                },
                {
                    variable: "--error-dialog-textarea-height",
                    label: "TextArea Height",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--error-dialog-textarea-height'),
                    usage: new Map<string, string[]>().set(".error-dialog .error-dialog-textarea", ["height: var(--error-dialog-textarea-height);"]),
                    tooltip: "The height of the error-popup's textarea."
                },
                {
                    variable: "--error-dialog-icon-size",
                    label: "Icon Size",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--error-dialog-icon-size'),
                    usage: new Map<string, string[]>().set(".error-dialog .error-dialog-icon", ["min-width: var(--error-dialog-icon-size);", "font-size: var(--error-dialog-icon-size);"]),
                    tooltip: "The icon size of the error-popup."
                }
            ]
        }
    )
import { translation } from "../util/Translation";
import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all message variables.
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
export const messagesEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Information",
        {
            name: "Information Message",
            visible: true,
            items: [
                {
                    variable: "--message-info-header-background",
                    label: translation.get("Header Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-info-header-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.info .p-dialog-header", ["background: var(--message-info-header-background);"])
                        .set("#toast-info .toast-header.info", ["background: var(--message-info-header-background);"]),
                    tooltip: translation.get("The background-color of the info message.")
                },
                {
                    variable: "--message-info-header-color",
                    label: translation.get("Header Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-info-header-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.info .p-dialog-header", ["color: var(--message-info-header-color);"])
                        .set(".rc-message-dialog.info .p-dialog-header .p-dialog-header-close .p-dialog-header-close-icon", ["color: var(--message-info-header-color);"]),
                    tooltip: translation.get("The text-color of the info message.")
                },
                {
                    variable: "--message-info-header-close-hover",
                    label: translation.get("Close Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-info-header-close-hover'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.info .p-dialog-header .p-dialog-header-close:hover", ["background: var(--message-info-header-close-hover);"])
                        .set("#toast-info .toast-header.info .toast-header-close:hover", ["background: var(--message-info-header-close-hover);"]),
                    tooltip: translation.get("The background-color of the 'x' to close the info message.")
                }
            ]
        }
    )
    .set("Warning",
        {
            name: "Warning Message",
            visible: true,
            items: [
                {
                    variable: "--message-warning-header-background",
                    label: translation.get("Header Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-warning-header-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.warning .p-dialog-header", ["background: var(--message-warning-header-background);"]),
                    tooltip: translation.get("The background-color of the warning message.")
                },
                {
                    variable: "--message-warning-header-color",
                    label: translation.get("Header Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-warning-header-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.warning .p-dialog-header", ["color: var(--message-warning-header-color);"])
                        .set(".rc-message-dialog.warning .p-dialog-header .p-dialog-header-close .p-dialog-header-close-icon", ["color: var(--message-warning-header-color);"]),
                    tooltip: translation.get("The text-color of the warning message.")
                },
                {
                    variable: "--message-warning-header-close-hover",
                    label: translation.get("Close Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-warning-header-close-hover'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.warning .p-dialog-header .p-dialog-header-close:hover", ["background: var(--message-warning-header-close-hover);"]),
                    tooltip: translation.get("The background-color of the 'x' to close the warning message.")
                }
            ]
        }
    )
    .set("Error",
        {
            name: "Error Message",
            visible: true,
            items: [
                {
                    variable: "--message-error-header-background",
                    label: translation.get("Header Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-error-header-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.error .p-dialog-header", ["background: var(--message-error-header-background);"]),
                    tooltip: translation.get("The background-color of the error message.")
                },
                {
                    variable: "--message-error-header-color",
                    label: translation.get("Header Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-error-header-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.error .p-dialog-header", ["color: var(--message-error-header-color);"])
                        .set(".rc-message-dialog.error .p-dialog-header .p-dialog-header-close .p-dialog-header-close-icon", ["color: var(--message-error-header-color);"]),
                    tooltip: translation.get("The text-color of the error message.")
                },
                {
                    variable: "--message-error-header-close-hover",
                    label: translation.get("Close Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-error-header-close-hover'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.error .p-dialog-header .p-dialog-header-close:hover", ["background: var(--message-error-header-close-hover);"]),
                    tooltip: translation.get("The background-color of the 'x' to close the error message.")
                }
            ]
        }
    )
    .set("Question",
        {
            name: "Question Message",
            visible: true,
            items: [
                {
                    variable: "--message-question-header-background",
                    label: translation.get("Header Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-question-header-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.question .p-dialog-header", ["background: var(--message-question-header-background);"]),
                    tooltip: translation.get("The background-color of the question message.")
                },
                {
                    variable: "--message-question-header-color",
                    label: translation.get("Header Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-question-header-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.question .p-dialog-header", ["color: var(--message-question-header-color);"])
                        .set(".rc-message-dialog.question .p-dialog-header .p-dialog-header-close .p-dialog-header-close-icon", ["color: var(--message-question-header-color);"]),
                    tooltip: translation.get("The text-color of the question message.")
                },
                {
                    variable: "--message-question-header-close-hover",
                    label: translation.get("Close Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--message-question-header-close-hover'),
                    usage: new Map<string, string[]>()
                        .set(".rc-message-dialog.question .p-dialog-header .p-dialog-header-close:hover", ["background: var(--message-question-header-close-hover);"]),
                    tooltip: translation.get("The background-color of the 'x' to close the question message.")
                }
            ]
        }
    )
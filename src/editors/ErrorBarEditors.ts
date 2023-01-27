import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all error-bar variables.
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
export const errorbarEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Error-Bar",
        {
            name: "Error Bar",
            visible: true,
            items: [
                {
                    variable: "--error-bar-background",
                    label: "Default Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--error-bar-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-error-bar", ["background: var(--error-bar-background);"])
                        .set(".crash-banner", ["background: var(--error-bar-background);"]),
                    tooltip: "The background-color of the error bar."
                },
                {
                    variable: "--error-bar-color",
                    label: "Default color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--error-bar-color'),
                    usage: new Map<string, string[]>().set(".rc-error-bar", ["color: var(--error-bar-color);"]),
                    tooltip: "The text-color of the error bar."
                },
                {
                    variable: "--gone-background",
                    label: "Gone Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--gone-background'),
                    usage: new Map<string, string[]>().set(".rc-error-bar.app-gone", ["background: var(--gone-background);"]),
                    tooltip: "The background-color of the gone bar."
                },
                {
                    variable: "--gone-color",
                    label: "Gone Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--gone-color'),
                    usage: new Map<string, string[]>().set(".rc-error-bar.app-gone", ["color: var(--gone-color);"]),
                    tooltip: "The text-color of the gone bar."
                }
            ]
        }
    )
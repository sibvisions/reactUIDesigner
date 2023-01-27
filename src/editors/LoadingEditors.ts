import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all loading-screen variables.
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
export const loadingEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Loading-Screen",
        {
            name: "Loading Screen",
            visible: true,
            items: [
                {
                    variable: "--loading-screen-left-background",
                    label: "Left Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--loading-screen-left-background'),
                    usage: new Map<string, string[]>()
                        .set(".loading-screen", [
                            "background: -webkit-radial-gradient(119% 190% at -6% -20%, var(--loading-screen-left-background) 70%, var(--loading-screen-right-background) 70%);",
                            "background: -o-radial-gradient(119% 190% at -6% -20%, var(--loading-screen-left-background) 70%, var(--loading-screen-right-background) 70%);",
                            "background: -moz-radial-gradient(119% 190% at -6% -20%, var(--loading-screen-left-background) 70%, var(--loading-screen-right-background) 70%);",
                            "background: radial-gradient(119% 190% at -6% -20%, var(--loading-screen-left-background) 70%, var(--loading-screen-right-background) 70%);"]),
                    tooltip: "The background-color for the left part of the loading-screen."
                },
                {
                    variable: "--loading-screen-right-background",
                    label: "Right Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--loading-screen-right-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The background-color for the right part of the loading-screen."
                }
            ]
        }
    )
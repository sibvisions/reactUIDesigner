import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all topbar variables.
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
export const topbarEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Progressbar",
        {
            name: "Progressbar",
            visible: true,
            items: [
                {
                    variable: "--topbar-colors",
                    label: "Color",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-colors'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The color of the progressbar when sending requests."
                }
            ]
        }
    )
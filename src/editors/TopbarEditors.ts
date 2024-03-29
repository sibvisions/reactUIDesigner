import { translation } from "../util/Translation";
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
                    label: translation.get("Color"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-colors'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The color of the progressbar when sending requests.")
                },
                {
                    variable: "--topbar-position",
                    label: translation.get("Position"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--topbar-position'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The position of the progressbar, valid values are 'top' or 'bottom'.")
                },
                {
                    variable: "--topbar-medium-interval",
                    label: translation.get("Medium Interval"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--topbar-medium-interval'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The interval when a response roundtrip is considered medium.")
                },
                {
                    variable: "--topbar-medium-interval-colors",
                    label: translation.get("Medium Interval Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-medium-interval-colors'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The color of the topbar for medium response times.")
                },
                {
                    variable: "--topbar-long-interval",
                    label: translation.get("Long Interval"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--topbar-long-interval'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The interval when a response roundtrip is considered long.")
                },
                {
                    variable: "--topbar-long-interval-colors",
                    label: translation.get("Long Interval Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-long-interval-colors'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The color of the topbar for long response times.")
                },
            ]
        }
    )
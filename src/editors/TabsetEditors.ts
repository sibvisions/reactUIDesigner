import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all tabset variables.
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
export const tabsetEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Tabset-Panel",
        {
            name: "Tabset Panel",
            visible: true,
            items: [
                {
                    variable: "--tab-padding",
                    label: "Padding",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--tab-padding'),
                    usage: new Map<string, string[]>().set(".basti .p-tabview .p-tabview-nav li .p-tabview-nav-link", ["padding: var(--tab-padding);"]),
                    tooltip: "The padding of the tab in the tab-navigation."
                },
                {
                    variable: "--tab-navbar-background",
                    label: "Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tab-navbar-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-tabview:not(.designer-tab-view) .p-tabview-nav", ["background: var(--tab-navbar-background);"])
                        .set(".p-tabview:not(.designer-tab-view) .p-tabview-nav li .p-tabview-nav-link", ["background: var(--tab-navbar-background);"]),
                    tooltip: "The background-color of the navigation-bar."
                },
                {
                    variable: "--tab-border-color",
                    label: "Border Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tab-border-color'),
                    usage: new Map<string, string[]>().set(".p-tabview:not(.designer-tab-view) .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link", ["border-color: transparent transparent var(--tab-border-color) transparent;"]),
                    tooltip: "The border color of the navigation-bar."
                },
                {
                    variable: "--tab-selected-color",
                    label: "Selected Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tab-selected-color'),
                    usage: new Map<string, string[]>().set(".p-tabview:not(.designer-tab-view) .p-tabview-nav li.p-highlight .p-tabview-nav-link", ["color: var(--tab-selected-color);", "border-color: var(--tab-selected-color);"]),
                    tooltip: "The text and border color of the selected tab."
                },
                {
                    variable: "--tab-hover-background",
                    label: "Hover Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tab-hover-background'),
                    usage: new Map<string, string[]>().set(".p-tabview:not(.designer-tab-view) .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link", ["background: var(--tab-hover-background);"]),
                    tooltip: "The hover background-color of a tab."
                },
                {
                    variable: "--tab-close-color",
                    label: "Close Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tab-close-color'),
                    usage: new Map<string, string[]>().set(".p-tabview-close", ["color: var(--tab-close-color);"]),
                    tooltip: "The color of the 'x' to close the tab."
                },
                {
                    variable: "--tab-close-hover-color",
                    label: "Close Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tab-close-hover-color'),
                    usage: new Map<string, string[]>().set(".p-tabview-close:hover", ["color: var(--tab-close-hover-color);"]),
                    tooltip: "The hover color of the 'x' to close the tab"
                },
                {
                    variable: "--tab-border-radius",
                    label: "Border-Radius",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tab-border-radius'),
                    usage: new Map<string, string[]>().set(".p-tabview:not(.designer-tab-view) .p-tabview-nav", ["border-radius: var(--tab-border-radius);", "padding: 0 var(--tab-border-radius);"]),
                    tooltip: "The border-radius of the navigation-bar (rounds borders)."
                }
            ]
        }
    )
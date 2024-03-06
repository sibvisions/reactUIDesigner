import { translation } from "../util/Translation";
import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all full transfertype variables.
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
export const fullEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Full-Topbar",
        {
            name: "Topbar",
            visible: true,
            items: [
                {
                    variable: "--menubar-height",
                    label: translation.get("Height"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--menubar-height'),
                    usage: new Map<string, string[]>().set(".basti .p-menubar", ["height: var(--menubar-height);"]),
                    tooltip: translation.get("The height of the topbar in full mode.")
                },
                {
                    variable: "--menubar-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The background-color of the topbar in full mode.")
                },
                {
                    variable: "--menubar-hover-background",
                    label: translation.get("Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-hover-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The hover background-color of the topbar in full mode.")
                },
                {
                    variable: "--menubar-text-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-text-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The text-color of the topbar in full mode.")
                },
                {
                    variable: "--menubar-submenu-background",
                    label: translation.get("Sub-Menu Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-submenu-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The background-color of a sub menu in full mode.")
                },
                {
                    variable: "--menubar-item-hover-background",
                    label: translation.get("Sub-Menu Item Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-item-hover-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The item hover background of a sub menu in full mode.")
                },
                {
                    variable: "--menubar-item-hover-text-color",
                    label: translation.get("Sub-Menu Item Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-item-hover-text-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The item hover text-color of a sub menu in full mode.")
                },
                {
                    variable: "--launcher-toolbar-background",
                    label: translation.get("Toolbar Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--launcher-toolbar-background'),
                    usage: new Map<string, string[]>().set(".mobile-launcher-menu .rc-frame-toolbar", ["background: var(--launcher-toolbar-background);"]),
                    tooltip: translation.get("The toolbar background-color of the mobile-launcher.")
                },
                {
                    variable: "--launcher-toolbar-border",
                    label: translation.get("Toolbar Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--launcher-toolbar-border'),
                    usage: new Map<string, string[]>().set(".mobile-launcher-menu .rc-frame-toolbar", ["border-color: var(--launcher-toolbar-border);"]),
                    tooltip: translation.get("The border color of a toolbar in the mobile launcher.")
                },
                {
                    variable: "--launcher-toolbar-button-text-color",
                    label: translation.get("Button Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--launcher-toolbar-button-text-color'),
                    usage: new Map<string, string[]>().set(".mobile-launcher-menu .rc-frame-toolbar .rc-button.mouse-border", ["color: var(--launcher-toolbar-button-text-color);"]),
                    tooltip: translation.get("The text-color of buttons in a toolbar of the mobile launcher.")
                },
                {
                    variable: "--launcher-toolbar-button-hover-background",
                    label: translation.get("Button Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--launcher-toolbar-button-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".mobile-launcher-menu .rc-frame-toolbar .rc-button.mouse-border:not(a):not(.p-disabled):not(.border-notpainted):hover", ["background: var(--launcher-toolbar-button-hover-background);", "border-color: var(--launcher-toolbar-button-hover-background);"]),
                    tooltip: translation.get("The hover background-color of buttons in a toolbar of the mobile launcher")
                },
                {
                    variable: "--launcher-toolbar-button-hover-text-color",
                    label: translation.get("Button Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--launcher-toolbar-button-hover-text-color'),
                    usage: new Map<string, string[]>().set(".mobile-launcher-menu .rc-frame-toolbar .rc-button.mouse-border:not(a):not(.p-disabled):not(.border-notpainted):hover", ["color: var(--launcher-toolbar-button-hover-text-color);"]),
                    tooltip: translation.get("The hover text-color of buttons in a toolbar of the mobile launcher")
                }
            ]
        }
    )
    .set("Workscreen Window",
        {
            name: "Workscreen Window",
            visible: true,
            items: [
                {
                    variable: "--frame-menubar-background",
                    label: translation.get("Menubar Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-menubar-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-frame .p-menubar", ["background: var(--frame-menubar-background);"])
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content", ["background: var(--frame-menubar-background);"]),
                    tooltip: translation.get("The background-color of the menubar in a workscreen window.")
                },
                {
                    variable: "--frame-menubar-hover-background",
                    label: translation.get("Menubar Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-menubar-hover-background'),
                    usage: new Map<string, string[]>().set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["background: var(--frame-menubar-hover-background);"]),
                    tooltip: translation.get("The hover background-color of the menubar in a workscreen window.")
                },
                {
                    variable: "--frame-menubar-text-color",
                    label: translation.get("Menubar Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-menubar-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["color: var(--frame-menubar-text-color);"])
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-submenu-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-submenu-icon", ["color: var(--frame-menubar-text-color);"])
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["color: var(--frame-menubar-text-color);"])
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon", ["color: var(--frame-menubar-text-color);"]),
                    tooltip: translation.get("The text-color of the menubar in a workscreen window.")
                },
                {
                    variable: "--frame-menubar-submenu-background",
                    label: translation.get("Submenu Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-menubar-submenu-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list", ["background: var(--frame-menubar-submenu-background);"])
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link", ["background: var(--frame-menubar-submenu-background);"]),
                    tooltip: translation.get("The sub menu backgroud-color in a workscreen window.")
                },
                {
                    variable: "--frame-menubar-item-hover-background",
                    label: translation.get("Subitem Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-menubar-item-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover", ["background: var(--frame-menubar-item-hover-background);"]),
                    tooltip: translation.get("The hover background-color for sub menu items in a workscreen window.")
                },
                {
                    variable: "--frame-menubar-item-hover-text-color",
                    label: translation.get("Subitem Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-menubar-item-hover-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon", ["color: var(--frame-menubar-item-hover-text-color);"]),
                    tooltip: translation.get("The hover text-color for sub menu items in a workscreen window.")
                },
                {
                    variable: "--frame-toolbar-background",
                    label: translation.get("Toolbar Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-toolbar-background'),
                    usage: new Map<string, string[]>().set(".rc-frame .rc-frame-toolbar", ["background: var(--frame-toolbar-background);"]),
                    tooltip: translation.get("The toolbar background-color in a workscreen window.")
                },
                {
                    variable: "--frame-toolbar-border",
                    label: translation.get("Toolbar Border"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-toolbar-border'),
                    usage: new Map<string, string[]>().set(".rc-frame .rc-frame-toolbar", ["border-color: var(--frame-toolbar-border);"]),
                    tooltip: translation.get("The toolbar border in a workscreen window.")
                },
                {
                    variable: "--frame-toolbar-button-text-color",
                    label: translation.get("Button Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-toolbar-button-text-color'),
                    usage: new Map<string, string[]>().set(".rc-frame .rc-frame-toolbar .rc-button.mouse-border", ["color: var(--frame-toolbar-button-text-color);"]),
                    tooltip: translation.get("The toolbar button text-color in a workscreen window.")
                },
                {
                    variable: "--frame-toolbar-button-hover-background",
                    label: translation.get("Button Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-toolbar-button-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-frame .rc-frame-toolbar .rc-button.mouse-border:not(a):not(.p-disabled):not(.border-notpainted):hover", ["background: var(--frame-toolbar-button-hover-background);", "border-color: var(--frame-toolbar-button-hover-background);"]),
                    tooltip: translation.get("The toolbar button hover background-color in a workscreen window.")
                },
                {
                    variable: "--frame-toolbar-button-hover-text-color",
                    label: translation.get("Button Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-toolbar-button-hover-text-color'),
                    usage: new Map<string, string[]>().set(".rc-frame .rc-frame-toolbar .rc-button.mouse-border:not(a):not(.p-disabled):not(.border-notpainted):hover", ["color: var(--frame-toolbar-button-hover-text-color);"]),
                    tooltip: translation.get("The toolbar button hover text-color in a workscreen window.")
                },
                {
                    variable: "--frame-header-background",
                    label: translation.get("Header Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-header-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-frame .rc-frame-header", ["background: var(--frame-header-background);"])
                        .set(".rc-frame .rc-frame-window-content, .rc-frame .rc-frame-menu", ["border-color: var(--frame-header-background);"]),
                    tooltip: translation.get("The header background-color of a workscreen window.")
                },
                {
                    variable: "--frame-header-color",
                    label: translation.get("Header Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-header-color'),
                    usage: new Map<string, string[]>().set(".rc-frame .rc-frame-header", ["color: var(--frame-header-color);"]),
                    tooltip: translation.get("The header text-color of a workscreen window.")
                },
                {
                    variable: "--frame-header-button-hover-background",
                    label: translation.get("Close Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-header-button-hover-background'),
                    usage: new Map<string, string[]>().set(".rc-frame .rc-frame-header .rc-frame-header-close-button:hover", ["background: var(--frame-header-button-hover-background);"]),
                    tooltip: translation.get("The header hover background-color to close the workscreen window.")
                },
                {
                    variable: "--frame-header-button-hover-color",
                    label: translation.get("Close Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-header-button-hover-color'),
                    usage: new Map<string, string[]>().set(".rc-frame .rc-frame-header .rc-frame-header-close-button:hover", ["color: var(--frame-header-button-hover-color);"]),
                    tooltip: translation.get("The header hover text-color to close the workscreen window.")
                },
                {
                    variable: "--frame-header-border",
                    label: translation.get("Header Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-header-border'),
                    usage: new Map<string, string[]>().set(".rc-frame .rc-frame-header", ["border-bottom: var(--frame-header-border);"]),
                    tooltip: translation.get("The header border of a workscreen window")
                },
                {
                    variable: "--frame-border-radius",
                    label: translation.get("Border-Radius"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-border-radius'),
                    usage: new Map<string, string[]>().set(".rc-frame", ["border-radius: var(--frame-border-radius);"]),
                    tooltip: translation.get("The border-radius of a workscreen window (rounds corners).")
                },
                {
                    variable: "--frame-border-width",
                    label: translation.get("Border-Width"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-border-width'),
                    usage: new Map<string, string[]>()
                        .set(".rc-frame .rc-frame-menu", ["border-width: 0 var(--frame-border-width) 0 var(--frame-border-width);"])
                        .set(".rc-frame .rc-frame-window-content", ["0 var(--frame-border-width) var(--frame-border-width) var(--frame-border-width);"]),
                    tooltip: translation.get("The border-width of a workscreen window.")
                },
                {
                    variable: "--frame-shadow",
                    label: translation.get("Shadow"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--frame-shadow'),
                    usage: new Map<string, string[]>().set(".rc-frame", ["box-shadow: var(--frame-shadow);"]),
                    tooltip: translation.get("The shadow of a workscreen window.")
                }
            ]
        }
    )
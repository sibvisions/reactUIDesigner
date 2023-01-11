import { EditorGroup, EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

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
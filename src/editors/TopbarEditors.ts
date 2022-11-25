import { EditorGroup, EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

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
                    usage: new Map<string, string[]>()
                }
            ]
        }
    )
import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const topbarEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Loading-Topbar", [
    {
        variable: "--topbar-colors",
        label: "Color",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--topbar-colors'),
        usage: new Map<string, string[]>()
    }
])
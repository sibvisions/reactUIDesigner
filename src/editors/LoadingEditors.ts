import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const loadingEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Loading-Screen", [
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
            "background: radial-gradient(119% 190% at -6% -20%, var(--loading-screen-left-background) 70%, var(--loading-screen-right-background) 70%);"])
    },
    {
        variable: "--loading-screen-right-background",
        label: "Right Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--loading-screen-right-background'),
        usage: new Map<string, string[]>()
    }
])
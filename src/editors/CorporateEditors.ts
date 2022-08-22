import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const corporateEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
    .set("Topbar", [
        {
            variable: "--corp-header-height",
            label: "Height",
            type: "text",
            value: docStyle.getPropertyValue('--corp-header-height'),
            cssType: "theme",
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .corp-menu-header", ["height: var(--corp-header-height);"])
        }
    ])
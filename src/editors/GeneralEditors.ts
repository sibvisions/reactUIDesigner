import { EditorItem } from "./EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const generalEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
    .set("General", [
        {
            variable: "--topbar-background",
            label: "Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-background'),
            usage: new Map<string, string[]>()
            .set(".menu-header", ["background:var(--topbar-background);"])
            .set(".corp-menu-header", ["background:var(--topbar-background);"])
            .set(".corp-menubar", ["background:var(--topbar-background);"]),
            usage960: new Map<string, string[]>()
            .set(".p-menubar .p-menubar-root-list", ["background:var(--topbar-background);"])
            .set(".p-menubar .p-menubar-root-list > .p-menuitem", ["background:var(--topbar-background);"])
        }
    ])
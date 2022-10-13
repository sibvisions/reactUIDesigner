import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const tableEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
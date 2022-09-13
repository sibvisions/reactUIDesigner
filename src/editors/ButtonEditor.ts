import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const buttonEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
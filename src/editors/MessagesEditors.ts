import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const messagesEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
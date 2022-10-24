import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const messagesEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Information", [
    {
        variable: "--message-info-header-background",
        label: "Header Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-info-header-background'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.info .p-dialog-header", ["background: var(--message-info-header-background);"])
        .set("#toast-info .toast-header.info", ["background: var(--message-info-header-background);"])
    },
    {
        variable: "--message-info-header-color",
        label: "Header Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-info-header-color'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.info .p-dialog-header", ["color: var(--message-info-header-color);"])
        .set(".rc-message-dialog.info .p-dialog-header .p-dialog-header-close .p-dialog-header-close-icon", ["color: var(--message-info-header-color);"])
    },
    {
        variable: "--message-info-header-close-hover",
        label: "Close Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-info-header-close-hover'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.info .p-dialog-header .p-dialog-header-close:hover", ["background: var(--message-info-header-close-hover);"])
        .set("#toast-info .toast-header.info .toast-header-close:hover", ["background: var(--message-info-header-close-hover);"])
    }
])
.set("Warning", [
    {
        variable: "--message-warning-header-background",
        label: "Header Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-warning-header-background'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.warning .p-dialog-header", ["background: var(--message-warning-header-background);"])
        .set("#toast-warning .toast-header.warning", ["background: var(--message-warning-header-background);"])
    },
    {
        variable: "--message-warning-header-color",
        label: "Header Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-warning-header-color'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.warning .p-dialog-header", ["color: var(--message-warning-header-color);"])
        .set(".rc-message-dialog.warning .p-dialog-header .p-dialog-header-close .p-dialog-header-close-icon", ["color: var(--message-warning-header-color);"])
    },
    {
        variable: "--message-warning-header-close-hover",
        label: "Close Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-warning-header-close-hover'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.warning .p-dialog-header .p-dialog-header-close:hover", ["background: var(--message-warning-header-close-hover);"])
        .set("#toast-warning .toast-header.warning .toast-header-close:hover", ["background: var(--message-warning-header-close-hover);"])
    }
])
.set("Error", [
    {
        variable: "--message-error-header-background",
        label: "Header Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-error-header-background'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.error .p-dialog-header", ["background: var(--message-error-header-background);"])
        .set("#toast-error .toast-header.error", ["background: var(--message-error-header-background);"])
    },
    {
        variable: "--message-error-header-color",
        label: "Header Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-error-header-color'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.error .p-dialog-header", ["color: var(--message-error-header-color);"])
        .set(".rc-message-dialog.error .p-dialog-header .p-dialog-header-close .p-dialog-header-close-icon", ["color: var(--message-error-header-color);"])
    },
    {
        variable: "--message-error-header-close-hover",
        label: "Close Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-error-header-close-hover'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.error .p-dialog-header .p-dialog-header-close:hover", ["background: var(--message-error-header-close-hover);"])
        .set("#toast-error .toast-header.error .toast-header-close:hover", ["background: var(--message-error-header-close-hover);"])
    }
])
.set("Question", [
    {
        variable: "--message-question-header-background",
        label: "Header Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-question-header-background'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.question .p-dialog-header", ["background: var(--message-question-header-background);"])
        .set("#toast-question .toast-header.question", ["background: var(--message-question-header-background);"])
    },
    {
        variable: "--message-question-header-color",
        label: "Header Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-question-header-color'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.question .p-dialog-header", ["color: var(--message-question-header-color);"])
        .set(".rc-message-dialog.question .p-dialog-header .p-dialog-header-close .p-dialog-header-close-icon", ["color: var(--message-question-header-color);"])
    },
    {
        variable: "--message-question-header-close-hover",
        label: "Close Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-question-header-close-hover'),
        usage: new Map<string, string[]>()
        .set(".rc-message-dialog.question .p-dialog-header .p-dialog-header-close:hover", ["background: var(--message-question-header-close-hover);"])
        .set("#toast-question .toast-header.question .toast-header-close:hover", ["background: var(--message-question-header-close-hover);"])
    }
])
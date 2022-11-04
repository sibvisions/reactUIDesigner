import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const popupEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Popup", [
    {
        variable: "--dialog-header-background",
        label: "Header Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--dialog-header-background'),
        usage: new Map<string, string[]>()
        .set(".rc-popup .p-dialog-header, .error-dialog .p-dialog-header", ["background: var(--dialog-header-background);"])
        .set(".rc-message-dialog .p-dialog-header", ["background: var(--dialog-header-background);"])
    },
    {
        variable: "--dialog-header-text-color",
        label: "Header Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--dialog-header-text-color'),
        usage: new Map<string, string[]>()
        .set(".rc-popup .p-dialog-header, .error-dialog .p-dialog-header", ["color: var(--dialog-header-text-color);"])
        .set(".rc-popup .p-dialog-header .p-dialog-header-icon", ["color: var(--dialog-header-text-color);"])
    },
    {
        variable: "--dialog-header-close-hover-background",
        label: "Close Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--dialog-header-close-hover-background'),
        usage: new Map<string, string[]>().set(".rc-popup .p-dialog-header .p-dialog-header-icon:enabled:hover", ["background: var(--dialog-header-close-hover-background);"])
    },
    {
        variable: "--dialog-header-close-hover-color",
        label: "Close Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--dialog-header-close-hover-color'),
        usage: new Map<string, string[]>().set(".rc-popup .p-dialog-header .p-dialog-header-icon:enabled:hover", ["background: var(--dialog-header-close-hover-color);"])
    },
    {
        variable: "--dialog-header-border",
        label: "Header Border",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--dialog-header-border'),
        usage: new Map<string, string[]>().set(".rc-popup .p-dialog-header, .error-dialog .p-dialog-header", ["border-bottom: var(--dialog-header-border);"])
    },
    {
        variable: "--dialog-header-padding",
        label: "Header Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--dialog-header-padding'),
        usage: new Map<string, string[]>().set(".p-dialog .p-dialog-header", ["padding: var(--dialog-header-padding);"])
    },
    {
        variable: "--dialog-content-background",
        label: "Content Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--dialog-content-background'),
        usage: new Map<string, string[]>()
        .set(".rc-popup .p-dialog-content, .error-dialog .p-dialog-content", ["background: var(--dialog-content-background);"])
        .set(".error-dialog .p-dialog-footer", ["background: var(--dialog-content-background);"])
        .set(".rc-message-dialog .p-dialog-content, .rc-message-dialog .p-dialog-footer", ["background: var(--dialog-content-background);"])
        .set("#toast-info .p-toast-message", ["background: var(--dialog-content-background);"])
    },
    {
        variable: "--dialog-border-radius",
        label: "Border-Radius",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--dialog-border-radius'),
        usage: new Map<string, string[]>()
        .set(".rc-popup .p-dialog-header, .error-dialog .p-dialog-header", ["border-top-left-radius: var(--dialog-border-radius);", "border-top-right-radius: var(--dialog-border-radius);"])
        .set(".rc-popup .p-dialog-content, .error-dialog .p-dialog-content", ["border-bottom-left-radius: var(--dialog-border-radius);", "border-bottom-right-radius: var(--dialog-border-radius);"])
        .set(".error-dialog .p-dialog-footer", ["border-bottom-left-radius: var(--dialog-border-radius);", "border-bottom-right-radius: var(--dialog-border-radius);"])
        .set(".rc-message-dialog .p-dialog-header", ["border-top-left-radius: var(--dialog-border-radius);", "border-top-right-radius: var(--dialog-border-radius);"])
        .set(".rc-message-dialog .p-dialog-footer", ["border-bottom-left-radius: var(--dialog-border-radius);", "border-bottom-right-radius: var(--dialog-border-radius);"])
        .set(".rc-message-dialog.message-dialog-no-footer .p-dialog-content", ["border-bottom-left-radius: var(--dialog-border-radius);", "border-bottom-right-radius: var(--dialog-border-radius);"])
    }
])
.set("Error-Popup", [
    {
        variable: "--message-error-header-background",
        label: "Header Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-error-header-background'),
        usage: new Map<string, string[]>()
        .set(".error-dialog .p-dialog-header", ["background: var(--message-error-header-background);"])
    },
    {
        variable: "--message-error-header-color",
        label: "Header Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-error-header-color'),
        usage: new Map<string, string[]>()
        .set(".error-dialog .p-dialog-header", ["color: var(--message-error-header-color);"])
        .set(".error-dialog .p-dialog-header .p-dialog-header-icon:enabled", ["color: var(--message-error-header-color);"])
        .set(".error-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover", ["color: var(--message-error-header-color);"])
    },
    {
        variable: "--message-error-header-close-hover",
        label: "Header Close Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--message-error-header-close-hover'),
        usage: new Map<string, string[]>()
        .set(".error-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover", ["background: var(--message-error-header-close-hover);"])
    },
    {
        variable: "--error-dialog-textarea-height",
        label: "TextArea Height",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--error-dialog-textarea-height'),
        usage: new Map<string, string[]>().set(".error-dialog .error-dialog-textarea", ["height: var(--error-dialog-textarea-height);"])
    },
    {
        variable: "--error-dialog-icon-size",
        label: "Icon Size",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--error-dialog-icon-size'),
        usage: new Map<string, string[]>().set(".error-dialog .error-dialog-icon", ["min-width: var(--error-dialog-icon-size);", "font-size: var(--error-dialog-icon-size);"])
    }
])
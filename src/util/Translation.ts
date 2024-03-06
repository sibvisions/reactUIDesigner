/* Copyright 2024 SIB Visions GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
const text = `
Show Text
Transparent
Show Color
Reset to Default
Search
Close
Apply
Express Mode
Select a Preset
Select a color-scheme and theme to use as a base.
Theme
Scheme
Primary Color
Create a custom scheme based on this color.
Dark Mode
If selected, the custom scheme will be in dark mode.
The set name(s) of the color-scheme and/or theme is not allowed!
Unallowed Names!
Upload successful!
The new styles were set for the application.
Upload failed!
The new styles could not be set for application. The Upload-URL is wrong!
The new styles could not be set for application.
Are you sure you want to reset to default?
Resetting Variables
Are you sure you want to reset to factory default?
Resetting to Factory Default
The image has been uploaded to the server.
The image could not be uploaded.
The image could not be uploaded. Because the Upload-URL is not set!
Invalid Color!
This color is invalid please use a valid color.
Reset to Factory Default
Download
Save
Button
Background
The primary color of the application.
Padding
The padding of the buttons.
Icon Only Padding
The padding for buttons which only have an icon.
Border-Radius
The border-radius for button components (rounds borders).
Menu Button
Left Button-Padding
The padding for the left part of the menu button.
Right Button-Padding
The padding for the right part of the menu button.
Panel Background
The background-color for the menu button's sub panel.
Item Color
The text color for a menu button's menu-item.
Item Hover Background
The hover background-color for a menu button's menu-item.
Item Hover Color
The hover text-color for a menu button's menu-item.
Checkbox
The unselected background-color of a checkbox.
Border
The border of the checkbox.
Border Hovor Color
The hover border color of the checkbox.
Selected Background
The selected background-color of the checkbox.
Selected Hover Background
The selected hover background-color of the checkbox.
Color
The color of the checkmark in the checkbox.
Size
The size of checkboxes.
Border-Radius
The border-radius of the checkbox (rounds corners).
Radiobutton
The background-color of the radiobutton.
The border of the radiobutton.
The hover border color for radiobuttons.
The background-color of the outer ring for radiobuttons.
The hover background-color of the outer ring for radiobuttons.
Selected Color
The background-color for the inner part of the radiobutton.
The size of the radiobutton.
Topbar
Height
The height of the topbar.
Logo Width
The width of the logo in the topbar.
The background-color of the topbar.
The text-color of the topbar.
Screen Title Size
The font-size of the screen title in the topbar.
Button Background
The background-color of the topbar's buttons.
Button Color
The text-color of the topbar's buttons.
Button Hover Background
The hover background-color of the topbar's buttons.
Scrollbar Background
The color of the background of the scrollbar in the menubar.
Scrollbar Color
The color of the scrollbar in the menubar.
Scrollbar Hover Color
The hover color of the scrollbar in the menubar.
Profile Menu
Width (Small)
The width of the profile-menu when the application is small.
The background-color of the profile-menu.
Hover Background
The hover background-color of the profile-menu.
The text-color of the profile-menu.
The padding of the profile-menu.
Separator
The seperator between profile-menu and topbar buttons.
Sub-Menu Width (Small)
The width of the profile-menu's sub-menu when the application is small.
Sub-Menu Background
The background-color of the profile-menu's sub-menu.
Sub-Menu Item Hover Background
The item hover background-color of the profile-menu's sub-menu.
Sub-Menu Item Hover Color
The item hover text-color of the profile-menu's sub-menu.
Menubar
The height of the menubar.
The background-color of the menubar.
The hover background-color of the menubar.
The text-color of the menubar.
The submenu background-color of the menubar.
The submenu item hover background-color of the menubar.
The submenu item hover text-color of the menubar.
Header-Item Padding
The menu-group padding of the menubar
Sub-Item Padding
The menu-item padding of the menubar.
Toolbar-Button Background
The background-color of the speeddial component in the menubar.
Toolbar-Button Color
The text-color of the speeddial component in the menubar.
Toolbar-Button Shadow
The shadow of the speeddial component in the menubar.
Error Bar
Default Background
The background-color of the error bar.
Default color
The text-color of the error bar.
Gone Background
The background-color of the gone bar.
Gone Color
The text-color of the gone bar.
The height of the topbar in full mode.
The background-color of the topbar in full mode.
The hover background-color of the topbar in full mode.
The text-color of the topbar in full mode.
The background-color of a sub menu in full mode.
The item hover background of a sub menu in full mode.
The item hover text-color of a sub menu in full mode.
Toolbar Background
The toolbar background-color of the mobile-launcher.
Toolbar Border
The border color of a toolbar in the mobile launcher.
The text-color of buttons in a toolbar of the mobile launcher.
The hover background-color of buttons in a toolbar of the mobile launcher
Button Hover Color
The hover text-color of buttons in a toolbar of the mobile launcher
Workscreen Window
Menubar Background
The background-color of the menubar in a workscreen window.
Menubar Hover Background
The hover background-color of the menubar in a workscreen window.
Menubar Color
The text-color of the menubar in a workscreen window.
Submenu Background
The sub menu backgroud-color in a workscreen window.
Subitem Hover Background
The hover background-color for sub menu items in a workscreen window.
Subitem Hover Color
The hover text-color for sub menu items in a workscreen window.
The toolbar background-color in a workscreen window.
The toolbar border in a workscreen window.
The toolbar button text-color in a workscreen window.
The toolbar button hover background-color in a workscreen window.
The toolbar button hover text-color in a workscreen window.
Header Background
The header background-color of a workscreen window.
Header Color
The header text-color of a workscreen window.
Close Hover Background
The header hover background-color to close the workscreen window.
Close Hover Color
The header hover text-color to close the workscreen window.
Header Border
The header border of a workscreen window
The border-radius of a workscreen window (rounds corners).
Border-Width
The border-width of a workscreen window.
Shadow
The shadow of a workscreen window.
General
Font Family
The font-family used for the application
Font Size
The font-size used for components and labels.
Screen Background
The background for workscreens.
The text-color used for most of the application.
Focus Border
The focus-box highlights a focused component.
Images
Login
This image will be displayed during login.
Menu
This image will be displayed in the menu.
Collapsed Menu
This image will be displayed in the collapsed menu.
Express
Topbar Hover Backgrounds
The hover background-color of elements in the topbar.
Checkbox-Radiobutton Hover Background
The hover background-color of checkboxes and radiobuttons.
Topbar Text Color
The text-color of elements in the topbar.
Backgrounds
The background-color of multiple components.
Hover Backgrounds
The hover background-color of multiple components.
Borders Color
The border-color of multiple components.
Text Color
The text-color used in the application.
Hover Text Color
The hover text-color used in the application.
The background-color for components where items can be selected.
Toolbar Border Color (V2)
The toolbar border-color for V2 frames.
Crash View
Message Size
The font-size of the crash message.
Stack Height
The maximum-stack height of the crash message.
Text Editor
The background-color for editors.
Border Width
The border width for editors.
Border Color
The border color for editors.
Border Hover Color
The hover border color for editors.
Placeholder Color
The text-color of placeholders for editors.
Padding Top Bottom
The top and bottom padding for editors.
Padding Left Right
The left and right padding for editors.
The border-radius for editors (rounds corners).
Date Editor
Button Padding
The padding for the button which opens the datepicker.
Button Icon Size
The icon size for the button which opens the datepicker.
The background-color of the datepicker panel.
Panel Color
The text-color of the datepicker panel.
The border in the datepicker which seperates the year/month picker from the day picker.
Panel Hover Color
The hover text-color of the days in the datepicker.
The background-color of the selected day.
The border-radius for the datepicker (rounds corners).
Combobox Editor
The background-color for the dropdown panel.
The text-color for the items in the dropdown panel.
The hover background-color for items in the dropdown panel.
The hover text-color for items in the dropdown panel.
The selected background-color for items in the dropdown panel when the dropdown is displayed as table.
The border-radius of the dropdown panel (rounds corners).
HTML Editor
The background-color of the toolbar.
The border of the toolbar
Toolbar Button Background
The background-color of buttons in the toolbar.
Toolbar Button Hover Background
The hover background-color of buttons in the toolbar.
Picker Background
The background-color of a picker panel.
Picker Item Color
The text-color of an item in the picker panel.
Picker Item Hover Color
The hover text-color of an item in the picker panel.
Picker Item Hover Background
The hover background-color for items in the picker panel.
Label
Label Padding
The padding for labels.
System Colors
Mandatory Background
The system color for mandatory fields.
Readonly Background
The system color for readonly fields.
Invalid Background
The system color for invalid fields.
Loading Screen
Left Background
The background-color for the left part of the loading-screen.
Right Background
The background-color for the right part of the loading-screen.
Logo Background
The background-color of the login view where the logo is displayed.
The background-color of the login view where the fields are displayed.
The shadow of the login view.
Top Bottom Padding
The top and bottom padding of the login view (changes size).
Left Right Padding
The left and right padding of the login view (changes size).
Field Margin
The margin between fields in the login view.
The border-radius of the login-view.
The background-color of the logo in the topbar.
Screen Title Margin
The left margin of the title to the collapse button.
The padding of the profile-menu (changes size).
Sidebar Menu
Width
The sidebar menu's width.
Collapsed Width
The sidebar menu's collapsed width.
The background-color of the sidebar menu.
The item hover background-color of the sidebar menu.
The text-color of the sidebar menu.
Hover Color
The item hover text-color of the sidebar menu.
Active Item Color
The text-color of a selected menu-item in the sidebar menu.
The padding of a menu-group in the sidebar menu.
The padding of a menu-item in the sidebar menu.
The border of the sidebar menu.
Menuicon Size
The size of the menu-icons in the sidebar menu.
The color in the background of the scrollbar in the sidebar menu.
The color of the scrollbar in the sidebar menu.
The hover color of the scrollbar in the sidebar menu.
Menu Extras
The height of the profile-menu.
Logo Collapsed Width
The width of the logo in the topbar when the sidebar menu is collapsed.
Logo Max Height
The height of the logo.
Picture Size
The size of the profile-picture in the profile menu.
Button Size
The size of the topbar's buttons.
Button Size (Small)
The size of the topbar's buttons when the application is small.
The height of the profile-menu in corporation menu mode.
The size of the profile-picture in corporation menu mode.
The size of the topbar's buttons in corporation menu mode.
The size of the topbar's buttons when the application is small in corporation menu mode.
Toolbar-Button Size
The size of the speeddial component in corporation menu mode.
Fadeout Width
The width of the menu fadeout div.
Fadeout Background
The background color of the fadeout div.
Fadeout Left
The 'left' positioning property for the fadeout div.
Information Message
The background-color of the info message.
The text-color of the info message.
The background-color of the 'x' to close the info message.
Warning Message
The background-color of the warning message.
The text-color of the warning message.
The background-color of the 'x' to close the warning message.
Error Message
The background-color of the error message.
The text-color of the error message.
The background-color of the 'x' to close the error message.
Question Message
The background-color of the question message.
The text-color of the question message.
The background-color of the 'x' to close the question message.
Popup
The background-color of the header.
The text-color of the header.
The hover background-color of the 'x' to close the popup.
The hover text-color of the 'x' to close the popup.
The border which seperates header and content of a popup.
The padding of the header.
Content Background
The background-color of the popup-content.
The border-radius of the popup (rounds corners).
Error Popup
The header background-color of the error-popup.
The header text-color of the error-popup.
The hover background-color of the 'x' to close the error-popup.
TextArea Height
The height of the error-popup's textarea.
Icon Size
The icon size of the error-popup.
Table General
The border of the table.
The text-color of the table cells.
The hover text-color of the table cells.
Sort Color
The color of the sort indicator.
The border-radius of the table (rounds corners).
Table Header
The background-color of the table header.
The border of the table header.
The hover background-color of the table header.
The text-color of the table header.
The hover text-color of the table header.
The padding of the table header.
Table Rows
Row Border Color
The border of table rows.
Selected Row Background
The background-color of the selected row.
Odd Rows Background
The background-color of odd rows.
Even Rows Background
The background-color of even rows.
Rows Hover Background
The hover background-color for rows.
Rows Required Odd Background
The background-color for required/mandatory columns in odd rows.
Rows Required Even Background
The background-color for required/mandatory columns in even rows.
Required Color
The text-color for required/mandatory columns.
Rows Readonly Odd Background
The background-color for readonly columns in odd rows.
Rows Readonly Even Background
The background-color for readonly columns in even rows.
Readonly Color
The text-color for readonly columns.
Row Height
The height of table rows. Note: minimum height is 16px!
Toolbar
The background-color of the toolbar
The border color of the toolbar
The icon-color of the toolbar
The seperator between parts of the toolbar.
The border-radius of the toolbar (rounds corners).
Tree
The background-color of the tree.
The border of the tree.
The text-color of the tree.
The hover background of tree-nodes.
The hover text-color of tree-nodes.
The background-color of the selected tree-node.
The text-color of the selected tree-node.
Odd Nodes Background
The background-color of odd tree-nodes.
Even Nodes Background
The background-color of even tree-nodes.
Cell Padding
Cell Padding Top Bottom
The top, bottom padding for cells.
Cell Padding Left Right
The left, right padding for cells.
Tabset Panel
The padding of the tab in the tab-navigation.
The background-color of the navigation-bar.
The border color of the navigation-bar.
The text and border color of the selected tab.
The hover background-color of a tab.
Close Color
The color of the 'x' to close the tab.
The hover color of the 'x' to close the tab
The border-radius of the navigation-bar (rounds borders).
Progressbar
The color of the progressbar when sending requests.
Position
The position of the progressbar, valid values are 'top' or 'bottom'.
Medium Interval
The interval when a response roundtrip is considered medium.
Medium Interval Color
The color of the topbar for medium response times.
Long Interval
The interval when a response roundtrip is considered long.
Long Interval Color
The color of the topbar for long response times.
Border Radius
`;

const lines = text.split("\n").filter(line => line.trim() !== "");

export const translation = new Map();

for (const line of lines) {
    translation.set(line, line);
}

console.log(translation);

/** A map which stores the translations set by the server, also contains default values */

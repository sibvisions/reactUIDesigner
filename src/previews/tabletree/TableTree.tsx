import React, { FC, useState, CSSProperties } from 'react';
import { DataTable, DataTableCellSelection } from 'primereact/datatable';
import { Tree, TreeCheckboxSelectionKeys, TreeMultipleSelectionKeys } from 'primereact/tree';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import * as _ from 'underscore'
import { concatClassnames } from '../../util/ConcatClassNames';
import tinycolor from 'tinycolor2';

/** Stock table data */
const tableItems = [
    {
        firstName: "Max",
        lastName: "Mustermann",
        age: 30,
        city: "Vienna"
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 43,
        city: "London"
    },
    {
        firstName: "Brandon",
        lastName: "Mills",
        age: 47,
        city: "Austin"
    }
];

/** Stock tree data */
const treeItems = [
    {
        key: "0",
        label: "1",
        icon: "pi pi-fw pi-folder-open",
        children: [
            {
                key: "0-0",
                label: "1.1",
                icon: "pi pi-fw pi-code",
                children: [
                    {
                        key: "0-0-0",
                        label: "1.1.1",
                        icon: "pi pi-fw pi-star-fill",
                    },
                    {
                        key: "0-0-1",
                        label: "1.1.2",
                        icon: "pi pi-fw pi-star-fill",
                    }
                ]
            },
            {
                key: "0-1",
                label: "1.2",
                icon: "pi pi-fw pi-code",
                children: [
                    {
                        key: "0-1-0",
                        label: "1.2.1",
                        icon: "pi pi-fw pi-star-fill",
                    }
                ]
            }
        ]
    },
    {
        key: "1",
        label: "2",
        icon: "pi pi-fw pi-folder-open",
        children: [
            {
                key: "1-0",
                label: "2.1",
                icon: "pi pi-fw pi-code",
            },
            {
                key: "1-1",
                label: "2.2",
                icon: "pi pi-fw pi-code",
            },
            {
                key: "1-2",
                label: "2.3",
                icon: "pi pi-fw pi-code",
            }
        ]
    },
    {
        key: "2",
        label: "3",
        icon: "pi pi-fw pi-folder-open",
        children: [
            {
                key: "2-0",
                icon: "pi pi-fw pi-code",
                label: "3.1",
                children: [
                    {
                        key: "2-0-0",
                        label: "3.1.1",
                        icon: "pi pi-fw pi-star-fill",
                    },
                    {
                        key: "2-0-1",
                        label: "3.1.2",
                        icon: "pi pi-fw pi-star-fill",
                    }
                ]
            },
            {
                key: "2-1",
                label: "3.2",
                icon: "pi pi-fw pi-code",
                children: [
                    {
                        key: "2-1-0",
                        label: "3.2.1",
                        icon: "pi pi-fw pi-star-fill",
                    },
                    {
                        key: "2-1-1",
                        label: "3.2.2",
                        icon: "pi pi-fw pi-star-fill",
                    }
                ]
            }]
    }
]

/** A preview for the table (with toolbar) and tree to see changes live */
const TableTree:FC = () => {
    /** The selected table item */
    const [selectedTableItem, setSelectedTableItem] = useState<DataTableCellSelection<{firstName: string, lastName: string, age: number, city: string}[]>>({ cellIndex: 0, field: "firstName", rowData: tableItems[0], rowIndex: 0, value: "Max", column: new Column({}), props: {}, selected: false });

    /** The selected tree item */
    const [selectedTreeItem, setSelectedTreeItem] = useState<string | TreeMultipleSelectionKeys | TreeCheckboxSelectionKeys | null>(null);

    /** The background-color of buttons */
    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    /** The classnames of the button in the toolbar */
    const buttonClassNames = concatClassnames(
        "rc-button",
        tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button",
        "mouse-border",
        "gap-right",
        "rc-toolbar-button",
        "no-focus-rect"
    );

    /** The CSS-Style of the button */
    const buttonStyle = { "--background": btnBgd, "--hoverBackground": tinycolor(btnBgd.toString()).darken(5).toString(), '--iconTextGap': '4px' } as CSSProperties

    return (
        <div className="preview-container">
            <div className='comp-container table-container'>
                <div className='rc-toolbar navbar-west'>
                    <div className='toolbar-buttons rc-toolbar-border-bottom'>
                        <Button
                            className={buttonClassNames}
                            icon="pi pi-plus-circle"
                            style={buttonStyle}
                        />
                        <Button
                            className={buttonClassNames}
                            icon="pi pi-times-circle"
                            style={buttonStyle}
                        />
                        <Button
                            className={buttonClassNames}
                            icon="pi pi-pencil"
                            style={{ ...buttonStyle, marginBottom: '4px' }}
                        />
                    </div>
                    <div className='toolbar-buttons'>
                        <Button
                            className={buttonClassNames}
                            icon="pi pi-sort-alt"
                            style={{ ...buttonStyle, marginTop: '4px' }}
                        />
                    </div>
                </div>
                <DataTable
                    className='rc-table'
                    value={tableItems}
                    selection={selectedTableItem}
                    selectionMode="single"
                    cellSelection
                    columnResizeMode='fit'
                    onSelectionChange={(event: any) => setSelectedTableItem(event.value)}
                    rowClassName={(data) => {
                        let cn: any = {}
                        if (selectedTableItem && _.isEqual(selectedTableItem.rowData, data)) {
                            cn["p-highlight"] = true;
                        }
                        return cn
                    }}>
                        <Column field="firstName" header="Firstname" sortable bodyClassName='cell-readonly'></Column>
                        <Column field="lastName" header="Lastname" sortable bodyClassName='cell-required'></Column>
                        <Column field="age" header="Age" sortable></Column>
                        <Column field="city" header="City" sortable></Column>
                    </DataTable>
            </div>
            <div className='comp-container tree-container'>
                <Tree 
                 value={treeItems}
                 className="rc-tree"
                 selectionMode='single'
                 selectionKeys={selectedTreeItem}
                 onSelectionChange={event => setSelectedTreeItem(event.value)} />
            </div>
        </div>
    )
}
export default TableTree
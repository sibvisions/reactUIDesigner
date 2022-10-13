import React, { FC, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Tree } from 'primereact/tree';
import { Column } from 'primereact/column';
import * as _ from 'underscore'

const TableTree:FC = () => {

    const items = [
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

    const [selectedTableItem, setSelectedTableItem] = useState<{value: any, field: string, rowData: any, rowIndex: number, cellIndex: number}>({ cellIndex: 0, field: "firstName", rowData: items[0], rowIndex: 0, value: "Max" });

    return (
        <div className="preview-container">
            <div>
                <DataTable
                    className='rc-table'
                    value={items}
                    selection={selectedTableItem}
                    selectionMode="single"
                    cellSelection
                    columnResizeMode='fit'
                    onSelectionChange={(event) => setSelectedTableItem(event.value)}
                    rowClassName={(data) => {
                        let cn: any = {}
                        if (selectedTableItem && _.isEqual(selectedTableItem.rowData, data)) {
                            cn["p-highlight"] = true;
                        }
                        return cn
                    }}>
                        <Column field="firstName" header="Firstname"></Column>
                        <Column field="lastName" header="Lastname"></Column>
                        <Column field="age" header="Age"></Column>
                        <Column field="city" header="City"></Column>
                    </DataTable>
            </div>
        </div>
    )
}
export default TableTree
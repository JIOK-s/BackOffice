import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const SaleManagement = () => {
    const rowDataA = [
        { id: '1', make: 'Toyota', model: 'Celica', price: 35000 },
        { id: '4', make: 'BMW', model: 'M50', price: 60000 },
        { id: '5', make: 'Aston Martin', model: 'DBX', price: 190000 },
    ];

    const rowDataB = [
        { id: '1', make: 'Toyota', model: 'Celica', price: 35000 },
        { id: '2', make: 'Ford', model: 'Mondeo', price: 32000 },
        { id: '3', make: 'Porsche', model: 'Boxster', price: 72000 },
        { id: '4', make: 'BMW', model: 'M50', price: 60000 },
        { id: '5', make: 'Aston Martin', model: 'DBX', price: 190000 },
    ];

    const [columnDefs, setColumnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
    ]);

    const getRowId = useMemo(() => {
        return (params) => params.data.id;
    }, []);

    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);

    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const [rowData, setRowData] = useState(rowDataA);

    const onRowDataA = useCallback(() => {
        setRowData(rowDataA);
    }, [rowDataA]);

    const onRowDataB = useCallback(() => {
        setRowData(rowDataB);
    }, [rowDataB]);

    return (
        <div style={containerStyle}>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={{ marginBottom: '5px', minHeight: '30px' }}>
                    <button onClick={onRowDataA}>Row Data A</button>
                    <button onClick={onRowDataB}>Row Data B</button>
                </div>
                <div style={{ flex: '1 1 0px' }}>
                    <div style={gridStyle} className="ag-theme-alpine">
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            rowSelection={'single'}
                            animateRows={true}
                            getRowId={getRowId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleManagement;
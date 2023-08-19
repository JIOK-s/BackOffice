import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

const PurchasesManagement = () => {
    /** const data **/
    const rowDataA = [{ id: '1', title: 'test' }];

    /**  hooks **/
    // useState
    const [rowData, setRowData] = useState(rowDataA);

    const [columnDefs, setColumnDefs] = useState([{ field: 'title' }]);

    // useMemo
    const containerStyle = useMemo(
        () => ({ width: '100%', height: '100%' }),
        [],
    );

    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const getRowId = useMemo(() => {
        return (params) => params.data.id;
    }, []);

    // useCallback
    const onRowDataA = useCallback(() => {
        // Axios를 사용하여 데이터를 가져옵니다.
        axios
            .get('http://localhost:8080/hello')
            .then((response) => {
                const updatedRowData = rowData.concat({
                    id: 2,
                    title: response.data,
                });
                setRowData(updatedRowData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div style={containerStyle}>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <div style={{ marginBottom: '5px', minHeight: '30px' }}>
                    <button onClick={onRowDataA}>Row Data A</button>
                </div>
                <div style={{ flex: '1 1 0px' }}>
                    <div style={gridStyle} className='ag-theme-alpine'>
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

export default PurchasesManagement;

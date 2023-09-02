import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

const PurchasesManagement = () => {
    /** const data **/
    const columnDefs = [
        {
            headerName: '유저상품번호',
            field: 'userProdNo',
            headerCheckboxSelection: true,
            checkboxSelection: true,
        },
        {
            headerName: '사용기간',
            field: 'usedPeriod',
            editable: true,
            cellEditor: 'agTextCellEditor',
            cellEditorParams: {
                maxLength: 5,
            },
        },
        { headerName: '회원 ID', field: 'mbrId' },
        { headerName: '회원 전화번호', field: 'mbrPhone' },
    ];

    /** hooks **/
    // useState
    const [rowData, setRowData] = useState([]);
    const [searchParam, setSearchParam] = useState({});
    const [selectedRows, setSelectedRows] = useState([]);
    const [usedPeriodBtnParam, setUsedPeriodBtnParam] = useState([]);

    // useMemo
    const containerStyle = useMemo(
        () => ({ width: '100%', height: '100%' }),
        [],
    );
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const getRowId = useMemo(() => {
        return (params) => params.data.userProdNo;
    }, []);

    // useCallback
    const onRowData = useCallback(() => {
        // Axios를 사용하여 데이터를 가져옵니다.
        axios
            .get('http://localhost:8080/v1/userProduct/management', {
                params: searchParam,
            })
            .then((response) => {
                setRowData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [searchParam]);

    const onRequestParam = useCallback((e) => {
        const newRequestParam = {
            ...searchParam,
            [e.target.name]: e.target.value,
        };
        setSearchParam(newRequestParam);
    });

    const onClickSelectedRows = useCallback((e) => {
        const newSelectedRows = e.api.getSelectedRows();
        setSelectedRows(newSelectedRows);
    });

    const onCellValueChanged = useCallback((e) => {
        const { colDef, newValue, oldValue, data } = e;

        // TODO: usedPeriodBtnParam 값 추가
        // const tempParam = {
        //     userProdNo: data.userProdNo,
        //     usedPeriod: data.usedPeriod,
        // };
        // const newUsedPeriodBtnParam = [...usedPeriodBtnParam, tempParam];
        // setUsedPeriodBtnParam(newUsedPeriodBtnParam);
    });

    /** jsx **/
    return (
        <div style={containerStyle}>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                {/* 필터 영역 */}
                <div>
                    <table style={{ border: '1px solid #111111' }}>
                        <colgroup>
                            <col style={{ width: '20%' }} />
                            <col style={{ width: '30%' }} />
                            <col style={{ width: '20%' }} />
                            <col style={{ width: '30%' }} />
                        </colgroup>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>유저상품번호</th>
                                <td>
                                    <input
                                        type={'text'}
                                        onChange={onRequestParam}
                                        name={'userProdNo'}
                                    />
                                </td>
                                <th>사용기간</th>
                                <td>
                                    <input
                                        type={'text'}
                                        onChange={onRequestParam}
                                        name={'usedPeriod'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>회원 ID</th>
                                <td>
                                    <input
                                        type={'text'}
                                        onChange={onRequestParam}
                                        name={'mbrId'}
                                    />
                                </td>
                                <th>회원 전화번호</th>
                                <td>
                                    <input
                                        type={'text'}
                                        onChange={onRequestParam}
                                        name={'mbrPhone'}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 버튼 영역*/}
                <div
                    style={{
                        marginBottom: '5px',
                        minHeight: '30px',
                    }}>
                    <button onClick={onRowData}>조회</button>
                </div>

                {/* 그리드 영역*/}
                <div style={{ flex: '1 1 0px' }}>
                    <div style={gridStyle} className='ag-theme-alpine'>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            rowSelection={'multiple'}
                            animateRows={true}
                            getRowId={getRowId}
                            onRowSelected={onClickSelectedRows}
                            onCellValueChanged={onCellValueChanged}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasesManagement;

import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

const PurchasesManagement = () => {
    /** const data **/

    /** hooks **/
    // useState
    const [rowData, setRowData] = useState([]);
    const columnDefs = [
        { headerName: '유저상품번호', field: 'userProdNo' },
        { headerName: '사용기간', field: 'usedPeriod' },
        { headerName: '회원 ID', field: 'mbrId' },
        { headerName: '회원 전화번호', field: 'mbrPhone' },
    ];

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
            .get('http://localhost:8080/v1/userProduct/management')
            .then((response) => {
                setRowData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>유저상품번호</th>
                                <td></td>
                                <th>사용기간</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>회원 ID</th>
                                <td></td>
                                <th>회원 전화번호</th>
                                <td></td>
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

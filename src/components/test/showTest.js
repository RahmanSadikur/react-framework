import React, { useState, useEffect } from 'react';
import Action from '../../redux/action/action';
import { useDispatch,useSelector } from 'react-redux';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import './test.css'

const ShowTest = ( {changeIsAddnew} ) => {
    const dispatch=useDispatch();
    const tests=useSelector((state)=>state.reducer.data);
    const [test, setTest] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    console.log(tests);
    useEffect(()=>{
        dispatch(Action())
    },[dispatch]);

    const columns = [
        {field: 'id', header: 'ID'},
        {field: 'title', header: 'Title'}
    ];
    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });
    const findIndexById = (id,objects) => {
        let index = -1;
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }
    const header = (
        <div className="table-header">
            {/* <h5 className="mx-0 my-1">Test Data</h5> */}
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
  return <div className='container'>
      <div className='row'>
          <div className='col-md-12 d-flex flex-row-reverse '>
              <button className='btn btn-primary mb-3 mt-3' onClick={ ()=>changeIsAddnew(true)}>
     Add New
    </button>
          </div>
      </div>
      <div className='row'>
            <div className='col-md-12'>
            <DataTable value={tests} selectionMode="single"
                selection={test} onRowDoubleClick={(e) => {setTest(e.data);
                console.log(test)
                }} header={header} responsiveLayout="scroll"  dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Tests"
                globalFilter={globalFilter}>
            {dynamicColumns}
        </DataTable>
            </div>
        </div>

  </div>; 
};

export default ShowTest;

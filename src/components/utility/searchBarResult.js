import React from 'react'
import {useLocation} from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './searchBarResult.css'
const SearchBarResult = () => {
    const { state } = useLocation();
    const columns = [
        {field: 'item.name', header: 'Name'},
        {field: 'size', header: 'Size'},
        {field: 'basePrice', header: 'Base Price'},
        {field: 'selling', header: 'Selling Price'},
        {field: 'quantity', header: 'Quantity'}
    ];
    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });
    console.log(state);
    //console.log(data);
  return (
    <div className='container-fluid my-2 mx-0'>
        <div className='row'>
            <div className='col-md-12'>
            <DataTable value={state}>
            {dynamicColumns}
        </DataTable>
            </div>
        </div>

    </div>
  )
}

export default SearchBarResult
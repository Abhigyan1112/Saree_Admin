import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
import {busData} from './Businessdata';
import { useState } from 'react';

export default function Verify() {
    const [tableData,setTableData] = useState(busData);
    
    const deleteRow = (GSTIn)=>{
       const updateTable = tableData.filter(items => items.GSTIn != GSTIn );
       setTableData(updateTable);
    }

    const items = tableData.map((items,index)=>{
        return(
        <DisplayData Name={items.Name} GSTIn={items.GSTIn} deleteRow={deleteRow}/>
        )
   })
    return(
        <div className='content'>
        <Table responsive="sm" className="request-table content">
            <thead>
                <tr>
                    <th>Business Name</th>
                    <th>GSTIn</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
               {items}
            </tbody>
        </Table>
        </div>
    )
}

function DisplayData(props){
    return(
        <tr>
        <td>{props.Name}</td>
        <td>{props.GSTIn}</td>
        <td>
            <button className="request-approve" onClick={()=> props.deleteRow(props.GSTIn)}>Resolved
            </button>
        </td>
         </tr>
    )
}
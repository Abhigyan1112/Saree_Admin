import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
import { requestData } from './requestData';
import { useState } from 'react';
export default function Request() {
    const [tableData,setTableData] = useState(requestData);
    
    const deleteRow = (Pincode)=>{
       const updateTable = tableData.filter(items => items.Pincode != Pincode );
       setTableData(updateTable);
    }

    const items = tableData.map((items,index)=>{
        return(
        <DisplayData Pincode={items.Pincode} city={items.city} State={items.State}  deleteRow={deleteRow}/>
        )
   })
    return(
        <div className="content">
        <Table responsive="sm" className="request-table">
            <thead>
                <tr>
                    <th>PIN CODE</th>
                    <th>City</th>
                    <th>State</th>
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
        <td>{props.Pincode}</td>
        <td>{props.city}</td>
        <td>{props.State}</td>
        <td>
            <button className="request-approve" onClick={()=> props.deleteRow(props.Pincode)}>Resolved
            </button>
        </td>
         </tr>
    )
}
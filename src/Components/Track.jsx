import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
import {deliveryData} from './DeliveryData';
import { useState } from 'react';
export default function Tracker() {
    const [tableData,setTableData] = useState(deliveryData);
    
    const deleteRow = (OrderId)=>{
       const updateTable = tableData.filter(items => items.OrderId != OrderId );
       setTableData(updateTable);
    }

    const items = tableData.map((items,index)=>{
        return(
        <DisplayData CustomerId={items.CustomerId} OrderId={items.OrderId} deleteRow={deleteRow}/>
        )
   })

    return(
        <div className='content'>
        <Table responsive="sm" className="request-table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer ID</th>
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
        <td>{props.CustomerId}</td>
        <td>{props.OrderId}</td>
        <td>
            <button className="request-approve" onClick={()=> props.deleteRow(props.OrderId)}>Resolved
            </button>
        </td>
         </tr>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
import {toast,ToastContainer} from 'react-toastify';
import { useState , useEffect} from 'react';
export default function Tracker() {
    const [tableData,setTableData] = useState([]);
    
    useEffect(() => {
        const fetchData= async() => {
            const response = await fetch (`${process.env.REACT_APP_BACKEND}/prodOrd/getAllForAdmin`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                }
            });
            const data = await response.json();
            setTableData(data);
            console.log(data);
        };
        fetchData();
    }, []);
    
    const deleteRow = async(orderId,productId)=>{
        try{
            const dispatched=tableData.find(ProductOrdered => ProductOrdered.orderId === orderId && ProductOrdered.productId === productId );

            let response=null;
            if(dispatched.status === 'Packed'){
                response= await fetch(`${process.env.REACT_APP_BACKEND}/prodOrd/setToDispatched?productId=${productId}&orderId=${orderId}`,{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                });
            }

            if(dispatched.status === 'Dispatched'){
                response = await fetch(`${process.env.REACT_APP_BACKEND}/prodOrd/setToInCity?productId=${productId}&orderId=${orderId}`,{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                });
            }

            if (!response.ok) {
                throw new Error(`Error in response, status: ${response.status}`);
            }
            toast.success("Request Resolved");

            const updateTable = tableData.filter(ProductOrdered => ProductOrdered.productId !== productId && ProductOrdered.orderId !== orderId);
            setTableData(updateTable);
        }
        catch(error){
            toast.error(error.message);
        }
    }
    return(
        <div className="content">
        <Table responsive="sm" className="request-table">
            <thead>
                <tr>
                    <th>productId</th>
                    <th>orderId</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tableData.length>0?(
                    tableData.map((ProductOrdered,index) => (
                        <DisplayData
                            key={`${ProductOrdered.productId}-${ProductOrdered.orderId}`}
                            productId={ProductOrdered.productId}
                            orderId={ProductOrdered.orderId}
                            deleteRow={deleteRow}
                        />
                    ))
                    ):(
                        <tr>
                            <td>No data available</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        <ToastContainer/>
        </div>
    )
}
function DisplayData(props){
    return(
        <tr>
        <td>{props.productId}</td>
        <td>{props.orderId}</td>
        <td>
            <button className="request-approve" onClick={()=> props.deleteRow(props.orderId,props.productId)}>
                Resolved
            </button>
        </td>
        </tr>
    );
}
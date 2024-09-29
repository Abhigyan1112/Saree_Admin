import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
import {toast,ToastContainer} from 'react-toastify';
import { useState , useEffect} from 'react';
export default function CatRequest() {
    const [tableData,setTableData] = useState([]);
    
    useEffect(() => {
        const fetchData= async() => {
            const response = await fetch (`${process.env.REACT_APP_BACKEND}/categoryRequest/all`);
            const data = await response.json();
            setTableData(data);
            console.log(data);
        };
        fetchData();
    }, []);
    
    const deleteRow = async(id)=>{
        try{
            const newCategory=tableData.find(CategoryRequest => CategoryRequest.categoryRequestId === id);
            const response= await fetch(`${process.env.REACT_APP_BACKEND}/categoryRequest/delete/${newCategory.categoryRequestId}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error in response, status: ${response.status}`);
            }
            toast.success("Request Resolved");

            const updateTable = tableData.filter(CategoryRequest => CategoryRequest.categoryRequestId != id );
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
                    <th>Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tableData.length>0?(
                    tableData.map((CategoryRequest,index) => (
                        <DisplayData
                            key={CategoryRequest.categoryRequestId}
                            id={CategoryRequest.categoryRequestId}
                            Name={CategoryRequest.categoryName}
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
        <td>{props.Name}</td>
        <td>
            <button className="request-approve" onClick={()=> props.deleteRow(props.id)}>
                Resolved
            </button>
        </td>
         </tr>
    );
}
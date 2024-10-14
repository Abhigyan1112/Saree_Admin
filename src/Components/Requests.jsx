import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
import {toast,ToastContainer} from 'react-toastify';
import { useState , useEffect} from 'react';
export default function Request() {
    const [tableData,setTableData] = useState([]);
    
    useEffect(() => {
        const fetchData= async() => {
            const response = await fetch (`${process.env.REACT_APP_BACKEND}/api/city-requests/unresolved`);
            const data = await response.json();
            setTableData(data);
            console.log(data);
        };
        fetchData();
    }, []);
    
    const deleteRow = async(Pincode)=>{
        try{
            const newCity=tableData.find(CityRequest => CityRequest.pinCode === Pincode);
            const response= await fetch(`${process.env.REACT_APP_BACKEND}/api/city-requests/update/${newCity.requestId}?status=${true}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error in response, status: ${response.status}`);
            }
            toast.success("Request Resolved");

            const updateTable = tableData.filter(CityRequest => CityRequest.pinCode != Pincode );
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
                    <th>PIN CODE</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tableData.length>0?(
                    tableData.map((CityRequest,index) => (
                        <DisplayData
                            key={CityRequest.pinCode}
                            PinCode={CityRequest.pinCode}
                            city={CityRequest.cityName}
                            State={CityRequest.state}
                            deleteRow={deleteRow}
                        />
                    ))
                    ):(
                        <tr>
                            <td colSpan={4}>No data available</td>
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
        <td>{props.PinCode}</td>
        <td>{props.city}</td>
        <td>{props.State}</td>
        <td>
            <button className="request-approve" onClick={()=> props.deleteRow(props.PinCode)}>
                Resolved
            </button>
        </td>
         </tr>
    );
}
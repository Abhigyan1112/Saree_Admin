import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
import { toast,ToastContainer } from 'react-toastify';
import { useState , useEffect} from 'react';

export default function Verify() {
    const [tableData,setTableData] = useState([]);

    useEffect(() => {
        const fetchData= async() => {
            const response = await fetch (`${process.env.REACT_APP_BACKEND}/business/getUnchecked`);
            const data = await response.json();
            setTableData(data);
            console.log(data);
        };
        fetchData();
    }, []);
    
    const deleteRow = async(Email,status)=>{
        try{
            const businessToDelete = tableData.find(business => business.ownerEmail === Email);
            console.log("Sending business data:", businessToDelete);

            const response = await fetch (`${process.env.REACT_APP_BACKEND}/business/changeApproval?status=${status}`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(businessToDelete)
            });

            if (!response.ok) {
                throw new Error(`Error in response, status: ${response.status}`);
            }
            toast.success("Business approval status changed!");

            const updateTable = tableData.filter(business => business.ownerEmail != Email);
            setTableData(updateTable);
        }
        catch(error){
            toast.error("Error fetching data: "+error.message);
        }
    };
    return(
        <div className='content'>
        <Table responsive="sm" className="request-table content">
            <thead>
                <tr>
                    <th>Business Name</th>
                    <th>GSTIn</th>
                    <th>Owner Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tableData.length > 0 ? (
                    tableData.map((business, index) => (
                        <DisplayData
                            key={business.ownerEmail}
                            Name={business.businessName}
                            GSTIn={business.gstin}
                            Email={business.ownerEmail}
                            deleteRow={deleteRow}
                        />
                    ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )}
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
            <td>{props.GSTIn}</td>
            <td>{props.Email}</td>
            <td>
                <button className="request-approve" onClick={()=> props.deleteRow(props.Email,"Approved")}>
                    Approve
                </button>
                <button className="request-approve" onClick={()=> props.deleteRow(props.Email,"Rejected")}>
                    Reject
                </button>
            </td>
        </tr>
    );
}
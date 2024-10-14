import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './Requests.css';
import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import './Track.css';

export default function DispatchedTracker() {
    const [tableData, setTableData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/prodOrd/getAllForAdmin?status=${"Dispatched"}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            setTableData(data);
        };
        fetchData();
    }, []);

    console.log(tableData);
    const dispatchOrder = async (orderId, productId) => {
        try {
            const dispatched = tableData.find(order => order.orders.orderId === orderId && order.product.productId === productId);
            console.log(dispatched);
            let response = null;
            if (dispatched.status === 'Packed') {
                response = await fetch(`${process.env.REACT_APP_BACKEND}/prodOrd/setToDispatched?productId=${productId}&orderId=${orderId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }

            if (!response.ok) {
                throw new Error(`Error in response, status: ${response.status}`);
            }

            toast.success("Order Dispatched");
            const updatedTable = tableData.filter(order => !(order.product.productId === productId && order.orders.orderId === orderId));
            setTableData(updatedTable);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="content">
            <Table striped bordered hover responsive="sm" className="request-table">
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Order ID</th>
                        <th>Product ID</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Delivery Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ? (
                        tableData.map((order) => (
                            <DisplayData
                                key={`${order.product.productId}-${order.orders.orderId}`}
                                orderDate={new Date(order.orders.orderDateTime).toLocaleDateString()}
                                orderId={order.orders.orderId}
                                productId={order.product.productId}
                                email={order.orders.customer.customerEmail} // Assuming this field exists
                                productName={order.product.productName} // Assuming this field exists
                                quantity={order.quantity}
                                deliveryCity= {order.orders.customer.city}// Assuming this field exists
                                status={order.status}
                                dispatchOrder={dispatchOrder}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No data available</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <ToastContainer />
        </div>
    )
}

function DisplayData({ orderDate, orderId, productId, email, productName, quantity, deliveryCity, status, dispatchOrder }) {
    return (
        <tr>
            <td>{orderDate}</td>
            <td>{orderId}</td>
            <td>{productId}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{deliveryCity}</td>
            <td>{status}</td>
            <td>
                <button className="request-dispatch" onClick={() => dispatchOrder(orderId, productId)}>
                    Reached City
                </button>
            </td>
        </tr>
    );
}
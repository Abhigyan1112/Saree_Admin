import React, { useState } from 'react';
import './AddEmployee.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddEmployee() {
    const [employeeData, setEmployeeData] = useState({
        employeeName: '',
        employeeEmail: '',
        password: '',
    });

    const handleInputChange = (e, field) => {
        setEmployeeData({
            ...employeeData,
            [field]: e.target.value
        });
        console.log(employeeData);
    };

    const sendData = async (e) => {
        e.preventDefault();

        // Input validation
        if (employeeData.employeeName === '') {
            toast.error("ENTER EMPLOYEE NAME");
            return;
        }
        if (employeeData.employeeEmail === '') {
            toast.error("ENTER EMPLOYEE EMAIL");
            return;
        }
        if (employeeData.password === '') {
            toast.error("ENTER PASSWORD");
            return;
        }

        console.log(employeeData);

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/deliveryEmployee/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employeeData),
            });

            const responseData = await response.json();
            if (response.status === 200) {
                toast.success('EMPLOYEE ADDED SUCCESSFULLY');
            } else {
                toast.error(responseData.message || 'Error adding employee');
            }
        } catch (error) {
            toast.error('Error adding employee: ' + error.message);
        }
    };

    return (
        <div className="content">
            <h1 className="add-employee-title">Add Employee</h1>
            <form onSubmit={sendData}>
                <div className="wrapper">
                    <label>Employee Name</label>
                    <input
                        value={employeeData.employeeName}
                        onChange={(e) => handleInputChange(e, 'employeeName')}
                        placeholder='Enter Employee Name'
                    />
                </div>
                <div className="wrapper">
                    <label>Employee Email</label>
                    <input
                        value={employeeData.employeeEmail}
                        onChange={(e) => handleInputChange(e, 'employeeEmail')}
                        placeholder='Enter Employee Email'
                        type="email"
                    />
                </div>
                <div className="wrapper">
                    <label>Password</label>
                    <input
                        value={employeeData.password}
                        onChange={(e) => handleInputChange(e, 'password')}
                        placeholder='Enter Password'
                        type="password"
                    />
                </div>
                <div className="wrapper">
                    <button className="add-button" type="submit">Add Employee</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

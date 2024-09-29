import React, { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';

export default function AddCategory() {
    const [categoryName, setCategoryName] = useState('');

    const handleCategoryNameChange = (e) => setCategoryName(e.target.value);

    const sendData = async(e) => {
        e.preventDefault();
        if(categoryName===''){
            toast.error("ENTER CATEGORY");
            return;
        }
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/category/add`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(categoryName)
        });
        const responseText= await response.text();
        if(responseText==='Already Present'){
            toast.error('CATEGORY ALREADY PRESENT');
        }
        else{
            toast.success('CATEGORY ADDED');
        }
    };

    return (
        <div className="content">
            <h1 className='add-city-title'>Add Category</h1>
            <form onSubmit={sendData}>
                <div className="wrapper">
                    <label>Cateogory Name</label>
                    <input value={categoryName} onChange={handleCategoryNameChange} placeholder='Enter Category Name' />
                </div>
                <div className="wrapper">
                    <button className="add-button" type='submit' >Add</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
}

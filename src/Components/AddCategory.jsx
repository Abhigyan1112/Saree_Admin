import React, { useEffect, useState } from 'react';

export default function AddCategory() {
    const [categoryName, setCategoryName] = useState('');

    const handleCategoryNameChange = (e) => setCategoryName(e.target.value);

    const sendData = (e) => {
        e.preventDefault();
        const categoryName=categoryName;

        fetch('https://localhost:8080/category/add',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(categoryName),
        })
        .then(response => response.json())
        .then(data=> {
            setCategoryName('');
        })
        .catch(error => console.error('Error:', error));
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
        </div>
    );
}

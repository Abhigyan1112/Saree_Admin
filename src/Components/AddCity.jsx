import React, { useEffect, useState } from 'react';
import './AddCity.css';

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
    "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", 
    "Puducherry"
];

export default function AddCity() {
    const [cityName, setCityName] = useState('');
    const [state, setState] = useState('');
    const [pinCode, setPinCode] = useState('');

    const handleCityNameChange = (e) => setCityName(e.target.value);
    const handleStateChange = (e) => setState(e.target.value);
    const handlePinCodeChange = (e) => setPinCode(e.target.value);

    const sendData = (e) => {
        e.preventDefault();
        const cityData={
            cityId:pinCode,
            cityName:cityName,
            state:state
        };

        fetch('https://localhost:8080/city/add',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(cityData),
        })
        .then(response => response.json())
        .then(data=> {
            setCityName('');
            setState('');
            setPinCode('');
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="content">
            <h1 className='add-city-title'>Add City</h1>
            <form onSubmit={sendData}>
                <div className="wrapper">
                    <label>City Name</label>
                    <input value={cityName} onChange={handleCityNameChange} placeholder='Enter City Name' />
                </div>
                <div className="wrapper">
                    <label>State Name</label>
                    {/* <select className="state-name-dropdown" value={selectedState} onChange={handleStateChange}>
                        <option value="" disabled>Select State</option>
                        {statesArray.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select> */}
                    <select className="state-name-dropdown" value={state} onChange={handleStateChange}>
                        <option value="" disabled>Select State</option>
                        {states.map((state) => (
                            <option value={state}>{state}</option>
                        ))}
                    </select>  
                </div>
                <div className="wrapper">
                    <label>PIN CODE</label>
                    <input value={pinCode} onChange={handlePinCodeChange} placeholder='Enter PIN CODE' />
                </div>
                <div className="wrapper">
                    <button className="add-button" type='submit' >Add</button>
                </div>
            </form>
        </div>
    );
}

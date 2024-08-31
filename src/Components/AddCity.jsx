import React, { useEffect,useState } from 'react';
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
    const [selectedState, setSelectedState] = useState('');

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    return (
        <div className="content">
            <h1 className='add-city-title'>Add City</h1>
            <div className="wrapper">
                <label>City Name</label>
                <input placeholder=' ' />
            </div>
            <div className="wrapper">
                <label>State Name</label>
                {/* <select className="state-name-dropdown" value={selectedState} onChange={handleStateChange}>
                    <option value="" disabled>Select State</option>
                    {statesArray.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select> */}
                <select className="state-name-dropdown">
                    <option value="" disabled>Select State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>  
            </div>
            <div className="wrapper">
                <label>PIN CODE</label>
                <input placeholder=' ' />
            </div>
            <div className="wrapper">
                <button className="add-button">Add</button>
            </div>
        </div>
    );
}

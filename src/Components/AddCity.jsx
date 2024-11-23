import React, { useState } from 'react';
import './AddCity.css';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const [cityData,setCityData]=useState({
        cityName:'',
        state:'',
        pinCode:'',
        iconType:'',
        description:'',
        icon: null,
    });

    const handleCityChange = (e, field) => {
        setCityData({
            ...cityData, [field]: e.target.value
        });
        console.log(cityData);
    };

    const handleFileChange = (e) => {
        setCityData({
            ...cityData, "icon": e.target.files[0]
        });
    };

    const sendData = async(e) => {
        e.preventDefault();
        if(cityData.cityName===''){
            toast.error("ENTER CITY NAME");
            return;
        }
        if(cityData.state===''){
            toast.error("SELECT STATE");
            return;
        }
        if(cityData.pinCode===''){
            toast.error("ENTER PIN CODE");
            return;
        }
        if(cityData.description===''){
            toast.error("ENTER DECRIPTION OF ATLEAST 20 characters");
            return;
        }
        if(cityData.description.length>1000){
            toast.error("DESCRIPTION SHOULD HAVE LESS THAN 1000 characters");
            return;
        }
        console.log(cityData);
        
        let formData = new FormData();
        formData.append("cityIcon",cityData.icon);
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/city/add?pinCode=${cityData.pinCode}&cityName=${cityData.cityName}&description=${cityData.description}&state=${cityData.state}`,{
                method:'POST',
                body:formData,
            });
            const responseText= await response.text();
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (responseText==='Invalid Name' || responseText==='Invalid pincode') {
                toast.error(responseText.toUpperCase());
              } else {
                toast.success('CITY ADDED');
            }
        }
        catch(error){
            toast.error('Error adding city: '+error.message);
        }
    };

    return (
        <div className="content">
            <h1 className='add-city-title'>Add City</h1>
            <form onSubmit={sendData}>
                <div className="wrapper">
                    <label>City Name</label>
                    <input value={cityData.cityName} onChange={(e)=>handleCityChange(e,"cityName")} placeholder='Enter City Name' />
                </div>
                <div className="wrapper">
                    <label>State Name</label>
                    {/* <select className="state-name-dropdown" value={selectedState} onChange={handleStateChange}>
                        <option value="" disabled>Select State</option>
                        {statesArray.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select> */}
                    <select className="state-name-dropdown" value={cityData.state} onChange={(e)=>handleCityChange(e,"state")}>
                        <option value="" disabled>Select State</option>
                        {states.map((state,index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>  
                </div>
                <div className="wrapper">
                    <label>Description</label>
                    <input value={cityData.description} onChange={(e)=>handleCityChange(e,"description")} placeholder='Enter Description under 1000 characters' />
                </div>
                <div className="wrapper">
                    <label>PIN CODE</label>
                    <input value={cityData.pinCode} onChange={(e)=>handleCityChange(e,"pinCode")} placeholder='Enter PIN CODE' />
                </div>
                <div className="wrapper">
                    <label>City Icon</label>
                    <input type="file" onChange={(e) => handleFileChange(e)} accept="image/*" />
                </div>
                <div className="wrapper">
                    <button className="add-button" type="submit">Add</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
}

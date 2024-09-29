import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex flex-column vh-100 bg-lavender ">
            <ul className="nav flex-column">
                <li className="nav-item">
                <button onClick={()=>navigate("/request")} className='nav-link text-white'>City Requests</button>
                </li>
                <li className="nav-item">
                <button onClick={()=>navigate("/cat-request")} className='nav-link text-white'>Category Requests</button>
                </li>
                <li className="nav-item">
                <button onClick={()=>navigate("/verify")} className='nav-link text-white'>Business Verification</button>
                </li>
                <li className="nav-item">
                <button onClick={()=>navigate("/tracker")} className='nav-link text-white'>Track Delivery</button>
                </li>
                <li className="nav-item">
                <button onClick={()=>navigate("/addCity")} className='nav-link text-white'>Add City</button>
                </li>
                <li className="nav-item">
                <button onClick={()=>navigate("/addCategory")} className='nav-link text-white'>Add Category</button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
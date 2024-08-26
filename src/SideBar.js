import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column vh-100 bg-lavender navbar">
            <div className="p-3 text-white">
                <h2>Vastrika</h2>
                <h6>Threads Of Tradition</h6>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Requests</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Business Verification</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Delivery Tracking</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
import React, { useEffect, useState } from 'react'
import './TopBar.css'
import { Link, useNavigate } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <div className="wrapper left">
                <img id="nav-logo" src={require("./images/logo.webp")} alt="logo" />
                <h1 className="title-bigletter">V</h1>
                <div style={{padding:"0"}}>
                    <h1 className="title">astrika</h1>
                    <h2 className="punchline">Threads of Tradition</h2>
                </div>
            </div>
        </nav>
    )
}
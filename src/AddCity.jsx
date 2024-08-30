import React, { useEffect, useRef, useState } from 'react';
import './AddCity.css';
export default function AddCity() {
	return (
		<div className="content">
			<h1 className='add-city-title'>Add City</h1>
			<div className="wrapper">
				<label> City Name</label>
				<input placeholder=' ' />
			</div>
			<div className="wrapper">
				<label> State Name</label>
				<input placeholder=' ' />
			</div>
			<div className="wrapper">
				<label> PIN CODE</label>
				<input placeholder=' ' />
			</div>
			<div className="wrapper">
				<button className="add-button">Add</button>
			</div>
		</div>
	)
}

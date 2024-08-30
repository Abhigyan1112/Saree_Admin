import React from 'react';
import Sidebar from './SideBar.jsx';
import TopBar from './TopBar.jsx';
import Request from './Requests.jsx';
import Verify from './BusVerification.jsx';
import Tracker from './Track.jsx';
import AddCity from './AddCity.jsx';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
		{
			path:'/', element: <><TopBar/><Sidebar/></>
		},
		{
			path:'/request', element: <><TopBar/><Sidebar/><Request/></>
		},
		{
			path:'/verify', element: <><TopBar/><Sidebar/><Verify/></>
		},
    {
			path:'/tracker', element: <><TopBar/><Sidebar/><Tracker/></>
		},
		{
			path:'/addCity', element: <><TopBar/><Sidebar/><AddCity/></>
		}
	])
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <div className="d-flex">
        {/* <Request/> */}
        {/* <Verify/> */}
      </div>
    </div>
  );
}

export default App;
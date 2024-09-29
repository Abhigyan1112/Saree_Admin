import React from 'react';
import Sidebar from './Components/SideBar.jsx';
import TopBar from './Components/TopBar.jsx';
import Request from './Components/Requests.jsx';
import Verify from './Components/BusVerification.jsx';
import Tracker from './Components/Track.jsx';
import CatRequest from './Components/Cat-Requests.jsx';
import AddCity from './Components/AddCity.jsx';
import AddCategory from './Components/AddCategory.jsx';
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
			path:'/cat-request', element: <><TopBar/><CatRequest/><Sidebar/></>
		},
		{
			path:'/verify', element: <><TopBar/><Sidebar/><Verify/></>
		},
    	{
			path:'/tracker', element: <><TopBar/><Sidebar/><Tracker/></>
		},
		{
			path:'/addCity', element: <><TopBar/><Sidebar/><AddCity/></>
		},
		{
			path:'/addCategory', element: <><TopBar/><Sidebar/><AddCategory/></>
		}
	])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
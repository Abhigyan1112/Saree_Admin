import React from 'react';
import Sidebar from './SideBar.js';
import TopBar from './TopBar.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <TopBar />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
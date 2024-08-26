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
        <div className="content p-3">
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;
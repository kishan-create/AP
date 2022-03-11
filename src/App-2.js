import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/sidebarnew/SideBar";
import Content from "./components/content/Content";
import "./App.css";
import './css/style.css';
import './css/responsvie.css';
const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  
  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};

export default App;

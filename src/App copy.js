import React, { useState } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
 

import SideBar from "./components/sidebarnew/SideBar";
import Content from "./components/content/Content";
import Employee_Sidebar from "./components/sidebarnew/Employee_Sidebar";
import Loginform from "./components/login/Loginform";
import { AuthProvider } from "./context/auth.context";
import "./App.css";
import './css/style.css';
import './css/responsvie.css';
const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  //let HideHeader = window.location.pathname === '/login' && '/Reset'  ? null : <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />;
  let user = localStorage.getItem("user");  

  user = JSON.parse(user);
  console.log("App")
  console.log(user.name);
  if (!user || !user.name  === "") {
    
   }
   else {
    
   }
   let sidebar =user.name === 'shanu'  ? "" : <Employee_Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />;
  return (
    
    <AuthProvider userData={user}>
    <Router>
      
      <div className="App wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
       
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;

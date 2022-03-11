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
  console.log(user);
  return ( 
    <div>   
    <AuthProvider userData={user}>
      <Router>  
      {
          (() => {
            if (!user || !user.name  === "") {
                      return (
                        <div className="App wrapper">
                          <Loginform/>
                       
                        </div>
                      )
                  } 
                  else if(user.name=='shanu')
                  {
                    return (
                      <div className="App wrapper">
                  <Employee_Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
                    </div>
                    )
                  }
                   else {
                      return (
                        <div className="App wrapper">
                        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
     
                        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
                        </div>
                      )
                  }
          })()  
      } 
        </Router> 
      </AuthProvider>
    
  </div>  
)
  
 
};

export default App;

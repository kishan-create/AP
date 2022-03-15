import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";

import Topbar from "./Topbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Employeeprofile from "../pages/Employeeprofile";
import Kanban from "../pages/Kanban";
import Emplyelist from "../pages/Emplyelist";
import Dashboard from "../pages/Dashboard";
import Job from "../pages/job";
import UncontrolledBoard from "../pages/Dragslider";
import Newdrag from "../pages/Newdrgbox.jsx";
import Addemployeetab from "../pages/Addemployeetabs";
import  Organizationold from "../pages/Organizationold";
import Addassets from "../pages/Addassets";
import Addcategory from "../pages/Addcategory";
import Addproperty from '../pages/Addproperty';
import Organization from "../pages/Organization";

import Assets from "../pages/Assets";
import Assetsdetails from "../pages/Assetsdetails";
import Organizationlist from "../pages/Organizationlist";
import OfferReleasereport from "../pages/Onboarding";
import Offboarding from "../pages/Offboarding";
//import Login from "../admin/auth/Login";
import Loginform from "../login/Loginform";
import logout_new from "../login/Logout_new";
import Employee_Dashboard from "../pages/Employee_Dashboard";
const Employee_content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
  
    
        <Router path="/Employee_Dashboard">
        < Employee_Dashboard/>
        </Router>
        
    </Switch>
  </Container>
);

export default Employee_content;

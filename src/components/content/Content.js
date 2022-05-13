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
import HolidayList from "../pages/Holiday-calendar-list"
import Holidaycalendar from "../pages/Holidaycalendar";
import Multyselect from "../pages/Multyselect";
import Holidaypopup from "../pages/Holidaypopup";
import Holidayview from "../pages/Holidayview";


const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
    
    <Route exactly path="/Loginform" component={Loginform} />    
    <Route exactly path="/Dashboard" component={Dashboard} />
    <Route exactly path="/Kanban" component={Kanban} />
    <Route exact path="/Assets" component={Assets} />
    <Route exact path="/Assetsdetails" component={Assetsdetails} />
    <Route exact path="/Emplyelist" component={Emplyelist} />
    <Route exact path="/Employeeprofile" component={Employeeprofile} />
    <Route exact path="/Job" component={Job} />
    <Route exact path="/Addemployeetab" component={Addemployeetab} />  

    <Route exact path="/OfferReleasereport" component={OfferReleasereport} />  
    <Route exact path="/Offboarding" component={Offboarding} />  
    <Route exact path="/Holidaypopup" component={Holidaypopup} />  
    <Route exact path="/Holidayview/:id" component={Holidayview} />  
    <Route exact path="/Holidaycalendar" component={Holidaycalendar} />
    
    <Route exact path="/Multyselect" component={Multyselect} />
        <Router path="/Addemployeetab">
        <Addemployeetab/>
        </Router> 
        <Router path="/Organization">
        <Organization/>
        </Router> 
        <Router path="/Addassets">
        <Addassets/>
        </Router> 
        <Router path="/Addcategory">
        <Addcategory/>
        </Router> 
             <Router path="/Addproperty">
        < Addproperty/>
        </Router> 
        <Router path="/Organizationlist" >
        <Organizationlist/>
        </Router>
        <Router path="/Organizationold">
        <Organizationold/>
        </Router>
        <Router path="/Organizationold">
        < Organizationold/>
        </Router>
        <Router exact  path="/HolidayList"  component={HolidayList}>
        < HolidayList/>
        </Router>
        
    </Switch>
  </Container>
);

export default Content;

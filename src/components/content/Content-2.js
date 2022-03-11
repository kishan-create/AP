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

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>

    <Route exactly path="/Dashboard" component={Dashboard} />
    <Route exactly path="/Kanban" component={Kanban} />
    <Route exact path="/Asset" component={Assets} />
    <Route exact path="/Assetsdetails" component={Assetsdetails} />
    <Route exact path="/Emplyelist" component={Emplyelist} />
    <Route exact path="/Employeeprofile" component={Employeeprofile} />
    <Route exact path="/Job" component={Job} />
    <Route exact path="/Addemployeetab" component={Addemployeetab} />
         
      
       
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
        <Router path="/Organizationlist">
        <Organizationlist/>
        </Router>
        <Router path="/Organizationold">
        <Organizationold/>
        </Router>
        <Router path="/Organizationold">
        < Organizationold/>
        </Router>

    </Switch>
  </Container>
);

export default Content;

import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import ReactDOM from "react-dom";
 
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

class Content extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />

        <Router>
     
      <Switch>
        
      <Router exact path="/Dashboard">
      <Dashboard/>
      </Router>
      <Router path="/Kanban" >
        <Kanban/>
        </Router>
        <Router path="/Assets"   >
        <Assets/>
        </Router> 
        <Router path="/Assetsdetails">
        <Assetsdetails/>
        </Router> 
        <Router path="/Emplyelist">
        <Emplyelist/>
        </Router> 
        <Router path="/Employeeprofile">
        <Employeeprofile/>
        </Router> 
        <Router path="/Job">
        <Job/>
        </Router> 
        
        <Router path="/Dragslider">
        <UncontrolledBoard/>
        </Router> 
        <Router path="/Newdrgbox">
        <Newdrag/>
        </Router> 
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
         
        
         
    </Router>
      </Container>
    );
  }
}

export default Content;
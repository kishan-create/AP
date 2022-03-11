import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FiAlignRight } from "@react-icons/all-files/fi/FiAlignRight";
import { BiTimeFive } from "@react-icons/all-files/bi/BiTimeFive";
import { BsBell } from "@react-icons/all-files/bs/BsBell";
import {dashboard,asste,Grouplog, logomob} from '../../images';

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
  const logout = () => {
  
    localStorage.clear();
// you can also like localStorage.removeItem('Token');
    window.location.href = "/Loginform";
  }
  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded maintop-bar"
      expand
    >
      <Button  variant="outline-info" className="hamber-icon" onClick={toggleSidebar} >
      <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <div className="logo-mob">
			<img src={logomob}/>
        </div>
               <Navbar>
        <div class="  topbar-col-right">
                 <span className="topbar-icon-right"> <BiTimeFive/></span>
                 <span  className="topbar-icon-right"> <BsBell/></span>
                 <button onClick={logout}>Logout</button>
                 <span> 	<img className="topbar-icon-right-img" src={Grouplog}/> <sup className="topbar-icon-right-img-txt">shanu</sup></span>
                
               </div>
        </Navbar>
       </Navbar>
  );
};

export default Topbar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import './Topbar.css';
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,  UncontrolledButtonDropdown,
  NavItem,
  NavLink, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle
} from "reactstrap";
import { Link } from "react-router-dom";
import { FiAlignRight } from "@react-icons/all-files/fi/FiAlignRight";
import { BiTimeFive } from "@react-icons/all-files/bi/BiTimeFive";
import { BsBell } from "@react-icons/all-files/bs/BsBell";
import {dashboard,asste,Grouplog, logomob} from '../../images';
import {useAuth}  from "../../context/auth.context";
const Topbar = ({ toggleSidebar,userData }) => {

  
  const userdata = useAuth(userData);
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
  const logout = () => {
  alert("logout");
    localStorage.clear();
    window.location.href = "http://localhost:3000/Loginform";
// you can also like localStorage.removeItem('Token');
    //window.location.href = "http://localhost:3000/Loginform";
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
<<<<<<< HEAD
                 
                
                 <span> 	<img className="topbar-icon-right-img" src={Grouplog}/>  </span>
                 <div class="dropdown">
                        <button class="dropbtn">{userdata.user.name} <i class="fa fa-caret-down"></i></button>
                        <div class="dropdown-content">
                        
                        <span onClick={logout}>Logout</span>
                        </div>
                      </div>
               </div>
=======
           <UncontrolledButtonDropdown  className="log-out-show">
                <DropdownToggle  caret size="md" className="" >
                <span> 	<img className="topbar-icon-right-img" src={Grouplog}/> <sup className="topbar-icon-right-img-txt">{userdata.user.name}</sup></span>
                </DropdownToggle>
                <DropdownMenu className="">
                <a  onClick={logout}>
                <i class="fa fa-power-off logout-new"></i> Logout 
          </a>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
       
       </div>
>>>>>>> acd99ff026428685d49bc95ae11ae32967d23cad
        </Navbar>
       </Navbar>
  );
};

export default Topbar;

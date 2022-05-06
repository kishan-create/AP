import React from "react";
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav ,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import classNames from "classnames";
import { Link , NavLink as nlink, useLocation } from "react-router-dom";
import {dashboard,asste,logonew} from '../../images';
import {FaThLarge, FaChartLine, FaTools } from "react-icons/fa";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt";
import { IconName } from "react-icons/ai";
import { MdPersonSearch, MdOutlineScreenSearchDesktop, MdBusinessCenter, MdOutlineAccountTree, MdDashboard, MdOutlineLaptopWindows,
   MdTextSnippet , MdInsertDriveFile, MdAdminPanelSettings, MdSettingsSuggest, MdPersonPin, MdDateRange} from "react-icons/md";
import SubMenu from "./SubMenu";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { RiLoginCircleFill } from "react-icons/ri";

const $ = window.$;
 
  $(document).ready(function(){
    if(window.matchMedia("(max-width: 980px)").matches){
        // The viewport is less than 768 pixels wide
        
        $( '.side-menu .nav-item a.mob-menu-clik' ).on("click", function(){
          $('.hamber-icon').click();
          });

    } else{
        // The viewport is at least 768 pixels wide
       // alert("This is a tablet or desktop.");
       $( '.side-menu .nav-item a' ).on("click", function(){
        $('.sidebar').show();
        });
    }
  
});


  const SideBar = ({ isOpen, toggle }) => (
     
  
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#5452E1" }} className="side-bar-close">
        &times;
      </span>
      <div className="logo">
			<img src={logonew}/>
        </div>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
      <div className="nav-taxt">Navigation</div>
   
         <NavItem>
          <NavLink exact  active={window.location.pathname === "/"} tag={nlink} to={""} exact  className="mob-menu-clik" >
          < MdDashboard/>
            Dashboard  
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={window.location.pathname === "/Job"} exact tag={nlink} to={"/Job"}  className="mob-menu-clik">
          < MdBusinessCenter/>
            Job Portal
          </NavLink>
        </NavItem>
        <UncontrolledButtonDropdown  className="btin-nam-main" nav inNavbar>
                <DropdownToggle  nav caret size="md" className="dropname-main" setActiveFromChild  >
                Recruitment < MdOutlineLaptopWindows className="show-only-icon"/> <FontAwesomeIcon icon={faCaretDown} className="mr-2  float-right close-tog" />
                </DropdownToggle>
                <DropdownMenu className="show-subm-menu">
                  <NavLink tag={nlink} to={"/Kanban"} >Recruitment<MdPersonSearch/></NavLink>
                  <NavLink tag={nlink} to={"/OfferReleasereport"}>Onboarding< MdTextSnippet/></NavLink>
                  <NavLink tag={nlink} to={"/Offboarding"}> Offboarding< MdInsertDriveFile/> </NavLink>
                  
                </DropdownMenu>
              </UncontrolledButtonDropdown>
        <NavItem>
          <NavLink active={window.location.pathname === "/Emplyelist"} tag={Link} to={"/Emplyelist"} className="mob-menu-clik" >
          <FaUserTie/>
              Employee
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={window.location.pathname === "/Assets"} tag={Link} to={"/Assets"}  className="mob-menu-clik">
          <FaChartLine/>
             Asset
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink active={window.location.pathname === "/"} tag={Link} to={"/"} className="mob-menu-clik" >
          <FaFileAlt/>
            Projects
          </NavLink>
        </NavItem>
          

        <UncontrolledButtonDropdown  className="btin-nam-main" nav inNavbar>
                <DropdownToggle  nav caret size="md" className="dropname-main" activeClassName="active" >
                Administration < MdAdminPanelSettings  className="show-only-icon"/> <FontAwesomeIcon icon={faCaretDown} className="mr-2  float-right close-tog"  />
                </DropdownToggle>
                <DropdownMenu className="show-subm-menu">
                <NavLink tag={nlink} to={"/Organization"} className="mob-menu-clik " activeClassName="active" >
                Organization< MdOutlineAccountTree/>
          </NavLink>
          <NavLink tag={nlink} to={"/Addcategory"} className="mob-menu-clik" activeClassName="active" >
          Configuration< MdSettingsSuggest/>
          </NavLink>
               
                </DropdownMenu>
              </UncontrolledButtonDropdown>
       
      <NavItem>
          <NavLink active={window.location.pathname === "/Organizationold"} tag={nlink} to={"/Organizationold"} activeClassName="active">
          < MdOutlineAccountTree/>
             Organization  
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={window.location.pathname === "/Loginform"} tag={nlink} to={"/Loginform"} className="mob-menu-clik">
          < MdPersonPin/>
          Loginform  1
          </NavLink>
          </NavItem>
        <NavItem>
          <NavLink active={window.location.pathname === "/HolidayList"} tag={nlink} to={"/HolidayList"} activeClassName="active">
          < MdDateRange/>
          Holiday Calendar
          </NavLink>
          
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;

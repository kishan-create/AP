import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {dashboard,asste,logonew} from '../../images';
import {FaThLarge, FaChartLine, FaTools } from "react-icons/fa";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt";
import { IconName } from "react-icons/ai";
import { MdPersonSearch, MdOutlineScreenSearchDesktop, MdBusinessCenter, MdOutlineAccountTree } from "react-icons/md";
import SubMenu from "./SubMenu";

const $ = window.$;
 var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
 $(".side-menu .nav-item a").click(function (e) {
  $(".side-menu .nav-item a").removeClass("active");
  $(this).addClass("active");
   });

  $(document).ready(function () {
    $(".side-menu .nav-item a").click(function (e) {
     $(".side-menu .nav-item a").removeClass("active");
     $(this).addClass("active");
      });
  });


const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <div className="logo">
			<img src={logonew}/>
        </div>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dummy Heading</p>
   
         <NavItem>
          <NavLink exact tag={Link} to={"/Dashboard"} exact activeClassName="active">
          < MdBusinessCenter/>
            Dashboard  
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact tag={Link} to={"/Job"} exact activeClassName="active">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Job Portal
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/Kanban"} >
          < MdPersonSearch className="recrutment-menu-icon"/>
             Recruitment
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/Emplyelist"} >
          <FaUserTie/>
              Employee
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/Assets"} >
          <FaChartLine/>
             Asset
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/"} >
          <FaFileAlt/>
            Projects
          </NavLink>
        </NavItem>
          

        <SubMenu title="Administration" icon={faCopy} items={submenus[1]} />


        
        <NavItem>
          <NavLink tag={Link} to={"/Organizationold"}>
          < MdOutlineAccountTree/>
             Organization  
          </NavLink>
        </NavItem>
     
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1"
    },
    {
      title: "Home 2",
      target: "Home-2"
    },
    {
      itle: "Home 3",
      target: "Home-3"
    }
  ],
  [
    {
      title: "Organization",  
      target: "Organization"
    },
    {
      title: "Configuration",
      target: "Addcategory"
    }
  ]
];

export default SideBar;

import React from "react";
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import {dashboard,asste,logonew} from '../../images';
import {FaThLarge, FaChartLine, FaTools } from "react-icons/fa";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt";
import { IconName } from "react-icons/ai";
import { MdPersonSearch, MdOutlineScreenSearchDesktop, MdBusinessCenter, MdOutlineAccountTree } from "react-icons/md";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";  
import ReactDOM from "react-dom";

import SideNav, {
  Toggle,

  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";


class SideBar extends React.Component {
 
  render() {
    const $ = window.$;
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.sidebar .nav-item a').each(function() {
     if (this.href === path) {
      $(this).addClass('active');
       }
    });
    
      
    return (
    
        <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <div className="logo">
			<img src={logonew}/>
        </div>
        </div>








        <Nav className="flex-column pt-2"  >
        <div className="nav-taxt">Navigation</div>

          <Nav.Item exact className="active">
            <Nav.Link href="/Dashboard">
            <FaThLarge/>
             Dashboard  
   
            </Nav.Link>  
             </Nav.Item>
            <Nav.Item>
            <Nav.Link  href="/Job">
             < MdBusinessCenter/>
             Job Portal
            </Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="/Kanban">
             < MdPersonSearch className="recrutment-menu-icon"/>
             Recruitment
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/Emplyelist" activeClassName='active'  exact>
            <FaUserTie/>
              Employee
            </Nav.Link>
          </Nav.Item>
            
               <Nav.Item>
            <Nav.Link href="/Assets"  >
              <FaChartLine/>
             Asset
            </Nav.Link>
          </Nav.Item>

        

          <Nav.Item>
            <Nav.Link href="/">
            <FaFileAlt/>
            projects
            </Nav.Link>
              </Nav.Item>


              <SubMenu title="Administration" icon={faCopy} items={submenus[1]} />
            <SubMenu
            title="Administration"
            icon={faCopy}
            items={[<a href="/Organization">  < MdOutlineAccountTree/>Organization & Branches</a>, <a href="/Addcategory">< FaTools/> Configuration</a> ]}
          />
        
       
          {/* A JSX comment 

          <Nav.Item>
            <Nav.Link href="/Dragslider">
             < FaTools/>
             Dragslider
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link href="/Newdrgbox">
             < FaTools/>
            Newdrg
            </Nav.Link>
          </Nav.Item>

          */}
                      <Nav.Item>
          <Nav.Link href="/Organizationold">
             < MdOutlineAccountTree/>
             Organization  
            </Nav.Link>
          
          </Nav.Item>
           
        </Nav>

      </div>
    );
  }
}

export default SideBar;
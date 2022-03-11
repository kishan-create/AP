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
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link , useLocation } from "react-router-dom";
import {dashboard,asste,logonew} from '../../images';
import {FaThLarge, FaChartLine, FaTools } from "react-icons/fa";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt";
import { IconName } from "react-icons/ai";
import { MdPersonSearch, MdOutlineScreenSearchDesktop, MdBusinessCenter, MdOutlineAccountTree } from "react-icons/md";
import SubMenu from "./SubMenu";
import logout_new from "../login/Logout_new";


const $ = window.$;
 var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $('.side-menu .nav-item a').each(function() {
   if (this.href === path) {
    $(this).addClass('active');
   }
  });


  $(document).ready(function () {
    $(".side-menu .nav-item a").click(function (e) {
     $(".side-menu .nav-item a").removeClass("active");
     $(this).addClass("active");
      });



  });

  $(function() {
    //   $('.side-menu .nav-item a[href^="/' + window.location.pathname.split("/")[1] + '"]').addClass('active');
  });

 
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
          <NavLink exact tag={Link} to={""} exact activeClassName="active" className="mob-menu-clik" >
          < MdBusinessCenter/>
            Dashboard  
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact tag={Link} to={"/Job"}  className="mob-menu-clik">
          < MdBusinessCenter/>
            Job Portal
          </NavLink>
        </NavItem>
    

        <SubMenu title="Recruitment" icon={faCopy} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/Emplyelist"} className="mob-menu-clik" >
          <FaUserTie/>
              Employee
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/Assets"}  className="mob-menu-clik">
          <FaChartLine/>
             Asset
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/"} className="mob-menu-clik" >
          <FaFileAlt/>
            Projects
          </NavLink>
        </NavItem>
          

        <SubMenu title="Administration" icon={faCopy} items={submenus[2]} />


        
        <NavItem>
          <NavLink tag={Link} to={"/Organizationold"} className="mob-menu-clik">
          < MdOutlineAccountTree/>
             Organization  
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/Loginform"} className="mob-menu-clik">
          < MdOutlineAccountTree/>
          Loginform  1
          </NavLink>
          
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/logout_new"} className="mob-menu-clik">
          < MdOutlineAccountTree/>
        Logout
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
      icon: <MdPersonSearch/>,
         title: "Recruitment",  
      target: "Kanban",
  
    },
    {
      icon:< FaTools/>,
      title: "Onboarding",
      target: "OfferReleasereport"
    },
    {
      icon:< FaTools/>,
      title: "Offboarding",
      target: "Offboarding"
    }
  ],
  [
    {
      icon: < MdOutlineAccountTree/>,
         title: "Organization",  
      target: "Organization",
  
    },
    {
      icon:< FaTools/>,
      title: "Configuration",
      target: "Addcategory"
    }
  ]
];

export default SideBar;

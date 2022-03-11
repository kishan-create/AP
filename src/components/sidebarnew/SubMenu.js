import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const $ = window.$;


const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { icon, title, items } = props;


  return (
    
    <div  className="admin-menu-space" >
      <NavItem
              onClick={toggle}
        className={classNames({ "menu-open": !collapsed })} 
      >
        <NavLink className="dropdown-toggle">
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {title}
          <FontAwesomeIcon icon={faCaretDown} className="mr-2  float-right close-tog" />
          <FontAwesomeIcon icon={faCaretUp} className="mr-2 float-right   open-tog" />
        </NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        {items.map((item, index) => (
          <NavItem key={index} className="pl-4">
            <NavLink tag={Link} to={item.target} className="mob-menu-clik">
              {item.title}
              {item.icon}
             
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};



export default SubMenu;

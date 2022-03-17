import { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from "reactstrap";
import './SideMenu.css';
import { Button } from 'reactstrap';



export default function SideBarmenu() {
  const [activeSubmenu, setActiveSubmenu] = useState(0);
  return (
    <div className="sidebar-container">
      {activeSubmenu}
      <div>

        <Nav vertical>

          <NavItem>
            <NavLink  onClick={() => setActiveSubmenu(1)} href="#">
              Link 1
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#" onClick={() => setActiveSubmenu(2)}>
              Link 2
            </NavLink>
          </NavItem>

          <NavItem>
            <SubMenu isOpen={activeSubmenu === 3} toggleDropDown={setActiveSubmenu} menuNumber={3}></SubMenu>
          </NavItem>

          <NavItem>
            <SubMenu isOpen={activeSubmenu === 4} toggleDropDown={setActiveSubmenu} menuNumber={4}></SubMenu>
          </NavItem>
        </Nav>


      </div>

    </div>
  );
}


function SubMenu(props) {
  const handleClick = () => {
    if (props.isOpen)
      props.toggleDropDown(0);
    else
      props.toggleDropDown(props.menuNumber);
  }
  return (
    <Dropdown nav={true} isOpen={props.isOpen} onClick={() => handleClick()} >
      <DropdownToggle caret>
        Dropdown {props.menuNumber}
      </DropdownToggle>
      <DropdownMenu
      >
        <DropdownItem>
          Some Actionn {props.menuNumber}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
 
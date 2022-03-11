import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

const Contlogin = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    
    <Switch>

     
       
    </Switch>
  </Container>
);

export default Contlogin;

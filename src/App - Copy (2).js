import React from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from './components/topbar/Topbar';
//import Sidebar from './components/Sidebar/Sidebar';
//import Sidebar from './components/Sidebar/Sidebar';
import Mainouter from './components/page-main/main-outer';
import SideBar from "./components/sidebarnew/SideBar";
import Content from "./components/content/Content";
 
import './css/style.css';
import './css/responsvie.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Board from './components/pages/Board';
import Employee from "./components/pages/Employee";
import Kanban from "./components/pages/Kanban";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="App wrapper">
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
        <Content toggle={this.toggle} isOpen={this.state.isOpen} />

       
      </div>
      
    );
  }
}

export default App;

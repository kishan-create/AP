import React, { useState, useCallback, useRef, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import {
  MdOutlineFileDownload,
  MdOutlinePrint,
  MdPhone,
  MdCheck,
  MdLocationPin,
} from "react-icons/md";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { MdExitToApp, MdList } from "react-icons/md";
import { MdViewQuilt } from "react-icons/md";
import { mdiEye } from "react-icons/md";
import Tablecand from "./Tablecand"; 
import { constants } from "smooth-dnd";
import BasicTabs from "./Employeetabs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Recruitmentnewmodal from "./Recruitmentnewmodal";
import axios from "axios";
import { MdClose } from "@react-icons/all-files/md/MdClose"; 
import Select from "react-select";
 import Emplyelist from "./Emplyelist";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import Multiselect from "multiselect-react-dropdown";
 import Emptablistview from "./Emptablistview";
const Empviewtabs = () => {
   
  const [value, setValue] = React.useState(0);
   
  const [isviewlog, setIsViewLog] = useState(false);
  const handlesTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
 
  return (
    <div>
      
       
      
      <main className="inner-content-box">
        <header className="main-otrer-top"> Employee</header>
        <DndProvider backend={HTML5Backend}>
          <section className="main-content-area">
            <div className="main-content-area-inner">
              <div className="sub-head">
              Employee List
              <div className="top-right-outer add-btn-div">
                  <div className="buttons-outer">
                    <a href="Addemployeetab" className="blue-button">
                      <SiAddthis className="add-btn-icon" /> Add Employee
                    </a>
                  </div>

                  <div className="buttons-outer maring-left-15">
                    <a href="add" className="white-button download-bt">
                      <MdOutlineFileDownload className="add-btn-icon" />{" "}
                      Download
                    </a>
                  </div>

                  <div className="buttons-outer maring-left-15">
                    <a href="add" className="white-button  download-bt">
                      <MdOutlinePrint className="add-btn-icon" /> Print
                    </a>
                  </div>
                </div>
              </div>
              
              <AppBar position="static" className="tab-outer-head tabmob-none">
                <Tabs
                  value={value}
                  onChange={handlesTabs}
                  aria-label="icon tabs example"
                >
                  <Tab icon={<MdViewQuilt />} aria-label="List" />
                  <Tab icon={<MdList />} aria-label="List" />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <div className="tab-outer-main"> 
                  <div className="tab-outer darg-outer ">
                    <div style={{ display: "flex", justifyContent: "center", height: "100%", width: "100%",  }} >
                    <Emplyelist />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="tab-outer">
                <Emptablistview /> 
                </div>
              </TabPanel>
            </div>
          </section>
        </DndProvider>
      </main>{" "}
    </div>
  );
};

export default Empviewtabs;
 

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

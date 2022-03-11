import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import {dashboard,asste,eyeico,location,eyeicoSched,eyeicoreject,eyeicowait,eyenew , uploadimage, uploadicon} from '../../images';
import {Tab, Tabs, AppBar} from '@material-ui/core';
import { MdList } from "react-icons/md";
import { MdViewQuilt } from "react-icons/md";
import { mdiEye } from "react-icons/md";
import Tablecand from './Tablecand'; 
import Popupmodal from "./Popupmodal"; 
import PropTypes from 'prop-types';
import { constants } from 'smooth-dnd';
import BasicTabs from "./Employeetabs";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import {
  DragDropContext,
  Draggable,
  Droppable
} from "react-beautiful-dnd-next";
import { v4 as uuid } from "uuid";

import Select from 'react-select';
 

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin, MdEdit } from "react-icons/md";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";

import Radio from "./Radio";
import MultipleImageUpload from "./MultipleImageUpload";
//import CheckboxOut from "./Checkbox";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const options = [
  {
    label: "Inprogress",
    value: "Inprogress",
  },
  {
    label: "Schedule",
    value: "Schedule",
  },
  {
    label: "Rejection",
    value: "Rejection",
  },
  {
    label: "Waiting",
    value: "Waiting",
  },
]; 

const Newdrag = () => {
  
   const [value, setValue]=React .useState(0)
const handlesTabs=(e, val)=>{
  console.warn(val)
setValue(val)
}


const itemsFromBackend = [
  { id: uuid(), content: "First task",  title: "JAVA DEVELOPER2", name:"shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { id: uuid(),  content: "First task",  title: "JAVA DEVELOPER", name:"shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth"},
  { id: uuid(),  content: "First task",  title: "JAVA DEVELOPER2", name:"shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth"},
  { id: uuid(),  content: "First task",  title: "JAVA DEVELOPER", name:"shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { id: uuid(),  content: "First task",  title: "JAVA DEVELOPER", name:"shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" }
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Inprogress", 
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "Schedule",
    items: []
  },
  [uuid()]: {
    name: "Rejection",
    items: []
  },
  [uuid()]: {
    name: "Waiting",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

  const [columns, setColumns] = useState(columnsFromBackend);


  const [myimage, setMyImage] = React.useState(null);
  const uploadImage = e => {
    setMyImage(URL.createObjectURL(e.target.files[0]));
  };


  

  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Recruitment </header>
      <DndProvider backend={HTML5Backend}>
        <section  className="main-content-area">
            <div className="main-content-area-inner">
            <div className="sub-head">Candidate Information 
    <div className="top-right-outer add-btn-div">
   <Popupmodal/>   
    </div>
</div>
<div className="recruitment-top-right-box">
<div className="calendar-width">  
                    <input className="form-control" type="date" id="birthday" name="birthday"/>
                </div>
                <div className="calendar-width ">  
                <select id="dropdown" className="form-control"><option value="Status">Status</option></select>
                </div>
                <div className="calendar-width mobile-search-none">  
                    <input className="form-control" type="text" id="birthday" name="birthday" placeholder="Candidate name"/>
                </div>
     
                <div className="search-icon-width mobile-search-none "> 
                      <div className="top-right-outer add-btn-div">
                        <button type="button" class="btn  btn-maincolor btn-block"> <FaSearch className="add-btn-icon"/></button> 
                    
                        </div>               </div>
                        <div className="search-icon-width  mobile-seardh-show"> 
                <div class="search-box add-btn-div ">
			<input type="text" class="search-box-input" placeholder="Candidate name"/>
      <button type="button" class="btn  btn-maincolor search-box-btn"> <FaSearch className="add-btn-icon"/></button> 
		</div> 
  </div>      
              
</div>

  <AppBar position="static"  className="tab-outer-head">
<Tabs value={value}  onChange={handlesTabs} aria-label="icon tabs example" >
<Tab icon={<MdViewQuilt />} aria-label="List" />
<Tab  icon={<MdList />}  aria-label="List" />
<Tab  icon={<MdList />}  aria-label="List" />
<Tab  icon={<MdList />}  aria-label="List" />
<Tab  icon={<MdList />}  aria-label="List" />
<Tab  icon={<MdList />}  aria-label="List" />
<Tab  icon={<MdList />}  aria-label="List" />
<Tab  icon={<MdList />}  aria-label="List" />
</Tabs>
  </AppBar>
  <TabPanel value={value} index={0} >
    <div className="tab-outer-main">
<div  className="mob-show mob-listview-top"> 
<div className="col-md-12">


<div className=" ">
<div  className="candidate-box">
                <div className="card-head-bg">
                    <div className="card-header-styone ">
                    Candidate List View
                    </div>

                  
                    </div>


                    <div className="mo ">  
<div className="listview-mob-top">
<div className="col-2 list-head-font">Name</div>
  <div className="col-2 list-head-font">designation</div>
  <div className="col-1 list-head-font">EXP</div>
  <div className="col-1 list-head-font">CTC</div>
  <div className="col-4 list-head-font">Status</div>
</div>
<div className="listview-mob-top listview-mob-contant">
  <div className="col-2 first-box"> Shanu K K</div>
  <div className="col-2">Java Developer</div>
  <div className="col-1">5Yrs</div>
  <div className="col-1">8LK/A</div>
  <div className="col-4">
  <select className="select-dropdow">
                                  {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                  ))}
                                </select>
  </div>
  </div>
  <div className="listview-mob-top listview-mob-contant">
  <div className="col-2 first-box"> Shanu K K</div>
  <div className="col-2">Java Developer</div>
  <div className="col-1">5Yrs</div>
  <div className="col-1">8LK/A</div>
  <div className="col-4">
  <select className="select-dropdow">
                                  {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                  ))}
                                </select>
  </div>
  </div>
  <div className="listview-mob-top listview-mob-contant">
  <div className="col-2 first-box"> Shanu K K</div>
  <div className="col-2">Java Developer</div>
  <div className="col-1">5Yrs</div>
  <div className="col-1">8LK/A</div>
  <div className="col-4">
  <select className="select-dropdow">
                                  {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                  ))}
                                </select>
  </div>
  </div>


              </div> </div>
              </div>
              </div>

</div>

<div className="tab-outer darg-outer desktop-show">


  
<div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId} className="candidate-boxouter drag-boxs"
            >
              <div className="candidate-box ">
                 <div className="card-head-bg">
                    <div className="card-header-sty">
                    {column.name}</div>

                    <div class="pull-right"><button className="card-header-bt-rigt">40 Items</button></div>
                    </div>
              <div >
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                         
                                                              }}
                        className="darg-inner-box"
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                               className="user-drag-box"
                                  >
                                      <div className="drag-sub-box">
                            <div className="in-progress-card--bt-top">
                            {item.title}
                            </div>
                            <div className=" in-progress-card-bx">
                                <div className="in-progress-name-sty">
                                {item.name}
                                </div>
                                <div className="eye-new-icon">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>

                                </div>
                                </div>
                                <div className="skill-box">
                            {item.Skill}
                            </div>
                            <div className=" in-progress-card-bx">
                                <div className="in-progress-name-thre-colm p-l-0 ">EXP : {item.exp}</div>
                                <div className="in-progress-name-thre-colm  ">CTC :{item.ctc}</div>
                                <div className="in-progress-name-thre-colm b-r-0 ">EXCTC : {item.exctc}</div>
                                </div>
                                <div className=" in-progress-card-bx location-outer border-bottom-0">
                               <div className="in-progress-location ">
                               <img src={location}/>  <span>{item.location}</span> 
                                   </div>
                                   <div class="in-progress-location t-r">
                                   NP: {item.np}
                 </div>
                                </div>

                            </div>
                      
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>  </div>
          );
        })}
      </DragDropContext>
    </div>
  </div>
  </div>
  </TabPanel>
  <TabPanel value={value} index={1}>
  <div className="tab-outer">
<div className="tb-mob-none">
  <Tablecand/>
  </div>

  <div className="accrodion-mob-outer">
  <Accordion preExpanded={"a"}>
      <AccordionItem uuid="a">
        <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Java developer
            <div className="notification-label">
              12
              </div>
            
            </div>
            <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0123</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Skill Set</div>
         <div className="right">HTML, CSS, JavaScript, Figma</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">EXP </div>
         <div className="right">: 4.6 Years</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">CTC </div>
         <div className="right">: 5 LK/A</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">EXP CTC</div>
         <div className="right">: 5 LK/A</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Notice period</div>
         <div className="right">: 2 Month</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Location</div>
         <div className="right">: Kakkanad</div>
        </div>
        <div className="accord-detals-box">
        <div className="accordion-bottom-button">
<div className="more-button">View</div>
<div className="more-button more-outer">Edit</div>
<div className="more-button more-outer">Delete</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="b">
        <AccordionItemHeading className="accordion-inactive-status">
          <AccordionItemButton>  <div className="accordion-head-text">
            <div className="name notificatio-outer">Java developer <div className="notification-label">
              12
              </div></div>
              <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0123</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <div className="accord-detals-box">
         <div className="left">Skill Set</div>
         <div className="right">: HTML, CSS, JavaScript, Figma</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">EXP </div>
         <div className="right">: 4.6 Years</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">CTC </div>
         <div className="right">: 5 LK/A</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">EXP CTC</div>
         <div className="right">: 5 LK/A</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Notice period</div>
         <div className="right">: 2 Month</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Location</div>
         <div className="right">: Kakkanad</div>
        </div>
        <div className="accord-detals-box">
        <div className="accordion-bottom-button">
<div className="more-button">View</div>
<div className="more-button more-outer">Edit</div>
<div className="more-button more-outer">Delete</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="c">
        <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Java developer
            <div className="notification-label">
              12
              </div>
            
            </div>
            <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0123</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Skill Set</div>
         <div className="right">HTML, CSS, JavaScript, Figma</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">EXP </div>
         <div className="right">: 4.6 Years</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">CTC </div>
         <div className="right">: 5 LK/A</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">EXP CTC</div>
         <div className="right">: 5 LK/A</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Notice period</div>
         <div className="right">: 2 Month</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Location</div>
         <div className="right">: Kakkanad</div>
        </div>
        <div className="accord-detals-box">
        <div className="accordion-bottom-button">
<div className="more-button">View</div>
<div className="more-button more-outer">Edit</div>
<div className="more-button more-outer">Delete</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="d">
        <AccordionItemHeading className="accordion-inactive-status">
          <AccordionItemButton>  <div className="accordion-head-text">
            <div className="name notificatio-outer">Java developer <div className="notification-label">
              12
              </div></div>
              <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0123</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <div className="accord-detals-box">
         <div className="left">Skill Set</div>
         <div className="right">: HTML, CSS, JavaScript, Figma</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">EXP </div>
         <div className="right">: 4.6 Years</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">CTC </div>
         <div className="right">: 5 LK/A</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">EXP CTC</div>
         <div className="right">: 5 LK/A</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Notice period</div>
         <div className="right">: 2 Month</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Location</div>
         <div className="right">: Kakkanad</div>
        </div>
        <div className="accord-detals-box">
        <div className="accordion-bottom-button">
<div className="more-button">View</div>
<div className="more-button more-outer">Edit</div>
<div className="more-button more-outer">Delete</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>

      
    </Accordion>
    </div>
    </div>
    </TabPanel>
                

    <TabPanel value={value} index={2}>
    <div className="tab-outer">
      <div className="basic-inform-outer">
<div className="row basic-inform-background ">
<div className="sub-head basic-inform-main-head">Employee List
                                <div className="top-right-outer add-btn-div">
                                    <div className="buttons-outer">
                                        <a href="add" className="blue-button">
                                            <SiAddthis className="add-btn-icon" /> Add Employee
                                        </a>
                                    </div>

                                    <div className="buttons-outer maring-left-15">
                                        <a href="add" className="white-button download-bt">
                                            <MdOutlineFileDownload className="add-btn-icon" /> Download
                                        </a>
                                    </div>

                                    <div className="buttons-outer maring-left-15">
                                        <a href="add" className="white-button  download-bt">
                                            <MdOutlinePrint className="add-btn-icon" /> Print
                                        </a>
                                    </div>

                                </div>
                            </div>
  
  <div className="basic-inform-inner">
<div className="col-md-4">
<div class="form-group"><label for="exampleFormControlInput1">Name</label><input type="email" className="form-control"/></div>
<div class="form-group"><label for="exampleFormControlInput1">Designation</label><input type="email" className="form-control"/></div>
<div class="form-group"><label for="exampleFormControlInput1">Company Email ID</label><input type="email" className="form-control"/></div>
<div class="form-group"><label for="exampleFormControlInput1">Reporting Person</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
<div class="form-group"><label for="exampleFormControlInput1">Employee Code</label><input type="email" className="form-control"/></div>
<div class="form-group"><label for="exampleFormControlInput1">Joining Date</label><input type="email" className="form-control"/></div>
<div class="form-group"><label for="exampleFormControlInput1">Contact Number</label><input type="email" className="form-control"/></div>
<div class="form-group">
<label for="exampleFormControlInput1">Employee Code</label>
<div className="radiobox-outer">
      <Radio name="test">Male</Radio>
      <Radio name="test">Female</Radio>
      </div>
</div>
  </div>

  <div className="col-md-4">
<div className="upload-phot-box">
  <img src={myimage} alt=""/>
         <hr />
      <MultipleImageUpload />
      <div class='file file--upload'>
      <label for='input-file'>
       <img src={uploadicon} alt=""/>
      </label>
      <input type="file" onChange={uploadImage} />
    </div>


   </div>


</div>

<div className="inner-middile-row">
<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Transaction Date</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Effective from</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Position No</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">OU</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Parent OU</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Designation</label><input type="email" className="form-control"/></div>
  </div>

  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Grade</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Grade Band</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Department</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Location</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Country</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Region</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Original Hire Date</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Holiday Calendar</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Reporting Manager</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Functional Manager</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Employee Status</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Employment Status</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Next Status</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Next Status on</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Cost center</label><input type="email" className="form-control"/></div>
  </div>

  <div className="bottom-button-bg">
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
        </div>
  
</div>


  </div>

</div>

        </div>

    </div>
      </TabPanel>
       


      <TabPanel value={value} index={3}>
    <div className="tab-outer">
      <div className="basic-inform-outer">
      <div className="sub-head basic-inform-main-head employee-add-education-head">Personal Info Details
                                <div className="top-right-outer add-btn-div">
                                    <div className="buttons-outer">
                                        <a href="add" className="blue-button">
                                            <SiAddthis className="add-btn-icon" /> Add Education
                                        </a>
                                    </div>
                                </div>
                            </div>

   
<div className="rowinner-middile-row">
<div className="col-md-6 mrg-left-0">
<div className="subhead-background">
  <span>Permanent Address</span>
  <div className="right-edit">
    <a href="">
  <MdEdit/>
  </a>
  </div>
  </div>

<div className="subbody-background">
  <div class="form-group"><label for="exampleFormControlInput1">Address</label><textarea className="form-control" rows="3" spellcheck="false"> </textarea></div>
  <div class="form-group"><label for="exampleFormControlInput1">City</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Zipcode</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Contact Number</label><input className="form-control" type="date" id="" name="birthday"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Home Telephone</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Work Mobile</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Work Telephone</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Extension Number</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Preferred Email Language</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Work Email</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Personal Email</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Personal mobile Number</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Fax Number</label><input className="form-control" type="date" id="" name="birthday"/></div>
  </div>

  </div>
  <div className="col-md-6 mrg-right-0">
  <div className="subhead-background">
  <span>Current Address</span>
  <div className="right-edit">
    <a href="">
  <MdEdit/>
  </a>
  </div>
  </div>

<div className="subbody-background">
  <div class="form-group"><label for="exampleFormControlInput1">Address</label><textarea className="form-control" rows="3" spellcheck="false"> </textarea></div>
  <div class="form-group"><label for="exampleFormControlInput1">City</label><input type="email" className="form-control"/></div>
   <div class="form-group"><label for="exampleFormControlInput1">Zipcode</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Contact Number</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Home Telephone </label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Work Mobile</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Work Telephone</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Extension Number</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Preferred Email Language</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Work Email</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Personal Email</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Personal mobile Number</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Fax Number</label><input type="email" className="form-control"/></div>
  </div>
  </div>

  <div className="col-md-12 mrg-top-30 mrg-left-0 mrg-right-0">
  <div className="subhead-background">
  <span>Emergency Contact Details</span>
  <div className="right-edit">
    <a href="">
  <MdEdit/>
  </a>
  </div>
  </div>

<div className="subbody-background emergency-contact-box">
<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Name</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Relationship</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
   <div class="form-group"><label for="exampleFormControlInput1">Email ID</label><input type="email" className="form-control"/></div>
   </div>
   <div className="col-md-12">
  <div class="form-group"><label for="exampleFormControlInput1">Relationship Addresss</label><input type="email" className="form-control"/></div>
  </div>
   <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Zip Code</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Home Phone</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
   <div class="form-group"><label for="exampleFormControlInput1">Mobile</label><input type="email" className="form-control"/></div>
   </div>
    </div>
  </div>


  
  <div className="col-md-12 mrg-top-30 mrg-left-0 mrg-right-0">
  <div className="subhead-background">
  <span>Physician Contact Details</span>
  <div className="right-edit">
    <a href="">
  <MdEdit/>
  </a>
  </div>
  </div>

<div className="subbody-background emergency-contact-box">
<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Physician Name</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-8">
  <div class="form-group"><label for="exampleFormControlInput1">Physician Address</label><input type="email" className="form-control"/></div>
  </div>
 
   <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Zip Code</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Phone</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
   <div class="form-group"><label for="exampleFormControlInput1">Work Phone</label><input type="email" className="form-control"/></div>
   </div>
    </div>
  </div>

  <div className="bottom-button-bg  mrg-top-30  mrg-left-0 mrg-right-0">
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
        </div>
  


</div>

        </div>

    </div>
      </TabPanel>



      <TabPanel value={value} index={4}>
    <div className="tab-outer">
      <div className="basic-inform-outer">
      <div className="sub-head basic-inform-main-head employee-add-education-head">Employee Information  
                                <div className="top-right-outer add-btn-div">
                                    <div className="buttons-outer">
                                        <a href="add" className="blue-button">
                                            <SiAddthis className="add-btn-icon" /> Add Education
                                        </a>
                                    </div>
                                </div>
                            </div>

<div className="inner-middile-row">
<div className="col-md-6 mrg-left-0">
<div className="subhead-background">
  <span>Employee Details</span>
  <div className="right-edit">
    <a href="">
  <MdEdit/>
  </a>
  </div>
  </div>

<div className="subbody-background">
  <div class="form-group"><label for="exampleFormControlInput1">Title</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Official Name</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Place of Birth</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Date of Birth</label><input className="form-control" type="date" id="" name="birthday"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Country of Birth</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Physically Challenged</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Aadhar No</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Marital Status</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">PAN Number</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Blood Group</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">RH Factor</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Ethnic Code</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Wedding Date</label><input className="form-control" type="date" id="" name="birthday"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Unique Identity</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Disability</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">UAN Number</label><input type="email" className="form-control"/></div>
</div>


<div className="subhead-background mrg-top-30">
  <span>Language Proficiency</span>
  <div className="right-edit">
    <a href="">
  <MdEdit/>
  </a>
  </div>
  </div>

<div className="subbody-background  padding-0">
<div className="col-md-12 leanguage-box">
<div className="left">Language Name</div>
<div className="right">Proficiency</div>

  </div>
<div className="col-md-12 leanguage-content-box">
<label for="exampleFormControlInput1">English</label>
<FormGroup className="col-md-12 checkbox-outer">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Read" className="col-md-3 "/>
      <FormControlLabel  control={<Checkbox />} label="Write"  className="col-md-3 "/>
      <FormControlLabel  control={<Checkbox />} label="Speak "  className="col-md-3 " />
      <FormControlLabel  control={<Checkbox />} label="Native"  className="col-md-3 " />
    </FormGroup>
</div>

<div className="col-md-12 leanguage-content-box">
<label for="exampleFormControlInput1">English</label>
<FormGroup className="col-md-12 checkbox-outer">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Read" className="col-md-3 "/>
      <FormControlLabel  control={<Checkbox />} label="Write"  className="col-md-3 "/>
      <FormControlLabel  control={<Checkbox />} label="Speak "  className="col-md-3 " />
      <FormControlLabel  control={<Checkbox />} label="Native"  className="col-md-3 " />
    </FormGroup>
</div>

<div className="col-md-12 leanguage-content-box">
<label for="exampleFormControlInput1">English</label>
<FormGroup className="col-md-12 checkbox-outer">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Read" className="col-md-3 "/>
      <FormControlLabel  control={<Checkbox />} label="Write"  className="col-md-3 "/>
      <FormControlLabel  control={<Checkbox />} label="Speak "  className="col-md-3 " />
      <FormControlLabel  control={<Checkbox />} label="Native"  className="col-md-3 " />
    </FormGroup>
</div>

<div className="col-md-12 leanguage-content-box">
<label for="exampleFormControlInput1">English</label>
<FormGroup className="col-md-12 checkbox-outer">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Read" className="col-md-3 "/>
      <FormControlLabel  control={<Checkbox />} label="Write"  className="col-md-3 "/>
      <FormControlLabel  control={<Checkbox />} label="Speak "  className="col-md-3 " />
      <FormControlLabel  control={<Checkbox />} label="Native"  className="col-md-3 " />
    </FormGroup>
</div>


</div>

  </div>
  <div className="col-md-6 mrg-right-0">
  <div className="subhead-background">
  <span>Family Details</span>
  <div className="right-edit">
    <a href="">
  <MdEdit/>
  </a>
  </div>
  </div>

<div className="subbody-background">
  <div class="form-group"><label for="exampleFormControlInput1">Relationship</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Name</label><input type="email" className="form-control"/></div>
   <div class="form-group"><label for="exampleFormControlInput1">Date of Birth</label><input className="form-control" type="date" id="" name="birthday"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Gender</label><div className="radiobox-outer family-details ">
      <Radio name="test">Male</Radio>
      <Radio name="test">Female</Radio>
      </div></div>
  <div class="form-group"><label for="exampleFormControlInput1">Dependent </label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Address</label><textarea className="form-control" rows="3" spellcheck="false"> </textarea></div>
  <div class="form-group"><label for="exampleFormControlInput1">Minor</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Guardian Name</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Guardian Address</label><textarea className="form-control" rows="3" spellcheck="false"> </textarea></div>
  <div class="form-group"><label for="exampleFormControlInput1">Guardian Relation with Nominee</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Guardian Contact Number</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Name ad in Passport</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Passport Number</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Insured</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Occupation</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Graduation Date</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">SSN</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Nationality</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Passport Expiry Date</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">Place of Birth</label><input type="email" className="form-control"/></div>
  <div class="form-group"><label for="exampleFormControlInput1">ECNR Required</label><input type="email" className="form-control"/></div>
  <div class="form-group upload-file-bx"><label for="exampleFormControlInput1">Upload</label><input type="file" className="form-control " /></div>
</div>
  </div>

  <div className="bottom-button-bg mrg-left-0 mrg-right-0">
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
        </div>
  
</div>


  </div>



    </div>
      </TabPanel>
      


      <TabPanel value={value} index={5}>
    <div className="tab-outer">
      <div className="basic-inform-outer">
<div className="row basic-inform-background ">
<div className="sub-head basic-inform-main-head">Additional Info
                                <div className="top-right-outer add-btn-div">
                                <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 

                                </div>
                            </div>
  
  <div className="basic-inform-inner">

<div className="inner-middile-row">
<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Shift</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Attendance</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Part/Full Time</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Contract Type</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Contract End</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Notice Period</label><input type="email" className="form-control"/></div>
  </div>

  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Hours per week</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Secretary</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Experience Category</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Mentor</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Weekly Holiday list</label><input type="email" className="form-control"/></div>
  </div>
  </div>
  </div>
 

  <div className="sub-head basic-inform-main-head employee-attach-second-section">Employee Attachment Details</div>
  <div className="basic-inform-inner employee-attach-second-section">

<div className="inner-middile-row">
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Category</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Type</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Comment</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group upload-file-bx"><label for="exampleFormControlInput1">Upload Details</label> <input type="file" className="form-control " />

  </div>
  </div>
      <div className="bottom-button-bg">
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
        </div>
  
</div>


  </div>

</div>

        </div>

    </div>
      </TabPanel>
       

      <TabPanel value={value} index={6}>
    <div className="tab-outer">
      <div className="basic-inform-outer">
<div className="row basic-inform-background ">
<div className="sub-head basic-inform-main-head">Education Details
                                <div className="top-right-outer add-btn-div">
                                <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
                                </div>
                            </div>
  
  <div className="basic-inform-inner">

<div className="inner-middile-row">
<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Type of Establishment</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Name of Establishment</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Discipline</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Year of Passing</label><input className="form-control" type="date" id="" name="birthday"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Grade</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Level</label><input type="email" className="form-control"/></div>
  </div>

  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Subject</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Major Field</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Minor Field</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-4">
  <div class="form-group upload-file-bx"><label for="exampleFormControlInput1">Upload</label><input type="file" className="form-control " /></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Affiliated To</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Address of Institute</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Attended From</label><input className="form-control" type="date" id="" name="birthday"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Attended To</label><input className="form-control" type="date" id="" name="birthday"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Company Sponsored</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Amount</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Reimbursement Date</label><input className="form-control" type="date" id="" name="birthday"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Explain Breaks During Education</label><input type="email" className="form-control"/></div>
  </div>
    <div className="bottom-button-bg">
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
        </div>
  
</div>


  </div>

</div>

        </div>

    </div>
      </TabPanel>


      <TabPanel value={value} index={7}>
    <div className="tab-outer">
      <div className="basic-inform-outer">
<div className="row basic-inform-background ">
<div className="sub-head basic-inform-main-head">Payroll Info
                                <div className="top-right-outer add-btn-div">
                                     <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
                                </div>
                            </div>
  
  <div className="basic-inform-inner">

<div className="inner-middile-row">
<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Salary Hold</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Pay Process Status</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">PF Applicable</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">PF No</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">GL Code</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Pay Mode</label><input type="email" className="form-control"/></div>
  </div>

  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">PT Location</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">PT Applicable</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Applicable ESI</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">ESI Number</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Applied From</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Increment from Date</label><input className="form-control" type="date" id="" name="birthday"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Increment Released Date</label><input className="form-control" type="date" id="" name="birthday"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Pay Group</label><input type="email" className="form-control"/></div>
  </div>
      <div className="bottom-button-bg">
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
        </div>
  
</div>


  </div>

</div>

        </div>

    </div>
      </TabPanel>
          </div>
                  </section>
      </DndProvider>
    </main>
  );
};





export default Newdrag;

const KanbanColumn = ({ status, changeTaskStatus, children }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, status);
    }
  });
  drop(ref);
  return <div ref={ref} className="drag-boxs"> {children}</div>;
};

const KanbanItem = ({ id, children }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { id },
    type: "card",
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  

  const opacity = isDragging ? 0 : 1;
  drag(ref);
  return (
    <div ref={ref} style={{ opacity }}>
      {children}
    </div>
  );
};

function TabPanel(props){
  const {children, value, index}=props;
  return(
    <div>
{
  value===index && (
    <h1>{children}</h1>
  )
}
    </div>
  )
}
import React, { Fragment } from 'react'
import './Employeelisttab.css'; 
import $ from 'jquery';
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import {FaThLarge, FaChartLine, FaTools } from "react-icons/fa";
import {FiAirplay } from "react-icons/fi"; 
import {MdOutlineSchool } from "react-icons/md"; 
import {GiReceiveMoney } from "react-icons/gi";
import {RiFileCloudLine,RiContactsBook2Line, RiFolderUserLine, RiBodyScanFill } from "react-icons/ri";
import Popupmodal from "./Popupmodal";

import 'react-accessible-accordion/dist/fancy-example.css';

import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin, MdEdit, MdOutlineTopic} from "react-icons/md";
import {dashboard,asste,eyeico,location,eyeicoSched,eyeicoreject,eyeicowait,eyenew , uploadimage, uploadicon} from '../../images';
import Radio from "./Radio";
import MultipleImageUpload from "./MultipleImageUpload";
//import CheckboxOut from "./Checkbox";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {BsPersonBadge, BsPersonBoundingBox, BsMenuApp } from "react-icons/bs";
 




export default function Addemployeetab() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var href = $(e.target).attr('href');
    var $curr = $(".process-model  a[href='" + href + "']").parent();
    var $curr = $(".process-model  a[href='" - href - "']").parent();

    $('.process-model li').removeClass();

    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
});


const [myimage, setMyImage] = React.useState(null);
const uploadImage = e => {
  setMyImage(URL.createObjectURL(e.target.files[0]));
};

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const tablist = document.querySelector('[role="tablist"]');

const keys = {
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  enter: 13,
  space: 32
};

const direction = {
  37: -1,
  38: -1,
  39: 1,
  40: 1
};

const deactivateTabs = () => {
  tabs.forEach(tab => {
    tab.setAttribute("tabindex", "-1");
    tab.setAttribute("aria-selected", "false");
  });
};

const activateTab = (tab, setFocus = true) => {
  deactivateTabs();

  tab.removeAttribute("tabindex");
  tab.setAttribute("aria-selected", "true");

  if (setFocus) {
    tab.focus();
  }
};

const focusFirstTab = () => tabs[0].focus();

const focusLastTab = () => tabs[tabs.length - 1].focus();

const switchTabOnArrowPress = (keyCode, target) => {
  const index = tabs.findIndex(tab => tab === target);

  if (direction[keyCode]) {
    if (index !== -1) {
      if (tabs[index + direction[keyCode]]) {
        tabs[index + direction[keyCode]].focus();
      } else if (keyCode === keys.left || keyCode === keys.up) {
        focusLastTab();
      } else if (keyCode === keys.right || keyCode === keys.down) {
        focusFirstTab();
      }
    }
  }
};

const determineOrientation = (keyCode, target) => {
  const vertical = tablist.getAttribute("aria-orientation") === "vertical";
  let proceed = false;

  if (vertical) {
    if (keyCode === keys.up || keyCode === keys.down) {
      proceed = true;
    }
  } else {
    if (keyCode === keys.left || keyCode === keys.right) {
      proceed = true;
    }
  }

  if (proceed) {
    switchTabOnArrowPress(keyCode, target);
  }
};

const handleClick = event => activateTab(event.currentTarget, false);

const handleKeydown = event => {
  switch (event.keyCode) {
    case keys.left:
    case keys.right:
      determineOrientation(event.keyCode, event.currentTarget);
      break;
    case keys.enter:
    case keys.space:
      activateTab(event.currentTarget);
      break;
    default:
      break;
  }
};

const handleKeyup = event => {
  event.preventDefault();

  switch (event.keyCode) {
    case keys.end:
      focusLastTab();
      break;
    case keys.home:
      focusFirstTab();
      break;
    case keys.up:
    case keys.down:
      determineOrientation(event.keyCode, event.currentTarget);
      break;
    default:
      break;
  }
};

tabs.forEach(tab => {
  tab.addEventListener("click", handleClick);
  tab.addEventListener("keydown", handleKeydown);
  tab.addEventListener("keyup", handleKeyup);
});

const setDirection = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
   // tablist.setAttribute("aria-orientation", "vertical");
  } else {
   // tablist.setAttribute("aria-orientation", "horizontal");
  }
};

setDirection();

let timeout = false;

window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(setDirection, 200);
});

    return (
      <main className="inner-content-box">
         <header className="main-otrer-top"> Recruitment </header>
              <section  className="main-content-area">
            <div className="main-content-area-inner">
            <div className="sub-head">Candidate Information 
    <div className="top-right-outer add-btn-div">
   <Popupmodal/>   
    </div>
</div>


        <div>
          <div id="app">
      <div class="tab-module">
        <div class="tab-module__tablist" role="tablist">
          <button class="tab-module__tab sub-line  employee-tab-button"  role="tab" aria-selected="true" aria-controls="colors-tab" id="colors">
          <div className="innver-box"  >
          <MdOutlineTopic className="basic-icon"/>
           <div className="emp-tabhead-txt"> Basic <br/>  Information </div>
           </div>
            
          </button>
          <div class="tab-module__tabcontent" tabindex="0"  role="tabpanel" id="colors-tab" aria-labelledby="colors">
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
          </div>
          <button class="tab-module__tab  sub-line  employee-tab-button" role="tab" aria-selected="false" aria-controls="styles-tab" id="styles" tabindex="-1" >
          <div className="innver-box"  >
              <BsPersonBoundingBox className="personal-icon"/>
              <div className="emp-tabhead-txt"> Personal <br/> Information</div>
              </div>
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="styles-tab" aria-labelledby="styles" >
          <div className="tab-outer empoyee-paddong-lef">
      <div className="basic-inform-outer employee-personal-box-mob">
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

  <div className="col-md-12 mrg-top-30 mrg-left-0 mrg-right-0 employee-mob-full">
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
  <div className="col-md-4 empoloyee-width-full">
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


  
  <div className="col-md-12 mrg-top-30 mrg-left-0 mrg-right-0 employee-mob-full">
  <div className="subhead-background">
  <span>Physician Contact Details</span>
  <div className="right-edit">
    <a href="">
  <MdEdit/>
  </a>
  </div>
  </div>

<div className="subbody-background emergency-contact-box">
<div className="col-md-4 empoloyee-width-full">
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
          </div>
          
          <button class="tab-module__tab sub-line  employee-tab-button" role="tab" aria-selected="false" aria-controls="options-tab" id="options" tabindex="-1" >
          <div className="innver-box"  >
          <BsPersonBadge className="employee-icon "/>
           <div className="emp-tabhead-txt">Employee<br/> Information</div>
           </div>
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="options-tab" aria-labelledby="options" >
          <div className="tab-outer empoyee-paddong-lef">
      <div className="basic-inform-outer employee-personal-box-mob">
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

<div className="subbody-background  padding-0 language-padding">
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
          </div>

          <button class="tab-module__tab sub-line employee-tab-button" role="tab" aria-selected="false" aria-controls="options-tab" id="options" tabindex="-1" >
          <div className="innver-box"  >
          <BsMenuApp className="additional-icon"/>
           <div className="emp-tabhead-txt">Additional<br/>Info</div>
           </div>
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="accesories-tab" aria-labelledby="accesories" >

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
            </div>



          <button class="tab-module__tab  sub-line  employee-tab-button" role="tab" aria-selected="false" aria-controls="accesories-tab" id="accesories" tabindex="-1" >
          <div className="innver-box"  >
          <MdOutlineSchool className="education-icon"/>
           <div className="emp-tabhead-txt"> Education <br/> Info</div>
           </div>
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="accesories-tab" aria-labelledby="accesories" >
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
          </div>
          <button class=" employee-tab-button tab-module__tab " role="tab" aria-selected="false" aria-controls="accesories-tab" id="accesories" tabindex="-1">
            <div className="innver-box"  >
          <GiReceiveMoney className="payroll-icon"/>
           <div className="emp-tabhead-txt"> Payroll<br/>  Info</div>
          </div>
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="accesories-tab" aria-labelledby="accesories" >
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
          </div>
        </div>
      </div>
    </div>  
     
        </div> 
        </div>
            </section>
        </main>
    )
}

import React, { Fragment } from "react";
import "./Employeelisttab.css";
import $ from "jquery";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { FaThLarge, FaChartLine, FaTools } from "react-icons/fa";
import { FiAirplay } from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import {
  RiFileCloudLine,
  RiContactsBook2Line,
  RiFolderUserLine,
  RiBodyScanFill,
} from "react-icons/ri";
import Popupmodal from "./Popupmodal";

import "react-accessible-accordion/dist/fancy-example.css";

import Employeeform from "./includes/Employeeform";
import employee_val from "../validation/employee_val";

import {
  MdOutlineFileDownload,
  MdOutlinePrint,
  MdPhone,
  MdCheck,
  MdLocationPin,
  MdEdit,
  MdOutlineTopic,
} from "react-icons/md";
import {
  dashboard,
  asste,
  eyeico,
  location,
  eyeicoSched,
  eyeicoreject,
  eyeicowait,
  eyenew,
  uploadimage,
  uploadicon,
} from "../../images";
import Radio from "./Radio";
import MultipleImageUpload from "./MultipleImageUpload";
//import CheckboxOut from "./Checkbox";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {BsPersonBadge, BsPersonBoundingBox, BsMenuApp } from "react-icons/bs";

import Personalform from "./Personalform";
import personal_validation from "../validation/personal_validation";
 




export default function Addemployeetab() {
  $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
    var href = $(e.target).attr("href");
    var $curr = $(".process-model  a[href='" + href + "']").parent();
    var $curr = $(".process-model  a[href='" - href - "']").parent();

    $(".process-model li").removeClass();

    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
  });

  

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
    space: 32,
  };

  const direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1,
  };

  const deactivateTabs = () => {
    tabs.forEach((tab) => {
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
    const index = tabs.findIndex((tab) => tab === target);

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

  const handleClick = (event) => activateTab(event.currentTarget, false);

  const handleKeydown = (event) => {
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

  const handleKeyup = (event) => {
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

  tabs.forEach((tab) => {
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

// const {
//   handleChangea,
//   valuesa,
//   handleSubmita,
//   errorsa,
//   optionsa,
// } =  Personalform(personal_validation);

setDirection();
  let timeout = false;

  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(setDirection, 200);
  });

  const { handleChange, values, handleSubmit, errors, options,designation,holidaylist,departments,uploadImage,myimage,employeelocation  } = Employeeform(
    employee_val
  );
  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Recruitment </header>
      <section className="main-content-area">
        <div className="main-content-area-inner">
          <div className="sub-head">
            Candidate Information
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

          <div>
            <div id="app">
              <div class="tab-module">
                <div class="tab-module__tablist" role="tablist">
                  <button
                    class="tab-module__tab sub-line  employee-tab-button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="colors-tab"
                    id="colors"
                  >
                    <div className="innver-box">
                      <MdOutlineTopic className="basic-icon" />
                      <div className="emp-tabhead-txt">
                        {" "}
                        Basic <br /> Information{" "}
                      </div>
                    </div>
                  </button>
                  <div
                    class="tab-module__tabcontent"
                    tabindex="0"
                    role="tabpanel"
                    id="colors-tab"
                    aria-labelledby="colors"
                  >
                    <div className="tab-outer">
                      <div className="basic-inform-outer">
                        <div className="row basic-inform-background ">
                          <div className="sub-head basic-inform-main-head">
                            Employee List
                            <div className="top-right-outer add-btn-div">
                              <button type="button" class="btn  btn-save ">
                                {" "}
                                Save
                              </button>
                              <button type="button" class="btn  btn-cancel ">
                                {" "}
                                Cancel{" "}
                              </button>
                            </div>
                          </div>
                          <form onSubmit={handleSubmit} className="form" noValidate>
                          <div className="basic-inform-inner">
                            <div className="col-md-4">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  name="emp_name"
                                  onChange={handleChange}
                                  value={values.emp_name}
                                  class="form-control"
                                ></input>
                                {errors.emp_name && (
                                  <p className="red-alert">{errors.emp_name}</p>
                                )}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Contact Number
                                </label>
                                <input
                                  type="text"
                                  name="emp_number"
                                  onChange={handleChange}
                                  value={values.emp_number}
                                  class="form-control"
                                ></input>
                                {errors.emp_number && (
                                  <p className="red-alert">
                                    {errors.emp_number}
                                  </p>
                                )}
                              </div>
                               <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Department Name
                                </label>
                                <select
                        id="dropdown"
                        name="emp_department"
                        onChange={handleChange}
                        value={values.emp_department}
                        class="form-control"
                      >
                        <option value="">Select Department name</option>
                        {departments.map(({ department_name, id }, index) => (
                          <option value={id}>{department_name}</option>
                        ))}
                      </select>
                                {errors.emp_joindate && (
                                  <p className="red-alert">
                                    {errors.emp_joindate}
                                  </p>
                                )}
                              </div>
                             

                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Company Email ID
                                </label>
                                <input
                                  type="email"
                                  name="emp_email"
                                  onChange={handleChange}
                                  value={values.emp_email}
                                  class="form-control"
                                ></input>
                                {errors.emp_email && (
                                  <p className="red-alert">
                                    {errors.emp_email}
                                  </p>
                                )}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Reporting Person
                                </label>
                                <input
                                  type="text"
                                  name="emp_reportperson"
                                  onChange={handleChange}
                                  value={values.emp_reportperson}
                                  class="form-control"
                                ></input>
                                {errors.emp_reportperson && (
                                  <p className="red-alert">
                                    {errors.emp_reportperson}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Employee Code
                                </label>
                                <input
                                  type="text"
                                  name="emp_code"
                                  onChange={handleChange}
                                  value={values.emp_code}
                                  class="form-control"
                                ></input>
                                {errors.emp_code && (
                                  <p className="red-alert">{errors.emp_code}</p>
                                )}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Joining Date
                                </label>
                                <input
                                  type="date"
                                  name="emp_joindate"
                                  onChange={handleChange}
                                  value={values.emp_joindate}
                                  class="form-control"
                                ></input>
                                {errors.emp_joindate && (
                                  <p className="red-alert">
                                    {errors.emp_joindate}
                                  </p>
                                )}
                              </div>
                              <div class="form-group">
                              <label>Designation</label>
                                <select
                        id="dropdown"
                        name="emp_desigination"
                        onChange={handleChange}
                        value={values.emp_desigination}
                        class="form-control"
                      >
                        <option value="">Select Designation name</option>
                        {designation.map(({ designation_name, id }, index) => (
                          <option value={id}>{designation_name}</option>
                        ))}
                      </select>
                                
                                {errors.emp_desigination && (
                                  <p className="red-alert">
                                    {errors.emp_desigination}
                                  </p>
                                )}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Employee Gender
                                </label>
                                <div className="radiobox-outer">
                                <input type="radio" value="male" name="emp_gender" onChange={handleChange}  /> Male  <input type="radio" value="female" name="emp_gender" onChange={handleChange}  />  Female
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="upload-phot-box">
                                <img src={myimage} alt="" />
                                <hr />
                                <MultipleImageUpload />
                                <div class="file file--upload">
                                  <label for="input-file">
                                    <img src={uploadicon} alt="" />
                                  </label>
                                  <input type="file" name="profilepic" onChange={uploadImage} />
                                </div>
                              </div>
                            </div>

                            <div className="inner-middile-row">
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Transaction Date
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_teamsactiondate"
                                    onChange={handleChange}
                                    value={values.emp_teamsactiondate}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_teamsactiondate && (
                                    <p className="red-alert">
                                      {errors.emp_teamsactiondate}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Effective from
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_effectivedate"
                                    onChange={handleChange}
                                    value={values.emp_effectivedate}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_effectivedate && (
                                    <p className="red-alert">
                                      {errors.emp_effectivedate}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Position No
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_positionno"
                                    onChange={handleChange}
                                    value={values.emp_positionno}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_positionno && (
                                    <p className="red-alert">
                                      {errors.emp_positionno}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    OU
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_ou"
                                    onChange={handleChange}
                                    value={values.emp_ou}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_ou && (
                                    <p className="red-alert">{errors.emp_ou}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Parent OU
                                  </label>
                                  <input
                                    type="text"
                                    name="parent_ou"
                                    onChange={handleChange}
                                    value={values.parent_ou}
                                    class="form-control"
                                  ></input>
                                  {errors.parent_ou && (
                                    <p className="red-alert">
                                      {errors.parent_ou}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                             

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Grade
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_grade"
                                    onChange={handleChange}
                                    value={values.emp_grade}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_grade && (
                                    <p className="red-alert">
                                      {errors.emp_grade}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Grade Band
                                  </label>
                                  <input
                                    type="text"
                                    name="  emp_grade_band"
                                    onChange={handleChange}
                                    value={values.emp_grade_band}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_grade_band && (
                                    <p className="red-alert">
                                      {errors.emp_grade_band}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Department
                                  </label>
                                  <input
                                    type="text"
                                    name="  emp_department"
                                    onChange={handleChange}
                                    value={values.emp_department}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_department && (
                                    <p className="red-alert">
                                      {errors.emp_department}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Location
                                  </label>
                                  <select
                        id="dropdown"
                        name="emp_location"
                        onChange={handleChange}
                        value={values.emp_location}
                        class="form-control"
                      >
                        <option value="">Select Location name</option>
                        {employeelocation.map(({ branch_location, id }, index) => (
                          <option value={branch_location}>{branch_location}</option>
                        ))}
                      </select>
                                
                                  {errors.emp_location && (
                                    <p className="red-alert">
                                      {errors.emp_location}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Country
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_country"
                                    onChange={handleChange}
                                    value={values.emp_country}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_country && (
                                    <p className="red-alert">
                                      {errors.emp_country}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Region
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_region"
                                    onChange={handleChange}
                                    value={values.emp_region}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_region && (
                                    <p className="red-alert">
                                      {errors.emp_region}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Original Hire Date
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_orginal_hire_date"
                                    onChange={handleChange}
                                    value={values.emp_orginal_hire_date}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_orginal_hire_date && (
                                    <p className="red-alert">
                                      {errors.emp_orginal_hire_date}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label>Holiday Calander</label>
                                <select
                        id="dropdown"
                        name="emp_holiday_calender"
                        onChange={handleChange}
                        value={values.emp_holiday_calender}
                        class="form-control"
                      >
                        <option value="">Select Holiday calander</option>
                        {holidaylist.map(({ hol_calendar_name, id }, index) => (
                          <option value={id}>{hol_calendar_name}</option>
                        ))}
                      </select>
                                 
                                  {errors.emp_holiday_calender && (
                                    <p className="red-alert">
                                      {errors.emp_holiday_calender}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Reporting Manager
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_reporting_manager"
                                    onChange={handleChange}
                                    value={values.emp_reporting_manager}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_reporting_manager && (
                                    <p className="red-alert">
                                      {errors.emp_reporting_manager}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Functional Manager
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_functional_manager"
                                    onChange={handleChange}
                                    value={values.emp_functional_manager}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_functional_manager && (
                                    <p className="red-alert">
                                      {errors.emp_functional_manager}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Employee Status
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_status"
                                    onChange={handleChange}
                                    value={values.emp_status}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_status && (
                                    <p className="red-alert">
                                      {errors.emp_status}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Employment Status
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_employment_status"
                                    onChange={handleChange}
                                    value={values.emp_employment_status}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_employment_status && (
                                    <p className="red-alert">
                                      {errors.emp_employment_status}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Next Status
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_next_status"
                                    onChange={handleChange}
                                    value={values.emp_next_status}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_next_status && (
                                    <p className="red-alert">
                                      {errors.emp_next_status}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Next Status On
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_next_statuson"
                                    onChange={handleChange}
                                    value={values.emp_next_statuson}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_next_statuson && (
                                    <p className="red-alert">
                                      {errors.emp_next_statuson}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Cost Center
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_cost_center"
                                    onChange={handleChange}
                                    value={values.emp_cost_center}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_cost_center && (
                                    <p className="red-alert">
                                      {errors.emp_cost_center}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Previous Experience
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_prev_exp"
                                    onChange={handleChange}
                                    value={values.emp_prev_exp}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_prev_exp && (
                                    <p className="red-alert">
                                      {errors.emp_prev_exp}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Primary Skill
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_primary_skill"
                                    onChange={handleChange}
                                    value={values.emp_primary_skill}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_primary_skill && (
                                    <p className="red-alert">
                                      {errors.emp_primary_skill}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Secondary Skill
                                  </label>
                                  <input
                                    type="text"
                                    name="emp_sec_skill"
                                    onChange={handleChange}
                                    value={values.emp_sec_skill}
                                    class="form-control"
                                  ></input>
                                  {errors.emp_sec_skill && (
                                    <p className="red-alert">
                                      {errors.emp_sec_skill}
                                    </p>
                                  )}{" "}
                                </div>
                              </div>

                              
                                <div className="bottom-button-bg">
                                  <button type="submit" class="btn  btn-save ">
                                    {" "}
                                    Save
                                  </button>
                                  <button
                                    type="button"
                                    class="btn  btn-cancel "
                                  >
                                    {" "}
                                    Cancel{" "}
                                  </button>
                                </div>
                            
                            </div>
                          </div> </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="tab-module__tab  sub-line  employee-tab-button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="styles-tab"
                    id="styles"
                    tabindex="-1"
                  >
                    <div className="innver-box">
                      <BsPersonBoundingBox className="personal-icon" />
                      <div className="emp-tabhead-txt">
                        {" "}
                        Personal <br /> Information
                      </div>
                    </div>
                  </button>
                  <div
                    class="tab-module__tabcontent"
                    tabindex="0"
                    role="tabpanel"
                    id="styles-tab"
                    aria-labelledby="styles"
                  >
                    <div className="tab-outer empoyee-paddong-lef">
                      <div className="basic-inform-outer employee-personal-box-mob">
                        <div className="sub-head basic-inform-main-head employee-add-education-head">
                          Personal Info Details
                          <div className="top-right-outer add-btn-div">
                            <button type="button" class="btn  btn-save ">
                              {" "}
                              Save
                            </button>
                            <button type="button" class="btn  btn-cancel ">
                              {" "}
                              Cancel{" "}
                            </button>
                          </div>
                        </div>

                        <div className="rowinner-middile-row">
                          <div className="col-md-6 mrg-left-0">
                            <div className="subhead-background">
                              <span>Permanent Address</span>
                              <div className="right-edit">
                                <a href="">
                                  <MdEdit />
                                </a>
                              </div>
                            </div>

                            <div className="subbody-background">
                            <div class="form-group"><label for="exampleFormControlInput1">Address</label>
                            <textarea className="form-control" rows="3" spellcheck="false"> </textarea>
  {errors.personal_address && (<p className="red-alert">{errors.personal_address}</p>
   )}{" "}</div>
                              <div class="form-group"> 
                                <label for="exampleFormControlInput1">
                                  City
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_city}
                                ></input>
                                 {errors.personal_city && (<p className="red-alert">{errors.personal_city}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Zipcode
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_zipcode}
                                ></input>
                                 {errors.personal_zipcode && (<p className="red-alert">{errors.personal_zipcode}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Contact Number
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_contactnumber}
                                ></input>
                                 {errors.personal_contactnumber && (<p className="red-alert">{errors.personal_contactnumber}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Home Telephone
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_hometelephone}
                                ></input>
                                 {errors.personal_hometelephone && (<p className="red-alert">{errors.personal_hometelephone}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Work Mobile
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_contactnumber}
                                ></input>
                                 {errors.personal_contactnumber && (<p className="red-alert">{errors.personal_contactnumber}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Work Telephone
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_workmobile}
                                ></input>
                                 {errors.personal_workmobile && (<p className="red-alert">{errors.personal_workmobile}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Extension Number
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_extensionnumber}
                                ></input>
                                 {errors.personal_extensionnumber && (<p className="red-alert">{errors.personal_extensionnumber}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Preferred Email Language
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_preferredemaillanguage}
                                ></input>
                                 {errors.personal_preferredemaillanguage && (<p className="red-alert">{errors.personal_preferredemaillanguage}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Work Email
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_workemail}
                                ></input>
                                 {errors.personal_workemail && (<p className="red-alert">{errors.personal_workemail}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Personal Email
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_personalemail}
                                ></input>
                                 {errors.personal_personalemail && (<p className="red-alert">{errors.personal_personalemail}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Personal mobile Number
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_mobile}
                                ></input>
                                 {errors.personal_mobile && (<p className="red-alert">{errors.personal_mobile}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Fax Number
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_faxnumber}
                                ></input>
                                 {errors.personal_faxnumber && (<p className="red-alert">{errors.personal_faxnumber}</p>
                                 )}{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mrg-right-0">
                            <div className="subhead-background">
                              <span>Current Address</span>
                              <div className="right-edit">
                                <a href="">
                                  <MdEdit />
                                </a>
                              </div>
                            </div>

                            <div className="subbody-background">
                            <div class="form-group"><label for="exampleFormControlInput1">Address</label>
                            <textarea className="form-control" rows="3" spellcheck="false"> </textarea>
  {errors.personal_address && (<p className="red-alert">{errors.personal_address}</p>
   )}{" "}</div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  City
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_city}
                                ></input>
                                 {errors.personal_city && (<p className="red-alert">{errors.personal_city}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Zipcode
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_zipcode}
                                ></input>
                                 {errors.personal_zipcode && (<p className="red-alert">{errors.personal_zipcode}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Contact Number
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_contactnumber}
                                ></input>
                                 {errors.personal_contactnumber && (<p className="red-alert">{errors.personal_contactnumber}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Home Telephone{" "}
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_hometelephone}
                                ></input>
                                 {errors.personal_hometelephone && (<p className="red-alert">{errors.personal_hometelephone}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Work Mobile
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_contactnumber}
                                ></input>
                                 {errors.personal_contactnumber && (<p className="red-alert">{errors.personal_contactnumber}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Work Telephone
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_workmobile}
                                ></input>
                                 {errors.personal_workmobile && (<p className="red-alert">{errors.personal_workmobile}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Extension Number
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_extensionnumber}
                                ></input>
                                 {errors.personal_extensionnumber && (<p className="red-alert">{errors.personal_extensionnumber}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Preferred Email Language
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_preferredemaillanguage}
                                ></input>
                                 {errors.personal_preferredemaillanguage && (<p className="red-alert">{errors.personal_preferredemaillanguage}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Work Email
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_workemail}
                                ></input>
                                 {errors.personal_workemail && (<p className="red-alert">{errors.personal_workemail}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Personal Email
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_personalemail}
                                ></input>
                                 {errors.personal_personalemail && (<p className="red-alert">{errors.personal_personalemail}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Personal mobile Number
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_mobile}
                                ></input>
                                 {errors.personal_mobile && (<p className="red-alert">{errors.personal_mobile}</p>
                                 )}{" "}
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Fax Number
                                </label>
                                <input type="text" className="form-control" onChange ={handleChange} value={values.personal_faxnumber}
                                ></input>
                                 {errors.personal_faxnumber && (<p className="red-alert">{errors.personal_faxnumber}</p>
                                 )}{" "}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 mrg-top-30 mrg-left-0 mrg-right-0 employee-mob-full">
                            <div className="subhead-background">
                              <span>Emergency Contact Details</span>
                              <div className="right-edit">
                                <a href="">
                                  <MdEdit />
                                </a>
                              </div>
                            </div>

                            <div className="subbody-background emergency-contact-box">
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Name
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_name}
                                ></input>
                                 {errors.personal_name && (<p className="red-alert">{errors.personal_name}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Relationship
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_relationship}
                                ></input>
                                 {errors.personal_relationship && (<p className="red-alert">{errors.personal_relationship}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4 empoloyee-width-full">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Email ID
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_emailid}
                                ></input>
                                 {errors.personal_emailid && (<p className="red-alert">{errors.personal_emailid}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Relationship Addresss
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_relationshipaddress}
                                ></input>
                                 {errors.personal_relationshipaddress && (<p className="red-alert">{errors.personal_relationshipaddress}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Zip Code
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_zipcode}
                                ></input>
                                 {errors.personal_zipcode && (<p className="red-alert">{errors.personal_zipcode}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Home Phone
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_homephone}
                                ></input>
                                 {errors.personal_homephone && (<p className="red-alert">{errors.personal_homephone}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Mobile
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_mobile}
                                ></input>
                                 {errors.personal_mobile && (<p className="red-alert">{errors.personal_mobile}</p>
                                 )}{" "}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 mrg-top-30 mrg-left-0 mrg-right-0 employee-mob-full">
                            <div className="subhead-background">
                              <span>Physician Contact Details</span>
                              <div className="right-edit">
                                <a href="">
                                  <MdEdit />
                                </a>
                              </div>
                            </div>

                            <div className="subbody-background emergency-contact-box">
                              <div className="col-md-4 empoloyee-width-full">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Physician Name
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_physicianname}
                                ></input>
                                 {errors.personal_physicianname && (<p className="red-alert">{errors.personal_physicianname}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Physician Address
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_physicianaddress}
                                ></input>
                                 {errors.personal_physicianaddress && (<p className="red-alert">{errors.personal_physicianaddress}</p>
                                 )}{" "}
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Zip Code
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_zipcode}
                                ></input>
                                 {errors.personal_zipcode && (<p className="red-alert">{errors.personal_zipcode}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Phone
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_phone}
                                ></input>
                                 {errors.personal_phone&& (<p className="red-alert">{errors.personal_phone}</p>
                                 )}{" "}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Work Phone
                                  </label>
                                  <input type="text" className="form-control" onChange ={handleChange} value={values.personal_workmobile}
                                ></input>
                                 {errors.personal_workmobile && (<p className="red-alert">{errors.personal_workmobile}</p>
                                 )}{" "}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bottom-button-bg  mrg-top-30  mrg-left-0 mrg-right-0">
                            <button type="button" onClick={handleSubmit} class="btn  btn-save ">
                              {" "}
                              Save
                            </button>
                            <button type="button" class="btn  btn-cancel ">
                              {" "}
                              Cancel{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    class="tab-module__tab sub-line  employee-tab-button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="options-tab"
                    id="options"
                    tabindex="-1"
                  >
                    <div className="innver-box">
                      <BsPersonBadge className="employee-icon " />
                      <div className="emp-tabhead-txt">
                        Employee
                        <br /> Information
                      </div>
                    </div>
                  </button>
                  <div
                    class="tab-module__tabcontent"
                    tabindex="0"
                    role="tabpanel"
                    id="options-tab"
                    aria-labelledby="options"
                  >
                    <div className="tab-outer empoyee-paddong-lef">
                      <div className="basic-inform-outer employee-personal-box-mob">
                        <div className="sub-head basic-inform-main-head employee-add-education-head">
                          Employee Information
                          <div className="top-right-outer add-btn-div">
                            <button type="button" class="btn  btn-save ">
                              {" "}
                              Save
                            </button>
                            <button type="button" class="btn  btn-cancel ">
                              {" "}
                              Cancel{" "}
                            </button>
                          </div>
                        </div>

                        <div className="inner-middile-row">
                          <div className="col-md-6 mrg-left-0">
                            <div className="subhead-background">
                              <span>Employee Details</span>
                              <div className="right-edit">
                                <a href="">
                                  <MdEdit />
                                </a>
                              </div>
                            </div>

                            <div className="subbody-background">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Title
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Official Name
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Place of Birth
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Date of Birth
                                </label>
                                <input
                                  className="form-control"
                                  type="date"
                                  id=""
                                  name="birthday"
                                />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Country of Birth
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Physically Challenged
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Aadhar No
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Marital Status
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  PAN Number
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Blood Group
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  RH Factor
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Ethnic Code
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Wedding Date
                                </label>
                                <input
                                  className="form-control"
                                  type="date"
                                  id=""
                                  name="birthday"
                                />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Unique Identity
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Disability
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  UAN Number
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                            </div>

                            <div className="subhead-background mrg-top-30">
                              <span>Language Proficiency</span>
                              <div className="right-edit">
                                <a href="">
                                  <MdEdit />
                                </a>
                              </div>
                            </div>

                            <div className="subbody-background  padding-0 language-padding">
                              <div className="col-md-12 leanguage-box">
                                <div className="left">Language Name</div>
                                <div className="right">Proficiency</div>
                              </div>
                              <div className="col-md-12 leanguage-content-box">
                                <label for="exampleFormControlInput1">
                                  English
                                </label>
                                <FormGroup className="col-md-12 checkbox-outer">
                                  <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Read"
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Write"
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Speak "
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Native"
                                    className="col-md-3 "
                                  />
                                </FormGroup>
                              </div>

                              <div className="col-md-12 leanguage-content-box">
                                <label for="exampleFormControlInput1">
                                  English
                                </label>
                                <FormGroup className="col-md-12 checkbox-outer">
                                  <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Read"
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Write"
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Speak "
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Native"
                                    className="col-md-3 "
                                  />
                                </FormGroup>
                              </div>

                              <div className="col-md-12 leanguage-content-box">
                                <label for="exampleFormControlInput1">
                                  English
                                </label>
                                <FormGroup className="col-md-12 checkbox-outer">
                                  <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Read"
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Write"
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Speak "
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Native"
                                    className="col-md-3 "
                                  />
                                </FormGroup>
                              </div>

                              <div className="col-md-12 leanguage-content-box">
                                <label for="exampleFormControlInput1">
                                  English
                                </label>
                                <FormGroup className="col-md-12 checkbox-outer">
                                  <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Read"
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Write"
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Speak "
                                    className="col-md-3 "
                                  />
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label="Native"
                                    className="col-md-3 "
                                  />
                                </FormGroup>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mrg-right-0">
                            <div className="subhead-background">
                              <span>Family Details</span>
                              <div className="right-edit">
                                <a href="">
                                  <MdEdit />
                                </a>
                              </div>
                            </div>

                            <div className="subbody-background">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Relationship
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Name
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Date of Birth
                                </label>
                                <input
                                  className="form-control"
                                  type="date"
                                  id=""
                                  name="birthday"
                                />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Gender
                                </label>
                                <div className="radiobox-outer family-details ">
                                  <Radio name="test">Male</Radio>
                                  <Radio name="test">Female</Radio>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Dependent{" "}
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Address
                                </label>
                                <textarea
                                  className="form-control"
                                  rows="3"
                                  spellcheck="false"
                                >
                                  {" "}
                                </textarea>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Minor
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Guardian Name
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Guardian Address
                                </label>
                                <textarea
                                  className="form-control"
                                  rows="3"
                                  spellcheck="false"
                                >
                                  {" "}
                                </textarea>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Guardian Relation with Nominee
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Guardian Contact Number
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Name ad in Passport
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Passport Number
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Insured
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Occupation
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Graduation Date
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  SSN
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Nationality
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Passport Expiry Date
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  Place of Birth
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput1">
                                  ECNR Required
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                              <div class="form-group upload-file-bx">
                                <label for="exampleFormControlInput1">
                                  Upload
                                </label>
                                <input type="file" className="form-control " />
                              </div>
                            </div>
                          </div>

                          <div className="bottom-button-bg mrg-left-0 mrg-right-0">
                            <button type="button" class="btn  btn-save ">
                              {" "}
                              Save
                            </button>
                            <button type="button" class="btn  btn-cancel ">
                              {" "}
                              Cancel{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    class="tab-module__tab sub-line employee-tab-button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="options-tab"
                    id="options"
                    tabindex="-1"
                  >
                    <div className="innver-box">
                      <BsMenuApp className="additional-icon" />
                      <div className="emp-tabhead-txt">
                        Additional
                        <br />
                        Info
                      </div>
                    </div>
                  </button>
                  <div
                    class="tab-module__tabcontent"
                    tabindex="0"
                    role="tabpanel"
                    id="accesories-tab"
                    aria-labelledby="accesories"
                  >
                    <div className="tab-outer">
                      <div className="basic-inform-outer">
                        <div className="row basic-inform-background ">
                          <div className="sub-head basic-inform-main-head">
                            Additional Info
                            <div className="top-right-outer add-btn-div">
                              <button type="button" class="btn  btn-save ">
                                {" "}
                                Save
                              </button>
                              <button type="button" class="btn  btn-cancel ">
                                {" "}
                                Cancel{" "}
                              </button>
                            </div>
                          </div>

                          <div className="basic-inform-inner">
                            <div className="inner-middile-row">
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Shift
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Attendance
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Part/Full Time
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Contract Type
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Contract End
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Notice Period
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Hours per week
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Secretary
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Experience Category
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Mentor
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Weekly Holiday list
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="sub-head basic-inform-main-head employee-attach-second-section">
                            Employee Attachment Details
                          </div>
                          <div className="basic-inform-inner employee-attach-second-section">
                            <div className="inner-middile-row">
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Category
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Type
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Comment
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group upload-file-bx">
                                  <label for="exampleFormControlInput1">
                                    Upload Details
                                  </label>{" "}
                                  <input
                                    type="file"
                                    className="form-control "
                                  />
                                </div>
                              </div>
                              <div className="bottom-button-bg">
                                <button type="button" class="btn  btn-save ">
                                  {" "}
                                  Save
                                </button>
                                <button type="button" class="btn  btn-cancel ">
                                  {" "}
                                  Cancel{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    class="tab-module__tab  sub-line  employee-tab-button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="accesories-tab"
                    id="accesories"
                    tabindex="-1"
                  >
                    <div className="innver-box">
                      <MdOutlineSchool className="education-icon" />
                      <div className="emp-tabhead-txt">
                        {" "}
                        Education <br /> Info
                      </div>
                    </div>
                  </button>
                  <div
                    class="tab-module__tabcontent"
                    tabindex="0"
                    role="tabpanel"
                    id="accesories-tab"
                    aria-labelledby="accesories"
                  >
                    <div className="tab-outer">
                      <div className="basic-inform-outer">
                        <div className="row basic-inform-background ">
                          <div className="sub-head basic-inform-main-head">
                            Education Details
                            <div className="top-right-outer add-btn-div">
                              <button type="button" class="btn  btn-save ">
                                {" "}
                                Save
                              </button>
                              <button type="button" class="btn  btn-cancel ">
                                {" "}
                                Cancel{" "}
                              </button>
                            </div>
                          </div>

                          <div className="basic-inform-inner">
                            <div className="inner-middile-row">
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Type of Establishment
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Name of Establishment
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Discipline
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Year of Passing
                                  </label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    id=""
                                    name="birthday"
                                    
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Grade
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Level
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Subject
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Major Field
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Minor Field
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group upload-file-bx">
                                  <label for="exampleFormControlInput1">
                                    Upload
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control "
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Affiliated To
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Address of Institute
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Attended From
                                  </label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    id=""
                                    name="birthday"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Attended To
                                  </label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    id=""
                                    name="birthday"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Company Sponsored
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Amount
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Reimbursement Date
                                  </label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    id=""
                                    name="birthday"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Explain Breaks During Education
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="bottom-button-bg">
                                <button type="button" class="btn  btn-save ">
                                  {" "}
                                  Save
                                </button>
                                <button type="button" class="btn  btn-cancel ">
                                  {" "}
                                  Cancel{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class=" employee-tab-button tab-module__tab "
                    role="tab"
                    aria-selected="false"
                    aria-controls="accesories-tab"
                    id="accesories"
                    tabindex="-1"
                  >
                    <div className="innver-box">
                      <GiReceiveMoney className="payroll-icon" />
                      <div className="emp-tabhead-txt">
                        {" "}
                        Payroll
                        <br /> Info
                      </div>
                    </div>
                  </button>
                  <div
                    class="tab-module__tabcontent"
                    tabindex="0"
                    role="tabpanel"
                    id="accesories-tab"
                    aria-labelledby="accesories"
                  >
                    <div className="tab-outer">
                      <div className="basic-inform-outer">
                        <div className="row basic-inform-background ">
                          <div className="sub-head basic-inform-main-head">
                            Payroll Info
                            <div className="top-right-outer add-btn-div">
                              <button type="button" class="btn  btn-save ">
                                {" "}
                                Save
                              </button>
                              <button type="button" class="btn  btn-cancel ">
                                {" "}
                                Cancel{" "}
                              </button>
                            </div>
                          </div>

                          <div className="basic-inform-inner">
                            <div className="inner-middile-row">
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Salary Hold
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Pay Process Status
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    PF Applicable
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    PF No
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    GL Code
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Pay Mode
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    PT Location
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    PT Applicable
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Applicable ESI
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    ESI Number
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Applied From
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Increment from Date
                                  </label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    id=""
                                    name="birthday"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Increment Released Date
                                  </label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    id=""
                                    name="birthday"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Pay Group
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="bottom-button-bg">
                                <button type="button" class="btn  btn-save ">
                                  {" "}
                                  Save
                                </button>
                                <button type="button" class="btn  btn-cancel ">
                                  {" "}
                                  Cancel{" "}
                                </button>
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
  );
}

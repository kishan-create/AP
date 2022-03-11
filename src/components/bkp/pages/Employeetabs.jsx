import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Employeetabs.css'; 
import $ from 'jquery';
import Modal from 'react-modal';
import useForm from './useForm';
import validate from '../validation/employee_val';
export default function BasicTabs() {
 
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var href = $(e.target).attr('href');
        var $curr = $(".process-model  a[href='" + href + "']").parent();
    
        $('.process-model li').removeClass();
    
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
    tablist.setAttribute("aria-orientation", "vertical");
  } else {
    tablist.setAttribute("aria-orientation", "horizontal");
  }
};

setDirection();

let timeout = false;

window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(setDirection, 200);
});
const { handleChange1, values, handleSubmit, errors } = useForm(validate);
  return (
    <div>
     

    <div id="app">
      <div class="tab-module m-t-25">
        <div class="tab-module__tablist" role="tablist">
          <button  class="tab-module__tab Candidatedetails-tab" role="tab" aria-selected="true" aria-controls="colors-tab" id="colors" >
            Basic Information
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="colors-tab" aria-labelledby="colors" >
          <div class="row popup-content-height">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Post</label>
                                    <input name="postvalue" onChange={handleChange1} value={values.postvalue} type="text" class="form-control" ></input>
                                </div>
                                {errors.postvalue && <p>{errors.postvalue}</p>}
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Skill Set</label>
                                    <input type="text"  name="skillset" onChange={handleChange1} value={values.skillset} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Personal Email ID </label>
                                    <input type="email" name="p_email"  onChange={handleChange1} value={values.p_email} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Contact Number</label>
                                    <input type="text" onChange={handleChange1}   value={values.phonenumber} name="phonenumber" class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Education</label>
                                    <input type="text" onChange={handleChange1} name="qualification" value={values.qualification} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Total years of experience</label>
                                    <input type="text" onChange={handleChange1} name="exp" value={values.exp} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">CTC</label>
                                    <input type="text" name="ctc" onChange={handleChange1} value={values.ctc} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">EXP CTC</label>
                                    <input type="text" name="expect_ctc" onChange={handleChange1} value={values.expect_ctc} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Notice Period</label>
                                    <input type="text" name="noticeprd" onChange={handleChange1} value={values.noticeprd} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Date Of Birth </label>
                                    <input type="date" name="dob" onChange={handleChange1} value={values.dob} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Location</label>
                                    <input type="text" name="location" onChange={handleChange1} value={values.location} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Current Company</label>
                                    <input type="text" name="current_company"  onChange={handleChange1} value={values.current_company} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Domain Experience</label>
                                    <input type="text" name="domain_exp"  onChange={handleChange1} value={values.domain_exp} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Apply date</label>
                                    <input type="date" name="app_date" onChange={handleChange1} value={values.app_date} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Primary Skills</label>
                                    <textarea class="form-control" onChange={handleChange1} name="primary_skill" value={values.primary_skill} rows="2" > </textarea>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Secondary Skills</label>
                                    <textarea class="form-control" onChange={handleChange1} name="secskill" value={values.secskill} rows="2" > </textarea>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">References</label>
                                    <textarea class="form-control" onChange={handleChange1} name="ref" value={values.ref} rows="2" > </textarea>
                                </div>
                            </div>

                        </div>
                        
                     </div>
          </div>
          <button class="tab-module__tab Candidatedetails-tab" role="tab" aria-selected="false" aria-controls="styles-tab" id="styles" tabindex="-1" >
            Schedule Details
          </button>
              <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="styles-tab" aria-labelledby="styles" >
              <div class="row popup-content-height">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Panel Members</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Interview Date and Time</label>
                                    <input type="date" name="idatetime" onChange={handleChange1} value={values.idatetime} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Interview Place</label>
                                    <input type="text" name="iplace" onChange={handleChange1} value={values.iplace} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Position/Job title</label>
                                    <input type="text" name="jobtitle" onChange={handleChange1} value={values.jobtitle} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Department/team</label>
                                    <input type="text" name="department_team" onChange={handleChange1} value={values.department_team} class="form-control" ></input>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Interview Rating</label>
                                    <input type="text" name="interview_rating" onChange={handleChange1} value={values.interview_rating} class="form-control" ></input>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Comments</label>
                                    <textarea class="form-control"  onChange={handleChange1} name="comments" value={values.comments} rows="3" > </textarea>
                                </div>
                            </div>

                        </div>
                        
                     </div>
              </div>
          <button class="tab-module__tab Candidatedetails-tab" role="tab" aria-selected="false" aria-controls="hardware-tab" id="hardware" tabindex="-1" >
            Rejection Reasons
          </button>
              <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="hardware-tab" aria-labelledby="hardware" >
              <div class="row popup-content-height">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Candidate Status</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Reasons</label>
                                    <input type="text" name="reason" onChange={handleChange1} value={values.reason} class="form-control" ></input>
                                </div>
                            </div>


                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Remark</label>
                                    <textarea class="form-control"  onChange={handleChange1} name="remark" value={values.remark} rows="3" > </textarea>
                                </div>
                            </div>

                        </div>
                        
                     </div>
              </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}
 


import React, { Fragment} from 'react';
import { useState, useEffect } from "react";

import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useForm from './useForm';
import validate from '../validation/employee_val';
import {uploadadd} from '../../images';
import {uploadimage, uploadicon} from '../../images';
import Select from 'react-select';
import MultipleImageUpload from "./MultipleImageUpload";
import Multiselect from "multiselect-react-dropdown";



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs({setColumns}) {
  
  const [value, setValue] = React.useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { handleChange1, values, handleSubmit, errors,getpostName,job,handleImage,onSelect} = useForm(validate,setColumns);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  const [myimage, setMyImage] = React.useState(null);
    const uploadImage = e => {
      setMyImage(URL.createObjectURL(e.target.files[0]));
    };
    const [skill, setSkill] = useState(["PHP", "JAVA", "MYSQL","HTML","PYTHON","JAVASCRIPT","JQUERY"]);
   
  return (



<div>
<div class="row">
<div class="col-md-6 candidate-inform-search">
                            <form class="form-group btn-secondary" >
                                <input type="text" placeholder="Search.." name="search" class="form-control Candidate-search"></input>
                                <button type="submit"><i class="fa fa-search Candidate-search-icon"></i></button>
                                </form>
                            </div>
                            <div class="col-md-6">
                                <div class="top-right-outer add-btn-div">
                                    
                                    <div className="upload-phot-box upload-Candidate">
                                            
                                                  
                                                <div class='file file--upload Candidate-file'>
                                                <label for='input-file'>
                                                <img src={uploadadd} alt=""/>
                                                </label>
                                                <input type="file" name="resume" onChange={uploadadd} />
                                              </div>
                                            </div>
                                </div>
                            </div>
                            </div>
 
    
   <div class="candidate-tab-outer">
  <ul class="nav nav-tabs">
    <li class="active"><a href="#tab1" data-toggle="tab">Basic Information</a></li>  
    <li><a href="#tab2" data-toggle="tab">Schedule Details</a></li>
    <li><a href="#tab3" data-toggle="tab">Rejection Reasons</a></li>
  </ul>
  <form onSubmit={handleSubmit} className='form' noValidate encType="multipart/form-data">
  <div class="tab-content">
    <div class="tab-pane active" id="tab1">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">
            Basic Information
            </a>
          </h4>
        </div>
        <input type="file" accept='.doc,.docx,application/pdf' name="resume" onChange={handleImage} class="form-control"/>
        <div id="collapseOne" class="panel-collapse collapse in">
          <div class="panel-body">
          <div class="row popup-content-height popup-row-mrg  candiate-modal-inner-tab">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" name="username" onChange={handleChange1} value={values.username} class="form-control" ></input>
                            </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Post</label>
                                   
                                    <select id = "postvalue" name="postvalue" onChange={handleChange1} value={values.postvalue} class="form-control">
                                <option value="">Select Job name</option>
                                {job.map(({ post_name , id }, index) => 
                                <option value={post_name} >{post_name}</option>
                                )} 
 </select>
                                    {errors.postvalue && <p>{errors.postvalue}</p>}
                                </div>
                               
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Skill Set</label>

                                    <Multiselect
        isObject={false}
        onRemove={(event) => {
         // console.log(event);
        }}
        onSelect={onSelect}
        options={skill}
       
        showCheckbox
        name="skillset"
      
      />
                                   
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
                                    <Multiselect
        isObject={false}
        onRemove={(event) => {
         // console.log(event);
        }}
        onSelect={onSelect}
        options={skill}
       
        showCheckbox
        name="primary_skill"
      
      />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Secondary Skills</label>
                                    <Multiselect
        isObject={false}
        onRemove={(event) => {
         // console.log(event);
        }}
        onSelect={onSelect}
        options={skill}
       
        showCheckbox
        name="secskill"
      
      />
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
      </div>
    </div>
    <div class="tab-pane" id="tab2">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseTwo">
            Schedule Details
            </a>
          </h4>
        </div>
        <div id="collapseTwo" class="panel-collapse collapse">
          <div class="panel-body">
          <div class="row popup-content-height popup-row-mrg  candiate-modal-inner-tab">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Panel Members</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                            
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
                                 
                                    <select id = "dropdown" name="jobtitle" onChange={handleChange1} value={values.jobtitle} class="form-control">
                                <option value="">Select Job name</option>
                                {job.map(({ post_name , id }, index) => 
                                <option value={id} >{post_name}</option>
                                )} 
 </select>
                                  
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
      </div>
    </div>
    <div class="tab-pane" id="tab3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseThree">
            Rejection Reasons
            </a>
          </h4>
        </div>
        <div id="collapseThree" class="panel-collapse collapse">
          <div class="panel-body">
          <div class="row popup-content-height popup-row-mrg  candiate-modal-inner-tab">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Candidate Status</label>
                                <input type="email" class="form-control" ></input>
                            </div>
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
<div class="">
            <button type="submit" class="btn  btn-save "  > Save</button>
        
        </div>
 </form>
</div> </div>
  )
}


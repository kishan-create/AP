import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SliderValueLabelUnstyled } from '@mui/core';
import useForm from './useForm';
import validate from '../validation/employee_val';
import { ErrorSharp } from '@material-ui/icons';
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
export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { handleChange1, values, handleSubmit, errors } = useForm(validate);
    return (

        <div>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Basic Information" {...a11yProps(0)} />
                            <Tab label="Schedule Details" {...a11yProps(1)} />
                            <Tab label="Rejection Reasons" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div className="row popup-content-height">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input name="username" onChange={handleChange1} value={values.username} type="text" className="form-control" ></input>
                                    {errors.username && <p>{errors.username}</p>}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Post</label>
                                    <input name="postvalue" onChange={handleChange1} value={values.postvalue} type="text" className="form-control" ></input>
                                </div>
                                {errors.postvalue && <p>{errors.postvalue}</p>}
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Skill Set</label>
                                    <input type="text"  name="skillset" onChange={handleChange1} value={values.skillset} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Personal Email ID </label>
                                    <input type="email" name="p_email"  onChange={handleChange1} value={values.p_email} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Contact Number</label>
                                    <input type="text" onChange={handleChange1}   value={values.phonenumber} name="phonenumber" className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Education</label>
                                    <input type="text" onChange={handleChange1} name="qualification" value={values.qualification} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Total years of experience</label>
                                    <input type="text" onChange={handleChange1} name="exp" value={values.exp} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">CTC</label>
                                    <input type="text" name="ctc" onChange={handleChange1} value={values.ctc} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">EXP CTC</label>
                                    <input type="text" name="expect_ctc" onChange={handleChange1} value={values.expect_ctc} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Notice Period</label>
                                    <input type="text" name="noticeprd" onChange={handleChange1} value={values.noticeprd} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Date Of Birth </label>
                                    <input type="date" name="dob" onChange={handleChange1} value={values.dob} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Location</label>
                                    <input type="text" name="location" onChange={handleChange1} value={values.location} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Current Company</label>
                                    <input type="text" name="current_company"  onChange={handleChange1} value={values.current_company} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    {/* <label for="exampleFormControlInput1">Domain Experience</label> */}
                                    <input type="text" name="domain_exp"  onChange={handleChange1} value={values.domain_exp} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Apply date</label>
                                    <input type="date" name="app_date" onChange={handleChange1} value={values.app_date} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Primary Skills</label>
                                    <textarea className="form-control" onChange={handleChange1} name="primary_skill" value={values.primary_skill} rows="2" > </textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Secondary Skills</label>
                                    <textarea className="form-control" onChange={handleChange1} name="secskill" value={values.secskill} rows="2" > </textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">References</label>
                                    <textarea className="form-control" onChange={handleChange1} name="ref" value={values.ref} rows="2" > </textarea>
                                </div>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row popup-content-height">

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Panel Members</label>
                                    <input type="text" name="p_members" onChange={handleChange1}   value={values.p_members} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Interview Date and Time</label>
                                    <input type="date" name="idatetime" onChange={handleChange1} value={values.idatetime} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Interview Place</label>
                                    <input type="text" name="iplace" onChange={handleChange1} value={values.iplace} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Position/Job title</label>
                                    <input type="text" name="jobtitle" onChange={handleChange1} value={values.jobtitle} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Department/team</label>
                                    <input type="text" name="department_team" onChange={handleChange1} value={values.department_team} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Interview Rating</label>
                                    <input type="text" name="interview_rating" onChange={handleChange1} value={values.interview_rating} className="form-control" ></input>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Comments</label>
                                    <textarea className="form-control"  onChange={handleChange1} name="comments" value={values.comments} rows="3" > </textarea>
                                </div>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="row popup-content-height">

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Candidate Status</label>
                                    <input type="text" name="c_status" onChange={handleChange1} value={values.c_status} className="form-control" ></input>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Reasons</label>
                                    <input type="text" name="reason" onChange={handleChange1} value={values.reason} className="form-control" ></input>
                                </div>
                            </div>


                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Remark</label>
                                    <textarea className="form-control"  onChange={handleChange1} name="remark" value={values.remark} rows="3" > </textarea>
                                </div>
                            </div>

                        </div>
                    </TabPanel>

                </Box>
                <div>

                    <button type="submit" className="btn  btn-save "  > Save</button>
                    <button type="button" className="btn  btn-cancel "  > Cancel </button>
                </div>

            </form>
        </div>
    )
}


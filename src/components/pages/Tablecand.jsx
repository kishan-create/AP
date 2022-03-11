import React,{ useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";
import axios from 'axios';
import Modal from 'react-modal';
import TableCandValidation from "./TableCandValidation";

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

let id = 0;
function createData(name, post, skillset, exp, ctc, expctc, noticeperiod, location, status, action) {
  id += 1;
  return { id, name, post, skillset, exp, ctc, expctc, noticeperiod, location, status, action };
}

const data = [
  createData('Anil Kumar1', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  
];

function SimpleTable(props) {
  const [candidatelist, SetCandidatelist] = useState([]);
  const { classes } = props;
  useEffect(() => {
    loadCandidates();
    
  }, []);
  const loadCandidates = async() =>
  {
    const res = await fetch('http://localhost:8000/api/getcandidatesdetails');
    const data = await res.json();
    const candidates = data.candidate;
    SetCandidatelist(candidates);
  }
  //console.log(candidatelist);
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { handleChange1, values, handleSubmit, errors,getpostName,job,deleteCandidate } = TableCandValidation(setIsOpen);
  console.log(values);
  const editCandidates = async(id,e) => {
    const can_id=id;
     const response = await axios.get(`http://localhost:8000/getCandidatefullDetails/${can_id}`);
     console.log(response.data.candidate);
     if (response.data.status == 200) {
      values.username=response.data.candidate[0].name;
      values.postvalue=response.data.candidate[0].post;
      values.skillset=response.data.candidate[0].skillset;
      values.p_email=response.data.candidate[0].email;
      values.phonenumber=response.data.candidate[0].contact_number;
      values.qualification=response.data.candidate[0].education;
      values.exp=response.data.candidate[0].total_exp;
      values.ctc=response.data.candidate[0].ctc;
      values.expect_ctc=response.data.candidate[0].exp_ctc;
      values.noticeprd=response.data.candidate[0].notice_prd;
      values.dob=response.data.candidate[0].dob;
      values.location=response.data.candidate[0].location;
      values.current_company=response.data.candidate[0].c_company;
      values.domain_exp=response.data.candidate[0].domain_exp;
      values.app_date=response.data.candidate[0].applied_date;
      values.primary_skill=response.data.candidate[0].primary_skill;
      values.skillset=response.data.candidate[0].sec_skill;
      values.ref=response.data.candidate[0].ref;
      values.p_members=response.data.candidate[0].panelmembers;
      values.idatetime=response.data.candidate[0].interview_time;
      values.jobtitle=response.data.candidate[0].job_title;
      values.department_team=response.data.candidate[0].department;
      values.interview_rating=response.data.candidate[0].rating;
      values.comments=response.data.candidate[0].commemts;
      values.c_status=response.data.candidate[0].c_status;
      values.panel_members=response.data.candidate[0].panelmembers;
      values.iplace=response.data.candidate[0].i_place;
      values.reason=response.data.candidate[0].reasons;
       values.secskill=response.data.candidate[0].sec_skill;
      values.remark=response.data.candidate[0].remark;
      values.id=response.data.candidate[0].id;

   }
   setIsOpen(true);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal" className="candiate-modal-bx">
           <div class="candidate-tab-outer">
  <ul class="nav nav-tabs">
    <li class="active"><a href="#tab1" data-toggle="tab">Basic Information</a></li>  
    <li><a href="#tab2" data-toggle="tab">Schedule Details</a></li>
    <li><a href="#tab3" data-toggle="tab">Rejection Reasons</a></li>
  </ul>
  <form onSubmit={handleSubmit} className='form' noValidate>
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
                                    <input name="postvalue" onChange={handleChange1} value={values.postvalue} type="text" class="form-control" ></input>
                                  
                                </div>
                               
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
                            <input type="hidden"  name="id" onChange={handleChange1} value={values.id} class="form-control" ></input>
                      
                        
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
                                <input type="text" name="panel_members" onChange={handleChange1} value={values.panel_members} class="form-control" ></input>
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
                                <input type="text" name="c_status" onChange={handleChange1} value={values.c_status} class="form-control" ></input>
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
<div>
            <button type="submit" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal}  > Cancel </button> 
        </div>
 </form>
</div>
        </Modal>
    <Paper className="recruitment-table-outer">
      <Table className="recruitment-tabele">
        <TableHead>
        <TableRow>
            <TableCell className="width-15">Name1</TableCell>
            <TableCell className="width-12">Post</TableCell>
            <TableCell className="width-15">Skill set</TableCell>
            <TableCell className="width-8">Exp</TableCell>
            <TableCell className="width-8">CTC</TableCell>
            <TableCell className="width-8">EXP CTC</TableCell>
            <TableCell className="width-10">Notice period</TableCell>
            <TableCell className="width-10">Location</TableCell>
            <TableCell className="width-8">Status</TableCell>
            <TableCell className="width-8">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidatelist.map(n => {
            return (
              <TableRow key={n.id}>
              <TableCell  className="width-15">
                {n.name}
              </TableCell>
              <TableCell numeric className="width-12">{n.post}</TableCell>
              <TableCell numeric className=" width-15">{n.skillset}</TableCell>
              <TableCell numeric className="width-8">{n.total_exp}</TableCell>
              <TableCell numeric className="width-8">{n.ctc}</TableCell>
              <TableCell numeric className="width-8">{n.exp_ctc}</TableCell>
              <TableCell numeric className="width-10">{n.notice_prd}</TableCell>
              <TableCell numeric className="width-10">{n.location}</TableCell>
              <TableCell numeric className="width-8 inprogress-td">
              <div className ="inprograss-style">{n.status}</div>
              </TableCell>
              <TableCell numeric className="width-8">
                <div className="action-outer">
             
                <div className="eye-new-icon inprogress ">
                                <svg width="14" height="8" onClick={() => editCandidates(n.id)} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
                                </div>
<div className="delete-icon">
<svg width="7"  onClick={(e) => deleteCandidate(e, n.id)} height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.242676 0.31216H2.19897V0.261343C2.19897 0.117019 2.30763 0 2.44165 0H4.43799C4.57201 0 4.68067 0.117019 4.68067 0.261343V0.31216H6.63696C6.77098 0.31216 6.87964 0.429179 6.87964 0.573503V1.60566C6.87964 1.74998 6.77098 1.867 6.63696 1.867H0.242676C0.108661 1.867 0 1.74998 0 1.60566V0.573503C0 0.429179 0.108661 0.31216 0.242676 0.31216Z" fill="#EB140A"/>
<path d="M0.607288 2.39648H6.27234C6.40635 2.39648 6.51501 2.5135 6.51501 2.65783V9.49013C6.51501 9.63445 6.40635 9.75147 6.27234 9.75147H0.607288C0.473274 9.75147 0.364613 9.63445 0.364613 9.49013V2.65783C0.364613 2.5135 0.473274 2.39648 0.607288 2.39648ZM4.59252 8.81099C4.59252 8.95531 4.70118 9.07233 4.8352 9.07233H5.06107C5.19509 9.07233 5.30375 8.95531 5.30375 8.81099V3.33697C5.30375 3.19265 5.19509 3.07563 5.06107 3.07563H4.8352C4.70118 3.07563 4.59252 3.19265 4.59252 3.33697V8.81099ZM3.08415 8.81099C3.08415 8.95531 3.19281 9.07233 3.32683 9.07233H3.5527C3.68672 9.07233 3.79538 8.95531 3.79538 8.81099V3.33697C3.79538 3.19265 3.68672 3.07563 3.5527 3.07563H3.32683C3.19281 3.07563 3.08415 3.19265 3.08415 3.33697V8.81099ZM1.57588 8.81099C1.57588 8.95531 1.68454 9.07233 1.81855 9.07233H2.04443C2.17844 9.07233 2.2871 8.95531 2.2871 8.81099V3.33697C2.2871 3.19265 2.17844 3.07563 2.04443 3.07563H1.81855C1.68454 3.07563 1.57588 3.19265 1.57588 3.33697V8.81099Z" fill="#EB140A"/>
</svg>
</div>


                                </div>
                 
                {n.action}</TableCell>
            </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination className="pagenation-outer"
        component="nav"
        page={0}
        rowsPerPage={10}
        count={100}
        onChangePage={() => {}}
      />
       </Paper>
       </div>
       
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(SimpleTable);


import React, { useEffect, useState } from "react"
import { DndProvider, useDrag, useDrop } from "react-dnd";
import Modal from 'react-modal';
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Jobdetailsmodal from "./Jobdetailsmodal";
import { location } from '../../images';
import { profilei } from '../../images/profilei.svg';
import axios from 'axios';
import swal from 'sweetalert';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { getLocationOrigin } from "next/dist/shared/lib/utils";
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
function createData(jobid, post, skillset, exp, openings, location, posteddate, postclose, description, action) {
  id += 1;
  return { id, jobid, post, skillset, exp, openings, location, posteddate, postclose, description, action };
}

const data = [
  createData('000', 'Java developer', 'Java, Spring', '10 Years', '12', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0224', 'Java developer', 'Java, Spring', '09 Years', '05', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0123', 'Java developer', 'Java, Spring', '03 Years', '06', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0125', 'Java developer', 'Java, Spring', '05 Years', '03', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0123', 'Java developer', 'Java, Spring', '12 Years', '15', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0127', 'Java developer', 'Java, Spring', '13 Years', '08', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),

];

export default function Job(props) {
  const [joblist, SetJoblist] = useState([]);
  const [location, SetLocation] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [postvalues, SetPostvalues] = useState([]);
  const [values, SetValues] = useState({
    job_id: '',
    job_post: '',
    job_skillset: '',
    job_openings: '',
    job_experience: '',
    job_status: '',
    job_date_open: '',
    job_date_close: '',
    job_location: '',
    job_description: ''
  });
  const handleChange = e => {
    const { name, value } = e.target
    SetValues({
      ...values,
      [name]: value,
    })
  };

  useEffect(() => {
    loadJobs();
    getPostname();
    getLocation();
  }, []);
  const loadJobs = async () => {
    const res = await fetch("http://localhost:8000/api/getJobs");
    const data = await res.json();
    const list = data.job;
    SetJoblist(list);


  }
  const getLocation = async () => {
    const res = await fetch("http://localhost:8000/api/getLocationBranch");
    const data = await res.json();
    const list = data.location;
    SetLocation(list);


  }
  const getPostname = async () => {
    const response = await fetch("http://localhost:8000/api/getposttype");
    const data = await response.json();
    const list = data.post;
    SetPostvalues(list);
  }
  const Edit_job = async (id) => {
    const job_id = id;
    const reponse = await axios.get(`http://localhost:8000/api/editfecthjobdata/${job_id}`)
    console.log(reponse.data.job[0]);
    if (reponse.data.status == 200) {
      SetValues({
        job_id: reponse.data.job[0].job_id,
        job_post: reponse.data.job[0].job_post,
        job_skillset: reponse.data.job[0].job_skillset,
        job_openings: reponse.data.job[0].job_openings,
        job_experience: reponse.data.job[0].job_experience,
        job_status: reponse.data.job[0].job_status,
        job_date_open: reponse.data.job[0].job_date_open,
        job_date_close: reponse.data.job[0].job_date_close,
        job_location: reponse.data.job[0].job_location,
        job_description: reponse.data.job[0].job_description,
        id: reponse.data.job[0].id,
      })
      setIsOpen(true);
    }
  }
  const updateOrganization = async (e) => {
    e.preventDefault();
    const res = await axios.put('http://localhost:8000/api/update_job', values);
    if (res.data.status == 200) {
      swal({
        title: "Good job!",
        text: "Job Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  }
  const { classes } = props;

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }
 
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal" >
        <form onSubmit={updateOrganization} className='form' noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 className="popup-head-h4"> Edit Job Settings</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row">
              <div class="col-md-12">
                <div class="row popup-content-height">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Job ID</label>
                      <input type="text" name="job_id" onChange={handleChange} value={values.job_id} class="form-control" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Post</label>
                      <select id="dropdown" name="job_post" onChange={handleChange} value={values.job_post} class="form-control">
                        <option value="">Select Post</option>
                        {postvalues.map(({ post_name, id }, index) =>
                          <option value={id} >{post_name}</option>
                        )}

                      </select>

                    </div>

                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Skill Set</label>
                      <input type="text" name="job_skillset" onChange={handleChange} value={values.job_skillset} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">experience</label>
                      <input type="text" name="job_experience" onChange={handleChange} value={values.job_experience} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Openings</label>
                      <input type="email" name="job_openings" onChange={handleChange} value={values.job_openings} class="form-control" ></input>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Status</label>
                      <select id="dropdown" name="job_status" onChange={handleChange} value={values.job_status} class="form-control">
                        <option value="">Choose status</option>

                        <option value="1">open</option>
                        <option value="0">close</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Date open</label>
                      <input type="date" name="job_date_open" onChange={handleChange} value={values.job_date_open} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">date close</label>
                      <input type="date" name="job_date_close" onChange={handleChange} value={values.job_date_close} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4 mob-full">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Location</label>
                      <input type="text" name="job_location" onChange={handleChange} value={values.job_location} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">description</label>
                      <input type="email" name="job_description" onChange={handleChange} value={values.job_description} class="form-control" ></input>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <input type="hidden" name="id" value={values.id} />
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal} > Cancel </button>
          </div>


        </form>
      </Modal>
      <main className="inner-content-box">
        <header className="main-otrer-top"> Job </header>
        <DndProvider backend={HTML5Backend}>
          <section className="main-content-area">
            <div className="main-content-area-inner">
              <div className="sub-head"> Job Openings
                <div className="top-right-outer add-btn-div">
                  <Jobdetailsmodal location={location} method={loadJobs}/>

                </div>
              </div>

              <div className="col-md-12 job-main-tb-outer">
                <Paper className="recruitment-table-outer job-outer job-new-outer">
                  <Table className="recruitment-tabele">
                    <TableHead>

                      <TableRow>

                        <TableCell className="width-8">Job ID</TableCell>
                        <TableCell className="width-12">Post</TableCell>
                        <TableCell className="width-15">Skill Set</TableCell>
                        <TableCell className="width-8">Exp</TableCell>
                        <TableCell className="width-8">Openings</TableCell>
                        <TableCell className="width-8">Location</TableCell>
                        <TableCell className="width-10">Posted Date </TableCell>
                        <TableCell className="width-10">Post Close</TableCell>
                        <TableCell className="width-15">Description</TableCell>
                        <TableCell className="width-12">Status</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {joblist.map(n => {
                        return (
                          <TableRow key={n.id} >
                            <TableCell className="width-8"> {n.id}</TableCell>
                            <TableCell numeric className="width-12">{n.post_name}</TableCell>
                            <TableCell numeric className=" width-15">{n.job_skillset} </TableCell>
                            <TableCell numeric className="width-8">{n.job_experience}</TableCell>
                            <TableCell numeric className="width-8">{n.job_openings} </TableCell>
                            <TableCell numeric className="width-8">{n.job_location}</TableCell>
                            <TableCell numeric className="width-10">{n.job_date_open}</TableCell>
                            <TableCell numeric className="width-10">{n.job_date_close}</TableCell>

                            <TableCell numeric className="width-15"> {n.job_description}
                            </TableCell>
                            <TableCell numeric className="width-12 inprogress-td">
                              <div className="inprograss-style">Active</div>
                              <button onClick={() => Edit_job(n.id)} className="job-edit-icon"> <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z" fill="#4A54D1" />
                                                            <path d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z" fill="#4A54D1" />
                                                        </svg></button>
                            </TableCell>
                          </TableRow>

                        );
                      })}



                    </TableBody>
                  </Table>

                </Paper>
              </div>

              <div className="accrodion-mob-outer">
                <Accordion preExpanded={"a"} className="job-accrodion">
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
                            <img src={location} />
                            <span>Kakkanad</span>
                          </div>
                        </div>   <div className="col-4 acc-status-change">
                          <div class="active-status-style">0123</div>
                        </div></AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="accord-detals-box">
                        <div className="left">Job ID</div>
                        <div className="right">123</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Skill Set </div>
                        <div className="right">HTML, CSS, JavaScript, Figma</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Exp </div>
                        <div className="right">10 Years</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Posted Date</div>
                        <div className="right">20-10-2021</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Post Close</div>
                        <div className="right">10-11-2021</div>
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
                          <img src={location} />
                          <span>Kakkanad</span>
                        </div>
                      </div>   <div className="col-4 acc-status-change">
                          <div class="active-status-style">0123</div>
                        </div></AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="accord-detals-box">
                        <div className="left">Job ID</div>
                        <div className="right">1234</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Skill Set </div>
                        <div className="right">HTML, CSS, JavaScript, Figma</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Exp </div>
                        <div className="right">10 Years</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Posted Date</div>
                        <div className="right">20-10-2021</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Post Close</div>
                        <div className="right">10-11-2021</div>
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
                            <img src={location} />
                            <span>Kakkanad</span>
                          </div>
                        </div>   <div className="col-4 acc-status-change">
                          <div class="active-status-style">0123</div>
                        </div></AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="accord-detals-box">
                        <div className="left">Job ID</div>
                        <div className="right">123</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Skill Set </div>
                        <div className="right">HTML, CSS, JavaScript, Figma</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Exp </div>
                        <div className="right">10 Years</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Posted Date</div>
                        <div className="right">20-10-2021</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Post Close</div>
                        <div className="right">10-11-2021</div>
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
                          <img src={location} />
                          <span>Kakkanad</span>
                        </div>
                      </div>   <div className="col-4 acc-status-change">
                          <div class="active-status-style">0123</div>
                        </div></AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="accord-detals-box">
                        <div className="left">Job ID</div>
                        <div className="right">1234</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Skill Set </div>
                        <div className="right">HTML, CSS, JavaScript, Figma</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Exp </div>
                        <div className="right">10 Years</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Posted Date</div>
                        <div className="right">20-10-2021</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Post Close</div>
                        <div className="right">10-11-2021</div>
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
          </section>
        </DndProvider>
      </main>
    </div>
  )
}

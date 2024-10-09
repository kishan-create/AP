import React, { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import Modal from "react-modal";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Multiselect from "multiselect-react-dropdown";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Jobdetailsmodal from "./Jobdetailsmodal";
import { location } from "../../images";
import { profilei } from "../../images/profilei.svg";
import axios from "axios";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Togbtn from "./Togbtn";
import Multidropselect from "./Multidropselect";
import Jobswitchbuttons from "./Jobswitchbuttons";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { getLocationOrigin } from "next/dist/shared/lib/utils";
const styles = (theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing.unit * 3,
    overflowX: "hide",
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
});

 

let id = 0;
function createData(
  jobid,
  post,
  skillset,
  exp,
  openings,
  location,
  posteddate,
  postclose,
  description,
  action
) {
  id += 1;
  return {
    id,
    jobid,
    post,
    skillset,
    exp,
    openings,
    location,
    posteddate,
    postclose,
    description,
    action,
  };
}


const data = [
  createData(
    "000",
    "Java developer",
    "Java, Spring",
    "10 Years",
    "12",
    "Kakkanad",
    "20-10-2021",
    "10-11-2021",
    "description",
    ""
  ),
  createData(
    "0224",
    "Java developer",
    "Java, Spring",
    "09 Years",
    "05",
    "Kakkanad",
    "20-10-2021",
    "10-11-2021",
    "description",
    ""
  ),
  createData(
    "0123",
    "Java developer",
    "Java, Spring",
    "03 Years",
    "06",
    "Kakkanad",
    "20-10-2021",
    "10-11-2021",
    "description",
    ""
  ),
  createData(
    "0125",
    "Java developer",
    "Java, Spring",
    "05 Years",
    "03",
    "Kakkanad",
    "20-10-2021",
    "10-11-2021",
    "description",
    ""
  ),
  createData(
    "0123",
    "Java developer",
    "Java, Spring",
    "12 Years",
    "15",
    "Kakkanad",
    "20-10-2021",
    "10-11-2021",
    "description",
    ""
  ),
  createData(
    "0127",
    "Java developer",
    "Java, Spring",
    "13 Years",
    "08",
    "Kakkanad",
    "20-10-2021",
    "10-11-2021",
    "description",
    ""
  ),
];



export default function Job(props) {
  const [joblist, SetJoblist] = useState([]);
  const [location, SetLocation] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [vmodalIsOpen, vsetIsOpen] = React.useState(false);

  const [postvalues, SetPostvalues] = useState([]);
  const [editskill, seteditedSkill] = useState(0);
  const [values, SetValues] = useState({
    job_id: "",
    job_post: "",
    job_skillset: "",
    job_openings: "",
    job_experience: "",
    job_status: "",
    job_date_open: "",
    job_date_close: "",
    job_location: "",
    job_description: "",
    post_name:"",
  });
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState(0);
  const [skill, setSkill] = useState([
    "PHP",
    "JAVA",
    "MYSQL",
    "HTML",
    "PYTHON",
    "JAVASCRIPT",
    "JQUERY",
    "ANGULAR",
    "REACT JS",

  ]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  const onSelect = (event) => {
    // console.log(event);
    setSelectedOption(event);
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
  };
  const getLocation = async () => {
    const res = await fetch("http://localhost:8000/api/getLocationBranch");
    const data = await res.json();
    const list = data.location;
    SetLocation(list);
  };
  const getPostname = async () => {
    const response = await fetch("http://localhost:8000/api/getposttype");
    const data = await response.json();
    const list = data.post;
    SetPostvalues(list);
  };
  const Edit_job = async (id) => {
    const job_id = id;
    const reponse = await axios.get(
      `http://localhost:8000/api/editfecthjobdata/${job_id}`
    );
   
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
      });
      setIsOpen(true);
    }
  };
  const View_job = async (id) => {
    const job_id = id;
    const reponse = await axios.get(
      `http://localhost:8000/api/editfecthjobdata/${job_id}`
    );
   
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
        post_name:reponse.data.job[0].post_name,
      });
      vsetIsOpen(true);
    }
  };

  const Delete_job = async (e, id) => {
    e.preventDefault();
    const thisclickrow = e.currentTarget;
    thisclickrow.innerText = "Deleting";
    const res = await axios.delete(`http://localhost:8000/api/deletefetchjobdata/${id}`);
    if (res.data.status == 200) {
      thisclickrow.closest("tr").remove();
      alert("Branch Deleted successfully");
    }
  };
  const updateOrganization = async (e) => {
    e.preventDefault();
    const res = await axios.put("http://localhost:8000/api/update_job", values);
    if (res.data.status == 200) {
      swal({
        title: "Good job!",
        text: "Job Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  };
  // const { classes } = props;

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    loadJobs();
  }

  function vafterOpenModal() {}

  function vcloseModal() {
    vsetIsOpen(false);
  }
  const editedskill = (event) => {
    seteditedSkill(event);

   
  };
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];
  // const [skill, setSkill] = useState(["PHP", "JAVA", "MYSQL","HTML","PYTHON","JAVASCRIPT","JQUERY","ANGULAR",".NET","POWERAPPS","SALESFORCE"]);
  return (
   
    <div>
     
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={updateOrganization} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 className="popup-head-h4"> Edit Job Settings</h4>
            </div>
            <div className="popup-head-icon-sty">
             <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div className="row">
              <div className="col-md-12">
                <div className="row popup-content-height">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Job ID</label>
                      <input
                        type="text"
                        name="job_id"
                        onChange={handleChange}
                        value={values.job_id}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Post</label>
                      <select
                        id="dropdown"
                        name="job_post"
                        onChange={handleChange}
                        value={values.job_post}
                        className="form-control"
                      >
                        <option value="">Select Post</option>
                        {postvalues.map(({ post_name, id }, index) => (
                          <option value={id}>{post_name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                          <div className="form-group">
                            <label for="exampleFormControlInput1">
                              Skill Set
                            </label>
                            <Multiselect
                              isObject={false}
                              onRemove={editedskill}
                              //onSelect={edithandleChange}
                              onSelect={editedskill}
                              options={skill}
                              selectedValues={values.job_skillset.split(",")}
                              //value={editvalues.skillset}
                              showCheckbox
                              name="ob_skillset"
                              className="form-control"
                            />
                          </div>
                        </div>
                 
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">experience</label>
                      <input
                        type="text"
                        name="job_experience"
                        onChange={handleChange}
                        value={values.job_experience}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Openings</label>
                      <input
                        type="email"
                        name="job_openings"
                        onChange={handleChange}
                        value={values.job_openings}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Status</label>
                      <select
                        id="dropdown"
                        name="job_status"
                        onChange={handleChange}
                        value={values.job_status}
                        className="form-control"
                      >
                        <option value="">Choose status</option>

                        <option value="1">open</option>
                        <option value="0">close</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Date open</label>
                      <input
                        type="date"
                        name="job_date_open"
                        onChange={handleChange}
                        value={values.job_date_open}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">date close</label>
                      <input
                        type="date"
                        name="job_date_close"
                        onChange={handleChange}
                        value={values.job_date_close}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4 mob-full">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Location</label>
                      <select
                        id="job_location"
                        name="job_location"
                        onChange={handleChange}
                        value={values.job_location}
                        className="form-control"
                      >
                        <option value="">Select Location</option>
                        {location.map(
                          ({ branch_name, id, branch_location }, index) => (
                            <option value={id}>
                              {branch_name}-{branch_location}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">description</label>
                      <textarea
                        type="textarea"
                        name="job_description"
                        onChange={handleChange}
                        value={values.job_description}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="hidden" name="id" value={values.id} />
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" className="btn  btn-save ">
              {" "}
              Save
            </button>
            <button type="button" className="btn  btn-cancel " onClick={closeModal}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </Modal>
      <main className="inner-content-box">
        <header className="main-otrer-top"> Job </header>
        <DndProvider backend={HTML5Backend}>
          <section className="main-content-area">
            <div className="main-content-area-inner">
              <div className="sub-head">
                {" "}
                <div className="job-open-head">Job Openings </div> 
                <Multidropselect  />
               
                <div className="top-right-outer add-btn-div">
                <Jobdetailsmodal location={location} method={loadJobs}  className="col-md-3"/>
                </div>
              </div>

              <div className="col-md-12 job-main-tb-outer">
                <Paper className="recruitment-table-outer job-outer job-new-outer job-new-table-outer">
                  <Table className="recruitment-tabele">
                    <TableHead>
                      <TableRow>
                        <TableCell className="width-8">Job ID</TableCell>
                        <TableCell className="width-15">Post</TableCell>
                        <TableCell className="width-15">Skill Set</TableCell>
                        <TableCell className="width-5">Exp</TableCell>
                        <TableCell className="width-8">Openings</TableCell>
                        <TableCell className="width-8">Location</TableCell>
                        <TableCell className="width-12">Posted Date </TableCell>
                        <TableCell className="width-12">Post Close</TableCell>
                        <TableCell className="width-15">Description</TableCell>
                        <TableCell className="width-15 tf">Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {joblist.map((n) => {
                        return (
                          <TableRow key={n.id}>
                            <TableCell className="width-8"> {n.id}</TableCell>
                            <TableCell numeric className="width-15">
                              {n.post_name}
                            </TableCell>
                            <TableCell numeric className=" width-15">
                              {n.job_skillset}{" "}
                            </TableCell>
                            <TableCell numeric className="width-5">
                              {n.job_experience}
                            </TableCell>
                            <TableCell numer ic className="width-8">
                              {n.job_openings}{" "}
                            </TableCell>
                            <TableCell numeric className="width-8">
                              {n.job_location}
                            </TableCell>
                            <TableCell numeric className="width-12">
                              {n.job_date_open}
                            </TableCell>
                            <TableCell numeric className="width-12">
                              {n.job_date_close}
                            </TableCell>

                            <TableCell data-title={n.job_description} numeric className="width-15">
                              {" "}
                              {n.job_description.substring(0, 12)+'..'}
                            </TableCell>
                            <TableCell
                              numeric
                              className="width-15 inprogress-td tf"
                            >
                              <div className="job-table-toggle-box ">
                              <Togbtn id={n.id} status={n.job_status}/>
                              </div>

                              <button
                                onClick={() => Edit_job(n.id)}
                                className="job-edit-icon"
                              >
                                {" "}
                                <svg
                                  width="8"
                                  height="8"
                                  viewBox="0 0 10 10"
                                  fill="#ac4782" color="#ac4782"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z"
                                    fill="#4A54D1"
                                  />
                                  <path
                                    d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z"
                                    fill="#4A54D1"
                                  />
                                </svg>
                              </button>

                              <button
                                onClick={() => View_job(n.id)}
                                className="job-edit-icon"
                              >
                                {" "}
                                <svg
                                  width="8"
                                  height="8"
                                  viewBox="0 0 10 10"
                                  fill="#ac4782" color="#ac4782"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                 <path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>

                                  <path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
                                </svg>
                              </button>

                              <button className="job-delete-icon deleter_new">
                                <svg
                                  width="7"
                                  height="10"
                                  viewBox="0 0 7 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.242676 0.31216H2.19897V0.261343C2.19897 0.117019 2.30763 0 2.44165 0H4.43799C4.57201 0 4.68067 0.117019 4.68067 0.261343V0.31216H6.63696C6.77098 0.31216 6.87964 0.429179 6.87964 0.573503V1.60566C6.87964 1.74998 6.77098 1.867 6.63696 1.867H0.242676C0.108661 1.867 0 1.74998 0 1.60566V0.573503C0 0.429179 0.108661 0.31216 0.242676 0.31216Z"
                                    fill="#FFFFFF"
                                  />
                                  <path
                                    d="M0.607288 2.39648H6.27234C6.40635 2.39648 6.51501 2.5135 6.51501 2.65783V9.49013C6.51501 9.63445 6.40635 9.75147 6.27234 9.75147H0.607288C0.473274 9.75147 0.364613 9.63445 0.364613 9.49013V2.65783C0.364613 2.5135 0.473274 2.39648 0.607288 2.39648ZM4.59252 8.81099C4.59252 8.95531 4.70118 9.07233 4.8352 9.07233H5.06107C5.19509 9.07233 5.30375 8.95531 5.30375 8.81099V3.33697C5.30375 3.19265 5.19509 3.07563 5.06107 3.07563H4.8352C4.70118 3.07563 4.59252 3.19265 4.59252 3.33697V8.81099ZM3.08415 8.81099C3.08415 8.95531 3.19281 9.07233 3.32683 9.07233H3.5527C3.68672 9.07233 3.79538 8.95531 3.79538 8.81099V3.33697C3.79538 3.19265 3.68672 3.07563 3.5527 3.07563H3.32683C3.19281 3.07563 3.08415 3.19265 3.08415 3.33697V8.81099ZM1.57588 8.81099C1.57588 8.95531 1.68454 9.07233 1.81855 9.07233H2.04443C2.17844 9.07233 2.2871 8.95531 2.2871 8.81099V3.33697C2.2871 3.19265 2.17844 3.07563 2.04443 3.07563H1.81855C1.68454 3.07563 1.57588 3.19265 1.57588 3.33697V8.81099Z"
                                    fill="#FFFFFF"
                                  />
                                </svg>
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
              </div>

              <div className="accrodion-mob-outer">
                <Accordion preExpanded="0" className="job-accrodion">
               

                 
                </Accordion>
              </div>
            </div>
          </section>
        </DndProvider>
      </main>
   
      <Modal
        isOpen={vmodalIsOpen}
        onAfterOpen={vafterOpenModal}
        onRequestClose={vcloseModal}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={updateOrganization} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 className="popup-head-h4"> view Job Settings</h4>
            </div>
            <div className="popup-head-icon-sty">
             <MdClose className="popup-close-btn" onClick={vcloseModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div className="row">
              <div className="col-md-12">
                <div className="row popup-content-height">
                  <div className="col-md-4">
                    <div className="form-group">
                      {/* <label for="exampleFormControlInput1">Job ID</label> */}
                      {/* <input
                        type="text"
                        name="job_id"
                        onChange={handleChange}
                        value={values.job_id}
                        className="form-control"
                      ></input> */}

Post:{values.post_name}
{/* console.lo */}

{/* <select
                        id="dropdown"
                        name="job_post"
                        onChange={handleChange}
                        value={values.job_post}
                        className="form-control"
                      >
                        <option value="">Select Post</option>
                        {postvalues.map(({ post_name, id }, index) => (
                          <option value={id}>{post_name}</option>
                        ))}
                      </select> */}

                    </div>
                  </div>
                  <br/>
                  <div className="col-md-4">
                    <div className="form-group new-line">
                      {/* <label for="exampleFormControlInput1">Post</label> */}
                      {/* <select
                        id="dropdown"
                        name="job_post"
                        onChange={handleChange}
                        value={values.job_post}
                        className="form-control"
                      >
                        <option value="">Select Post</option>
                        {postvalues.map(({ post_name, id }, index) => (
                          <option value={id}>{post_name}</option>
                        ))}
                      </select> */}
                        <label for="exampleFormControlInput1">date close:{values.job_date_close} </label>
                   
                    </div>
                   
                  </div>
                  <div className="col-md-4">
                          <div className="form-group">
                            <label for="exampleFormControlInput1">
                              Skill Set:{values.job_skillset} 
                            </label> 
                            {/* <Multiselect
                              isObject={false}
                              onRemove={editedskill}
                              //onSelect={edithandleChange}
                              onSelect={editedskill}
                              options={skill}
                              selectedValues={values.job_skillset.split(",")}
                              //value={editvalues.skillset}
                              showCheckbox
                              name="ob_skillset"
                              className="form-control"
                            /> */}
                          </div>
                        </div>
                 
                  <div className="col-md-4">
                    <div className="form-group">
                      {/* <label for="exampleFormControlInput1">experience</label>
                      <input
                        type="text"
                        name="job_experience"
                        onChange={handleChange}
                        value={values.job_experience}
                        className="form-control"
                      ></input> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      {/* <label for="exampleFormControlInput1">Openings</label>
                      <input
                        type="email"
                        name="job_openings"
                        onChange={handleChange}
                        value={values.job_openings}
                        className="form-control"
                      ></input> */}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      {/* <label for="exampleFormControlInput1">Status</label>
                      <select
                        id="dropdown"
                        name="job_status"
                        onChange={handleChange}
                        value={values.job_status}
                        className="form-control"
                      >
                        <option value="">Choose status</option>

                        <option value="1">open</option>
                        <option value="0">close</option>
                      </select> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      {/* <label for="exampleFormControlInput1">Date open</label>
                      <input
                        type="date"
                        name="job_date_open"
                        onChange={handleChange}
                        value={values.job_date_open}
                        className="form-control"
                      ></input> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      {/* <label for="exampleFormControlInput1">date close</label>
                      <input
                        type="date"
                        name="job_date_close"
                        onChange={handleChange}
                        value={values.job_date_close}
                        className="form-control"
                      ></input> */}
                    </div>
                  </div>
                  <div className="col-md-4 mob-full">
                    <div className="form-group">
                      {/* <label for="exampleFormControlInput1">Location</label>
                      <select
                        id="job_location"
                        name="job_location"
                        onChange={handleChange}
                        value={values.job_location}
                        className="form-control"
                      >
                        <option value="">Select Location</option>
                        {location.map(
                          ({ branch_name, id, branch_location }, index) => (
                            <option value={id}>
                              {branch_name}-{branch_location}
                            </option>
                          )
                        )}
                      </select> */}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">description</label>
                      <input
                        type="email"
                        name="job_description"
                        onChange={handleChange}
                        value={values.job_description}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="hidden" name="id" value={values.id} />
          </div>
          <div className=" modal-footer-button-bg">
            {/* <button type="submit" className="btn  btn-save ">
              {" "}
              Save
            </button>
            <button type="button" className="btn  btn-cancel " onClick={closeModal}>
              {" "}
              Cancel{" "}
            </button> */}
          </div>
        </form>
      </Modal>
   
    </div>
   
   
  );
 

}
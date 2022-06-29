import React, { useEffect, useState }  from "react";

import ReactDOM from "react-dom";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { AppBar } from "@material-ui/core";
import BasicTabs from "./Employeetabs";
import job_validation from "../validation/job_validation";
import Jobform from "./Jobform";
import "react-tabs/style/react-tabs.css";
import Employeprofileeducationform from "./Employeprofileeducationform";
import Employeeskillform from "./Employeeskillform";
import axios from "axios";
import swal from "sweetalert";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    boarder: "0",
    color: "#000",
  },
};

export default function EditEmployeeskillpopup({idsdvalue} ) {
   
  const CustomTab = ({ children }) => (
    <Tab>
      <div>{children}</div>
    </Tab>
  );
  CustomTab.tabsRole = "Tab";
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
   
    // window.location.reload();
  }

  const [value, setValue] = React.useState(0);
  const[values,SetValues] = useState({
    primary_skill:idsdvalue[0].primary_skill,
    secondary_skill: idsdvalue[0].secondary_skill,
    fk_emp_id:idsdvalue[0].fk_emp_id,
    // employee_additional_skill: idsdvalue[0].employee_additional_skill,

    // employee_yearofexp: idsdvalue[0].employee_yearofexp,
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  const updateProfileSkills = async (e) => {
    console.log(values);

    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8000/api/update_profileskills",
      values
    );
    if (res.data.status == 200) {
      swal({
        title: "Good job!",
        text: "Department Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  };

  
  const handlesTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };

  const {  handleSubmit, errors, post } = Employeeskillform(
    
  );

  return (
    <div>
      <button
        type="button"
        class="btn  btn-maincolor btn-block emp-profl-edit-btn"
        onClick={openModal}
      >
        {" "}
        <i class="fa fa-edit"></i> 
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={updateProfileSkills} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="popup-head-h4"
              >
               Edit Employee Skill Details
              </h4>
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
                      <label for="exampleFormControlInput1">Primary Skills</label>
                      <input  type="text"  name="primary_skill" onChange={handleChange} value={values.primary_skill} class="form-control" ></input>
                       
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Secondary Skills</label>
                      <input  type="text"  name="secondary_skill" onChange={handleChange} value={values.secondary_skill} class="form-control" ></input>
                      <input  type="hidden"  name="fk_emp_id" onChange={handleChange}value={values.fk_emp_id} class="form-control" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Additional Skills</label>
                      <input  type="text"  name="employee_additional_skill" onChange={handleChange} value={values.employee_additional_skill} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Year of Experience </label>
                      <input  type="text"  name="employee_yearofexp" onChange={handleChange} value={values.employee_yearofexp} class="form-control" ></input>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save ">
              Save
            </button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

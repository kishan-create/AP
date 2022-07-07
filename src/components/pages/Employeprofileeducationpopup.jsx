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
import Employeprofileeducationform from "./Employeprofileeducationform";
import "react-tabs/style/react-tabs.css";
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

export default function Employeprofileeducationpopup({idedvalue, method, id}) {
  console.log(idedvalue);

  
   
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
  const [values, SetValues] = useState({
    education_name: idedvalue[0].education_name,
    institution: idedvalue[0].institution,

    year_of_pass: idedvalue[0].year_of_pass,
    specialization: idedvalue[0].specialization,
    ed_fk_emp_id:idedvalue[0].ed_fk_emp_id,
    
    // cmid:id,


  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };
  const [rows, setRows] = useState([]);

  const handlesTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };

  const { errors, post, } = Employeprofileeducationform(
  );

  const updateProfileEducation = async (e) => {
    console.log(values);
    

    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8000/api/update_profileeducation",
      values
    );
    if (res.data.status == 200) {
      swal({
        title: "Good job!",
        text: "Department Updated successfully",
        icon: "success",
        button: "ok",
      });
      method(id);
      closeModal();
    }
  };

  

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
        <form onSubmit={updateProfileEducation} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="popup-head-h4"
              >
               Edit Education Details
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
                      <label for="exampleFormControlInput1">Highest Level of Education Completed</label>
                      <input  type="text"   name="education_name" onChange={handleChange} value={values.education_name} class="form-control" ></input>
                      
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Institution</label>
                      <input  type="text"  name="institution" onChange={handleChange}value={values.institution} class="form-control" ></input>
                    </div>
                  </div>
                  
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Year of Graduation </label>
                      <input  type="text"  name="year_of_pass" onChange={handleChange} value={values.year_of_pass}class="form-control" ></input>
                      
                     
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Specialization</label>
                      <input  type="text"  name="specialization" onChange={handleChange}value={values.specialization} class="form-control" ></input>
                      <input  type="hidden"  name="ed_fk_emp_id" onChange={handleChange}value={values.ed_fk_emp_id} class="form-control" ></input>

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

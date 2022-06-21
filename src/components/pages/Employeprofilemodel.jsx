import React from "react";
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

export default function Employeprofilemodel( ) {
   
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
  const handlesTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };

  const { handleChange, values, handleSubmit, errors, post } = Jobform(
    job_validation
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
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="popup-head-h4"
              >
               Personal Information 
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
                      <label for="exampleFormControlInput1">Aadhaar Number</label>
                      <input  type="text"  name="job_id" onChange={handleChange} class="form-control" ></input>
                       
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Permanent Address</label>
                      <input  type="text"  name="job_id" onChange={handleChange} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Father/Mother/Spouse Name</label>
                      <input  type="text"  name="job_id" onChange={handleChange} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Temporary Address</label>
                      <input  type="text"  name="job_id" onChange={handleChange} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Emergency Contact Number</label>
                      <input  type="text"  name="job_id" onChange={handleChange} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Date Of Birth (Official)</label>
                      <input
                        type="date"
                        name="job_date_open"
                        onChange={handleChange}
                        value={values.job_date_open}
                        class="form-control"
                      ></input>
                      {errors.job_date_open && (
                        <p className="message">{errors.job_date_open}</p>
                      )}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Personal Email ID</label>
                      <input  type="text"  name="job_id" onChange={handleChange} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Total year's of experience</label>
                      <input  type="text"  name="job_id" onChange={handleChange} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Marital Status</label>
                      <select
                        id="dropdown"
                        name="job_status"
                        onChange={handleChange}
                        value={values.job_status}
                        class="form-control"
                      >
                        <option value="">Choose status</option>

                        <option value="1">Single</option>
                        <option value="0">Married</option>
                      </select>
                      {errors.job_status && (
                        <p className="message">{errors.job_status}</p>
                      )}
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

import React from "react";
import ReactDOM from "react-dom";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "react-tabs/style/react-tabs.css";
import Departmentfunctions from "./includes/Departmentfunctions";
import department_validation from "../validation/department_validation";
export default function AddDepartment({ method }) {
  const CustomTab = ([children]) => (
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
    method();
  }
  const { handleChange, values, handleSubmit, errors } = Departmentfunctions(department_validation);
  return (
    <div>
      <button
        type="button"
        class="btn  btn-maincolor btn-block"
        onClick={openModal}
      >
        {" "}
        <SiAddthis className="add-btn-icon" /> ADD Department
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal addabrch-modal"
        contentLabel="Example Modal"
      >
        <form  onSubmit={handleSubmit} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="popup-head-h4"
              >
                Add Department
              </h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row addabrch-content-box">
              <div class="col-md-12">
                <div class="row ">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="Department name">Department Name</label>
                      <input type="text" name="department_name"  onChange={handleChange} value={values.department_name} class="form-control" ></input>
                      {errors.department_name && <p>{errors.department_name}</p>}
                      </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Department Code</label>
                      <input type="text"  name="department_code"  onChange={handleChange} value={values.department_code} class="form-control" ></input>
                      {errors.department_code && <p>{errors.department_code}</p>}
                      </div>
                     
                  </div>
            
              
                </div>
              </div>
            </div>
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save ">
              {" "}
              Save
            </button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal}>
              {" "}
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

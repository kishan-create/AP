import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-dropdown/style.css";
import "react-tabs/style/react-tabs.css";
import designation_validation from "../validation/designation_validation";
import Designationfunction from "./includes/Designationfunction";
export default function AddDesignation({ method }) {
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
 
  const { handleChange, values, listnew, handleSubmit, errors  } = Designationfunction(designation_validation);
  return (
    <div>
      <button
        type="button"
        class="btn  btn-maincolor btn-block"
        onClick={openModal}
      >
        {" "}
        <SiAddthis className="add-btn-icon" /> ADD Designation
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal addabrch-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="popup-head-h4"
              >
                Add Designation
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
                      <label for="exampleFormControlInput1">Department Name</label>
                      <select
                        id="dropdown"
                        name="department_name"
                        onChange={handleChange}
                        value={values.department_name}
                        class="form-control"
                      >
                        <option value="">Select Department name</option>
                        {listnew.map(({ department_name, id }, index) => (
                          <option value={id}>{department_name}</option>
                        ))}
                      </select> </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Designation name</label>
                      <input type="text"  onChange={handleChange} name="designation_name" value={values.designation_name} class="form-control" />
                      {errors.designation_name && <p>{errors.designation_name}</p>}
                      </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1"> Designation code</label>
                      <input type="text" onChange={handleChange} name="designation_code" value={values.designation_code} class="form-control" />
                      {errors.designation_code && <p>{errors.designation_code}</p>}
                       </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Level Name</label>
                      <select id="level_id" onChange={handleChange} name="level_name" value={values.level_name} class="form-control">
                        <option value="">Choose Level</option>
                        <option value="level1">Level_1</option>
                        <option value="level2">Level_2</option>
                        <option value="level3">Level_3</option>
                        <option value="level4">Level_4</option>
                        <option value="level5">Level_5</option>
                        <option value="level6">Level_6</option>
                      </select>
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

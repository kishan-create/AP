import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { AppBar } from "@material-ui/core";
import BasicTabs from "./Employeetabs";
import "react-tabs/style/react-tabs.css";
import organizationForm from "./Organizationform";
import org_validation from "../validation/org_validation";
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

export default function Addorganization({ method }) {
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
    // setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    method();
  }

  const [value, setValue] = React.useState(0);
  const handlesTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    options,
  } = organizationForm(org_validation);
  return (
    <div>
      <button
        type="button"
        className="btn  btn-maincolor btn-block"
        onClick={openModal}
      >
        <SiAddthis className="add-btn-icon" /> ADD Organization
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
                Add Organization
              </h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div className="row">
              <div className="col-md-12">
                <div className="row addabrch-content-box">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        name="org_name"
                        onChange={handleChange}
                        value={values.org_name}
                        className="form-control"
                      ></input>
                      {errors.org_name && (
                        <p className="red-alert">{errors.org_name}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Organization Code
                      </label>
                      <input
                        type="text"
                        name="org_code"
                        onChange={handleChange}
                        value={values.org_code}
                        className="form-control"
                      ></input>
                      {errors.org_code && (
                        <p className="red-alert">{errors.org_code}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Organization Type
                      </label>
                      <input
                        type="text"
                        name="org_type"
                        onChange={handleChange}
                        value={values.org_type}
                        className="form-control"
                      ></input>
                      {errors.org_type && (
                        <p className="red-alert">{errors.org_type}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Category</label>
                      <select
                        id="dropdown"
                        name="org_category"
                        onChange={handleChange}
                        value={values.org_category}
                        className="form-control"
                      >
                        <option value="">Choose your Category</option>
                        {options.map((element, index) => (
                          <option value={element} key={index}>
                            {element}
                          </option>
                        ))}
                      </select>
                      {errors.org_category && (
                        <p className="red-alert">{errors.org_category}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Organization Registration
                      </label>
                      <input
                        type="text"
                        name="org_registration"
                        onChange={handleChange}
                        value={values.org_registration}
                        className="form-control"
                      ></input>
                      {/* </div> */}
                      {errors.org_registration && (
                        <p className="red-alert">{errors.org_registration}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Location</label>
                      <input
                        type="text"
                        name="org_location"
                        onChange={handleChange}
                        value={values.org_location}
                        className="form-control"
                      ></input>
                      {errors.org_location && (
                        <p className="red-alert">{errors.org_location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
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
    </div>
  );
}

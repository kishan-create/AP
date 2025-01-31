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
import "react-tabs/style/react-tabs.css";
import Branchform from "./Branchform";
import branch_validation from "../validation/branch_validation";
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

export default function Addbranches({ method }) {
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

  const [value, setValue] = React.useState(0);
  const handlesTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  const sha = [
    { value: "flavor", label: "flavor" },
    { value: "yummy", label: "yummy" },
    { value: "red", label: "red" },
    { value: "green", label: "green" },
    { value: "yellow", label: "yellow" },
  ];

  const { handleChange, values, listnew, handleSubmit, errors } = Branchform(
    branch_validation
  );
  
  return (
    <div>
      <button
        type="button"
        className="btn  btn-maincolor btn-block"
        onClick={openModal}
      >
        {" "}
        <SiAddthis className="add-btn-icon" /> ADD Branches
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
                Add Branches
              </h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div className="row addabrch-content-box">
              <div className="col-md-12">
                <div className="row ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Branch Name</label>
                      <input
                        type="text"
                        name="branch_name"
                        onChange={handleChange}
                        value={values.branch_name}
                        className="form-control"
                      ></input>
                      {errors.branch_name && (
                        <p className="red-alert">{errors.branch_name}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Branch Code</label>
                      <input
                        type="text"
                        name="branch_code"
                        onChange={handleChange}
                        value={values.branch_code}
                        className="form-control"
                      ></input>
                      {errors.branch_code && (
                        <p className="red-alert">{errors.branch_code}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Company Name</label>
                      <select
                        id="dropdown"
                        name="branch_company"
                        onChange={handleChange}
                        value={values.branch_company}
                        className="form-control"
                      >
                        <option value="">Select Company name</option>
                        {listnew.map(({ org_name, id }, index) => (
                          <option value={id}>{org_name}</option>
                        ))}
                      </select>
                      {errors.branch_company && (
                        <p className="red-alert">{errors.branch_company}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Branch Type</label>
                      <input
                        type="text"
                        name="branch_type"
                        onChange={handleChange}
                        value={values.branch_type}
                        className="form-control"
                        placeholder="Development Center"
                      ></input>
                      {errors.branch_type && (
                        <p className="red-alert">{errors.branch_type}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Location</label>
                      <input
                        type="text"
                        name="branch_location"
                        onChange={handleChange}
                        value={values.branch_location}
                        className="form-control"
                        placeholder="Development Center"
                      ></input>
                      {errors.branch_location && (
                        <p className="red-alert">{errors.branch_location}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Date of Establishment
                      </label>
                      <input
                        type="date"
                        name="branch_date"
                        onChange={handleChange}
                        value={values.branch_date}
                        className="form-control"
                      ></input>
                      {errors.branch_date && (
                        <p className="red-alert">{errors.branch_date}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Branch Landline
                      </label>
                      <input
                        type="text"
                        name="branch_landline"
                        onChange={handleChange}
                        value={values.branch_landline}
                        className="form-control"
                      ></input>
                      {errors.branch_landline && (
                        <p className="red-alert">{errors.branch_landline}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email</label>
                      <input
                        type="email"
                        name="branch_email"
                        onChange={handleChange}
                        value={values.branch_email}
                        className="form-control"
                      ></input>
                      {errors.branch_email && (
                        <p className="red-alert">{errors.branch_email}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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

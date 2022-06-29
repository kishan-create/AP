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

export default function Addsubstream({ method }) {
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
        class="btn  btn-maincolor btn-block"
        onClick={openModal}
      >
        {" "}
        <SiAddthis className="add-btn-icon" /> ADD Substream
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
                Add Substream
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
                   
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Stream Name</label>
                      <select
                        id="dropdown"
                        name="branch_company"
                        onChange={handleChange}
                        value={values.branch_company}
                        class="form-control"
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

                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Substream Name</label>
                      <input
                        type="text"
                        name="branch_type"
                        onChange={handleChange}
                        value={values.branch_type}
                        class="form-control"
                        placeholder="Substream"
                      ></input>
                      {errors.branch_type && (
                        <p className="red-alert">{errors.branch_type}</p>
                      )}
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
              Cancel{" "}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

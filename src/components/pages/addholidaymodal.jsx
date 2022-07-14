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
import calendarlist_validation from "../validation/calendar_validation";
import Calendarform from "./Calendarform";
import "react-tabs/style/react-tabs.css";
import holiday_validation from "../validation/holiday_validation";
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

export default function Addholidaymodal({ method }) {
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
    method();
    setIsOpen(false);
    
  }

  const [value, setValue] = React.useState(0);
  const handlesTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  const { handleChange, values, handleSubmit, errors, post } = Calendarform(
    holiday_validation
  );

  return (
    <div>
      <button
        type="button"
        className="btn  btn-maincolor btn-block"
        onClick={openModal}
      >
        {" "}
        <SiAddthis className="add-btn-icon" /> ADD
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
                Add Holiday
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
                      <label for="exampleFormControlInput1">Holiday Name</label>
                      <input
                        type="text"
                        name="holiday_name"
                        onChange={handleChange}
                        value={values.holiday_name}
                        className="form-control"
                      />
                      {errors.holiday_name && (
                        <p className="red-alert"> {errors.holiday_name}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Date</label>
                      <input
                        type="date"
                        name="holiday_date"
                        onChange={handleChange}
                        value={values.holiday_date}
                        className="form-control"
                      />
                      {errors.holiday_date && (
                        <p className="red-alert"> {errors.holiday_date}</p>
                      )}
                    </div>
                  </div>
                  {/*  
                  <div className="col-md-4">
                        <div className="form-group">
                              <label for="exampleFormControlInput1">Day</label>
                              <select id="dropdown" name="org_category" className="form-control">
                            <option value="">Sunday</option>
                            <option value="IT service">Monday</option>
                            <option value="Design">Tuesday</option>
                            <option value="">Wednesday</option>
                            <option value="IT service">Thursday</option>
                            <option value="Design">Friday</option>
                            <option value="Design">Saturday</option>
                              </select>
                        </div>
                    </div>
                      */}
                </div>
              </div>
            </div>
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" className="btn  btn-save ">
              Add
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

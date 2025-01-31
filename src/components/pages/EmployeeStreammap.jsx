import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-dropdown/style.css";

import "react-tabs/style/react-tabs.css";
import Streamfunctions from "./includes/Streamfunctions";
import stream_validation from "../validation/stream_validation";
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

export default function EmployeeStreammap() {
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
  } = Streamfunctions(stream_validation);
  return (
    <div>
      <button
        type="button"
        class="btn  btn-maincolor btn-block"
        onClick={openModal}
      >
        <SiAddthis className="add-btn-icon" /> Add Stream
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
                Add Stream
              </h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row">
              <div class="col-md-12">
                <div class="row addabrch-content-box">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Stream Name
                      </label>
                      <input
                        type="text"
                        name="stream_name"
                        onChange={handleChange}
                        value={values.stream_name}
                        class="form-control"
                      ></input>
                      {errors.stream_name && (
                        <p className="red-alert">{errors.stream_name}</p>
                      )}
                    </div>
                  </div>
                   
                </div>
              </div>{" "}
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

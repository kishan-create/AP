import React from "react";

import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-dropdown/style.css";
import substreamvalidation from "../validation/substreamvalidation";
import Substreamform from "./includes/Substreamform";
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

  const { handleChange, values, listnew, handleSubmit, errors } = Substreamform(
    substreamvalidation
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
                      <label htmlFor="exampleFormControlInput1">Stream Name</label>
                      <select
                        id="dropdown"
                        name="stream_name"
                        onChange={handleChange}
                        value={values.stream_name}
                        class="form-control"
                      >
                        <option value="">Select Stream name</option>
                        {listnew.map(({ stream_name, id }, index) => (
                          <option value={id}>{stream_name}</option>
                        ))}
                      </select>
                      {errors.stream_name && (
                        <p className="red-alert">{errors.stream_name}</p>
                      )}
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label htmlFor="exampleFormControlInput1">Substream Name</label>
                      <input
                        type="text"
                        name="substream_name"
                        onChange={handleChange}
                        value={values.substream_name}
                        class="form-control"
                        placeholder="Substream"
                      ></input>
                      {errors.substream_name && (
                        <p className="red-alert">{errors.substream_name}</p>
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

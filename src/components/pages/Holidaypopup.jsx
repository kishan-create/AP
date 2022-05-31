import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import calendar_validation from "../validation/calendar_validation";
import Calendarfunctions from "./Calendarfunctions";
import "react-tabs/style/react-tabs.css";
import Multyselect from "./Multyselect";
import { Multiselect } from "multiselect-react-dropdown";
import Holidaycalendar from "./Holidaycalendar";
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
const options1 = [
  { hol_name: "NEW YEAR1", id: 1 },
  { hol_name: "REPUBLIC DAY", id: 2 },
  { hol_name: "MAUNDY THURSDAY", id: 3 },
  { hol_name: "GOOD FRIDAY", id: 4 },
  { hol_name: "INDEPENDENCE DAY", id: 5 },
  { hol_name: "SREE KRISHNA JAYANTHI", id: 6 },
  { hol_name: "FIRST ONAM", id: 3 },
  { hol_name: "THIRUVONAM", id: 4 },
  { hol_name: "MAHANAVAMI", id: 5 },
  { hol_name: "DEEPAVALI", id: 6 },
];

export default function Holidaypopup({method}) {
  // console.log(location);


  const CustomTab = ({ children }) => (
    <Tab>
      <div>{children}</div>
    </Tab>
  );
  CustomTab.tabsRole = "Tab";
  let subtitle;

  // const [buttonText, setButtonText] = useState("Add Holiday Calander");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [options, setOptions] = useState([]);
  function openModal() {
    getOptionName();
    setIsOpen(true);
    // setButtonText("Add Holiday");
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    method();

    

  }
  

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleClick,
    showProject,
    showLocation,
    typeDropdown,
    items,
    handleSelect,
    handleRemove,
  } = Calendarfunctions(calendar_validation);
  const getOptionName = async () => {
    const res = await fetch("http://localhost:8000/api/getHolidayslist");

    const data = await res.json();

    const list = data.holiday;
    setOptions(list);
  };

  return (
    <div>
      <button
        type="button"
        class="btn  btn-maincolor btn-block"
        onClick={openModal}
      >
        {" "}
        <SiAddthis className="add-btn-icon" /> Add Holiday Calendar
        {/* <SiAddthis className="add-btn-icon" /> {buttonText} */}
      </button>
      <Modal
        isOpen={modalIsOpen}
        


        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 className="popup-head-h4">Holiday</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row">
              <div class="col-md-12 m-b-25">
                <div class="row popup-content-height">
                  <div className=" col-md-4">
                    <label for="holiday_name">Name</label>
                    <input
                      type="text"
                      name="holiday_name"
                      onChange={handleChange}
                      value={values.holiday_name}
                      class="form-control"
                    />
                    {errors.holiday_name && <p className="message">{errors.holiday_name}</p>}
                  </div>

                  <div class="col-md-4">
                    <label for="exampleFormControlInput1">Type</label>
                    <select
                      onChange={handleClick}
                      value={typeDropdown}
                      id="typedropdown"
                      name="calander_type"
                      class="form-control"
                    >
                      <option value="">Select</option>
                      <option value="1">Location</option>
                      <option value="2">Project</option>
                    </select>
                    {errors.calander_type && <p className="message">{errors.calander_type}</p>}



                  </div>
                  <div
                    style={{ display: showProject ? "block" : "none" }}
                    id="show_project"
                    class="col-md-4"
                  >
                    <label for="exampleFormControlInput1">Select</label>
                    <select
                      id="dropdown_project"
                      name="project_name"
                      onChange={handleChange}
                      value={values.project_name1}
                      class="form-control"
                    >
                      <option value="">Select project name</option>

                      <option value="1">RandLog</option>
                      <option value="2">WNC</option>
                      <option value="3">Accord</option>
                    </select>
                    {errors.project_name && <p className="message">{errors.project_name}</p>}

                    


                  </div>

                  <div
                    style={{ display: showLocation ? "block" : "none" }}
                    class="col-md-4"
                  >
                    <label for="exampleFormControlInput1">Select</label>
                    <select
                      id="dropdown_location"
                      onChange={handleChange}
                      name="location_name"
                      class="form-control"
                    >
                      <option value="">Select location name</option>
                      <option value="1">Kochi</option>
                      <option value="2">Hydarabad</option>
                      <option value="2">Buwaneswar</option>
                    </select>
                    {errors.location_name && <p className="message">{errors.location_name}</p>}



                  </div>
                  <div class="col-md-12 m-t-25">
                    <div className="Multyselect">
                      <Multiselect
                        class="form-control "
                        options={options} // Options to display in the dropdown
                        selectedValues={items} // Preselected value to persist in dropdown
                        onSelect={handleSelect} // Function will trigger on select event
                        onRemove={handleRemove} // Function will trigger on remove event
                        displayValue="hol_name" // Property name to display in the dropdown options
                        name="holiday_name_drop"
                        showCheckbox
                      />
                    {/* {errors.location_name && <p>{errors.location_name}</p>} */}

                    {errors.holiday_name_drop && <p className="message">{errors.holiday_name_drop}</p>}

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

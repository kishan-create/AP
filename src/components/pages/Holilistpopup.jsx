import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, Tabx, TabPanel } from "react-tabs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import calendar_validation from "../validation/calendar_validation";
import HoliCalendarfunctions from "./Holicalanderfunctions";
import "react-tabs/style/react-tabs.css";
import Multyselect from "./Multyselect";
import { Multiselect } from "multiselect-react-dropdown";
import axios from "axios";

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
  { hol_name: "MAUNDY    THURSDAY", id: 3 },
  { hol_name: "GOOD FRIDAY", id: 4 },
  { hol_name: "INDEPENDENCE DAY", id: 5 },
  { hol_name: "SREE KRISHNA JAYANTHI", id: 6 },
  { hol_name: "FIRST ONAM", id: 3 },
  { hol_name: "THIRUVONAM", id: 4 },
  { hol_name: "MAHANAVAMI", id: 5 },
  { hol_name: "DEEPAVALI", id: 6 },
];

export default function Holilistpopup({id,method}) {


  const CustomTab = ({ children }) => (
    <Tab>
      <div>{children}</div>
    </Tab>
  );
  CustomTab.tabsRole = "Tab";
  let subtitle;

  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [options, setOptions] = useState([]);


  function openModal() {
    getOptionName();
    setIsOpen(true);
 
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  
    method(id);
   
 

  }
  

  const {
    updateHoliday,

    idd,
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
  } = HoliCalendarfunctions(calendar_validation,id,closeModal);
  const getOptionName = async () => {
  const res = await axios.get(`http://auditportal.bourntec.com:3001/audit_portal/public/api/getRemainingholidays/${id}`);
   const list=res.data.holiday;
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
        <SiAddthis className="add-btn-icon" /> Add Holidays
       
      </button>
      <Modal
        isOpen={modalIsOpen}
        


        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={updateHoliday} className="form" noValidate>
      
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
                <input type="hidden" value={id}  onChange={handleChange} name="id"/>
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
                    </div>
                  </div>
                </div>    
              </div>
            </div>
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save ">
              Update
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

import React from 'react';
import ReactDOM from 'react-dom';
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AppBar } from '@material-ui/core';
import BasicTabs from './Employeetabs';
import job_validation from '../validation/job_validation';
import Jobform from './Jobform';
import 'react-tabs/style/react-tabs.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    boarder: '0',
    color: '#000'
  },
};




export default function Addholidaymodal({location, method}) {
  console.log(location);
  const CustomTab = ({ children }) => (
    <Tab >
      <div >{children}</div>
    </Tab>
  );
  CustomTab.tabsRole = 'Tab';
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [value, setValue] = React.useState(0)
  const handlesTabs = (e, val) => {
    console.warn(val)
    setValue(val)
  }
  const { handleChange, values, handleSubmit, errors, post } = Jobform(job_validation);
 
  return (
    <div>

      <button type="button" class="btn  btn-maincolor btn-block" onClick={openModal} > <SiAddthis className="add-btn-icon" /> ADD</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal" >
        <form onSubmit={handleSubmit} className='form' noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="popup-head-h4">Add Holiday</h4>
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
                    <label for="exampleFormControlInput1">Holiday Name</label>
                      <input type="text" name="org_name" class="form-control" value=""/>
                      </div>
                    </div>
                     <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleFormControlInput1">Date</label>
                        <input  type="date"  name="org_name" class="form-control" value=""/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                              <label for="exampleFormControlInput1">Day</label>
                              <select id="dropdown" name="org_category" class="form-control">
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
                      
                    </div>
            </div>
            </div>

          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save "  >Add</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal} > Cancel </button>
          </div>


        </form>
      </Modal>
    </div>
  );
}

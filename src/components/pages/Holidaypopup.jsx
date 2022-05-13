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
import Multyselect from './Multyselect';
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

export default function Holidaypopup({location, method}) {
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

   
 
  return (
    <div>

      <button type="button" class="btn  btn-maincolor btn-block" onClick={openModal} > <SiAddthis className="add-btn-icon" /> Add Holidays</button>
      <Modal
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal" >
        <form className='form' noValidate>
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
                                            <label for="exampleFormControlInput1">Name</label>
                                            <select id="dropdown" name="job_status" class="form-control">
                                                <option value="">Select</option>
                                                <option value="">Default Cochi</option>
                                                <option value="1">Default Hyderabad</option>
                                                <option value="0">Default US</option>
                                            </select>
                                        </div>
                                       
                                        <div class="col-md-4">
                                            <label for="exampleFormControlInput1">Type</label>
                                            <select id="dropdown" name="job_status" class="form-control">
                                            <option value="">Select</option>
                                                <option value="">Project</option>
                                                <option value="1">Location</option> 
                                            </select> 
                                        </div>
                                        <div class="col-md-4">
                                            <label for="exampleFormControlInput1">Select</label>
                                            <select id="dropdown" name="job_status" class="form-control">
                                            <option value="">Select</option>
                                                <option value="">WNC</option>
                                                <option value="1">RandLog</option> 
                                            </select> 
                                        </div>
                                        <div class="col-md-12 m-t-25">
                                            <label for="exampleFormControlInput1">Holidays</label>
                                            <Multyselect  class="form-control" />   
                                            <select class="select  "  >
                                            <option value="1"> </option> 
                                            </select> 
                                        </div>
                  


                </div>
              </div>
            </div>

          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save "  >Save</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal} > Cancel </button>
          </div>


        </form>
      </Modal>
    </div>
  );
}

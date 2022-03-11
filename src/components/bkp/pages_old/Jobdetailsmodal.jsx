import React from 'react';
import ReactDOM from 'react-dom'; 
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from 'react-modal'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {AppBar} from '@material-ui/core';
import BasicTabs from './Employeetabs';
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
  
 
 

export default function Jobdetailsmodal(){

   
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
  
    const [value, setValue]=React .useState(0)
    const handlesTabs=(e, val)=>{
      console.warn(val)
    setValue(val)
    }

  return (
    <div>
     
      <button type="button" class="btn  btn-maincolor btn-block" onClick={openModal} > <SiAddthis className="add-btn-icon"/> ADD</button> 
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
       className="job-detils-modal"
        contentLabel="Example Modal" >
        <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
                <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="popup-head-h4">Job Settings</h4>
            </div>
            <div className="popup-head-icon-sty">
               <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
        </div>
        <div className="popup-content-bg">
                  <div class ="row">
                <div class="col-md-12">
                <div class="row popup-content-height">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Job ID</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Post</label>
                                <select id = "dropdown" class="form-control">
    <option value="Post">Post</option>
    <option value="1">1</option>
 </select>
                    
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Skill Set</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">experience</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Openings</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                      
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Status</label>
                                <select id = "dropdown" class="form-control">
    <option value="Status">Status</option>
  </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Date open</label>
                                <input type="date" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">date close</label>
                                <input type="date" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4 mob-full">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Location</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">description</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                      
                        
                     </div>
                </div>
            </div>
           
        </div>
        <div className=" modal-footer-button-bg">
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel "  onClick={closeModal} > Cancel </button> 
        </div>
        
       
                
      </Modal>
    </div>
  );
}
 
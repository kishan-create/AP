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
  
 
 

export default function Addbranches(){

   
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
     
      <button type="button" className="btn  btn-maincolor btn-block" onClick={openModal} > <SiAddthis className="add-btn-icon"/> ADD Branches</button> 
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
       className="job-detils-modal addabrch-modal"
        contentLabel="Example Modal" >
        <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
                <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="popup-head-h4">Add Branches</h4>
            </div>
            <div className="popup-head-icon-sty">
               <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
        </div>
        <div className="popup-content-bg">
                  <div class ="row addabrch-content-box">
                <div className="col-md-12">
                <div className="row ">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Branch Name</label>
                                <input type="email" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Branch Code</label>
                                <input type="email" className="form-control" ></input>
                    
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Company Name</label>
                                <select id = "dropdown" className="form-control">
    <option value="Post">Post</option>
    <option value="1">1</option>
 </select>
                               
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Branch Type</label>
                                <input type="email" className="form-control" placeholder="Development Center" ></input>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Location</label>
                                <select id = "dropdown" className="form-control">
    <option value="Post">Kochi</option>
 </select>
                            </div>
                        </div>
                      
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Date of Establishment</label>
                                <input type="date" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Brach Landline</label>
                                <input type="email" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" className="form-control" ></input>
                            </div>
                        </div>
                                             
                        
                     </div>
                </div>
            </div>
           
        </div>
        <div className=" modal-footer-button-bg">
            <button type="button" className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel "  onClick={closeModal} > Cancel </button> 
        </div>
        
       
                
      </Modal>
    </div>
  );
}
 
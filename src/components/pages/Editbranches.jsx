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
  
 
 

 function Editbranches(){

   
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
     
     <a href="#" onClick={openModal} >
                 <div className="desktop-edt-none">Edit</div>
                 <svg width="14" height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobile-editnone">
  <path d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z" fill="#4A54D1"/>
  <path d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z" fill="#4A54D1"/>
  </svg>
  
  </a>
     
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
                <div class="col-md-12">
                <div class="row ">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Branch Name</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Branch Code</label>
                                <input type="email" class="form-control" ></input>
                    
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Company Name</label>
                                <select id = "dropdown" class="form-control">
    <option value="Post">Post</option>
    <option value="1">1</option>
 </select>
                               
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Branch Type</label>
                                <input type="email" class="form-control" placeholder="Development Center" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Location</label>
                                <select id = "dropdown" class="form-control">
    <option value="Post">Kochi</option>
 </select>
                            </div>
                        </div>
                      
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Date of Establishment</label>
                                <input type="date" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Brach Landline</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email</label>
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
export default Editbranches;
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
import LoadDatafile from './LoadDatafile';
import {uploadadd} from '../../images';
import {uploadimage, uploadicon} from '../../images';
import { v4 as uuid } from "uuid";
import MultipleImageUpload from "./MultipleImageUpload";
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
  
  



export default function Recruitmentnewmodal({method}){
  //const{columns}=LoadDatafile();
   
    const CustomTab = ({ children }) => (
        <Tab >
          <div >{children}</div>
        </Tab>
      );
      CustomTab.tabsRole = 'Tab';
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // console.log(columns);
    function openModal() {
      setIsOpen(true);
    }
    const [myimage, setMyImage] = React.useState(null);
    const uploadImage = e => {
      setMyImage(URL.createObjectURL(e.target.files[0]));
    };
   
    function afterOpenModal () {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
    const itemsFromBackend = [
      { id: uuid(), content: "First task", title: "JAVA DEVELOPER2", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
      { id: uuid(), content: "First task", title: "JAVA DEVELOPER", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
      { id: uuid(), content: "First task", title: "JAVA DEVELOPER2", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
      { id: uuid(), content: "First task", title: "JAVA DEVELOPER", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
      { id: uuid(), content: "First task", title: "JAVA DEVELOPER", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" }
    ];
    function closeModal() { 
     
      setIsOpen(false);
      method();
    
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
          contentLabel="Example Modal"  className="candiate-modal-bx">
        <div className="popup-head-sty candidate-tab-outer">
            <div className="popup-head-content-sty">
                <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="popup-head-h4">Candidate Details </h4>
            </div>
            <div className="popup-head-icon-sty">
               <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
        </div>
        <div className="popup-content-bg">
            <div class="row ">
                            
            </div>
            <div class ="row">
                <div class="col-md-12">
                <BasicTabs /> 
                <button type="button" class="btn  btn-cancel " onClick={closeModal} > Cancel </button>
                </div>
            </div>
           
        </div>
        
        
       
                
      </Modal>
    </div>
  );
}
 
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "react-dropdown/style.css";

import "react-tabs/style/react-tabs.css";
import Streamfunctions from "./includes/Streamfunctions";
import stream_validation from "../validation/stream_validation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CompareArrowsOutlined } from "@material-ui/icons";
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

export default function AddmappingStream({ stream_name,id }) {


  const CustomTab = ({ children }) => (
    <Tab>
      <div>{children}</div>
    </Tab>
  );
  CustomTab.tabsRole = "Tab";
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const[subpotion,setSuboption]=useState([]);
  const[employee,setEmployee]=useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function openModal() {
    handleMapStream(id);

    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  
  }

  function closeModal() {
    setIsOpen(false);

  }


 
  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
 
  }


  const Employeemap=async(ids)=>{

 let data = {
    'id': ids,
    
  }
  
  const response = axios.post(
    "http://localhost:8000/api/add_map_stream",
    data
  );

}

  const handleMapStream =async(val)=>
  {

  alert("rer");

    console.log(val);
    let data = {
      'stream': val[1]
    
    }
      

    const reponse = await axios.get(
      `http://localhost:8000/api/getAllemployeesub/${val}`
    );
    if(reponse.data.status===200)
    {
      const emp = reponse.data.emp;
      setEmployee(emp);
      setAnchorEl(null);
     
      
    }
 
    setIsOpen(true);
  }

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    options,
    
  
   
    
    
  } = Streamfunctions(stream_validation,id);
  return (
    <div>
      
       < svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"  onClick={openModal} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoreVertIcon"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

     


       <Modal
isOpen={modalIsOpen}
onAfterOpen={afterOpenModal}
onRequestClose={closeModal}
className="job-detils-modal"
contentLabel="Example Modal"
>
<form  className="form" noValidate>
  <div className="popup-head-sty modal-button-bg">
    <div className="popup-head-content-sty">
    <h4>Employe Mapping-{stream_name}</h4>
    </div>
    <div className="popup-head-icon-sty">
      <MdClose className="popup-close-btn" onClick={closeModal} />
    </div>
  </div>
  <div className="popup-content-bg">
    <div class="row addabrch-content-box stable-body ">
      <div class="col-md-12 ">
      <Table size="small" aria-label="purchases" className="stable">
        <TableHead>
          <TableRow>
            <TableCell className="width-50">Employee Name</TableCell>
            <TableCell> Employee Code</TableCell>
             
            <TableCell>Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody className="stable-body">
        {employee.map((historyRow) => (
            <TableRow >
              
              <TableCell>{historyRow.emp_name}</TableCell>
              <TableCell>{historyRow.emp_code}</TableCell>
           
               
              <TableCell>
              {(() => {
              if (historyRow.status == 1){
                return (
                  <input type="checkbox" id="stream_map" checked  onClick={() => Employeemap(historyRow.id+'_'+values.streamid+'_'+'0')} name="stream_map" value="0"></input>
                );
            }
            else if(historyRow.status == 0) {
              return (
                <input type="checkbox" id="stream_map"   onClick={() => Employeemap(historyRow.id+'_'+values.streamid+'_'+'1')} name="stream_map" value="1"></input>
              );
            }
            else {
              return (
                <input type="checkbox" id="stream_map" disabled  onClick={() => Employeemap(historyRow.id+'_'+values.streamid)} name="stream_map" checked></input>
              );
            }
             
            })()}
            
             
                
              </TableCell>
            
            </TableRow>
        ))}
        </TableBody>
      </Table>
      </div>
    </div>
  </div>
  
</form>
</Modal>
    </div>
  );
}

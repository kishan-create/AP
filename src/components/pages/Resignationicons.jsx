import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Modal from "react-modal";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import axios from "axios";

const options = [
  'Resigned',
  'Relieved',
  'Revoke',
   
 
];

const ITEM_HEIGHT = 48;


export default function Resignationicons({id,name,code}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [values,SetValues]= React.useState({
    emp_dateofresign: "",
    emp_frequency: "",
    emp_dateofrelieving: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const noticePopup = () =>{
    setIsOpen(true);



  };
  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
 
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  // useEffect = (()=>{
  //   if (Object.keys.length === 0 && isSubmitting) {
  //     // onSubmitform();
  //   }
  // }
  // );
  const handleSubmit = (e) => {
    
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    //console.log(values)
    const response = axios.post("http://localhost:8000/api/add_notice", values);
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
       
        SetValues({
          emp_dateofresign: "",
          emp_frequency: "",
          emp_dateofrelieving: "",
        });
      }
    });
  };



  return (
    <div>
<Modal
isOpen={modalIsOpen}
onAfterOpen={afterOpenModal}
onRequestClose={closeModal}
className="job-detils-modal"
contentLabel="Example Modal"
>
<form onSubmit={handleSubmit} className="form" noValidate>

<div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
            <h4>{code+'-'+ name}</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>


          <div className="popup-content-bg">
            <div class="row">
              <div class="col-md-12">
                <div class="row addabrch-content-box">
                <div className="col-md-6">
                    <div className="form-group">
                      <label for="Date of Resign">Date of Resign</label>
                      <input type="date" name="emp_dateofresign"  onChange={handleChange} value={values.emp_dateofresign} className="form-control" ></input>
                      </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Frequency</label>
                      <select
                        id="dropdown"
                        name="emp_frequency"
                        onChange={handleChange}
                        value={values.emp_frequency}
                        className="form-control"
                      >
                        <option value="">Choose Frequency</option>

                        <option value="0">1month</option>
                        <option value="1">2month</option>
                        <option value="2">3month</option>

                      </select>
                      </div>
                     
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="Date of Relieving">Date of Relieving</label>
                      <input type="date" name="emp_dateofrelieving"  onChange={handleChange} value={values.emp_dateofrelieving} className="form-control" ></input>
                      </div>
                  </div>


                  
                   
                </div>
              </div>
            </div>
          </div>
  
  <div className=" modal-footer-button-bg">
            <button type="submit" className="btn  btn-save ">
              Save
            </button>
            <button type="button" className="btn  btn-cancel " onClick={closeModal}>
              {" "}
              Cancel{" "}
            </button>
          </div>
          
  
</form>


         
         
</Modal>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} 
          onClick={() => 
          noticePopup()
          
          }>
            {option}

        
        
          </MenuItem>
          
        ))}
      </Menu>
     
    </div>
  );
}
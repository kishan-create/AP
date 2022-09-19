import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Modal from "react-modal";
import { MdClose } from "@react-icons/all-files/md/MdClose";
// import axios from "axios";
import Noticefunctions from "./includes/Noticefunctions";
import Noticevalidation from "../validation/Noticevalidation";
// import { ExitToAppTwoTone } from "@material-ui/icons";
const options = [
  'Resigned',
  'Relieved',
  'Revoke',


];

const ITEM_HEIGHT = 48;


export default function Resignationicons({ id, name, code, noticeid, resign, method }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpenRelive, setIsOpenrelieve] = React.useState(false);
  const [modalIsOpenRevoke, setIsOpenrevoke] = React.useState(false);
  // const [isSubmitting, setIsSubmitting] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const noticePopup = (noticeid, option) => {
    if (noticeid !== null && option == "Revoke") {
      setIsOpenrevoke(true);

    }
    else if (noticeid !== null && option == "Relieved") {
      setIsOpenrelieve(true);
    }

    else if (noticeid !==null && option == "Resigned"){

      setIsOpen(false);

    }
    
    else {
      setIsOpen(true);
    }
    setAnchorEl(null);


  };
  function afterOpenModal() { }
  function closeModal() {
    setIsOpen(false);
    method();

  }
  function afterOpenModalRelive() { }
  function closeModalRelive() {
    setIsOpenrelieve(false);
    method();

  }

  function afterOpenModalRevoke() { }
  function closeModalRevoke() {
    setIsOpenrevoke(false);
    method();

  }


  const { handleChange, values,  handleSubmit, handleRelieveSubmit,  FrequencyChange,handleRevokeSubmit } = Noticefunctions(Noticevalidation, id);

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
              <h4>{code + '-' + name}</h4>
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
                      <input type="date" name="emp_dateofresign" onChange={handleChange} value={values.emp_dateofresign} className="form-control" ></input>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Frequency</label>
                      <select
                        id="dropdown"
                        name="emp_frequency"
                        onChange={FrequencyChange}
                        value={values.emp_frequency}
                        className="form-control"
                      >
                        <option value="">Choose Frequency</option>

                        <option value="1">1 month</option>
                        <option value="2">2 months</option>
                        <option value="3">3 months</option>

                      </select>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="Date of Relieving">Date of Relieving</label>
                      <input type="date" name="emp_dateofrelieving" onChange={handleChange} value={values.emp_dateofrelieving} className="form-control" ></input>
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

      {/* Relive Popup */}
      <Modal
        isOpen={modalIsOpenRelive}
        onAfterOpen={afterOpenModalRelive}
        onRequestClose={closeModalRelive}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        {/* <form onSubmit={handleSubmit} className="form" noValidate> */}
        <form onSubmit={handleRelieveSubmit} className="form" noValidate>



          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4>{code + '-' + name}</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModalRelive} />
            </div>
          </div>


          <div className="popup-content-bg">
            <div class="row">
              <div class="col-md-12">
                <div class="row addabrch-content-box">
                  <div className="col-md-6">
                    <label for="Date of Resign">Resignation Date:{resign}</label>
                    <div className="form-group">
                      <label for="Date of Resign">Last working day</label>
                      <input type="date" name="last_working_day" onChange={handleChange} value={values.last_working_day} className="form-control" ></input>
                      {/* <input type="date" name="last_working_day"  onChange={handleChange}   value={values.emp_dateofrelieving} className="form-control" ></input> */}
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
            <button type="button" className="btn  btn-cancel " onClick={closeModalRelive}>
              {" "}
              Cancel{" "}
            </button>
          </div>


        </form>




      </Modal>
      {/* Revoke */}
      <Modal
        isOpen={modalIsOpenRevoke}
        onAfterOpen={afterOpenModalRevoke}
        onRequestClose={closeModalRevoke}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        {/* <form onSubmit={handleSubmit} className="form" noValidate> */}
        <form onSubmit={handleRevokeSubmit} className="form" noValidate>



          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4>{code + '-' + name}</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModalRevoke} />
            </div>
          </div>


          <div className="popup-content-bg">
            <div class="row">
              <div class="col-md-12">
                <div class="row addabrch-content-box">
                  <div className="col-md-6">
                    <label for="Date of Resign">Resignation Date:{resign}</label>
                    <div className="form-group">
                      <label for="revoke reason">Revoke Reason</label>
                      <textarea  name="revoke_reason" onChange={handleChange} value={values.revoke_reason} className="form-control"  />
                      {/* <input type="date" name="last_working_day"  onChange={handleChange}   value={values.emp_dateofrelieving} className="form-control" ></input> */}
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
            <button type="button" className="btn  btn-cancel " onClick={closeModalRevoke}>
              {" "}
              Cancel{" "}
            </button>
          </div>


        </form>




      </Modal>
      {/* end revoke */}
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
              noticePopup(noticeid, option)

            }>
            {option}



          </MenuItem>

        ))}
      </Menu>

    </div>
  );
}
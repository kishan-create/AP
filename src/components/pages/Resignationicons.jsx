import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Modal from "react-modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MdClose } from "@react-icons/all-files/md/MdClose";


const options = [
  'Resigned',
  'Relieved',
  'Revoke',
   
 
];

const ITEM_HEIGHT = 48;

export default function Resignationicons() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpenStream, setIsOpenStream] = React.useState(false);
  const[subpotion,setSuboption]=useState([]);
  const[employee,setEmployee]=useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
  }
  function afterOpenModalStream() {}
  function closeModalStream() {
    setIsOpenStream(false);
 
  }
 

  return (
    <div>
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
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Modal
isOpen={modalIsOpenStream}
onAfterOpen={afterOpenModalStream}
onRequestClose={closeModalStream}
className="job-detils-modal"
contentLabel="Example Modal"
>
<form  className="form" noValidate>
  <div className="popup-head-sty modal-button-bg">
    <div className="popup-head-content-sty">
      <h4>Employe Mapping</h4>
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
       
      </Table>
      </div>
    </div>
  </div>
  
</form>
</Modal>

    </div>
  );
}

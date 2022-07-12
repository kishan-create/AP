import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import Modal from "react-modal";
import EmployeeStreammap from "./EmployeeStreammap";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
 
];

const ITEM_HEIGHT = 48;

export default function Streamingmapping({id,stream_name}) {
  
  const [values, SetValues] = useState({
    subid: "",
    streamname:"",
    substreamname:"",
    streamid:""
   
  });
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpenStream, setIsOpenStream] = React.useState(false);
  const[subpotion,setSuboption]=useState([]);
  const[employee,setEmployee]=useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
 
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMapBlank =async(id)=>
  {
    var val=id.split('_');
    alert("test")
  }
  
  const handleMap =async(id,)=>
  {
    var val=id.split('_');
    let data = {
      'stream': val[1],
      'substream':val[0]
      
    }
    
    
    const reponse = await axios.get(
      `http://localhost:8000/api/getAllemployeesub/${id}`
    );
    if(reponse.data.status===200)
    {
      const emp = reponse.data.emp;
      setEmployee(emp);
      setAnchorEl(null);
    }
    SetValues({
      subid: val[0],
      streamid:val[1],
      streamname:val[2],
      substreamname:val[3]
     
    });
    setIsOpen(true);
  }
  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
 
  }
  function afterOpenModalStream() {}
  function closeModalStream() {
    setIsOpenStream(false);
 
  }

  const getStreamName =async(id)=>{
    const reponse = await axios.get(
      `http://localhost:8000/api/getAllemployeesub/${id}`
    );
    // console.log(reponse.data);


    if(reponse.data.status===200)
    {
      const emp = reponse.data.emp;
      setEmployee(emp);
      setAnchorEl(null);
    }
    SetValues({
      
      streamid:id,
 
      streamname:stream_name,
     
    });
   
    setIsOpenStream(true);

    

  }
  
const getSubstreamName =async(id)=>{
  
  
    const reponse = await axios.get(
        `http://localhost:8000/api/getSubstreamname/${id}`
      );
      const emp = reponse.data.options;
      setSuboption(emp);
}
const Employeemap=async(id)=>
{
  let data = {
    'id': id,
    
  }
  
  const response = axios.post(
    "http://localhost:8000/api/add_map_stream",
    data
  );
}





const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  // console.log(values.streamname);
  // console.log(sub_stream_name);
  // getSubstreamName();
  
  console.log();



  <div>

  {(() =>{

    // if  (employee.length <=0)
        if  (subpotion ==0)
 
    {

      console.log("inside"); 
      getStreamName(id);
      // setIsOpen(true);

      // onClick={handleClick}
 


      }

    else {
      console.log("test");
      getSubstreamName(id);
      setAnchorEl(event.currentTarget);
    }

})()}
</div>

  
    // getSubstreamName(id);
    // setAnchorEl();
};


  return (
    <div>
      {/* console.log(id); */}
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
        {subpotion.map((option) => (
          <MenuItem key={option.subid} 
          onClick={() => handleMap(option.subid+'_'+option.auid+'_'+option.stream_name+'_'+option.sub_stream_name)}
          
          >
          {option.sub_stream_name}
          </MenuItem>
        ))}
      </Menu>
      <div>


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
      <h4>Employe Mapping-{values.streamname}</h4>
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
                <input type="checkbox" id="stream_map"   onClick={() => Employeemap(historyRow.id+'_'+'_'+values.streamid+'_'+'1')} name="stream_map" value="1"></input>
              );
            }
            else {
              return (
                <input type="checkbox" id="stream_map" disabled  onClick={() => Employeemap(historyRow.id+'_'+'_'+values.streamid)} name="stream_map" checked></input>
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
      <h4>Employe Mapping-{values.streamname+'-'+values.substreamname}</h4>
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
                  <input type="checkbox" id="stream_map" checked  onClick={() => Employeemap(historyRow.id+'_'+values.subid+'_'+values.streamid+'_'+'0')} name="stream_map" value="0"></input>
                );
            }
            else if(historyRow.status == 0) {
              return (
                <input type="checkbox" id="stream_map"   onClick={() => Employeemap(historyRow.id+'_'+values.subid+'_'+values.streamid+'_'+'1')} name="stream_map" value="1"></input>
              );
            }
            else {
              return (
                <input type="checkbox" id="stream_map" disabled  onClick={() => Employeemap(historyRow.id+'_'+values.subid+'_'+values.streamid)} name="stream_map" checked></input>
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
    </div>

  );
}

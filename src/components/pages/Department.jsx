import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReactDOM from "react-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";


import { Card, Icon, Image } from "semantic-ui-react";
import props from 'prop-types';

import Modal from "react-modal";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import axios from "axios";
import AddDesignation from "./Add-designation";
import AddDepartment from "./Add-department";

function createData(
  org_name: string,
  org_code: number,
) {
  return {
    org_name,
    org_code,

  };
}

function Row(props) {
  const { row, onClickEdit } = props;
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);


  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [desmodelIsopen, setDesignationmodelIsOpen]= React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);
  const [listnew, setListnew] = useState([]);
  const [values, SetValues] = useState({
    department_name: "",
    department_code: "",
    // branch_name: "",
    // branch_code: "",

    // org_type: "",
    // org_category: "",
    // org_location: "",
    // org_registration: "",

    // branch_company: "",
    // branch_type: "",
    // branch_location: "",
    // branch_date: "",
    // branch_landline: "",
    // branch_email: "",
    designation_name: "",
    designation_code: "",
    level_type: "",
    // edit_designation_code: "",



  });
  const[editValues, SetEditValues]= useState({
    edit_department_name: "",
    edit_designation_name: "",
    edit_designation_code: "",
    edit_level_type: "",

  });

  const getCompanyName = async () => {
    const response = await fetch(
      "http://localhost:8000/api/getDepartmentName"
    );
    const data = await response.json();

    const listnewtest = data.department;


    setListnew(listnewtest);
  };
 

  const handleChange = (e) => {
  
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
     
    });
   
  };

  const edithandleChange = (e) => {
    const { name, value } = e.target;
    SetEditValues({
      ...editValues,
      [name]: value,
    });
    //   SetEditValues({
    //     ...editValues,
    //     [e.target.name]: value,

    // })
    // console.log("hi", e.target.name);
  };
  const fetchData = async () => {
   
    const res = await axios.get(
      "http://localhost:8000/api/getDepartmentValues"
    );

    const org = res.data.org;

    setRows(org);
  };

  const closeModal = () =>{
   setIsOpen(false);
   fetchData();
 
  }
  function closeModalbrach() {
    setDesignationmodelIsOpen(false);
    // window.location.reload();
  }


  function afterOpenModalbrach() {}
  function afterOpenModal() {}
  const editbranch = async (id) => {
    const branch_id = id;
    const reponse = await axios.get(
      `http://localhost:8000/api/editfecthbranchdata/${branch_id}`
    );
    if (reponse.data.status == 200) {
      SetValues({
        branch_name: reponse.data.branch.branch_name,
        branch_code: reponse.data.branch.branch_code,
        branch_company: reponse.data.branch.branch_company,
        branch_type: reponse.data.branch.branch_type,
        branch_location: reponse.data.branch.branch_location,
        branch_date: reponse.data.branch.branch_date,
        branch_landline: reponse.data.branch.branch_landline,
        branch_email: reponse.data.branch.branch_email,
        b_id: reponse.data.branch.id,
        
      });
      setModalState(true);
    }

    //setModalState(true);
  };
  const edit = async (id) => {
    // alert(id);
    const department_id = id;
    const reponse = await axios.get(
      `http://localhost:8000/api/editfecthdepdata/${department_id}`
    );
    // setIsOpen(true);
    if (reponse.data.status == 200) {
      SetValues({
        department_name: reponse.data.dep.department_name,
        department_code: reponse.data.dep.department_code,
        id: reponse.data.dep.id,
      });
      setIsOpen(true);
    }
  };

  const editDesignation = async (id) =>{
    getCompanyName();

 
    // alert(id);
    const designation_id = id;
    const reponse = await axios.get(
      `http://localhost:8000/api/editfecthdesdata/${designation_id}`
    );

    if (reponse.data.status == 200) {
      // alert(reponse);
     
      SetEditValues({
        edit_designation_name: reponse.data.designation[0].designation_name,
        edit_designation_code: reponse.data.designation[0].designation_code,
        edit_level_type: reponse.data.designation[0].level_type,
        edit_department_name: reponse.data.designation[0].did,
      
        id: reponse.data.designation[0].id,
      });
      setDesignationmodelIsOpen(true);
    }
  

    

  };
  const updateDepartment = async (e) => {
    console.log(values);
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8000/api/update_department",
      values
    );
    if (res.data.status == 200) {
      swal({
        title: "Good job!",
        text: "Department Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  };

  const updateDesignation = async (e) => {
    console.log(editValues);
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8000/api/update_designation",
      editValues
    );
    if (res.data.status == 200) {
      swal({
        title: "Good job!",
        text: "Designation Updated successfully",
        icon: "success",
        button: "ok",
      });
    }
  };








  const updateBranch = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8000/api/update_branch",
      values
    );
    alert("Branch updated successfully");
  };
  const deleteDepartment = async (e, id) => {
    // alert(id);
    const thisclickrow = e.currentTarget;
    thisclickrow.innerText = "Deleting";
    const res = await axios.delete(
      `http://localhost:8000/api/delete_departments/${id}`
    );
    // if (res.data.status == 200) {
    //   thisclickrow.closest("tr").remove();
    //   console.log(res.data.message);
    // }
  };
  const deletebranches = async (e, id) => {
    e.preventDefault();
    const thisclickrow = e.currentTarget;
    thisclickrow.innerText = "Deleting";
    const res = await axios.delete(
      `http://localhost:8000/api/delete_branches/${id}`
    );
    if (res.data.status == 200) {
      thisclickrow.closest("tr").remove();
      alert("Branch Deleted successfully");
    }
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={updateDepartment} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4>Edit Department</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div className="row addabrch-content-box">
              <div className="col-md-12">
                <div className="row ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Department Name</label>
                      <input
                        name="department_name"
                        type="text"
                        onChange={handleChange}
                        value={values.department_name}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Department Code</label>
                      <input
                        name="department_code"
                        type="text"
                        onChange={handleChange}
                        value={values.department_code}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
               

                  <input type="hidden" name="id" value={values.id} />
                </div>
              </div>
            </div>
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" className="btn  btn-save ">
              {" "}
              Update
            </button>
            <button type="button" className="btn  btn-cancel " onClick={closeModal}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </Modal>


      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" className="cal-width-40">
          {row.department_name}
        </TableCell>
        <TableCell  className="cal-width-40"> {row.department_code}</TableCell>

        <TableCell  className="cal-width-10">
          <div>
            <a onClick={() => edit(row.id)}>
              <EditIcon className="org-edit" />
            </a>
            <a >
              <DeleteIcon
                onClick={(e) => deleteDepartment(e, row.id)}
                className="org-delete"
              />
            </a>
          </div>
        </TableCell>
      </TableRow>

      <Modal 
        isOpen={desmodelIsopen}
        onAfterOpen={afterOpenModalbrach}
        onRequestClose={closeModalbrach}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={updateDesignation} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4>Edit Designation </h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModalbrach} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div className="row addabrch-content-box">
              <div className="col-md-12">
                <div className="row ">  




                <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1"> Edit Department Name</label>
                      <select
                        id="dropdown"
                        name="edit_department_name"
                        onChange={edithandleChange}
                        value={editValues.edit_department_name}
                        className="form-control"
                      >
                        <option value="">Select Department name</option>
                        {listnew.map(({ department_name, id }, index) => (
                          <option value={id}>{department_name}</option>
                        ))}
                      </select> </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Designation Name</label>
                      <input
                        type="text"
                        name="edit_designation_name"
                        onChange={edithandleChange}
                        value={editValues.edit_designation_name}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Designation Code</label>
                      <input
                        type="text"
                        name="edit_designation_code"
                        onChange={edithandleChange}
                        value={editValues.edit_designation_code}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                 
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Level Name</label>
                      <select id="level_id" onChange={edithandleChange} name="edit_level_type" value={editValues.edit_level_type} className="form-control">
                        <option value="">Choose Level</option>
                        <option value="level1">Level_1</option>
                        <option value="level2">Level_2</option>
                        <option value="level3">Level_3</option>
                        <option value="level4">Level_4</option>
                        <option value="level5">Level_5</option>
                        <option value="level6">Level_6</option>
                      </select>
                    </div>
                  </div>
                  

                
                
                 
                  <input type="hidden" name="bid" value={values.bid} />
                </div>
              </div>
            </div>
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" className="btn  btn-save ">
              {" "}
              Update
            </button>
            <button
              type="button"
              className="btn  btn-cancel "
              onClick={closeModalbrach}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </Modal>


      
      <TableRow className="sub-table">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
              ></Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="cal-width-40">Designation Name</TableCell>
                    <TableCell className="cal-width-40">Designation Code</TableCell>
                    <TableCell className="cal-width-40">Level</TableCell>
                    <TableCell className="cal-width-10">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.des.map((historyRow) => (
                    <TableRow key={historyRow.designation_name}>
                      <TableCell component="td" scope="row" className="cal-width-40">
                        {historyRow.designation_name}
                      </TableCell>
                      <TableCell className="cal-width-40">{historyRow.designation_code}</TableCell>
                      <TableCell className="cal-width-40">{historyRow.level_type}</TableCell>
                      <TableCell className="cal-width-10">
                        <div>
                          <a onClick={() => editDesignation(historyRow.bid)}>
                            <EditIcon className="org-edit" />
                          </a>
                          <a>
                            <DeleteIcon
                              onClick={(e) => deletebranches(e, historyRow.bid)}
                              className="org-delete"
                            />
                          </a>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}







export default function Department() {
  const [rows, setRows] = useState([]);
  const { row, onClickBranchEdit } = props;
  const [listnew, setListnew] = useState([]);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);


  const [isOpenMobOrgModal, setIsOpenMobOrgModal] = useState(false);
  const [values, SetValues] = useState({
    org_name: "",
    org_code: "",
    branch_name: "",
    branch_code: "",
    // department_code: "",
    // department_name:"",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };
  const updateOrganization = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8000/api/update_organization",
      values
    );
    alert("Organization updated successfully");
  };
  const updateBranch = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8000/api/update_branch",
      values
    );
    alert("Branch updated successfully");
  };
  function afterOpenModalbrach() {}
  function afterOpenModal() {}
  
  useEffect(() => {
    fetchData();
  },[]);
 
  const fetchData = async () => {
    const res = await axios.get(
      "http://localhost:8000/api/getDepartmentValues"
    );

    const org = res.data.org;

    setRows(org);
  };


  
  function closeModalbrach() {
    setIsOpen(false);
    
  
  }

  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Department </header>
      <section className="main-content-area">
        <div className="main-content-area-inner">
          <div className="sub-head organization-sub-head">
            {" "}
            Department Details
            <div className="top-right-outer add-btn-div organization-top-rt">
              <div className="organization-button">
                <AddDepartment method={fetchData} />
              </div>
              <div className="organization-button">
                <AddDesignation method={fetchData}/>
              </div>
            </div>
          </div>


          {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModalbrach}
        onRequestClose={closeModalbrach}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={updateBranch} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4>Edit Branches </h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModalbrach} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div className="row addabrch-content-box">
              <div className="col-md-12">
                <div className="row ">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Branch Name</label>
                      <input
                        type="text"
                        name="branch_name"
                        onChange={handleChange}
                        value={values.branch_name}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Branch Code</label>
                      <input
                        type="text"
                        name="branch_code"
                        onChange={handleChange}
                        value={values.branch_code}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Company Name</label>

                      <select
                        id="dropdown"
                        name="branch_company"
                        onChange={handleChange}
                        value={values.branch_company}
                        className="form-control"
                      >
                        {listnew.map(({ org_name, id }, index) => (
                          <option value={id}>{org_name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Branch Type</label>
                      <input
                        type="text"
                        name="branch_type"
                        onChange={handleChange}
                        value={values.branch_type}
                        className="form-control"
                        placeholder="Development Center"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Location</label>
                      <input
                        type="text"
                        name="branch_location"
                        onChange={handleChange}
                        value={values.branch_location}
                        className="form-control"
                        placeholder="Development Center"
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Date of Establishment
                      </label>
                      <input
                        type="date"
                        name="branch_date"
                        onChange={handleChange}
                        value={values.branch_date}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Brach Landline
                      </label>
                      <input
                        type="text"
                        name="branch_landline"
                        onChange={handleChange}
                        value={values.branch_landline}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email</label>
                      <input
                        type="email"
                        name="branch_email"
                        onChange={handleChange}
                        value={values.branch_email}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <input type="hidden" name="b_id" value={values.b_id} />
                </div>
              </div>
            </div>
          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" className="btn  btn-save ">
              {" "}
              Update
            </button>
            <button
              type="button"
              className="btn  btn-cancel "
              onClick={closeModalbrach}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </Modal> */}


        
          <div className="col-md-12 job-main-tb-outer">
            <TableContainer
              component={Paper}
              className="organazation-new-table   organazation-table-inner-tb department-table"
            >
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell className="cal-width-40">Department Name</TableCell>
                    <TableCell className="cal-width-40">Department Code</TableCell>
                    <TableCell className="cal-width-10">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row
                      key={row.name}
                      row={row}
                      // onClickBranchEdit={onClickBranchEdit}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="accrodion-mob-outer">
            <Accordion preExpanded={"a"} className="job-accrodion">
              {rows.map((org_data) => {
                return (
                  <div>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading className="accordion-active-status">
                        <AccordionItemButton className="accordion-active-branch">
                          {org_data.des.map((branch_data) => {
                            return (
                              <>
                                <div className="width-25 org-box-rsp-pad">
                                  <Card>
                                    <Card.Content className="emplyee-card-top">
                                      <Card.Header className="profile-name org-name">
                                        <span>{org_data.org_name}</span>
                                      </Card.Header>
                                      <Card.Description className="profile-content">
                                        <div className="inner-section">
                                          <div className="left">
                                          Department Name
                                          </div>
                                          <div className="right">
                                          test
                                          </div>
                                        </div>
                                        <div className="inner-section">
                                          <div className="left">
                                          Department Code
                                          </div>
                                          <div className="right">
                                            {branch_data.branch_name}
                                          </div>
                                        </div>
                                        <div className="inner-section">
                                          <div className="left">Place name</div>
                                          <div className="right">
                                            {branch_data.branch_location}
                                          </div>
                                        </div>
                                        {/* <div className="inner-section">
                                          <div className="left">
                                            Total Experience
                                          </div>
                                          <div className="right">10.5</div>
                                        </div>
                                        <div className="inner-section">
                                          <div className="left">Department</div>
                                          <div className="right">Python</div>
                                        </div> */}
                                      </Card.Description>
                                    </Card.Content>
                                    <Card.Content
                                      extra
                                      className="profile-card-bottom"
                                    >
                                      <div className="profile-location"></div>
                              
                                    </Card.Content>
                                  </Card>
                                </div>
                              </>
                            );
                          })}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                    </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
        </div>{" "}
      </section>
    </main>
  );
}

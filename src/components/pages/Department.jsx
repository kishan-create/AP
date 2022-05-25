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

import { Card, Icon, Image } from "semantic-ui-react";

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
  const { row, onClickBranchEdit } = props;
  const [open, setOpen] = React.useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);
  const [listnew, setListnew] = useState([]);
  const [values, SetValues] = useState({
    org_name: "",
    org_code: "",
    branch_name: "",
    branch_code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }
  function closeModalbrach() {
    setModalState(false);
    window.location.reload();
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
    const org_id = id;
    const reponse = await axios.get(
      `http://localhost:8000/api/editfecthorgdata/${org_id}`
    );
    // setIsOpen(true);
    if (reponse.data.status == 200) {
      SetValues({
        org_name: reponse.data.org.org_name,
        org_code: reponse.data.org.org_code,
        id: reponse.data.org.id,
      });
      setIsOpen(true);
    }
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
  const deleteOrganization = async (e, id) => {
    const thisclickrow = e.currentTarget;
    thisclickrow.innerText = "Deleting";
    const res = await axios.delete(
      `http://localhost:8000/api/delete_organization/${id}`
    );
    if (res.data.status == 200) {
      thisclickrow.closest("tr").remove();
      console.log(res.data.message);
    }
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
  const getCompanyName = async () => {
    const response = await fetch(
      "http://localhost:8000/api/getOrgnaizationname"
    );
    const data = await response.json();

    const listnewtest = data.org;

    //const lo=JSON.stringify(listnew);

    setListnew(listnewtest);
  };
  return (
    <React.Fragment>


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
            <a href="">
              <DeleteIcon
                onClick={(e) => deleteOrganization(e, row.id)}
                className="org-delete"
              />
            </a>
          </div>
        </TableCell>
      </TableRow>
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
                          <a onClick={() => onClickBranchEdit(historyRow.bid)}>
                            <EditIcon className="org-edit" />
                          </a>
                          <a href="">
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
  const [isOpenMobOrgModal, setIsOpenMobOrgModal] = useState(false);
  const [values, SetValues] = useState({
    org_name: "",
    org_code: "",
    branch_name: "",
    branch_code: "",
    
  });
  const fetchData = async () => {
    const res = await axios.get(
      "http://localhost:8000/api/getDepartmentValues"
    );

    const org = res.data.org;

    setRows(org);
  };
  useEffect(() => {
    fetchData();
  }, []);


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

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
import Addbranches from "./Addbranches";
import Editbranches from "./Editbranches";
import Addorganization from "./Addorgaization";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { location } from "../../images";
import Modal from "react-modal";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Addstream from "./Addstream";
import Addsubstream from "./Addsubstream";
import Streamingmapping from "./Streamingmapping";
import AddmappingStream from "./AddmappingStream";


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import axios from "axios";

function createData(
  org_name: string,
  org_code: number,
  org_type: number,
  org_location: number,
  protein: number,
  price: number
) {
  return {
    org_name,
    org_code,
    org_type,
    org_location,
    protein,
    price,
    branch: [
      {
        branch_name: "Encaps",
        branch_code: "	DPC",
        branch_type: "Organization Center",
        branch_location: "cochin",
      },
      {
        branch_name: "Encaps",
        branch_code: "	DPC",
        branch_type: "Organization Center",
        branch_location: "cochin",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    getCompanyName();
  }, []);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);
  const [listnew, setListnew] = useState([]);
  const [values, SetValues] = useState({
    org_name: "",
    org_code: "",
    org_type: "",
    org_category: "",
    org_location: "",
    org_registration: "",
    branch_name: "",
    branch_code: "",
    branch_company: "",
    branch_type: "",
    branch_location: "",
    branch_date: "",
    branch_landline: "",
    branch_email: "",
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
  }
  function closeModalbrach() {
    setModalState(false);
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
        org_type: reponse.data.org.org_type,
        org_category: reponse.data.org.org_category,
        org_location: reponse.data.org.org_location,
        org_registration: reponse.data.org.org_registration,
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
  
  Modal.setAppElement('#root');
  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal"
      >
        <form onSubmit={updateOrganization} className="form" noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4>Employe Mapping</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row addabrch-content-box">
              <div class="col-md-12 ">
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="width-50">Employee Name</TableCell>
                    <TableCell> Employee Code</TableCell>
                     
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.substream.map((historyRow) => (
                    <TableRow key={historyRow.bid}>
                      
                      <TableCell>Akhil</TableCell>
                      <TableCell>BS0034</TableCell>
                       
                      <TableCell>
                      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                        
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
        <TableCell component="th" scope="row">
          {row.stream_name}
        </TableCell>
        
        <TableCell>
       
          <div>
          {(() => {
              if (row.substream.length >0){
                  return (
                    <Streamingmapping id={row.id} stream_name={row.stream_name} />
                  )
              }
              else {
                return(
                  <AddmappingStream  />
                )
              }
              
             
            })()}
          
           
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
                    <TableCell>Sub stream Name</TableCell>
                    
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.substream.map((historyRow) => (
                    <TableRow key={historyRow.bid}>
                      <TableCell component="td" scope="row">
                        {historyRow.sub_stream_name}
                      </TableCell>
                    
                     
                      <TableCell>
                        <div>
                          <a onClick={() => editbranch(historyRow.bid)}>
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

export default function Streamsettings() {
  const [rows, setRows] = useState([]);
  // const [branch, setBranch] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/api/getStreamValues");
    const stream = res.data.stream;
    // const branch = res.data.branch;
    // setBranch(branch);
    setRows(stream);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  //debugger;

  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Stream Settings</header>
      <section className="main-content-area">
        <div className="main-content-area-inner">
          <div className="sub-head organization-sub-head">
            {" "}
            Stream Details
            <div className="top-right-outer add-btn-div organization-top-rt">
              <div className="organization-button">
                <Addstream method={fetchData} />
              </div>
              <div className="organization-button">
                <Addsubstream method={fetchData} />
              </div>
            </div>
          </div>
          <div className="col-md-12 job-main-tb-outer">
            <TableContainer
              component={Paper}
              className="organazation-new-table   organazation-table-inner-tb"
            >
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Stream Name1</TableCell>
                    
                    <TableCell>Action</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
               
                  {rows.map((row) => (
                    <Row key={row.id} row={row} />
                  ))}

                  {/* {branch.map((branch) => (
                    <branch key={branch.name} branch={branch} />
                  ))} */}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="accrodion-mob-outer">
            <Accordion preExpanded={"a"} className="job-accrodion">
              {/* {row.branch.map((historyRow) => ( */}
              {rows.map((stm_data) => {
                return (
                  <div>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading className="accordion-active-status">
                        <AccordionItemButton>
                          <div className="accordion-head-text">
                            <div className="name notificatio-outer">
                              
                            </div>
                            <div className="desi joblocation">
                              <img src={location} />
                              <span>{stm_data.stream_name}</span>
                            </div>
                          </div>{" "}
                          <div className="col-4 acc-status-change">
                            <div class="active-status-style">ENC</div>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        {stm_data.substream.map((sub_data) => {
                          return (
                            <>
                              <div className="accord-detals-box">
                                <div className="left">Branch Name </div>
                                <div className="right">
                                  {sub_data.sub_stream_name}
                                </div>
                              </div>
                              <div className="accord-detals-box">
                                <div className="left">Branch Code </div>
                                <div className="right">
                                  :{sub_data.sub_stream_name}{" "}
                                </div>
                              </div>
                              <div className="accord-detals-box">
                                <div className="left">Branch Type </div>
                                <div className="right">
                                  :{sub_data.sub_stream_name}{" "}
                                </div>
                              </div>
                              <div className="accord-detals-box">
                                <div className="left">Location </div>
                                <div className="right">
                                  : {sub_data.sub_stream_name}
                                </div>
                              </div>

                              <div className="accord-detals-box">
                                <div className="accordion-bottom-button">
                                  <div className="more-button">View</div>
                                  <div className="more-button more-outer">
                                    Edit
                                  </div>
                                  <div className="more-button more-outer">
                                    Delete
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </AccordionItemPanel>
                    </AccordionItem>
                  </div>
                );
              })}

              {/* <AccordionItem uuid="b">
                <AccordionItemHeading className="accordion-inactive-status">
                  <AccordionItemButton>  <div className="accordion-head-text">
                    <div className="name notificatio-outer">Bourntec</div>
                    <div className="desi joblocation">
                      <img src={location} />
                      <span>Bhuvaneshwar</span>
                    </div>
                  </div>   <div className="col-4 acc-status-change">
                      <div class="active-status-style">BNC</div>
                    </div></AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="accord-detals-box">
                    <div className="left">Branch Name	</div>
                    <div className="right">: Bourntec</div>
                  </div>
                  <div className="accord-detals-box">
                    <div className="left">Branch Code	 </div>
                    <div className="right">: BNC</div>
                  </div>
                  <div className="accord-detals-box">
                    <div className="left">Branch Type		 </div>
                    <div className="right">: Development Center	</div>
                  </div>
                  <div className="accord-detals-box">
                    <div className="left">Location	 </div>
                    <div className="right">: Kochi</div>
                  </div>
                  <div className="accord-detals-box">
                    <div className="accordion-bottom-button">
                      <div className="more-button">View</div>
                      <div className="more-button more-outer">Edit</div>
                      <div className="more-button more-outer">Delete</div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
 */}
            </Accordion>
          </div>
        </div>{" "}
      </section>
    </main>
  );
}

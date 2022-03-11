import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReactDOM from 'react-dom';
import Addbranches from './Addbranches';
import Editbranches from './Editbranches';
import Addorganization from './Addorgaization';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { location } from '../../images';
import Modal from 'react-modal';
import { MdClose } from "@react-icons/all-files/md/MdClose";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import axios from 'axios';

function createData(
  org_name: string,
  org_code: number,
  org_type: number,
  org_location: number,
  protein: number,
  price: number,
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
        branch_name: 'Encaps',
        branch_code: '	DPC',
        branch_type: 'Organization Center',
        branch_location: 'cochin',

      },
      {
        branch_name: 'Encaps',
        branch_code: '	DPC',
        branch_type: 'Organization Center',
        branch_location: 'cochin',



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
    org_name: '',
    org_code: '',
    org_type: '',
    org_category: '',
    org_location: '',
    org_registration: '',
    branch_name: '',
    branch_code: '',
    branch_company: '',
    branch_type: '',
    branch_location: '',
    branch_date: '',
    branch_landline: '',
    branch_email: ''
  });

  const handleChange = e => {
    const { name, value } = e.target
    SetValues({
      ...values,
      [name]: value,
    })
  };

  function closeModal() {
    setIsOpen(false);
   
  }
  function closeModalbrach() {
    setModalState(false);
  
  }
  function afterOpenModalbrach() {

  }
  function afterOpenModal() {

  }
  const editbranch = async (id) => {
    const branch_id = id;
    const reponse = await axios.get(`http://localhost:8000/api/editfecthbranchdata/${branch_id}`);
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
        b_id: reponse.data.branch.id
      })
      setModalState(true);
    }

    //setModalState(true);
  }
  const edit = async (id) => {

    const org_id = id;
    const reponse = await axios.get(`http://localhost:8000/api/editfecthorgdata/${org_id}`);
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
      })
      setIsOpen(true);
    }
  }
  const updateOrganization = async (e) => {
    e.preventDefault();
    const res = await axios.put('http://localhost:8000/api/update_organization', values);
    alert("Organization updated successfully");
  }
  const updateBranch = async (e) => {
    e.preventDefault();
    const res = await axios.put('http://localhost:8000/api/update_branch', values);
    alert("Branch updated successfully");
  }
  const deleteOrganization = async (e, id) => {
    const thisclickrow = e.currentTarget;
    thisclickrow.innerText = "Deleting";
    const res = await axios.delete(`http://localhost:8000/api/delete_organization/${id}`);
    if (res.data.status == 200) {
      thisclickrow.closest("tr").remove();
      console.log(res.data.message);
    }
  }
  const deletebranches = async (e, id) => {
    e.preventDefault();
    const thisclickrow = e.currentTarget;
    thisclickrow.innerText = "Deleting";
    const res = await axios.delete(`http://localhost:8000/api/delete_branches/${id}`);
    if (res.data.status == 200) {
      thisclickrow.closest("tr").remove();
      alert("Branch Deleted successfully")
    }
  }
  const getCompanyName = async () => {
    const response = await fetch("http://localhost:8000/api/getOrgnaizationname");
    const data = await response.json();

    const listnewtest = data.org;

    //const lo=JSON.stringify(listnew);

    setListnew(listnewtest);

  }
  return (
    <React.Fragment>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal" >
        <form onSubmit={updateOrganization} className='form' noValidate>

          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 >Edit Organization</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row addabrch-content-box">
              <div class="col-md-12">
                <div class="row ">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">org Name</label>
                      <input name="org_name" type="text" onChange={handleChange} value={values.org_name} class="form-control" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">org Code</label>
                      <input name="org_code" type="text" onChange={handleChange} value={values.org_code} class="form-control" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Company Type</label>
                      <input name="org_type" type="text" onChange={handleChange} value={values.org_type} class="form-control" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Category</label>
                      <select id="dropdown" name="org_category" onChange={handleChange} value={values.org_category} class="form-control">
                        <option value="">Choose your Category</option>
                        {options.map((element, index) => <option value={element} key={index}>{element}</option>)}
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Organization Registration</label>
                      <input name="org_registration" type="text" class="form-control" onChange={handleChange} value={values.org_registration} placeholder="Development Center" ></input>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Location</label>
                      <input name="org_location" type="text" onChange={handleChange} value={values.org_location} class="form-control" placeholder="Development Center" ></input>
                    </div>
                  </div>



                  <input type="hidden" name="id" value={values.id} />


                </div>
              </div>
            </div>

          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save "  > Update</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal} > Cancel </button>
          </div>

        </form>
      </Modal>
      <Modal
        isOpen={modalState}
        onAfterOpen={afterOpenModalbrach}
        onRequestClose={closeModalbrach}
        className="job-detils-modal"
        contentLabel="Example Modal" >
        <form onSubmit={updateBranch} className='form' noValidate>

          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 >Edit Branches1</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModalbrach} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row addabrch-content-box">
              <div class="col-md-12">
                <div class="row ">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Branch Name</label>
                      <input type="text" name="branch_name" onChange={handleChange} value={values.branch_name} class="form-control" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Branch Code</label>
                      <input type="text" name="branch_code" onChange={handleChange} value={values.branch_code} class="form-control" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Company Name</label>

                      <select id="dropdown" name="branch_company" onChange={handleChange} value={values.branch_company} class="form-control">

                        {listnew.map(({ org_name, id }, index) =>
                          <option value={id} >{org_name}</option>
                        )}
                      </select>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Branch Type</label>
                      <input type="text" name="branch_type" onChange={handleChange} value={values.branch_type} class="form-control" placeholder="Development Center" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Location</label>
                      <input type="text" name="branch_location" onChange={handleChange} value={values.branch_location} class="form-control" placeholder="Development Center" ></input>

                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Date of Establishment</label>
                      <input type="date" name="branch_date" onChange={handleChange} value={values.branch_date} class="form-control" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Brach Landline</label>
                      <input type="text" name="branch_landline" onChange={handleChange} value={values.branch_landline} class="form-control" ></input>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Email</label>
                      <input type="email" name="branch_email" onChange={handleChange} value={values.branch_email} class="form-control" ></input>

                    </div>
                  </div>
                  <input type="hidden" name="b_id" value={values.b_id} />

                </div>
              </div>
            </div>

          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save "  > Update</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModalbrach} > Cancel </button>
          </div>

        </form>
      </Modal>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
          {row.org_name}
        </TableCell>
        <TableCell >{row.org_code}</TableCell>
        <TableCell >{row.org_type}</TableCell>
        <TableCell>{row.org_location}</TableCell>
        <TableCell><div>
          <a onClick={() => edit(row.id)}><EditIcon className="org-edit" /></a>
          <a href="">
            <DeleteIcon onClick={(e) => deleteOrganization(e, row.id)} className="org-delete" /></a></div></TableCell>
      </TableRow>
      <TableRow className="sub-table" >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">

              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Branch Name</TableCell>
                    <TableCell>	Branch Code</TableCell>
                    <TableCell >Branch Type</TableCell>
                    <TableCell >Location</TableCell>
                    <TableCell >Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>



                  {row.branch.map((historyRow) => (
                    <TableRow key={historyRow.branchname}>
                      <TableCell component="td" scope="row">
                        {historyRow.branch_name}
                      </TableCell>
                      <TableCell>{historyRow.branch_code}</TableCell>
                      <TableCell >{historyRow.branch_type}</TableCell>
                      <TableCell >
                        {historyRow.branch_location}
                      </TableCell>
                      <TableCell><div>
                        <a onClick={() => editbranch(historyRow.bid)}><EditIcon className="org-edit" /></a>
                        <a href="">
                          <DeleteIcon onClick={(e) => deletebranches(e, historyRow.bid)} className="org-delete" /></a></div></TableCell>
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

const rowsold = [
  createData('Encaps', 'DPC', 'Bourntec Solutions', 'Cochin',
    <div><a href=""><EditIcon className="org-edit" /></a>
      <a href=""><DeleteIcon className="org-delete" /></a></div>),
  createData('Encaps', 'DPC', 'Bourntec Solutions', 'Cochin',
    <div><a href=""><EditIcon className="org-edit" /></a>
      <a href=""><DeleteIcon className="org-delete" /></a></div>),
  createData('Encaps', 'DPC', 'Bourntec Solutions', 'Cochin',
    <div><a href=""><EditIcon className="org-edit" /></a>
      <a href=""><DeleteIcon className="org-delete" /></a></div>),

];

export default function Organizationold() {
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/api/getOrganizationvalues");
    const org = res.data.org;

    setRows(org);
  }
  useEffect(() => {
    fetchData();

  }, []);


  //debugger;

  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Organization Branches </header>
      <section className="main-content-area">
        <div className="main-content-area-inner">
          <div className="sub-head organization-sub-head"> Branch Details -
            <div className="top-right-outer add-btn-div organization-top-rt">
              <div className="organization-button" >
                <Addorganization method={fetchData} />
              </div>
              <div className="organization-button">
                <Addbranches method={fetchData}/>
              </div>
            </div>
          </div>
          <div className="col-md-12 job-main-tb-outer">
            <TableContainer component={Paper} className="organazation-new-table   organazation-table-inner-tb">
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Organization Name</TableCell>
                    <TableCell>Organization Code</TableCell>
                    <TableCell>Organization Type</TableCell>
                    <TableCell >Location</TableCell>
                    <TableCell >Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.name} row={row} />

                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="accrodion-mob-outer">
            <Accordion preExpanded={"a"} className="job-accrodion">
              <AccordionItem uuid="a">
                <AccordionItemHeading className="accordion-active-status">
                  <AccordionItemButton >
                    <div className="accordion-head-text">
                      <div className="name notificatio-outer">Encaps
                      </div>
                      <div className="desi joblocation">
                        <img src={location} />
                        <span>Kakkanad</span>
                      </div>
                    </div>   <div className="col-4 acc-status-change">
                      <div class="active-status-style">ENC</div>
                    </div></AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="accord-detals-box">
                    <div className="left">Branch Name	</div>
                    <div className="right">: Encaps</div>
                  </div>
                  <div className="accord-detals-box">
                    <div className="left">Branch Code	 </div>
                    <div className="right">: ENC</div>
                  </div>
                  <div className="accord-detals-box">
                    <div className="left">Branch Type		 </div>
                    <div className="right">: Organization Center	</div>
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

              <AccordionItem uuid="b">
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


            </Accordion>
          </div>

        </div>    </section>
    </main>
  );
}

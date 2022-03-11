import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin } from "react-icons/md";
import { withStyles } from '@material-ui/core/styles';
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Jobdetailsmodal from "./Jobdetailsmodal";
import { location, PencilNew, DeferTime, Hireprogress, Hirestatred, Hirecompleted } from '../../images';
import { profilei, } from '../../images/profilei.svg';
import Addorganization from './Addorgaization';
import Addbranches from './Addbranches';
import axios from 'axios';
import Modal from 'react-modal';
import { MdClose } from "@react-icons/all-files/md/MdClose";
import TableContainer from '@mui/material/TableContainer';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

let id = 0;
function createData(JobId, CandidateName, Department, Post, JoiningDate, ReleaseDate, Location, Contact, action) {
  id += 1;
  return { JobId, CandidateName, Department, Post, JoiningDate, ReleaseDate, Location, Contact, action };
}

const data = [
  createData('0101', 'Shanu K', 'JAVA', 'Java Developer', '12/02/2022', '30/12/2021', 'Cochin', '000000000', ''),
  createData('0101', 'Shanu K', 'JAVA', 'Java Developer', '12/02/2022', '30/12/2021', 'Cochin', '000000000', ''),
  createData('0101', 'Manju Mathew', 'JAVA', 'Java Developer', '12/02/2022', '30/12/2021', 'Cochin', '000000000', ''),
];


export default class OfferReleasereport extends Component {
  constructor() {
    super();
    this.state = {
      release_data: [],
      candidatelog: [],
      modalIsOpen: false,
      modalIsOpenedit: false,
      modalIsStatus:false,
      formData: {
        edit_release_date: '',
        edit_release_id: '',
        edit_basic_column_name:'Release',
        e_name:'',
        e_id:'',
        e_email:'',
        e_joining_date:'',
        e_designation:'',
        e_c_id:'',

      }
    };
    this.closeModal = this.closeModal.bind(this);
    this.closeModaledit = this.closeModaledit.bind(this);
    this.closeModalstatus = this.closeModalstatus.bind(this);
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  closeModaledit() {
    this.setState({ modalIsOpenedit: false });
  }
  closeModalstatus(){
    this.setState({ modalIsStatus: false });
  }
  handleChangeRelease = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };
  async componentDidMount() {
    this.getDetails();
  }
  async getDetails()
  {
    const res = await axios.get("http://localhost:8000/api/getcandidates_release_details");
    // console.log(res.data.users)
    if (res.data.status === 200) {
      this.setState({
        release_data: res.data.users,
        loading: false,
      });
    }
  }
  async Viewlog(id) {
    const response = await axios.get(`http://localhost:8000/api/viewlog/${id}`);
    if (response.data.status == 200) {
      this.setState({
        candidatelog: response.data.log,
        modalIsOpen: true
      })
    }


  }
  async ViewEmployeeStatus(id)
  {
    const response = await axios.get(`http://localhost:8000/api/editfetchCandidatestatusdata/${id}`);
    console.log(response.data.users);
   this.setState({
    modalIsStatus:true,
    formData:{
      e_name: response.data.users[0].name,	
      edit_release_id: response.data.users[0].offer_id,
      e_c_id: response.data.users[0].id	,
      e_joining_date: response.data.users[0].offer_release_date,
      e_id: response.data.users[0].empcode
    } 
   })
  }
  async editLog(id) {
    const reponse = await axios.get(`http://localhost:8000/api/editfetchCandidatefulldata/${id}`)
    if(reponse.data.status==200)
      {
       
    this.setState({
      modalIsOpenedit: true,
      formData:{
        edit_release_date:reponse.data.users[0].offer_release_date,	
        edit_release_id:reponse.data.users[0].offer_id	
      }
    })
  }
  }
  updaterelease = async(e) =>
  {
  
    e.preventDefault();
   const res=await axios.post('http://localhost:8000/api/Updateboarddetails',this.state.formData);
  if(res.data.status==200)
  {
    alert("data updated successfully");
    this.setState({
      modalIsOpenedit: false,
    })

  }
   
  };
  addEmpolyeeFirst = async(e) =>
  {
  
    e.preventDefault();
   const res=await axios.post('http://localhost:8000/api/Addemployee',this.state.formData);
  if(res.data.status==200)
  {
    alert("data updated successfully");
    this.setState({
      modalIsStatus: false,
    })
    this.getDetails();

  }
   
  };


  render() {

    return (
      <div>
        <Modal
          isOpen={this.state.modalIsStatus}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModalstatus}
          className="job-detils-modal addabrch-modal"
          contentLabel="Example Modal" >
          <form onSubmit={this.addEmpolyeeFirst} className='form' noValidate>

            <div className="popup-head-sty modal-button-bg">
              <div className="popup-head-content-sty">
                <h4 >Add Employee Status</h4>
              </div>
              <div className="popup-head-icon-sty">
                <MdClose className="popup-close-btn" onClick={this.closeModaledit} />
              </div>
            </div>
            <div className="popup-content-bg">
              <div class="row addabrch-content-box">
                <div class="col-md-12">
                  <div class="row ">
                  <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Employee name</label>
                      <input type="text" name="e_name" onChange={this.handleChangeRelease} value={this.state.formData.e_name} class="form-control" />


                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Employee ID</label>
                      <input type="text" name="e_id" onChange={this.handleChangeRelease} value={this.state.formData.e_id} class="form-control" />


                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Employee Email</label>
                      <input type="email" name="e_email"  onChange={this.handleChangeRelease}  class="form-control" />


                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Joining Date</label>
                      <input type="date" name="e_joining_date"   onChange={this.handleChangeRelease} value={this.state.formData.e_joining_date} class="form-control" />


                      </div>
                    </div>

                    <input type="hidden" name="edit_release_id"  onChange={this.handleChangeRelease} value={this.state.formData.edit_release_id} class="form-control"   ></input>







                  </div>
                </div>
              </div>

            </div>
            <div className=" modal-footer-button-bg">
              <button type="submit" class="btn  btn-save "  > Add</button>
              <button type="button" class="btn  btn-cancel " onClick={this.closeModalststua} > Cancel </button>
            </div>

          </form>

        </Modal>
        <Modal
          isOpen={this.state.modalIsOpenedit}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModaledit}
          className="job-detils-modal addabrch-modal"
          contentLabel="Example Modal" >
          <form onSubmit={this.updaterelease} className='form' noValidate>

            <div className="popup-head-sty modal-button-bg">
              <div className="popup-head-content-sty">
                <h4 >Edit Organization</h4>
              </div>
              <div className="popup-head-icon-sty">
                <MdClose className="popup-close-btn" onClick={this.closeModaledit} />
              </div>
            </div>
            <div className="popup-content-bg">
              <div class="row addabrch-content-box">
                <div class="col-md-12">
                  <div class="row ">


                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Joinng Date and Time</label>
                        <input type="date" name="edit_release_date" onChange={this.handleChangeRelease} value={this.state.formData.edit_release_date} class="form-control" ></input>

                      </div>
                    </div>

                    <input type="hidden" name="edit_release_id" onChange={this.handleChangeRelease} value={this.state.formData.edit_release_id} class="form-control"   ></input>







                  </div>
                </div>
              </div>

            </div>
            <div className=" modal-footer-button-bg">
              <button type="submit" class="btn  btn-save "  > Update</button>
              <button type="button" class="btn  btn-cancel " onClick={this.closeModaledit} > Cancel </button>
            </div>

          </form>

        </Modal>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="job-detils-modal addabrch-modal"
          contentLabel="Example Modal" >


          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 >View Log</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={this.closeModal} />
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Log Status</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Whom</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.candidatelog.map((row) => (
                  <TableRow
                    key={row.status_name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.status_name}
                    </TableCell>
                    <TableCell align="right">{row.created_at}</TableCell>
                    <TableCell align="right">{row.whom}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>



        </Modal>
        <main className="inner-content-box">
          <header className="main-otrer-top"> Recruitment </header>
          <section className="main-content-area">
            <div className="main-content-area-inner">
              <div className="sub-head organization-sub-head">Onboarding
                <div className="top-right-outer add-btn-div onboar-main-top-right">
                  <div className="offer-release-top">
                    <input className="form-control" type="text" id=" " name=" " placeholder="Search " />
                    <button type="button"> <FaSearch className="add-btn-icon" /></button>
                  </div>
                  <div className="buttons-outer">
                    <a href="Addassets" className="blue-button">
                      Export
                    </a>
                  </div>


                </div>
              </div>

              <div className='onboarding-top-outer'>
                <div className='box'>
                  <div className="box-inner">
                    <div className='left'>
                      <p>New Hire Inprogress</p>
                      <span>50</span>
                    </div>
                    <img src={Hireprogress} />
                  </div>
                  <div className="box-inner onboard-ligt-gray">
                    <div className='left'>
                      <p>Onboarding Started</p>
                      <span>110</span>
                    </div>
                    <img src={Hirestatred} />
                  </div>
                  <div className="box-inner onboard-ligt-blue">
                    <div className='left'>
                      <p>Onboarding Completed</p>
                      <span>90</span>
                    </div>
                    <img src={Hirecompleted} />
                  </div>
                </div>

              </div>
              <div className='onboard-top-select-outer'>
                <div className='select'>
                  <div className='select-inner'>
                    <div className='left'>Joining</div>
                    <select id="dropdown" class="form-control"><option value="Status">Today</option></select>
                  </div>
                  <div className='select-inner'>
                    <div className='left'>Status</div>
                    <select id="dropdown" class="form-control"><option value="Status">Onboarding Statared</option></select>
                  </div>
                  <div className='select-inner'>
                    <div className='left'>Sort By</div>
                    <select id="dropdown" class="form-control"><option value="Status">Joining Date</option></select>
                  </div>
                </div>

              </div>


              <div className="col-md-12 job-main-tb-outer">
                <Paper className="recruitment-table-outer job-outer organazation-table-top">
                  <Table className="recruitment-tabele">
                    <TableHead>

                      <TableRow>

                        <TableCell className="width-15">Job Offer ID</TableCell>
                        <TableCell className="width-15">Candidate Name</TableCell>
                        <TableCell className="width-15">Post</TableCell>
                        <TableCell className="width-12">Joining Date</TableCell>
                        <TableCell className="width-15">Location</TableCell>
                        <TableCell className="width-15">Status</TableCell>
                        <TableCell className="width-20 offer-map-width ">Action</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        this.state.release_data.map(n => {
                          
                          return (
                            <TableRow key={n.id} >
                              <TableCell className="width-15"> {n.offer_code}</TableCell>
                              <TableCell numeric className="width-15">{n.name}</TableCell>
                              <TableCell numeric className=" width-15">{n.post} </TableCell>
                              <TableCell numeric className="width-12">{n.offer_release_date}</TableCell>
                              <TableCell numeric className="width-15">{n.location}</TableCell>
                              <TableCell numeric className="width-15">
                             
                              <div className="emp-edit-new-icon ">
                              {n.emp_status == 0?  <input type="checkbox" name="empstatus" onClick={() => this.ViewEmployeeStatus(n.id)}  />: <input type="checkbox" checked   /> }
                             
                              </div>
                              </TableCell>
                              <TableCell numeric className="width-20 inprogress-td offer-map-width">
                                <div className="emp-map-iocn-outer">
                                  
                                  <div class="inprograss-style emp-map-outer">EMP Mapping</div>

                                  <div className="emp-edit-new-icon ">

                                    <img onClick={() => this.editLog(n.id)} src={PencilNew} />


                                  </div>
                                  <div className="emp-defer-icon ">

                                    <img onClick={() => this.Viewlog(n.id)} src={DeferTime} />

                                  </div>


                                </div>

                              </TableCell>
                            </TableRow>

                          );
                        })}



                    </TableBody>
                  </Table>

                </Paper>
              </div>

              <div className="accrodion-mob-outer">
                <Accordion preExpanded={"a"} className="job-accrodion">
                  <AccordionItem uuid="a">
                    <AccordionItemHeading className="accordion-active-status">
                      <AccordionItemButton >
                        <div className="accordion-head-text">
                          <div className="name notificatio-outer">Shanu K
                          </div>
                          <div className="desi joblocation">
                            000000000
                          </div>
                        </div>   <div className="col-4 acc-status-change">
                          <div class="active-status-style">0101</div>
                        </div></AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="accord-detals-box">
                        <div className="left">Department</div>
                        <div className="right">: Java </div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">POST</div>
                        <div className="right">: Java Developer</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Joining Date </div>
                        <div className="right">: 12/02/2022</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Release Date </div>
                        <div className="right">: 30/12/2021</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Location </div>
                        <div className="right">: Kochin</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="accordion-bottom-button Offer-release-bt-buttons">
                          <div className="more-button mapping-button">EMP Mapping</div>
                          <div className="more-button more-outer">Edit</div>
                          <div className="more-button more-outer">Defer</div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading className="accordion-active-status">
                      <AccordionItemButton >
                        <div className="accordion-head-text">
                          <div className="name notificatio-outer">Linto
                          </div>
                          <div className="desi joblocation">
                            000000000
                          </div>
                        </div>   <div className="col-4 acc-status-change">
                          <div class="active-status-style">0101</div>
                        </div></AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="accord-detals-box">
                        <div className="left">Department</div>
                        <div className="right">: Java </div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">POST</div>
                        <div className="right">: Java Developer</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Joining Date </div>
                        <div className="right">: 12/02/2022</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Release Date </div>
                        <div className="right">: 30/12/2021</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="left">Location </div>
                        <div className="right">: Kochin</div>
                      </div>
                      <div className="accord-detals-box">
                        <div className="accordion-bottom-button Offer-release-bt-buttons">
                          <div className="more-button mapping-button">EMP Mapping</div>
                          <div className="more-button more-outer">Edit</div>
                          <div className="more-button more-outer">Defer</div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>


                </Accordion>
              </div>

            </div>
          </section>
        </main>
      </div>
    )
  }
}

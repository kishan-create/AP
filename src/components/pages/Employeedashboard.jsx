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
import {location, PencilNew, DeferTime, Offboarding1, Offboarding2, Offboarding3,} from '../../images';
import {profilei,  } from '../../images/profilei.svg'; 
import Addorganization from './Addorgaization';
import Addbranches from './Addbranches';
import { profileimage1, profileimage2 } from '../../images';
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
function createData(JobId, CandidateName , Department, Post, JoiningDate, ReleaseDate, Location, Contact, action) {
  id += 1;
  return { JobId, CandidateName , Department, Post, JoiningDate, ReleaseDate, Location, Contact, action };
}

const data = [
  createData('Casual leave', 'Half Day','17/01/2022', '21/01/2022', 'Reeba', 'Personal reason',  '000000000', ''),  
  createData('Earned Leave', 'Full Day','17/01/2022', '21/01/2022', 'Varun', 'Personal reason',  '000000000', ''),  
  createData('Maternity Leave', 'Multiple day','17/01/2022', '21/01/2022', 'Reeba', 'Personal reason',  '000000000', ''),  
];


  export default class Employeedashboard extends Component {
  render() {
    return (
        <main className="inner-content-box">
      <header className="main-otrer-top"> Employee </header>
             <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head organization-sub-head">  Employee Dashboard
                    <div className="top-right-outer add-btn-div onboar-main-top-right">
                              <div className="offer-release-top">
                                    <input className="form-control" type="text" id=" " name=" " placeholder="Search " />
                                    <button type="button"> <FaSearch className="add-btn-icon" /></button>
                                </div>
                                    <div className="buttons-outer">
                                        <a href="Add" className="blue-button">
                                            Export
                                        </a>
                                    </div>

                                    
                                </div>
                    </div>
                    <div  className="onboarding-top-outer"> 
                            <div  className="box-2"> 
                                <div  className="box-inner-empdash"> 
                                  <div  className="information-card-head">Basic Information
                                  </div>
                                  <div  className="row txt-row-hght border-0 employee-basic-outer"> 
                                        <div  className="col-md-4  "> 
                                              <div className="profilepic"> <img src={profileimage1} /></div>
                                              <div className="info-card-prfl-txt "> 
                                              <div className='m-b-15'>Linto Thomas </div>
                                                            <a href="Employeeprofile/1" className="blue-button empl-das-viewmore">
                                                                View More
                                                            </a> 
                                              </div>                                   
                                        </div> 
                                        <div  className="col-md-8 profile-basic-right">
                                                <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Employee Code             <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> BOS060
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Designation            <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt ">Software Engineer
                                                    </div>                                
                                              </div> 
                                             
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Company Email ID           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> linto.bourntec.com
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Contact Number           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> 9946086904
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Total Experience  <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> 9 years
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Joining Date <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> 2013-02-08
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Location <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Kochi
                                                    </div>                                
                                              </div> 
                                               
                                        </div>
                                                                    
                                  </div>
                            </div>
                            <div  className="box-inner-empdash"> 
                            <div  className="onboarding-top-outer"> 
                            <div  className="box-2"> 
                                <div  className="box-inner box-inner-emp-leave">  
                                      <div className='left'>
                                      <p>Total Attendance</p>
                                      <span>168</span>
                                      </div>
                                      <i class="fa fa-user-plus emp-attentance-icon" aria-hidden="true"></i>
                                </div>
                                <div  className="box-inner box-inner-emp-leave">  
                                      <div className='left'>
                                      <p>Absent</p>
                                      <span>05</span>
                                      </div>
                                      <i class="fa fa-user-times emp-attentance-icon" aria-hidden="true"></i>
                                </div>
                                <div  className="box-inner box-inner-emp-leave">  
                                      <div className='left'>
                                      <p>Awards</p>
                                      <span>01</span>
                                      </div>
                                      <i class="fa fa-trophy emp-attentance-icon" aria-hidden="true"></i>
                                </div>
                                <div  className="box-inner box-inner-emp-leave">  
                                      <div className='left'>
                                      <p className='m-b-15'>Leaves Overview</p>
                                      
                                      <a href="Employeeprofile/1" className="blue-button empl-das-viewmore">
                                                                Apply
                                                            </a> 
                                      </div>
                                      <i class="fa fa-paper-plane emp-attentance-icon" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                            </div>
                            </div>
                        </div>
            <div className='onboarding-top-outer'>
                <div className='box'>
                        <div className="box-inner">
                            <div className='left'>
                            <p>Projects Assigned</p>
                            <span>08</span>
                            </div>
                            <img src={Offboarding3} />
                        </div>
                        <div className="box-inner onboard-ligt-violet">
                            <div className='left'>
                            <p>Projects Completed</p>
                            <span>03</span>
                            </div>
                            <img src={Offboarding2} />
                        </div>
                        <div className="box-inner onboard-ligt-blue">
                            <div className='left'>
                            <p>Projects Inprogress</p>
                            <span>05</span>
                            </div>
                            <img src={Offboarding1} />
                        </div>
                        
                </div>

            </div>
 
<div  className="onboarding-top-outer"> 
                            <div  className="box-3"> 
                                <div  className="box-inner-empdash"> 
                                <Table className="leave-tabele m-tb-empdash">
                                        <TableHead> 
                                        <TableRow> 
                                            <TableCell className="f-16">Up Comming Holidays</TableCell>
                                            <TableCell className=" "></TableCell> 
                                        </TableRow>
                                        </TableHead>
                                        <TableBody> 
                                            <TableRow  className=" " >
                                                    <TableCell > <div className="holiday-sub-name-sty">Sivarathri</div><div className='holiday-sub-txt'>04 days to left</div>
                                                    
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty"> 
                                                        <div className="holiday-datesty">01 <br></br>Apr</div>  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                    <TableCell > <div className="holiday-sub-name-sty">Deepavali</div><div className='holiday-sub-txt'>62 days to left</div></TableCell>
                                                    <TableCell className=" holiday-name-sty"> 
                                                        <div className="holiday-datesty">14 <br></br>May</div>  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                    <TableCell > <div className="holiday-sub-name-sty">Christmas</div><div className='holiday-sub-txt'>94 days to left</div></TableCell>
                                                    <TableCell className=" holiday-name-sty"> 
                                                        <div className="holiday-datesty">25 <br></br>Dec</div>  
                                                    </TableCell>   
                                            </TableRow> 
                                        </TableBody>
                                    </Table>
                                </div>
                                <div  className="box-inner-empdash"> 
                                <Table className="leave-tabele m-tb-empdash">
                                        <TableHead> 
                                        <TableRow> 
                                            <TableCell className="f-16">Up Comming Birthdays</TableCell>
                                            <TableCell className=" "></TableCell> 
                                        </TableRow>
                                        </TableHead>
                                        <TableBody> 
                                            <TableRow  className=" " >
                                                    <TableCell > <div className='upcoming-birthday-img'><img src={profileimage2} className="m-r-15" /></div> 
                                                    <span className='upcoming-birthday-txt1'>Jennifer Kerr<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty">  
                                                    <div className="upcoming-birthday-datesty"><i class="fa fa-birthday-cake" aria-hidden="true"></i> Wish Now</div>  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                    <TableCell > <div className='upcoming-birthday-img'><img src={profileimage1} className="m-r-15"  /></div> 
                                                    <span className='upcoming-birthday-txt1'>Yadira Acklin<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty"> 
                                                        <div className="upcoming-birthday-datesty2">04 days to left</div>  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                    <TableCell > <div className='upcoming-birthday-img'><img src={profileimage2} className="m-r-15"  /></div> 
                                                    <span className='upcoming-birthday-txt1'>Jessica Johnston<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty"> 
                                                    <div className="upcoming-birthday-datesty2 ">17 days to left</div>  
                                                    </TableCell>   
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                                <div  className="box-inner-empdash"> 
                                <Table className="leave-tabele m-tb-empdash">
                                        <TableHead> 
                                        <TableRow> 
                                            <TableCell className="f-16">Recent Events</TableCell>
                                            <TableCell className=" "></TableCell> 
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>  
                                            <TableRow  className=" " >
                                                    <TableCell > 
                                                    <span className='upcoming-birthday-txt1'>2 people will be away tomorrow<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" ">  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                    <TableCell > 
                                                    <span className='upcoming-birthday-txt1'>
                                                      Your first day is going to be on Thursday 
                                                      <br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" ">  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                    <TableCell > 
                                                    <span className='upcoming-birthday-txt1'>Richard Miles is off sick today

<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" ">  
                                                    </TableCell>   
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>

                    <div className="col-md-12 job-main-tb-outer">    
                    <Paper className="recruitment-table-outer job-outer organazation-table-top">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="width-12">Leave Type</TableCell>
            <TableCell className="width-20">Leave Days</TableCell>
            <TableCell className="width-20">From date </TableCell>
            <TableCell className="width-20">To date</TableCell>
            <TableCell className="width-15">Approved By</TableCell>
            <TableCell className="width-15">Reason</TableCell> 
            <TableCell className="width-12 ">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map(n => {
            return (
              <TableRow  key={n.id} >
                    <TableCell  className="width-12"> {n.JobId}</TableCell>
                    <TableCell numeric className="width-20">{n.CandidateName}</TableCell>                          
                    <TableCell numeric className=" width-20">{n.Department} </TableCell>
                    <TableCell numeric className=" width-20">{n.Post} </TableCell>
                    <TableCell numeric className="width-15">{n.JoiningDate}</TableCell>
                    <TableCell numeric className="width-15">{n.ReleaseDate}</TableCell> 
                    <TableCell numeric className="width-12 inprogress-td ">
                    <div className="emp-map-iocn-outer">
                                     

                       <div className="emp-edit-new-icon ">
                            <a href="/details">
                            <img src={PencilNew} />                        
                            </a>
                        </div>
                        <div className="emp-defer-icon ">
                            <a href="">
                            <img src={DeferTime}/>
                            </a>
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
        <div className="left">Exit DatE </div>
         <div className="right">: 30/12/2021</div>
        </div>
                    <div className="accord-detals-box">
        <div className="accordion-bottom-button Offer-release-bt-buttons">
        <div className="more-button">View</div>
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
            0000000000        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0102</div>
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
        <div className="left">Exit DatE </div>
         <div className="right">: 30/12/2021</div>
        </div>
                    <div className="accord-detals-box">
        <div className="accordion-bottom-button Offer-release-bt-buttons">
        <div className="more-button">View</div>
<div className="more-button more-outer">Edit</div>
<div className="more-button more-outer">Defer</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="c">
      <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Manju
                  </div>
            <div className="desi joblocation">
            0000000000        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0103</div>
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
        <div className="left">Exit DatE </div>
         <div className="right">: 30/12/2021</div>
        </div>
                    <div className="accord-detals-box">
        <div className="accordion-bottom-button Offer-release-bt-buttons">
        <div className="more-button">View</div>
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
    
    )
}
  }

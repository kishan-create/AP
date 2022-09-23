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
import { profileimage1, profileimage2, projectover } from '../../images';
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
  createData('BS001', 'Varun ','09:30 Am	', '06:30 Pm',  ''),  
  createData('BS021', 'Shanu','09:30 Am	', '06:30 Pm', ''),  
  createData('BS034', 'Manju','09:30 Am	', '06:30 Pm', ''),  
  createData('BS101', 'Linto ','09:30 Am	', '06:30 Pm',  ''),  
  createData('BS135', 'Kiran','09:30 Am	', '06:30 Pm', ''),  
  createData('BS137', 'Kishan','09:30 Am	', '06:30 Pm', ''),  
];


  export default class Hrdashboard extends Component {
  render() {
    return (
        <main className="inner-content-box">
      <header className="main-otrer-top"> HR Dashboard </header>
             <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head organization-sub-head"> HR  Profile
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
                            <p>Total Employees </p>
                            <span>123</span>
                            </div>
                            <img src={Offboarding3} />
                        </div>
                        <div className="box-inner onboard-ligt-violet">
                            <div className='left'>
                            <p>Total Projects</p>
                            <span>23</span>
                            </div>
                            <img src={Offboarding2} />
                        </div>
                        <div className="box-inner onboard-ligt-blue">
                            <div className='left'>
                            <p>All Department</p>
                            <span>15</span>
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
                                                        <div className="holiday-datesty1">01 <br></br>Apr</div>  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                    <TableCell > <div className="holiday-sub-name-sty">Deepavali</div><div className='holiday-sub-txt'>62 days to left</div></TableCell>
                                                    <TableCell className=" holiday-name-sty"> 
                                                        <div className="holiday-datesty1">14 <br></br>May</div>  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                    <TableCell > <div className="holiday-sub-name-sty">Christmas</div><div className='holiday-sub-txt'>94 days to left</div></TableCell>
                                                    <TableCell className=" holiday-name-sty"> 
                                                        <div className="holiday-datesty1">25 <br></br>Dec</div>  
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
                                        <TableBody className=''> 
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
                                <div  className="box-inner-empdash events-scroll-box "> 
                                <Table className="leave-tabele m-tb-empdash scroll-head-sty ">
                                        <TableHead> 
                                        <TableRow> 
                                            <TableCell className="f-16">Recent Events</TableCell>
                                            <TableCell className=" "></TableCell> 
                                        </TableRow>
                                        </TableHead>
                                         
                                    </Table>
                                    <div  className="upcomming-events-box"> 
                                <Table className="leave-tabele m-tb-empdash  upcomming-events-box-cont">
                                         
                                        <TableBody>  
                                            <TableRow  className=" " >
                                                    <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1 scroll-ent-1'>2 people will be away tomorrow<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                    <div className="holiday-datesty">01 <br></br>Apr</div>  
                                                    </TableCell>   
                                            </TableRow>
                                            <TableRow  className=" " >
                                                   <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1 scroll-ent-2'>
                                                      Your first day is going to be on Thursday 
                                                      <br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">14 <br></br>May</div>  
                                                    </TableCell>    
                                            </TableRow>
                                            <TableRow  className=" " >
                                                  <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1 scroll-ent-1'>Richard Miles is off sick today

<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">25 <br></br>Dec</div>  
                                                    </TableCell>    
                                            </TableRow>
                                            <TableRow  className=" " >
                                                  <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1 scroll-ent-2'>2 people will be away tomorrow<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">214 <br></br>May</div>  
                                                    </TableCell>    
                                            </TableRow>
                                            <TableRow  className=" " >
                                                   <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1 scroll-ent-1'>
                                                      Your first day is going to be on Thursday 
                                                      <br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">21 <br></br>Apr</div>  
                                                    </TableCell>    
                                            </TableRow>
                                            <TableRow  className=" " >
                                                  <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1 scroll-ent-2'>Richard Miles is off sick today

<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">14 <br></br>May</div>  
                                                    </TableCell>    
                                            </TableRow>
                                            <TableRow  className=" " >
                                                  <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1 scroll-ent-1'>2 people will be away tomorrow<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">14 <br></br>Dec</div>  
                                                    </TableCell>     
                                            </TableRow>
                                            <TableRow  className=" " >
                                                  <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1 scroll-ent-2'>2 people will be away tomorrow<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">25 <br></br>Dec</div>  
                                                    </TableCell>    
                                            </TableRow>
                                            <TableRow  className=" " >
                                                   <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1'>
                                                      Your first day is going to be on Thursday 
                                                      <br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">24 <br></br>May</div>  
                                                    </TableCell>    
                                            </TableRow>
                                            <TableRow  className=" " >
                                                  <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1'>Richard Miles is off sick today

<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">25 <br></br>Dec</div>  
                                                    </TableCell>    
                                            </TableRow>
                                            <TableRow  className=" " >
                                                  <TableCell  className="scrollCell-root " > 
                                                    <span className='upcoming-birthday-txt1'>2 people will be away tomorrow<br></br>
                                                    <span className='upcoming-birthday-txt2'>19 Feb 2020 </span>
                                                    </span> 
                                                    </TableCell>
                                                    <TableCell className=" holiday-name-sty scrollCell-root "> 
                                                        <div className="holiday-datesty">14 <br></br>May</div>  
                                                    </TableCell>    
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="onboarding-top-outer"> 
                            <div  className="box-2"> 
                                <div  className="box-inner-empdash"> 
                                  <div  className="hr-card-head">Attendance
                                  </div>
                                  
                    <Paper className="recruitment-table-outer job-outer organazation-table-top">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="width-20">Emp Code</TableCell>
            <TableCell className="width-20">Name</TableCell>
            <TableCell className="width-20">CheckIn</TableCell>
            <TableCell className="width-20">CheckOut</TableCell>
            <TableCell className="width-20">Status</TableCell> 
           
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map(n => {
            return (
              <TableRow  key={n.id} >
                    <TableCell  className="width-20"> {n.JobId}</TableCell>
                    <TableCell numeric className="width-20">{n.CandidateName}</TableCell>                          
                    <TableCell numeric className=" width-20">{n.Department} </TableCell>
                    <TableCell numeric className=" width-20">{n.Post} </TableCell>
                    <TableCell numeric className="width-20"><span class="badge bg-success-transparent">Present</span></TableCell>
                     
                                      </TableRow>
             
            );
          })}
            
       
          
        </TableBody>
      </Table>
       
       </Paper>          
                     
                            </div>
                            <div  className="box-inner-empdash"> 
                            <div  className="onboarding-top-outer"> 
                            <div  className="hr-card-head">Project Overview

                                  </div>
                                  <img src={projectover}  />
                        </div>
                            </div>
                            </div>
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

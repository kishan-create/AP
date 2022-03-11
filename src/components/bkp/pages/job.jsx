import React from 'react'
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Jobdetailsmodal from "./Jobdetailsmodal"; 
import {location} from '../../images';
import {profilei} from '../../images/profilei.svg'; 

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
function createData(jobid, post, skillset, exp, openings, location, posteddate, postclose, description, action) {
  id += 1;
  return { id, jobid, post, skillset, exp, openings, location, posteddate, postclose, description, action };
}

const data = [
  createData('0123', 'Java developer','Java, Spring', '10 Years', '12', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0224', 'Java developer','Java, Spring', '09 Years', '05', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0123', 'Java developer','Java, Spring', '03 Years', '06', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0125', 'Java developer','Java, Spring', '05 Years', '03', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0123', 'Java developer','Java, Spring', '12 Years', '15', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  createData('0127', 'Java developer','Java, Spring', '13 Years', '08', 'Kakkanad', '20-10-2021', '10-11-2021', 'description', ''),
  
];

export default function Job(props) {
  const { classes } = props;
    return (
        <main className="inner-content-box">
      <header className="main-otrer-top"> Job </header>
      <DndProvider backend={HTML5Backend}>
            <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head"> Job Openings
                        <div className="top-right-outer add-btn-div"> 
                        <Jobdetailsmodal />
                                         
                        </div>
                    </div>
                   
                    <div className="col-md-12 job-main-tb-outer">    
                    <Paper className="recruitment-table-outer job-outer">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="width-8">Job ID</TableCell>
            <TableCell className="width-12">Post</TableCell>
            <TableCell className="width-15">Skill Set</TableCell>
            <TableCell className="width-8">Exp</TableCell>
            <TableCell className="width-8">Openings</TableCell>
            <TableCell className="width-8">Location</TableCell>
            <TableCell className="width-10">Posted Date </TableCell>
            <TableCell className="width-10">Post Close</TableCell>           
            <TableCell className="width-15">description</TableCell>
            <TableCell className="width-8">Status</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map(n => {
            return (
              <TableRow  key={n.id} >
                    <TableCell  className="width-8"> {n.jobid}</TableCell>
                    <TableCell numeric className="width-12">{n.post}</TableCell>                          
                    <TableCell numeric className=" width-15">{n.skillset} </TableCell>
                    <TableCell numeric className="width-8">{n.exp}</TableCell>
                    <TableCell numeric className="width-8">{n.openings} </TableCell>
                    <TableCell numeric className="width-8">{n.location}</TableCell>
                    <TableCell numeric className="width-10">{n.posteddate}</TableCell>  
                    <TableCell numeric className="width-10">{n.postclose}</TableCell>  
                   
                    <TableCell numeric className="width-15"> {n.description}                      
                    </TableCell>
                    <TableCell numeric className="width-8 inprogress-td">
                          <div className ="inprograss-style">Active</div>
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
            <div className="name notificatio-outer">Java developer
            <div className="notification-label">
              12
              </div>
            
            </div>
            <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0123</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Job ID</div>
         <div className="right">123</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Skill Set </div>
         <div className="right">HTML, CSS, JavaScript, Figma</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Exp </div>
         <div className="right">10 Years</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Posted Date</div>
         <div className="right">20-10-2021</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Post Close</div>
         <div className="right">10-11-2021</div>
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
            <div className="name notificatio-outer">Java developer <div className="notification-label">
              12
              </div></div>
              <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0123</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <div className="accord-detals-box">
         <div className="left">Job ID</div>
         <div className="right">1234</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Skill Set </div>
         <div className="right">HTML, CSS, JavaScript, Figma</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Exp </div>
         <div className="right">10 Years</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Posted Date</div>
         <div className="right">20-10-2021</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Post Close</div>
         <div className="right">10-11-2021</div>
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
      <AccordionItem uuid="c">
        <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Java developer
            <div className="notification-label">
              12
              </div>
            
            </div>
            <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0123</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Job ID</div>
         <div className="right">123</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Skill Set </div>
         <div className="right">HTML, CSS, JavaScript, Figma</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Exp </div>
         <div className="right">10 Years</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Posted Date</div>
         <div className="right">20-10-2021</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Post Close</div>
         <div className="right">10-11-2021</div>
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

      <AccordionItem uuid="d">
        <AccordionItemHeading className="accordion-inactive-status">
          <AccordionItemButton>  <div className="accordion-head-text">
            <div className="name notificatio-outer">Java developer <div className="notification-label">
              12
              </div></div>
              <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0123</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <div className="accord-detals-box">
         <div className="left">Job ID</div>
         <div className="right">1234</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Skill Set </div>
         <div className="right">HTML, CSS, JavaScript, Figma</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Exp </div>
         <div className="right">10 Years</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Posted Date</div>
         <div className="right">20-10-2021</div>
        </div>
        <div className="accord-detals-box">
         <div className="left">Post Close</div>
         <div className="right">10-11-2021</div>
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

                </div>
            </section>
      </DndProvider>
    </main>
    
    )
}

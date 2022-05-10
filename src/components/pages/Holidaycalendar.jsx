import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin } from "react-icons/md";

import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
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
import {location} from '../../images';
import {profilei} from '../../images/profilei.svg'; 
import Addorganization from './Addorgaization';
import Addbranches from './Addbranches';
import Multyselect from './Multyselect';
import {india, us, rand, wnc} from '../../images';
import Holidaypopup from './Holidaypopup';
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
function createData(Category, PropertyBrand , AssetId, ConnectorType, SpecialFeature,NumberofKeys, action) {
  id += 1;
  return { Category, PropertyBrand , AssetId, ConnectorType, SpecialFeature,NumberofKeys, action };
}

const data = [
  createData('NEW YEAR', ' JAN 1',  ''),  
  createData('REPUBLIC DAY', 'JAN 26',  ''),
  createData('MAUNDY THURSDAY', 'APR 14',  ''),
  createData('GOOD FRIDAY', 'APR 15',  ''),
  createData('INDEPENDENCE DAY', 'AUG 15',  ''),
  createData('SREE KRISHNA JAYANTHI  ', 'AUG 18',  ''),
  createData('FIRST ONAM   ', 'SEP 7',  ''),
  createData('THIRUVONAM  ', 'SEP 8',  ''),
  createData('MAHANAVAMI  ', 'OCT 4',  ''),
  createData('DEEPAVALI  ', 'OCT 24',  ''),
];


  export default class Holidaycalendar extends Component {
  render() {
    return (
        <main className="inner-content-box">
      <header className="main-otrer-top"> Holiday      </header>
             <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head organization-sub-head">Holiday Calendar
                    <div className="top-right-outer add-btn-div">
                  <Holidaypopup/>

                                </div>
                    </div>
                     
                            <div id="app"></div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
  <Accordion preExpanded={"a"} className="job-accrodion ">
  <AccordionItem uuid="a">
      <a href="Holidayview" className=" ">
      <AccordionItemHeading className="accordion-active-status accordion-active-status1">
      <AccordionItemButton >
            <div className='col-md-5 col-sm-12 col-xs-12'>
                  <AiFillStar className='star-black'/> 
                  <img className='india-flag' src={us} />
                  <span className='calander-countryname'>US</span>
            </div>
            
            
            <div className='col-md-7 col-sm-12 col-xs-12 public-optional-bordr '> 
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">2 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Optional Holidays        
                      </div>
                </div>
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">10 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Public Holidays        
                      </div>
                </div> 
            </div>
        </AccordionItemButton>
        </AccordionItemHeading>
        </a>
      </AccordionItem>
  <AccordionItem uuid="a">
  <a href="Holidayview" className=" ">
        <AccordionItemHeading className="accordion-active-status accordion-active-status1">
          <AccordionItemButton >
            <div className='col-md-5 col-sm-12 col-xs-12'>
                  <AiFillStar className='star-green'/> 
                  <img className='india-flag' src={india} />
                  <span className='calander-countryname'>Cochin, India</span>
            </div>
            
            
            <div className='col-md-7 col-sm-12 col-xs-12 public-optional-bordr '> 
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">2 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Optional Holidays        
                      </div>
                </div>
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">10 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Public Holidays        
                      </div>
                </div> 
            </div>
        </AccordionItemButton>
        </AccordionItemHeading>
        </a>
      </AccordionItem>
      <AccordionItem uuid="a">
  <a href="Holidayview" className=" ">
        <AccordionItemHeading className="accordion-active-status accordion-active-status1">
          <AccordionItemButton >
            <div className='col-md-5 col-sm-12 col-xs-12'>
                  <AiFillStar className='star-black'/> 
                  <img className='india-flag' src={india} />
                  <span className='calander-countryname'>Hyderabad, India</span>
            </div>
            
            
            <div className='col-md-7 col-sm-12 col-xs-12 public-optional-bordr '> 
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">2 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Optional Holidays        
                      </div>
                </div>
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">10 
                      </div>
                      <div className="desi joblocation  f-w-norml">
                      Public Holidays        
                      </div>
                </div> 
            </div>
        </AccordionItemButton>
        </AccordionItemHeading>
        </a>
      </AccordionItem>
      <AccordionItem uuid="a">
  <a href="Holidayview" className=" ">
        <AccordionItemHeading className="accordion-active-status accordion-active-status1">
          <AccordionItemButton >
            <div className='col-md-5 col-sm-12 col-xs-12'>
                  <AiFillStar className='star-black'/> 
                  <img className='india-flag' src={india} />
                  <span className='calander-countryname'>Bhubaneswar, India</span>
            </div>
            
            
            <div className='col-md-7 col-sm-12 col-xs-12 public-optional-bordr '> 
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">2 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Optional Holidays        
                      </div>
                </div>
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">10 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Public Holidays        
                      </div>
                </div> 
            </div>
        </AccordionItemButton>
        </AccordionItemHeading>
        </a>
      </AccordionItem>
      
      <AccordionItem uuid="a">
      <a href="Holidayview" className=" ">
      <AccordionItemHeading className="accordion-active-status accordion-active-status1">
      <AccordionItemButton >
            <div className='col-md-5 col-sm-12 col-xs-12'>
                  <AiFillStar className='star-black'/> 
                  <img className='india-flag' src={rand} />
                  <span className='calander-countryname'>RandLog</span>
            </div>
            <div className='col-md-7 col-sm-12 col-xs-12 public-optional-bordr '> 
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">2 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Optional Holidays        
                      </div>
                </div>
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">10 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Public Holidays        
                      </div>
                </div> 
            </div>
        </AccordionItemButton>
        </AccordionItemHeading>
        </a>
      </AccordionItem>

      <AccordionItem uuid="a">
      <a href="Holidayview" className=" ">
      <AccordionItemHeading className="accordion-active-status accordion-active-status1">
      <AccordionItemButton >
            <div className='col-md-5 col-sm-12 col-xs-12'>
                  <AiFillStar className='star-black'/> 
                  <img className='india-flag' src={wnc} />
                  <span className='calander-countryname'>WNC</span>
            </div>
            <div className='col-md-7 col-sm-12 col-xs-12 public-optional-bordr '> 
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">2 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Optional Holidays        
                      </div>
                </div>
                <div className="accordion-head-text accordion-head-text-right">
                      <div className="name notificatio-outer">10 
                      </div>
                      <div className="desi joblocation f-w-norml">
                      Public Holidays        
                      </div>
                </div> 
            </div>
        </AccordionItemButton>
        </AccordionItemHeading>
        </a>
      </AccordionItem>
     
     
    </Accordion>
    </div>
           

                    

                </div>
            </section>
    </main>
    
    )
}
  }

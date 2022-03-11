import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import {dashboard,asste,eyeico,location,eyeicoSched,eyeicoreject,eyeicowait,eyenew, profileimage1 } from '../../images';
import {Tab, Tabs, AppBar} from '@material-ui/core';
import {profilei} from '../../images/profilei.svg'; 
import { mdiEye } from "react-icons/md";
import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin } from "react-icons/md";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
 

  
const Assetsdetails = () => {
   
 
  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Asset  </header>
      <DndProvider backend={HTML5Backend}>
            <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className=" ">    
                            <div className="sub-head profile-sub">Asset Details
                            <div className="top-right-outer add-btn-div">
                                    <div className="buttons-outer">
                                        <a href="Assetsdetails" className="blue-button">
                                         <CreateOutlinedIcon className="add-btn-icon" />
                                             
                                            Edit
                                        </a>
                                    </div>

                                    <div className="buttons-outer maring-left-15">
                                        <a href="add" className="white-button download-bt">
                                            <MdOutlineFileDownload className="add-btn-icon" /> Download
                                        </a>
                                    </div>

                                    <div className="buttons-outer maring-left-15">
                                        <a href="add" className="white-button  download-bt">
                                            <MdOutlinePrint className="add-btn-icon" /> Print
                                        </a>
                                    </div>

                                </div>
                            </div>
                                               </div>
                    <div className="col-md-12">    
                             
                          <div class="flex-box employee-infot-flex">
                            <div  className="col-md-6 basic-information-card"> 
                                  <div  className="information-card-head">Specification
                                  </div>
                                  <div  className="row txt-row-hght border-0 employee-basic-outer"> 
                                         
                                        
                                                <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Category           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Property/brand            <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Asset ID         <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> 12345
                                                    </div>                                
                                              </div> 
                                               
                                         
                                                                    
                                  </div>
                            </div>
                            <div className="col-md-6 personal-information-card">
                           
                                  <div  className="information-card-head"> Details
                                  </div>
                                  
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Connector Type  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Special Feature <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Father/Mother/Spouse Name  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Keyboard Description   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Number of Keys   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  
                                 
                            </div>
                             
                          </div>  
                          <div class="flex-box employee-infot-flex">
                             
                            <div  className="col-md-6 education-information-card"> 
                                  <div  className="information-card-head"> purchase
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Purchase Date <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 12-11-2021
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Cost  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 1500
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Purchase Order Number  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 12312
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Vendor  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Vendor Contact Number  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Vendor Address  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  
                            </div>
                            <div className="col-md-6 employee-information-card">
                                  <div  className="information-card-head"> More Info
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Status   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Location <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Assign to  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Series <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> warranty Date <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 12-11-2021
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Warranty Service type <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> warranty Summary <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                   
                            </div>
                          </div>                  
                    </div>
                   
                </div>
                 
            </section>
             
      </DndProvider>
      
    </main>
  );
};

export default Assetsdetails;
 
import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import {dashboard,asste,eyeico,location,eyeicoSched,eyeicoreject,eyeicowait,eyenew, } from '../../images';
import {Tab, Tabs, AppBar} from '@material-ui/core';
import {profilei} from '../../images/profilei.svg'; 
import { mdiEye } from "react-icons/md";
 
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";


 

  
const Employee = () => {
   
 
  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Employee </header>
      <DndProvider backend={HTML5Backend}>
            <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className=" ">    
                            <div className="sub-head">Employee Profile
                                <div className="top-right-outer add-btn-div">        
                                </div>
                            </div>
                            <div className="recruitment-top-right-box">                    
                            </div>
                    </div>
                    <div className="col-md-12">    
                             
                          <div class="flex-box ">
                            <div  className="col-md-6 basic-information-card"> 
                                  <div  className="information-card-head">Basic Information
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-3  "> 
                                              <div className="profilepic"></div>
                                              <div className="info-card-prfl-txt "> Arun Kumar</div>                                            
                                        </div> 
                                        <div  className="col-md-9 ">
                                                <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Employee Code             <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> 0122
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Designation            <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Joining Date           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Company Email ID           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Contact Number           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Reporting Person           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Gender            <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Location           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                                    </div>                                
                                              </div>  
                                        </div>
                                                                    
                                  </div>
                            </div>
                            <div className="col-md-6 personal-information-card">
                           
                                  <div  className="information-card-head"> Personal Information
                                  </div>
                                  
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Aadhaar Number  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 11212121212
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Permanent Address <span className="dot-sty">:</span>
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
                                        <div  className="col-md-6 info-card-cont "> Temporary Address   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Emergency Contact Number   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Date Of Birth (Official)  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Personal Email ID  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Total year's of experience  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Marital Status  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                 
                            </div>
                             
                          </div>  
                          <div class="flex-box ">
                             
                            <div  className="col-md-6 education-information-card"> 
                                  <div  className="information-card-head"> Education Details
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> school Name <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Graduation  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> University  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Undergraduate  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Post Graduate  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  
                            </div>
                            <div className="col-md-6 employee-information-card">
                                  <div  className="information-card-head"> Employee Skills
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Primary Skills   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Secondary Skills  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Additional Skills  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> Sample Text
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Year of Experience  <span className="dot-sty">:</span>
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

export default Employee;
 
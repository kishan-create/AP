import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import {dashboard,asste,eyeico,location,eyeicoSched,eyeicoreject,eyeicowait,eyenew } from '../../images';
import {Tab, Tabs, AppBar} from '@material-ui/core';
 
import { mdiEye } from "react-icons/md";
 
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";


import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const options = [
  {
    label: "Inprogress",
    value: "Inprogress",
  },
  {
    label: "Schedule",
    value: "Schedule",
  },
  {
    label: "Rejection",
    value: "Rejection",
  },
  {
    label: "Waiting",
    value: "Waiting",
  },
]; 
const Dashboard = () => {
   
 
  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Dashboard </header>
      <DndProvider backend={HTML5Backend}>
            <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head"> 
                        <div className="top-right-outer add-btn-div">        
                        </div>
                    </div>
                    <div className="recruitment-top-right-box">                    
                    </div>

                    <div className="col-md-12">


                    <div className=" ">
              <div  className="candidate-box">
                <div className="card-head-bg">
                    <div className="card-header-styone ">
                    Candidate List View
                    </div>

                  
                    </div>


                    <div className=" ">    
                <div className="candidatelistview-sty ">
                      <div className="pull-left">                          
                          <div className="listview-namesty">
                             Shanu K K
                          </div>
                          <div className="listview-consty">
                              JAVA DEVELOPER
                          </div>
                      </div>
                      <div className="pull-left">                          
                          <div className="listview-conexp">
                          EXP : 5Yrs
                          </div>
                          <div className="listview-conctc">
                          CTC :  8LK/A
                          </div>
                      </div>
                      <div class="pull-right">
                            <div className="select-container">
                                <select className="select-dropdow">
                                  {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                  ))}
                                </select>
                              </div>
                      </div>
                </div>
                <div className="candidatelistview-sty ">
                      <div className="pull-left">                          
                          <div className="listview-namesty">
                             Shanu K K
                          </div>
                          <div className="listview-consty">
                              JAVA DEVELOPER
                          </div>
                      </div>
                      <div className="pull-left">                          
                          <div className="listview-conexp">
                          EXP : 5Yrs
                          </div>
                          <div className="listview-conctc">
                          CTC :  8LK/A
                          </div>
                      </div>
                      <div class="pull-right">
                            <div className="select-container">
                                <select className="select-dropdow">
                                  {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                  ))}
                                </select>
                              </div>
                      </div>
                </div>
                <div className="candidatelistview-sty ">
                      <div className="pull-left">                          
                          <div className="listview-namesty">
                             Shanu K K
                          </div>
                          <div className="listview-consty">
                              JAVA DEVELOPER
                          </div>
                      </div>
                      <div className="pull-left">                          
                          <div className="listview-conexp">
                          EXP : 5Yrs
                          </div>
                          <div className="listview-conctc">
                          CTC :  8LK/A
                          </div>
                      </div>
                      <div class="pull-right">
                            <div className="select-container">
                                <select className="select-dropdow">
                                  {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                  ))}
                                </select>
                              </div>
                      </div>
                </div>
                <div className="candidatelistview-sty ">
                      <div className="pull-left">                          
                          <div className="listview-namesty">
                             Shanu K K
                          </div>
                          <div className="listview-consty">
                              JAVA DEVELOPER
                          </div>
                      </div>
                      <div className="pull-left">                          
                          <div className="listview-conexp">
                          EXP : 5Yrs
                          </div>
                          <div className="listview-conctc">
                          CTC :  8LK/A
                          </div>
                      </div>
                      <div class="pull-right">
                            <div className="select-container">
                                <select className="select-dropdow">
                                  {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                  ))}
                                </select>
                              </div>
                      </div>
                </div>
              </div> </div>
              </div>

                  </div>
                </div>
               
            </section>
      </DndProvider>
    </main>
  );
};

export default Dashboard;
 
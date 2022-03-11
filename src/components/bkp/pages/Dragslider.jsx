import React, { useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

// Use your own styles to override the default styles
// import "./styles.css";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
 import Employeelisttab from "./Employeelisttab";
 import RecruitmentTabs from "./Recruitmentpopuptab";
 
export default function UncontrolledBoard() {
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
                               
                        <Employeelisttab/>
                                          
                      </div>
                     
                  </div>
                   
              </section>
               
        </DndProvider>
        
      </main>

      
    );
  }
  
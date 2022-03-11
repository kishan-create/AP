import React, { useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
// import "./styles.css";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
const board = {
    
  columns: [
      
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
          name:"shanu",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
          name:"manju"
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content"
        }
      ]
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content"
        }
      ]
    },
    {
      id: 3,
      title: "Q&A",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content"
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content"
        }
      ]
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content"
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content"
        }
      ]
    }
  ]
};

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
                               
                      <Board allowRemoveLane allowRenameColumn allowRemoveCard onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}
        allowAddCard={{ on: "top" }}
        onNewCardConfirm={draftCard => ({
          id: new Date().getTime(),
          ...draftCard
        })}
        onCardNew={console.log}
      />
                                          
                      </div>
                     
                  </div>
                   
              </section>
               
        </DndProvider>
        
      </main>

      
    );
  }
  
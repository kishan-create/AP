import React from 'react';
import ReactDOM from "react-dom";
import './kanban.css';
import Kanban from './Kanban';
export default function Board() {
    return (
        <div className="Board main-outer">
           <Kanban/> 
        </div>
    )
    
}

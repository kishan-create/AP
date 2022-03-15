import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import {dashboard,asste,eyeico,location,eyeicoSched,eyeicoreject,eyeicowait,eyenew, profileimage1 } from '../../images';
import {Tab, Tabs, AppBar} from '@material-ui/core';
 
import { mdiEye } from "react-icons/md";
 
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin } from "react-icons/md";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import Select from 'react-select';
import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
function createData(Category, PropertyBrand , AssetId, ConnectorType ) {
  id += 1;
  return { Category, PropertyBrand , AssetId, ConnectorType };
}

const data = [
  createData('Vacation', '5.5','4.5', '10',  ),  
  createData('Sick Leave', '4.5','7.5', '12', ),
  createData('Unpaid leave', '5','360', '365', ),
  createData('Work from Home', '4','6', '10',  ), 
];

let id1 = 0;
function createData1(Category, PropertyBrand , AssetId, ConnectorType ) {
  id1 += 1;
  return { Category, PropertyBrand , AssetId, ConnectorType };
}
const data1 = [
  createData1('Vacation', '5.5','4.5', '10',  ),  
  createData1('Sick Leave', '4.5','7.5', '12', ),
  createData1('Unpaid leave', '5','360', '365', ),
  createData1('Work from Home', '4','6', '10',  ), 
];
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
      <header className="main-otrer-top">Admin Dashboard </header>
     
    </main>
  );
};

export default Dashboard;
 
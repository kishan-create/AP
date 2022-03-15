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
const Employee_Dashboard = () => {
   
 
  return (
    <main className="inner-content-box">
      <header className="main-otrer-top">Employee Dashboard </header>
      <DndProvider backend={HTML5Backend}>
            <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head"> Employee Profile
                        <div className="top-right-outer add-btn-div">
                                    <div className="buttons-outer">
                                        <a href="Addemployeetab" className="blue-button">
                                            <SiAddthis className="add-btn-icon" /> Add Employee
                                        </a>
                                    </div>

                                    <div className="buttons-outer maring-left-15">
                                        <a href="add" className="white-button download-bt">
                                        Apply Leave
                                        </a>
                                    </div>
 

                                </div>
                    </div>
                    <div className="recruitment-top-right-box">                    
                    </div>

                    <div className="col-md-12">
                    <div  className="col-md-12 basic-information-card"> 
                                   
                                  <div  className="row txt-row-hght border-0 employee-basic-outer"> 
                                        <div  className="col-md-2"> 
                                              <div className="profilepic emp-ico-img"> <img src={profileimage1} /></div>
                                                                                       
                                        </div> 
                                        <div  className="col-md-10 profile-basic-right">
                                        <div  className="row txt-row-hght">  
                                        <div className="emp-card-prfl-name "> Arun Kumar</div>   
                                        </div>
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-3 heading-samml-sty"> Employee ID : <span className="emp-right-txt ">0122</span>
                                                    </div>  
                                                    <div  className="col-md-3 heading-samml-sty"> Email : <span className="emp-right-txt ">Sample@gmail.com</span>
                                                    </div>  
                                                    <div  className="col-md-3 heading-samml-sty"> Department : <span className="emp-right-txt ">JAVA</span>
                                                    </div>  
                                                    <div  className="col-md-3 heading-samml-sty"> Designation : <span className="emp-right-txt ">Java Developer</span>
                                                    </div>                      
                                              </div> 
                                               
                                        </div>
                                                                    
                                  </div>
                            </div>
 
                                          
<div className='onboarding-top-outer emp-box-padd m-t-20'>
<div className='box'>
<div className="box-inner p-0">
  <div className='left p-15'>
  <p>Total Projects</p>
  </div>
  <div className="emp-box-right-txt p-15">50</div>
  
  <div className='emp-box-footer'>
  Project in progress :<span className="emp-footer-txt-col">4</span>  <span className="f-r">completed projects  : <span className="emp-footer-txt-col-rigt">8</span> </span>
  </div>
</div>
<div className="box-inner onboard-ligt-violet  p-0">
  <div className='left  p-15'>
  <p>Total Attendance</p>

  </div>
  <div className="emp-box-right-txt p-15">150</div>
  
  <div className='emp-box-footer'>
  Absent :<span className="emp-footer-txt-col">3</span>  <span className="f-r">Balance Leave   : <span className="emp-footer-txt-col-rigt">7</span> </span>
  </div>
   
</div>
<div className="box-inner onboard-ligt-blue  p-0">
  <div className='left p-15'>
  <p>Reporting person </p>

  </div>
  <div className="emp-box-right-txt p-15"></div>
  
  <div className='emp-box-footer'>
  Reeba Kurien
  </div>
</div>
</div>

</div>
                  </div>
                  <div className="col-md-4 job-main-tb-outer m-t-26">    
                    <Paper className=" job-outer organazation-table-top">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="col-md-12">Up Comming Holidays</TableCell>
            
             
           
          </TableRow>
        </TableHead>
        <TableBody>
        {data1.map(n1 => {
            return (
              <TableRow  key={n1.id} >
                    <TableCell  className="col-md-3 p-tb-12"> {n1.Category}</TableCell>
                    <TableCell numeric className="col-md-3 p-tb-12">{n1.PropertyBrand}</TableCell>                          
                    <TableCell numeric className=" col-md-3 p-tb-12">{n1.AssetId} </TableCell>
                    <TableCell numeric className="col-md-3 p-tb-12">{n1.ConnectorType} </TableCell>
              </TableRow>
             
            );
          })}
            
       
          
        </TableBody>
      </Table>
       
       </Paper>          
       </div>    
       <div className="col-md-8 job-main-tb-outer m-t-26">    
                    <Paper className="recruitment-table-outer job-outer organazation-table-top">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="col-md-3">Leave Balance</TableCell>
            <TableCell className="col-md-3">Used</TableCell>
            <TableCell className="col-md-3">Available</TableCell>
            <TableCell className="col-md-3">Allowance</TableCell>
             
           
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map(n => {
            return (
              <TableRow  key={n.id} >
                    <TableCell  className="col-md-3 p-tb-12"> {n.Category}</TableCell>
                    <TableCell numeric className="col-md-3 p-tb-12">{n.PropertyBrand}</TableCell>                          
                    <TableCell numeric className=" col-md-3 p-tb-12">{n.AssetId} </TableCell>
                    <TableCell numeric className="col-md-3 p-tb-12">{n.ConnectorType} </TableCell>
              </TableRow>
             
            );
          })}
            
       
          
        </TableBody>
      </Table>
       
       </Paper>          
       </div>     
                </div>
               
            </section>
      </DndProvider>
    </main>
  );
};

export default Employee_Dashboard;
 
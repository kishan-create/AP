import React, { Component } from 'react';
import { Link } from "react-router-dom";


import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from "axios";
import MySelect from "./Multselectdropdown/Myselect";

import { components } from "react-select";
import makeAnimated from "react-select/animated";


import swal from "sweetalert";
import Resignationicons from './Resignationicons';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import {Offboarding1, Offboarding3, Hirecompleted} from '../../images';
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
function createData(Name, EmployeeCode , Designation, MailID, Experience,Location, action) {
  id += 1;
  return {Name, EmployeeCode , Designation, MailID, Experience,Location, action };
}

const data = [
  createData('Shanu', '050','Sr. Software Engineer ', 'shanu@bourntec.com', '7.5','Cochi', ''),  
  createData('Manu', '050','Sr. Software Engineer ', 'manu@bourntec.com', '7.5','Cochi', ''),
  createData('Manju', '050','Sr. Software Engineer ', 'manju@bourntec.com', '7.5','Cochi', ''),
  createData('Vipin', '050','Sr. Software Engineer ', 'vipin@bourntec.com', '7.5','Cochi', ''),
  createData('linto', '050','Sr. Software Engineer ', 'linto@bourntec.com', '7.5','Cochi', ''),
];

const Option = props => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};
const MultiValue = props => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);
const animatedComponents = makeAnimated();
  export default class Emptablistview extends Component {
    constructor() {
      super();
      this.state = {
        // user:[],
        // checked: false,
        checked: true,
        // selected:[],
        employeelist: [],
        emplocation: [],
        designation: [],
        skillset :[],
        searchname: '',
        optionSelected: null,
        optionSelectedloc: null,
        optionSelectedskill:null,
        selectedo: [],
        options: [{ optname: 'Option 1️⃣', id: 1 }, { optname: 'Option 2️⃣', id: 2 }],
        formData: {
          location_items: [],
          designation_items: [],
          skillset_items:[],
  
        },
        // this.setState(user)
  
        count: 0
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.onSelectLocation = this.onSelectLocation.bind(this);
      this.onSelectDesignation = this.onSelectDesignation.bind(this);
      this.handleEmployeeskill = this.handleEmployeeskill.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.SearchHandler = this.SearchHandler.bind(this);
    }
    componentDidMount = () => {
      this.fetchData();
      // this.setState({user:userdata});
      
      // this.selected();
      // this.state.user(userdata);
  
      this.getGetLocationName();
      this.getDesignationName();
      this.getSkillName();
  
    }
    componentDidUpdate(prevProps, prevState) {
  
      if (prevState.formData != this.state.formData) {
        this.fetchdataByparams();
      }
  
      /*if((this.state.formData.emp_location!="") || (this.state.formData.emp_designation!=""))
      {
       this.fetchdataByparams();
      }*/
    }
    fetchdataByparams = async () => {
      const formData = new FormData();
      //var id = this.state.formData.emp_location + '&&' + this.state.formData.emp_designation;
      formData.append("emp_lo", JSON.stringify(this.state.formData));
      // const response = await axios.get(
      //`http://localhost:8000/api/getEmployeebylocation/${id}`
      // );
      const response = await axios.post(
        "http://localhost:8000/api/getEmployeebylocation",
        formData
      );
      if (response.data.status === 200) {
        this.setState({
          employeelist: response.data.emp,
          loading: false,
        });
  
      }
  
    }
    fetchData = async () => {
      const res = await axios.get("http://localhost:8000/api/getEmployeeDetails");
      if (res.data.status === 200) {
        this.setState({
          employeelist: res.data.emp,
          loading: false,
        });
      
      }
  
    }
    getGetLocationName = async () => {
      const response = await axios.get("http://localhost:8000/api/getLocationBranchDrop");
  
      if (response.data.status === 200) {
        this.setState({
          emplocation: response.data.location,
          loading: false,
        });
  
      }
  
    }
    getSkillName = async()=> {
      const response = await axios.get("http://localhost:8000/api/getskillset");
      if (response.data.status === 200) {
        this.setState({
          skillset: response.data.skill,
          loading: false,
        });
  
      }
    }
  
    handleSelect = async (e) => {
  
      // console.log(e.target.name);
  
      /*this.setState({
        formData: {
          ...this.state.formData,
          [e.target.name]: e.target.value,
        },
      });*/
  
  
  
    }
    getDesignationName = async () => {
      const response = await axios.get("http://localhost:8000/api/getDesignationall");
      if (response.data.status === 200) {
        this.setState({
          designation: response.data.designation,
          loading: false,
        });
  
      }
    }
    
    GetSearchbylocation = async (data) => {
      var location = data?.emp_location;
  
    }
    handleChange(checked) {
      this.setState({ checked });
    }
    SearchHandler(event)
    {
      this.setState({
        searchname: event.target.value,
       
      });
      this.handleSubmitSearch(event.target.value);
     
     
    }
    
    onRemove(selectedList) {
      this.setState({
        formData: { ...this.state.formData, location_items: selectedList }
  
      });
  
    }
    handleRemove = (selectedList) => {
      alert("hii");
      this.setState({
        formData: { ...this.state.formData, designation_items: selectedList }
  
      });
    };
    onSelectLocation(selectedList) {
  
      this.setState({
        formData: { ...this.state.formData, location_items: selectedList }
  
      });
  
    }
    onSelectDesignation(selectedList) {
  
      this.setState({
        formData: { ...this.state.formData, designation_items: selectedList }
  
      });
  
    }
    onSelectSkillSet(selectedList)
    {
      this.setState({
        formData: { ...this.state.formData, skillset_items: selectedList }
  
      });
    }
    
    handleEmployeeskill = (selected) => {
  
      //  console.log(selected);
      this.setState({
        optionSelectedskill: selected
      });
      this.setState({
        formData: { ...this.state.formData, skillset_items: selected }
  
      });
      console.log(this.state.optionSelected);
    };
    handleEmployeelocation = (selected) => {
  
      //  console.log(selected);
      this.setState({
        optionSelected: selected
      });
      this.setState({
        formData: { ...this.state.formData, location_items: selected }
  
      });
      console.log(this.state.optionSelected);
    };
    handleEmployeelDes = (selectedList) => {
      this.setState({
        optionSelectedloc: selectedList
      });
      this.setState({
        formData: { ...this.state.formData, designation_items: selectedList }
  
      });
    }
    handleSubmitSearch =async(name)=>
    {
     if(name!="")
     {
      const response = await axios.get(
        `http://localhost:8000/api/searchbyButton/${name}` );
        if (response.data.status === 200) {
          this.setState({
            employeelist: response.data.emp,
            loading: false,
          });
    
        }
      }
      else {
        this.fetchData();
      }
      
    }



    
  render() {
    return (
        
                <div className=" ">
                    
                    <div className="emplyee-top">
                    <div className="emp-srch col-md-3">
            <input
              className="form-control"
              type="text"
              id="birthday"
              name="birthday"
              value={this.state.searchname}
              onChange={this.SearchHandler}
              placeholder="Emp ID,Emp Name "
            />
            <button >
              {" "}
              <FaSearch className="add-btn-icon" />
            </button>
          </div>
          <div className=" col-md-3">
            <MySelect
              options={this.state.emplocation}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{ Option, MultiValue, animatedComponents }}
              onChange={this.handleEmployeelocation}
              allowSelectAll={true}
              value={this.state.optionSelected}
              displayValue="location" // Property name to display in the dropdown options
              name="location"
              placeholder="Location" className="form-control"
            />
          </div>
          <div className=" col-md-3 ">
          <MySelect 
              options={this.state.designation}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{ Option, MultiValue, animatedComponents }}
              onChange={this.handleEmployeelDes}
              allowSelectAll={true}
              value={this.state.optionSelectedloc}
              displayValue="designation" // Property name to display in the dropdown options
              name="designation"  placeholder="Designation" className="form-control "
            />
          </div>
          <div className=" col-md-3">
          <MySelect
             options={this.state.skillset}
             isMulti
             closeMenuOnSelect={false}
             hideSelectedOptions={false}
             components={{ Option, MultiValue, animatedComponents }}
             onChange={this.handleEmployeeskill}
             allowSelectAll={true}
             value={this.state.optionSelectedskill}
             displayValue="skillset" // Property name to display in the dropdown options
             name="skillset" placeholder="Skillset" className="form-control"
            />
          </div>
              </div> 
              <div className='onboarding-top-outer emp-active-box-outer '>
<div className='box'>
<div className="box-inner emp-active-box">
  <div className='left'>
  <p>Active</p>
<span>{this.state.employeelist.length}</span>
  </div>
<img src={Offboarding1} />
</div>
<div className="box-inner emp-active-box onboard-ligt-violet">
  <div className='left'>
  <p>Notice Period</p>
<span>04</span>
  </div>
<img src={Hirecompleted} />
</div>
<div className="box-inner emp-active-box onboard-ligt-blue">
  <div className='left'>
  <p>Inactive</p>
<span>14</span>
  </div>
<img src={Offboarding3} />
</div>
</div>

</div>
                    <div className="col-md-12 job-main-tb-outer m-t-25">    
                    <Paper className="recruitment-table-outer job-outer organazation-table-top">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="width-18">Name</TableCell>
            <TableCell className="width-18">Employee Code</TableCell>
            <TableCell className="width-12">Designation</TableCell>
            <TableCell className="width-15">Mail ID </TableCell>
            <TableCell className="width-18">Total Experience</TableCell>
            <TableCell className="width-15">Location</TableCell>
                  <TableCell className="width-8">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.employeelist.map(n => {
            return (
              <TableRow  key={n.empid} >
                    <TableCell  className="width-18"> {n.emp_name}</TableCell>
                    <TableCell numeric className="width-18">{n.emp_code}</TableCell>                          
                    <TableCell numeric className=" width-12">{n.designation_name} </TableCell>
                    {/* <TableCell numeric className=" width-12">{n.designation_status} </TableCell> */}
                    <TableCell numeric className=" width-15">{n.emp_company_email_id} </TableCell>
                    <TableCell numeric className="width-18">{n.fk_emp_previous_exp}</TableCell>
                    <TableCell numeric className="width-15">{n.emp_location}</TableCell>
                    <TableCell numeric className="width-8">
                    <div className="action-outer">
                    <div className="edit-new-icon ">
                          <Resignationicons/>
                          </div>
             <div className="edit-new-icon ">
               {/* <a href="`/Employeeprofile/${n.id}`,"> */}
               <Link
                            to={{
                              pathname: `/Employeeprofile/${n.empid}`,
    
                              data: n.id, // your data array of objects
                            }}
                          >
               <svg width="16" height="12" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
</Link>

{/* </a> */}
                             </div>
<div className="delete-icon">
  <a href="">
<svg onClick={(e) => this.DeleteEmployee(e, n.empid)} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.242676 0.31216H2.19897V0.261343C2.19897 0.117019 2.30763 0 2.44165 0H4.43799C4.57201 0 4.68067 0.117019 4.68067 0.261343V0.31216H6.63696C6.77098 0.31216 6.87964 0.429179 6.87964 0.573503V1.60566C6.87964 1.74998 6.77098 1.867 6.63696 1.867H0.242676C0.108661 1.867 0 1.74998 0 1.60566V0.573503C0 0.429179 0.108661 0.31216 0.242676 0.31216Z" fill="#EB140A"/>
<path d="M0.607288 2.39648H6.27234C6.40635 2.39648 6.51501 2.5135 6.51501 2.65783V9.49013C6.51501 9.63445 6.40635 9.75147 6.27234 9.75147H0.607288C0.473274 9.75147 0.364613 9.63445 0.364613 9.49013V2.65783C0.364613 2.5135 0.473274 2.39648 0.607288 2.39648ZM4.59252 8.81099C4.59252 8.95531 4.70118 9.07233 4.8352 9.07233H5.06107C5.19509 9.07233 5.30375 8.95531 5.30375 8.81099V3.33697C5.30375 3.19265 5.19509 3.07563 5.06107 3.07563H4.8352C4.70118 3.07563 4.59252 3.19265 4.59252 3.33697V8.81099ZM3.08415 8.81099C3.08415 8.95531 3.19281 9.07233 3.32683 9.07233H3.5527C3.68672 9.07233 3.79538 8.95531 3.79538 8.81099V3.33697C3.79538 3.19265 3.68672 3.07563 3.5527 3.07563H3.32683C3.19281 3.07563 3.08415 3.19265 3.08415 3.33697V8.81099ZM1.57588 8.81099C1.57588 8.95531 1.68454 9.07233 1.81855 9.07233H2.04443C2.17844 9.07233 2.2871 8.95531 2.2871 8.81099V3.33697C2.2871 3.19265 2.17844 3.07563 2.04443 3.07563H1.81855C1.68454 3.07563 1.57588 3.19265 1.57588 3.33697V8.81099Z" fill="#EB140A"/>
</svg>
</a>
</div>


                             </div>

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
            <div className="name notificatio-outer">Keyboard
                  </div>
            <div className="desi joblocation">
            Logitech        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">BTLP01</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Connector Type</div>
         <div className="right">: USB</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Special Feature </div>
         <div className="right">:Not In Use</div>
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
      <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Keyboard
                  </div>
            <div className="desi joblocation">
            Logitech        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">BTLP01</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Connector Type</div>
         <div className="right">: USB</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Special Feature </div>
         <div className="right">:Not In Use</div>
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
            <div className="name notificatio-outer">Keyboard
                  </div>
            <div className="desi joblocation">
            Logitech        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">BTLP01</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Connector Type</div>
         <div className="right">: USB</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Special Feature </div>
         <div className="right">:Not In Use</div>
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
      <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Keyboard
                  </div>
            <div className="desi joblocation">
            Logitech        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">BTLP01</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Connector Type</div>
         <div className="right">: USB</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Special Feature </div>
         <div className="right">:Not In Use</div>
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
             
    
    )
}
  }

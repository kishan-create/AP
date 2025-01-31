import React, { Component } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import {
  MdOutlineFileDownload,
  MdOutlinePrint,
  MdPhone,
  MdCheck,
  MdLocationPin,MdStars
} from "react-icons/md";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { Card, Icon, Image } from "semantic-ui-react";
import {
  profileimage1,
  editicon,
  locationprofile,
  tick,
  profileimage2, yy
} from "../../images";
import { FaCheck } from "react-icons/fa";
import Pagination from "material-ui-pagination";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import { Sync } from "@material-ui/icons";

import { location, PencilNew, DeferTime, Offboarding1, Offboarding2, Offboarding3, Hirecompleted } from '../../images';
import MySelect from "./Multselectdropdown/Myselect";
import { colourOptions } from "./Multselectdropdown/data";
import { components } from "react-select";
import makeAnimated from "react-select/animated";
import ReactTooltip from 'react-tooltip';
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

// const userdata=[{name:"kiran"},{name:"anu"},{name:"akash"},{name:"aju"},];

// const options = [
//   { label: "Grapes 🍇", value: "grapes" },
//   { label: "Mango 🥭", value: "mango" },
//   { label: "Strawberry 🍓", value: "strawberry", disabled: true },
// ];

const fruits = [
  { label: "Mango", value: "mg",'id':"test" },
  { label: "Guava", value: "gv" },
  { label: "Peach", value: "pc" },
  { label: "Apple", value: "ap" },
  { label: "sample", value: "mg",'id':"test" },
];

export default class Emplyelist extends Component {
 

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
      activecount:0,
      noticecount:0,
      inactivecount:0,
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
    this.SearchbyCountbtn = this.SearchbyCountbtn.bind(this);
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
        activecount:response.data.countactive,
        noticecount:response.data.countnotice,
        inactivecount:response.data.inactivecount,
        loading: false,
      });

    }

  }
  fetchData = async () => {
    const res = await axios.get("http://localhost:8000/api/getEmployeeDetails");
    if (res.data.status === 200) {
      this.setState({
        employeelist: res.data.emp,
        activecount:res.data.countactive,
        noticecount:res.data.countnotice,
        inactivecount:res.data.inactivecount,
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
          activecount:response.data.countactive,
          noticecount:response.data.countnotice,
          inactivecount:response.data.inactivecount,
          loading: false,
        });
  
      }
    }
    else {
      this.fetchData();
    }
    
  }
  SearchbyCountbtn =async(name)=>{
    const res = await axios.get(
      `http://localhost:8000/api/searchbycount/${name}` );
      if (res.data.status === 200) {
        this.setState({
          employeelist: res.data.emp,
         // activecount:res.data.countactive,
         // noticecount:res.data.countnotice,
         // inactivecount:res.data.inactivecount,
          loading: false,
        });
      
  }
  
  }
  // onChangeCheckbox = e => {
  //   const isChecked = !this.state.checked;
  //   this.setState({
  //     checked: isChecked,
  //     values: isChecked ? options : this.state.values
  //   });
  // };
  // onChange = opt => {
  //   const allOptionsSelected = opt.length === options.length;
  //   this.setState({
  //     checked: allOptionsSelected ? true : false,
  //     values: opt
  //   });
  // };

  // checkhandleChange=(e)=>{
  //   this.setState({user:e.target});
  //   let tempuser=user.map(user=>user.name===name)
  // }
  render() {

    return (
      
      <div className="epmtab-w">

 
        <div className="m-t-25  form-group ">
       
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
               
                <span>{this.state.activecount}</span>
              </div>
              <img  onClick={() => this.SearchbyCountbtn('active')} src={Offboarding1} />
            </div>
            <div  className="box-inner emp-active-box onboard-ligt-violet">
              <div  className='left'>
                <p >Notice Periods</p>
                <span>{this.state.noticecount}</span>
              </div>
              <img onClick={() => this.SearchbyCountbtn('notice')}  src={Hirecompleted} />
            </div>
            <div className="box-inner emp-active-box onboard-ligt-blue">
              <div className='left'>
                <p>Inactive</p>
                <span>{this.state.inactivecount}</span>
              </div>
              <img   onClick={() => this.SearchbyCountbtn('inactive')} src={Offboarding3} />
            </div>
          </div>
          
        </div>
  
        <div className="empoyee-list-content-are ">
          <List>
            <ListItem key="1">
              {this.state.employeelist.map((n) => {
               if(n.status=='active')
               {
                  var divclass="green-bg";
               }
               else if(n.status=='notice')
               {
                var divclass="orange-bg";
               }
               else {
                var divclass="red-bg";
               }
                // var p_image= "http://localhost/audit_portal/public/uploads/profile/" +
                //
              
                return (
                  <div className="emp-card" key={n.empid}>
       
                  <div className=" ">
        
         
    
                    <Link to={{
                      pathname: `/Employeeprofile/${n.empid}`, data: n.id, // your data array of objects
                    }} >
                      <Card >
                        <Card.Content className="emplyee-card-top">
                      
                          <div className="emplyee-card-left">
                            <div className={`tick-round ${divclass}`}>
                            {n.status == "notice"? <img src={tick}  data-tip data-for= {"registerTip1_" + n.empid}/> :<img src={tick} /> }
                              <ReactTooltip id={"registerTip1_" + n.empid} place="top" effect="solid" className="np-tooltipbox">
      <span className="np-style">  { n.Days ? n.Days+' ' +'Days left' : null } </span> 
      </ReactTooltip>
                            </div>
                            <div className="tick-round purple-bg">
                              <MdPhone className="emp-card-phon" />
                            </div>
                          

                          </div>
                           
                          <div className="image-box" >
                          <img src={"http://auditportal.bourntec.com:3001/audit_portal/public/uploads/profile/" + n.image} />
                          </div>

                          <Card.Header className="profile-name">

                            <span>  {n.emp_name}</span>
                            <p>{n.designation_name}
                              <div className="m-t-rever-7"> {n.emp_code}</div>
                             <a href="" className="mail-undrln">{n.emp_company_email_id}</a> 
                            </p>
                            <div className="star-rt">
                  <button data-tip data-for= {"registerTip" + n.empid}>
       < MdStars className={n.badge}/>
      </button>    <ReactTooltip id={"registerTip" + n.empid} place="top" effect="solid">
      {n.bourntecexp}  Experience
      </ReactTooltip>
    </div>
                          </Card.Header>
                        
         

                          <div>
                            <div className="profile-location">

                            </div>
                            <div className="profile-location-right ">

                            </div>
                          </div>
                          <Card.Description className="profile-content">

                            
                            <div className="inner-section">
                              <div className="left">Joining Date</div>
                              <div className="right"> {n.emp_joining_date}</div>
                            </div>
                            <div className="inner-section">
                              <div className="left">Total Experience</div>
                              <div className="right">{n.exp}</div>
                            </div>
                            <div className="inner-section">
                              <div className="left">Department</div>
                              <div className="right">{n.department_name}</div>
                            </div>
                            <div className="inner-section">
                              <div className="left">  Skill Set</div>
                              <div className="right"> Java </div>
                            </div>
                            <div className="inner-section m-t-rever-10 ">
                              <div className="left">
                                <i className="fa fa-map-marker map-emp-wdt " aria-hidden="true" ></i>
                                <span className="">{n.emp_location} </span>
                               
                              </div>
                              
                              
                              <div className="right">
                             
                              
                          
                              </div>
                             
                            </div>
                          </Card.Description>
                        </Card.Content>

                      </Card></Link>
                  </div>
                  </div>
                );

              })}
            </ListItem>
          </List>
          <TablePagination
            className="pagenation-outer"
            component="nav"
            page={0}
            rowsPerPage={10}
            count={100}
            onChangePage={() => { }}
          />
        </div>

      </div>
    );
  }
}




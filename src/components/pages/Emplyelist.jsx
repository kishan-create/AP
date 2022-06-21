import React, { Component } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import {
  MdOutlineFileDownload,
  MdOutlinePrint,
  MdPhone,
  MdCheck,
  MdLocationPin,
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

export default class Emplyelist extends Component {
  fruites = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear", disabled: true },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" }
  ];

  constructor() {
    super();
    this.state = {
      checked: true,
      employeelist: [],
      emplocation: [],
      designation: [],
      optionSelected: null,
      optionSelectedloc: null,
      selectedo: [],
      options: [{ optname: 'Option 1️⃣', id: 1 }, { optname: 'Option 2️⃣', id: 2 }],
      formData: {

        location_items: [],
        designation_items: [],
      },

      count: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.onSelectLocation = this.onSelectLocation.bind(this);
    this.onSelectDesignation = this.onSelectDesignation.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount = () => {
    this.fetchData();

    this.getGetLocationName();
    this.getDesignationName();
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

  render() {

    return (
      
      <div className="epmtab-w">

 
        <div className="emplyee-top">
          <div className="emplyesearch emplyesearch1">
            <input
              className="form-control"
              type="text"
              id="birthday"
              name="birthday"
              placeholder="Search "
            />
            <button type="button">
              {" "}
              <FaSearch className="add-btn-icon" />
            </button>
          </div>
          <div class="form-group emp-searc-location ">
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

          <div class="form-group emp-searc-location ">
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
              name="designation" className="form-control "
            />
          </div>


          <div className="recruitment-top-right-box active-employee-top">
            <label className="active-swite-toggle">
              <span>Active Employees</span>
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
              />
            </label>
          </div>
        </div>
        
        <div className='onboarding-top-outer emp-active-box-outer '>
          <div className='box'>
            <div className="box-inner emp-active-box">
              <div className='left'>
                <p>Active</p>
                <span>120</span>
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
       
        <div className="empoyee-list-content-are ">
          <List>
            <ListItem>
              {this.state.employeelist.map((n) => {

                // var p_image= "http://localhost/audit_portal/public/uploads/profile/" +
                //


                return (
                  <div className="emp-card">
                    
                  <div className=" ">
                    <Link to={{
                      pathname: `/Employeeprofile/${n.empid}`, data: n.id, // your data array of objects
                    }} >
                      <Card >
                        <Card.Content className="emplyee-card-top">
                          <div className="emplyee-card-left">
                            <div className="tick-round green-bg">
                              <img src={tick} />
                            </div>
                            <div className="tick-round purple-bg">
                              <MdPhone className="emp-card-phon" />
                            </div>


                          </div>
                          <div className="image-box" >
                            <img src={"http://localhost/audit_portal/public/uploads/profile/" + n.image} />
                          </div>

                          <Card.Header className="profile-name">

                            <span>  {n.emp_name}</span>
                            <p>{n.designation_name}
                              <div className="m-t-rever-7"> {n.emp_code}</div>
                            </p>

                          </Card.Header>
                          <div>
                            <div className="profile-location">

                            </div>
                            <div className="profile-location-right ">

                            </div>
                          </div>
                          <Card.Description className="profile-content">

                            <div className="inner-section">
                              <div className="left">Mail ID</div>
                              <div className="right">
                                {n.emp_company_email_id}
                              </div>
                            </div>
                            <div className="inner-section">
                              <div className="left">Joining Date</div>
                              <div className="right"> {n.emp_joining_date}</div>
                            </div>
                            <div className="inner-section">
                              <div className="left">Total Experience</div>
                              <div className="right">{n.fk_emp_previous_exp}</div>
                            </div>
                            <div className="inner-section">
                              <div className="left">Department</div>
                              <div className="right">{n.department_name}</div>
                            </div>
                            <div className="inner-section m-t-rever-10 ">
                              <div className="left">
                                <i class="fa fa-map-marker map-emp-wdt " aria-hidden="true" ></i>
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

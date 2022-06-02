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
  profileimage2,yy
} from "../../images";
import { FaCheck } from "react-icons/fa";
import Pagination from "material-ui-pagination";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
export default class Emplyelist extends Component {
  constructor() {
    super();
    this.state = { 
      checked: true,
      employeelist: [], 
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount = () => {
    this.fetchData();
  }
  fetchData = async () => {
    const res = await axios.get("http://localhost:8000/api/getEmployeeDetails");
        if (res.data.status === 200) {
              this.setState({
                employeelist: res.data.emp,
                loading: false,
              });
              
            }
            console.log(this.state.employeelist);
  }
  handleChange(checked) {
    this.setState({ checked });
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
                    <select id="dropdown" name="job_post" class="form-control">
                          <option value="">Location</option>
                          <option value="1">Cochi</option>
                          <option value="2">Bhubaneswar</option>
                          <option value="3">Hyderabad</option>
                          <option value="4">UAE</option>
                          </select>
                </div>
                <div class="form-group emp-searc-location "> 
                    <select id="dropdown" name="job_post" class="form-control">
                          <option value="">Designation</option>
                          <option value="1">Software Engineer </option>
                          <option value="2">Sr. Software Engineer</option>
                          <option value="3">Team Lead</option>
                          <option value="4">Software Tester</option>
                          </select>
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
              <div className="empoyee-list-content-are">
                <List>
                  <ListItem>
                  {this.state.employeelist.map((n) => {
                    
                  // var p_image= "http://localhost/audit_portal/public/uploads/profile/" +
                 //
                
                  
                     return (
                    <div className="width-25">
                      <Card>
                        <Card.Content className="emplyee-card-top">
                          <div className="emplyee-card-left">
                            <div className="tick-round green-bg">
                              <img src={tick} />
                            </div>
                            <div className="tick-round purple-bg">
                              <MdPhone />
                            </div>
                          </div>
                          <div className="image-box">
                            <img src={"http://localhost/audit_portal/public/uploads/profile/"+n.image} />
                          </div>
                          <Card.Header className="profile-name">
                            <span>  {n.emp_name}</span>
                            <p>{n.designation_name}</p>
                          </Card.Header>
                          <Card.Description className="profile-content">
                            <div className="inner-section">
                              <div className="left">Employee Code</div>
                              <div className="right">{n.emp_code}</div>
                            </div>
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
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra className="profile-card-bottom">
                          <div className="profile-location">
                            <img src={locationprofile} />
                            <span>{n.emp_location} </span>
                          </div>
                          <div className="profile-location-right">
                            <div className="buttons-outer maring-left-15">
                              
                            <Link
                            to={{
                              pathname: `/Employeeprofile/${n.id}`,
    
                              data: n.id, // your data array of objects
                            }}
                          >view profile</Link>
                              
                            </div>
                            <div className="buttons-outer maring-left-15">
                              <a
                                href="add"
                                className="white-button download-bt"
                              >
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z"
                                    fill="#4A54D1"
                                  />
                                  <path
                                    d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z"
                                    fill="#4A54D1"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </Card.Content>
                      </Card>
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
                  onChangePage={() => {}}
                />
              </div>
             
      </div>
    );
  }
}

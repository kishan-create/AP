import React, { Component } from 'react';
import Popupmodal from "./Popupmodal";
import Switch from "react-switch";
import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin } from "react-icons/md";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { HTML5Backend } from 'react-dnd-html5-backend'; import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { Card, Icon, Image } from 'semantic-ui-react';
import { profileimage1, editicon, locationprofile, tick, profileimage2 } from '../../images';
import { FaCheck } from "react-icons/fa";
import Pagination from 'material-ui-pagination';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";

export default class Emplyelist extends Component {

    constructor() {
        super();
        this.state = { checked: true };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <div>

                <main className="inner-content-box">
                    <header className="main-otrer-top"> Employee </header>

                    <section className="main-content-area">
                        <div className="main-content-area-inner">
                            <div className="sub-head">Employee List
                                <div className="top-right-outer add-btn-div">
                                    <div className="buttons-outer">
                                        <a href="add" className="blue-button">
                                            <SiAddthis className="add-btn-icon" /> Add Employee
                                        </a>
                                    </div>

                                    <div className="buttons-outer maring-left-15">
                                        <a href="add" className="white-button download-bt">
                                            <MdOutlineFileDownload className="add-btn-icon" /> Download
                                        </a>
                                    </div>

                                    <div className="buttons-outer maring-left-15">
                                        <a href="add" className="white-button  download-bt">
                                            <MdOutlinePrint className="add-btn-icon" /> Print
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="emplyee-top">
                                <div className="emplyesearch">
                                    <input className="form-control" type="text" id="birthday" name="birthday" placeholder="Search " />
                                    <button type="button"> <FaSearch className="add-btn-icon" /></button>
                                </div>
                                <div className="recruitment-top-right-box">

                                    <label className="active-swite-toggle">
                                        <span>Active Empolyees</span>
                                        <Switch onChange={this.handleChange} checked={this.state.checked} />
                                    </label>
                                </div>
                            </div>
                            <div className="empoyee-list-content-are">
                            <List>
                            <ListItem>
                                <div className="width-25">
                                    <Card>
                                        <Card.Content className="emplyee-card-top">
                                            <div className="emplyee-card-left">
                                                <div className="tick-round green-bg"><img src={tick} /></div>
                                                <div className="tick-round purple-bg"><MdPhone /></div>

                                            </div><div className="image-box">
                                                <img src={profileimage1} />
                                            </div>
                                            <Card.Header className="profile-name">
                                                <span>Arun Kumar</span>
                                                <p>Software Engineer</p>
                                            </Card.Header>
                                            <Card.Description className="profile-content">
                                                <div className="inner-section">
                                                    <div className="left">Employee Code</div>
                                                    <div className="right">102</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Mail ID</div>
                                                    <div className="right">arunkumar@bourntce.com</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Joining Date</div>
                                                    <div className="right">01/01/2021</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Total Experience</div>
                                                    <div className="right">10.5</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Department</div>
                                                    <div className="right">Python</div>
                                                </div>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra className="profile-card-bottom">
                                            <div className="profile-location">
                                                <img src={locationprofile} /><span>Cochin</span>
                                            </div>
                                            <div className="profile-location-right">
                                                <div className="buttons-outer maring-left-15">
                                                    <a href="Employeeprofile" className="white-button download-bt">
                                                        View Profile
                                                    </a>
                                                </div>
                                                <div className="buttons-outer maring-left-15">
                                                    <a href="add" className="white-button download-bt">
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z" fill="#4A54D1" />
                                                            <path d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z" fill="#4A54D1" />
                                                        </svg>

                                                    </a>
                                                </div>



                                            </div>
                                        </Card.Content>
                                    </Card>
                                </div>


                                <div className="width-25">
                                    <Card>
                                        <Card.Content className="emplyee-card-top">
                                            <div className="emplyee-card-left">
                                                <div className="tick-round orange-bg"><img src={tick} /></div>
                                                <div className="tick-round purple-bg"><MdPhone /></div>

                                            </div><div className="image-box">
                                                <img src={profileimage2} />
                                            </div>
                                            <Card.Header className="profile-name">
                                                <span>Anu Thomas </span>
                                                <p>Sr. Software Engineer</p>
                                            </Card.Header>
                                            <Card.Description className="profile-content">
                                                <div className="inner-section">
                                                    <div className="left">Employee Code</div>
                                                    <div className="right">102</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Mail ID</div>
                                                    <div className="right">arunkumar@bourntce.com</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Joining Date</div>
                                                    <div className="right">01/01/2021</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Total Experience</div>
                                                    <div className="right">10.5</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Department</div>
                                                    <div className="right">Python</div>
                                                </div>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra className="profile-card-bottom">
                                            <div className="profile-location">
                                                <img src={locationprofile} /><span>Cochin</span>
                                            </div>
                                            <div className="profile-location-right">
                                                <div className="buttons-outer maring-left-15">
                                                    <a href="Employeeprofile" className="white-button download-bt">
                                                        View Profile
                                                    </a>
                                                </div>
                                                <div className="buttons-outer maring-left-15">
                                                    <a href="add" className="white-button download-bt">
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z" fill="#4A54D1" />
                                                            <path d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z" fill="#4A54D1" />
                                                        </svg>

                                                    </a>
                                                </div>



                                            </div>
                                        </Card.Content>
                                    </Card>
                                </div>

                                <div className="width-25">
                                    <Card>
                                        <Card.Content className="emplyee-card-top">
                                            <div className="emplyee-card-left">
                                                <div className="tick-round green-bg"><img src={tick} /></div>
                                                <div className="tick-round purple-bg"><MdPhone /></div>

                                            </div><div className="image-box">
                                                <img src={profileimage1} />
                                            </div>
                                            <Card.Header className="profile-name">
                                                <span>Arun Kumar</span>
                                                <p>Software Engineer</p>
                                            </Card.Header>
                                            <Card.Description className="profile-content">
                                                <div className="inner-section">
                                                    <div className="left">Employee Code</div>
                                                    <div className="right">102</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Mail ID</div>
                                                    <div className="right">arunkumar@bourntce.com</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Joining Date</div>
                                                    <div className="right">01/01/2021</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Total Experience</div>
                                                    <div className="right">10.5</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Department</div>
                                                    <div className="right">Python</div>
                                                </div>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra className="profile-card-bottom">
                                            <div className="profile-location">
                                                <img src={locationprofile} /><span>Cochin</span>
                                            </div>
                                            <div className="profile-location-right">
                                                <div className="buttons-outer maring-left-15">
                                                    <a href="Employeeprofile" className="white-button download-bt">
                                                        View Profile
                                                    </a>
                                                </div>
                                                <div className="buttons-outer maring-left-15">
                                                    <a href="add" className="white-button download-bt">
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z" fill="#4A54D1" />
                                                            <path d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z" fill="#4A54D1" />
                                                        </svg>

                                                    </a>
                                                </div>



                                            </div>
                                        </Card.Content>
                                    </Card>
                                </div>


                                <div className="width-25">
                                    <Card>
                                        <Card.Content className="emplyee-card-top">
                                            <div className="emplyee-card-left">
                                                <div className="tick-round orange-bg"><img src={tick} /></div>
                                                <div className="tick-round purple-bg"><MdPhone /></div>

                                            </div><div className="image-box">
                                                <img src={profileimage2} />
                                            </div>
                                            <Card.Header className="profile-name">
                                                <span>Anu Thomas </span>
                                                <p>Sr. Software Engineer</p>
                                            </Card.Header>
                                            <Card.Description className="profile-content">
                                                <div className="inner-section">
                                                    <div className="left">Employee Code</div>
                                                    <div className="right">102</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Mail ID</div>
                                                    <div className="right">arunkumar@bourntce.com</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Joining Date</div>
                                                    <div className="right">01/01/2021</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Total Experience</div>
                                                    <div className="right">10.5</div>
                                                </div>
                                                <div className="inner-section">
                                                    <div className="left">Department</div>
                                                    <div className="right">Python</div>
                                                </div>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra className="profile-card-bottom">
                                            <div className="profile-location">
                                                <img src={locationprofile} /><span>Cochin</span>
                                            </div>
                                            <div className="profile-location-right">
                                                <div className="buttons-outer maring-left-15">
                                                    <a href="Employeeprofile" className="white-button download-bt">
                                                        View Profile
                                                    </a>
                                                </div>
                                                <div className="buttons-outer maring-left-15">
                                                    <a href="add" className="white-button download-bt">
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z" fill="#4A54D1" />
                                                            <path d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z" fill="#4A54D1" />
                                                        </svg>

                                                    </a>
                                                </div>



                                            </div>
                                        </Card.Content>
                                    </Card>
                                </div>

                                </ListItem>
                               
 
       
        
            </List>
      <TablePagination className="pagenation-outer"
        component="nav"
        page={0}
        rowsPerPage={10}
        count={100}
        onChangePage={() => {}}
      />
    

                            </div>
                        </div>
                    </section>
                </main>


            </div>
        )
    }
}

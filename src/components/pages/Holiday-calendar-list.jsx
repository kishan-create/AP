import React, { useEffect, useState, Component } from "react";
import PropTypes from "prop-types";
import {
  MdOutlineFileDownload,
  MdOutlinePrint,
  MdPhone,
  MdCheck,
  MdLocationPin,
} from "react-icons/md";
import { withStyles } from "@material-ui/core/styles";
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Addholidaymodal from "./addholidaymodal";
import axios from "axios";
import swal from "sweetalert";
import Modal from "react-modal";
import { MdClose } from "@react-icons/all-files/md/MdClose";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
const styles = (theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing.unit * 3,
    overflowX: "hide",
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
});

let id = 0;
function createData(HolidayName, HolidayDate, HolidDay, action) {
  id += 1;
  return { HolidayName, HolidayDate, HolidDay, action };
}

//  const edit_holidays = async (id) => {
//     const holiday_id = id;
//     const reponse = await axios.get(`http://auditportal.bourntec.com:3001/audit_portal/public/api/edit_holidays/{id}'`)
//     console.log(reponse.data.holiday[0]);
//     if (reponse.data.status == 200) {
//       SetValues({
//         holiday_id: reponse.data.holiday[0].holiday_id,
//         holiday_hol_name: reponse.data.holiday[0].holiday_hol_name,
//         holiday_date: reponse.data.holiday[0].holiday_date,
//         holiday_hol_day: reponse.data.holiday[0].holiday_hol_day,

//       })
//       setIsOpen(true);
//     }
//   }

// const updateHolidays = async (e) => {
//   e.preventDefault();
//   const res = await axios.put('http://auditportal.bourntec.com:3001/audit_portal/public/api/update_holidays', values);
//   if (res.data.status == 200) {
//     swal({
//       title: "Good job!",
//       text: "Job Updated successfully",
//       icon: "success",
//       button: "ok",
//     });
//   }
// }
const data = [
  createData("Republic Day", "26 Jan, 2022", "Wednesday"),
  createData("Maha Shivratri", "1 Mar, 2022", "Tuesday"),
  createData("Maundy Thursday", "14 Apr, 2022", "Thursday"),
  createData("Good Friday", "15 Apr, 2022", "Friday"),
  createData("Independence Day", "15 Aug, 2022", "Monday"),
  createData("Sree Krishna Jayanthi", "18 Aug, 2022", "Thursday"),
  createData("First Onam", "7 Sept 2022", "Wednesday"),
  createData("Thiruvonam", "8 Sept 2022", "Thursday"),
  createData("Maha Navami", "4 Oct, 2022", "Tuesday"),
  createData("Diwali", "24 Oct, 2022", "Monday"),
];

const delete_holidays = async (e, id) => {
  e.preventDefault();
  const thisclickrow = e.currentTarget;
  thisclickrow.innerText = "Deleting";
  const res = await axios.delete(
    `http://auditportal.bourntec.com:3001/audit_portal/public/api/delete_holidays/${id}`
  );
  if (res.data.status == 200) {
    thisclickrow.closest("tr").remove();
    alert("holiday Deleted successfully");
  }
};

export default class HolidayList extends Component {
  constructor() {
    super();
    this.state = {
      holiday: [],
      options: ["IT service", "Design"],
      loading: true,
      modalIsOpen: false,

      formData: {
        hol_name: "",
        hol_date: "",
        // hol_day: "",
      },
    };
    // this.method();
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount = () => {
    this.fetchdata();

    // const res = await axios.get("http://auditportal.bourntec.com:3001/audit_portal/public/api/getHolidays");

    // if (res.data.status === 200) {
    //   this.setState({
    //     holiday: res.data.holiday,
    //     loading: false,
    //   });
    // }
    // console.log(this.state.holiday);
  };

  fetchdata = async () => {
    const res = await axios.get("http://auditportal.bourntec.com:3001/audit_portal/public/api/getHolidays");

    if (res.data.status === 200) {
      this.setState({
        holiday: res.data.holiday,
        loading: false,
      });
    }
  };

  async edit(id) {
    const holiday_id = id;
    const reponse = await axios.get(
      `http://auditportal.bourntec.com:3001/audit_portal/public/api/edit_holidays/${holiday_id}`
    );
    if (reponse.data.status == 200) {
      this.setState({
        formData: {
          hol_name: reponse.data.branch.hol_name,
          hol_date: reponse.data.branch.hol_date,

          // hol_day: reponse.data.branch.hol_day,

          id: reponse.data.branch.id,
        },
        modalIsOpen: true,
      });
    }
  }

  updateHolidays = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      "http://auditportal.bourntec.com:3001/audit_portal/public/api/update_holidays",
      this.state.formData
    );

    // if (res.data.status == 200) {
    //   swal({
    //     title: "Good job!",
    //     text: "Holiday Updated successfully",
    //     icon: "success",
    //     button: "ok",
    //   });

    // }
    window.location.reload();
  };
  CustomTab = ({ children }) => <div>{children}</div>;
  // CustomTab.tabsRole = "Tab";
  closeModal() {
    this.setState({ modalIsOpen: false });
    this.method();
  }

  handleInputs = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <main className="inner-content-box">
        <header className="main-otrer-top"> Holiday Calendar</header>
        <section className="main-content-area">
          <div className="main-content-area-inner">
            <div className="sub-head organization-sub-head">
              Holidays List
              <div className="top-right-outer add-btn-div">
                <Addholidaymodal method={this.fetchdata} />
              </div>
            </div>

            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              className="job-detils-modal addabrch-modal"
              contentLabel="Example Modal"
            >
              <form onSubmit={this.updateHolidays} className="form" noValidate>
                <div className="popup-head-sty modal-button-bg">
                  <div className="popup-head-content-sty">
                    <h4>Edit Holidays</h4>
                  </div>
                  <div className="popup-head-icon-sty">
                    <MdClose
                      className="popup-close-btn"
                      onClick={this.closeModal}
                    />
                  </div>
                </div>
                <div className="popup-content-bg">
                  <div class="row addabrch-content-box">
                    <div class="col-md-12">
                      <div class="row ">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="exampleFormControlInput1">
                              Holiday Name
                            </label>
                            <input
                              name="hol_name"
                              type="text"
                              onChange={this.handleInputs}
                              value={this.state.formData.hol_name}
                              class="form-control"
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Date</label>
                            <input
                              name="hol_date"
                              onChange={this.handleInputs}
                              value={this.state.formData.hol_date}
                              type="date"
                              class="form-control"
                            ></input>
                          </div>
                        </div>
                        {/* <div class="col-md-4">
                            <div class="form-group">
                              <label for="exampleFormControlInput1">
                                Holiday Day
                              </label>
                              <input
                                name="hol_day"
                                onChange={this.handleInputs}
                                value={this.state.formData.hol_day}
                                type="text"
                                class="form-control"
                              ></input>
                            </div>
                          </div> */}

                        <input type="hidden" name="id" value={this.state.id} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" modal-footer-button-bg">
                  <button type="submit" class="btn  btn-save ">
                    {" "}
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn  btn-cancel "
                    onClick={this.closeModal}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </div>
              </form>
            </Modal>

            <div className="col-md-12 job-main-tb-outer holiday-table-main-outer">
              <Paper className="holiday-table-list">
                <Table className="">
                  <TableHead>
                    <TableRow>
                      <TableCell className="cal-width-50">Name</TableCell>
                      <TableCell className="cal-width-20">Date</TableCell>
                      <TableCell className="cal-width-20">Day</TableCell>
                      <TableCell className="cal-width-10">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.holiday.map((n) => {
                      return (
                        <TableRow key={n.id}>
                          <TableCell className="cal-width-50">
                            {" "}
                            {n.hol_name}
                          </TableCell>
                          <TableCell numeric className="cal-width-20">
                            {n.date}
                          </TableCell>
                          <TableCell numeric className="cal-width-20">
                            {n.hol_day}
                          </TableCell>
                          <TableCell numeric className="cal-width-10">
                            <div className="action-outer">
                              <div
                                className="edit-new-icon "
                                button
                                onClick={() => this.edit(n.id)}
                              >
                                {/* <a href="/Assetsdetails"> */}
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_853_552)">
                                    <path
                                      d="M11.3309 7.47133L3.89176 0.0321975C3.75248 -0.107087 3.52679 -0.107087 3.38765 0.0321975L0.0322586 3.38759C-0.107026 3.52687 -0.107026 3.75256 0.0322586 3.8917L7.4714 11.3308L11.3309 7.47133Z"
                                      fill="#3F53C3"
                                    />
                                    <path
                                      d="M12.4018 12.9159L7.83289 11.6917L11.6925 7.83203L12.9168 12.401C13.0004 12.7136 12.7145 12.9996 12.4018 12.9159Z"
                                      fill="#3F53C3"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_853_552">
                                      <rect
                                        width="13"
                                        height="13"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>

                                {/* 
</a> */}
                              </div>
                              <div
                                className="delete-icon"
                                onClick={(e) => delete_holidays(e, n.id)}
                              >
                                <a href="">
                                  <svg
                                    width="7"
                                    height="10"
                                    viewBox="0 0 7 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.242676 0.31216H2.19897V0.261343C2.19897 0.117019 2.30763 0 2.44165 0H4.43799C4.57201 0 4.68067 0.117019 4.68067 0.261343V0.31216H6.63696C6.77098 0.31216 6.87964 0.429179 6.87964 0.573503V1.60566C6.87964 1.74998 6.77098 1.867 6.63696 1.867H0.242676C0.108661 1.867 0 1.74998 0 1.60566V0.573503C0 0.429179 0.108661 0.31216 0.242676 0.31216Z"
                                      fill="#EB140A"
                                    />
                                    <path
                                      d="M0.607288 2.39648H6.27234C6.40635 2.39648 6.51501 2.5135 6.51501 2.65783V9.49013C6.51501 9.63445 6.40635 9.75147 6.27234 9.75147H0.607288C0.473274 9.75147 0.364613 9.63445 0.364613 9.49013V2.65783C0.364613 2.5135 0.473274 2.39648 0.607288 2.39648ZM4.59252 8.81099C4.59252 8.95531 4.70118 9.07233 4.8352 9.07233H5.06107C5.19509 9.07233 5.30375 8.95531 5.30375 8.81099V3.33697C5.30375 3.19265 5.19509 3.07563 5.06107 3.07563H4.8352C4.70118 3.07563 4.59252 3.19265 4.59252 3.33697V8.81099ZM3.08415 8.81099C3.08415 8.95531 3.19281 9.07233 3.32683 9.07233H3.5527C3.68672 9.07233 3.79538 8.95531 3.79538 8.81099V3.33697C3.79538 3.19265 3.68672 3.07563 3.5527 3.07563H3.32683C3.19281 3.07563 3.08415 3.19265 3.08415 3.33697V8.81099ZM1.57588 8.81099C1.57588 8.95531 1.68454 9.07233 1.81855 9.07233H2.04443C2.17844 9.07233 2.2871 8.95531 2.2871 8.81099V3.33697C2.2871 3.19265 2.17844 3.07563 2.04443 3.07563H1.81855C1.68454 3.07563 1.57588 3.19265 1.57588 3.33697V8.81099Z"
                                      fill="#EB140A"
                                    />
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
          </div>
        </section>
      </main>
    );
  }
}

import React, { Component } from 'react';
import Popupmodal from "./Popupmodal";
import Switch from "react-switch";
import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin } from "react-icons/md";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
 import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { Card, Icon, Image } from 'semantic-ui-react';
import { profileimage1, editicon, locationprofile, tick, profileimage2 } from '../../images';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";

export default class  Addproperty extends Component {


    render() {

        
        return (


            <div>

                <main className="inner-content-box">
                    <header className="main-otrer-top">Add Property </header>

                    <section className="main-content-area">
                        <div className="main-content-area-inner addproperty-bg">
                            <div className="sub-head border-0">Add Property
                                <div className="top-right-outer add-btn-div">
                                <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 

                                                                   </div>

                                                                   <div className="border-top"></div>
                            </div>

                            <div className="basic-inform-inner addproperty-inner padding-top-0 " >
           



<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Brand</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Laptop</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Asset Tag</label>
  <input type="email" className="form-control"/>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Type</label>
  <input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Serial Number</label>
  <input type="email" className="form-control"/>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Date of purchase</label>
  <input type="email" className="form-control"/>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Location</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Location</option>
 </select>
 </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Vendor Name</label>
  <input type="email" className="form-control"/>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Make</label>
  <input type="email" className="form-control"/>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Modal</label>
  <input type="email" className="form-control"/></div>
  </div>

  <div className="bottom-button-bg">
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 
        </div>
  
  </div>                

                        </div>
                    </section>
                </main>


            </div>
        )
    }
}

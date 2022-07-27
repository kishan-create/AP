import React, { Fragment } from 'react'
import './Employeelisttab.css'; 
import $ from 'jquery';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineFileDownload, MdOutlinePrint, MdOutlineTopic, MdGrading, MdShoppingBasket} from "react-icons/md";
import {BsPersonBadge, BsPersonBoundingBox, BsMenuApp } from "react-icons/bs";
import Assetform from "./includes/Assetform";
// import asset_val from "../validation/asset_val";
import asset_val from '../validation/asset_val';
export default function Addassets() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var href = $(e.target).attr('href');
    var $curr = $(".process-model  a[href='" + href + "']").parent();
    var $curr = $(".process-model  a[href='" - href - "']").parent();

    $('.process-model li').removeClass();

    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
});


const [myimage, setMyImage] = React.useState(null);
const uploadImage = e => {
  setMyImage(URL.createObjectURL(e.target.files[0]));
};

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const tablist = document.querySelector('[role="tablist"]');

const keys = {
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  enter: 13,
  space: 32
};

const direction = {
  37: -1,
  38: -1,
  39: 1,
  40: 1
};

const deactivateTabs = () => {
  tabs.forEach(tab => {
    tab.setAttribute("tabindex", "-1");
    tab.setAttribute("aria-selected", "false");
  });
};

const activateTab = (tab, setFocus = true) => {
  deactivateTabs();

  tab.removeAttribute("tabindex");
  tab.setAttribute("aria-selected", "true");

  if (setFocus) {
    tab.focus();
  }
};

const focusFirstTab = () => tabs[0].focus();

const focusLastTab = () => tabs[tabs.length - 1].focus();

const switchTabOnArrowPress = (keyCode, target) => {
  const index = tabs.findIndex(tab => tab === target);

  if (direction[keyCode]) {
    if (index !== -1) {
      if (tabs[index + direction[keyCode]]) {
        tabs[index + direction[keyCode]].focus();
      } else if (keyCode === keys.left || keyCode === keys.up) {
        focusLastTab();
      } else if (keyCode === keys.right || keyCode === keys.down) {
        focusFirstTab();
      }
    }
  }
};

const determineOrientation = (keyCode, target) => {
  const vertical = tablist.getAttribute("aria-orientation") === "vertical";
  let proceed = false;

  if (vertical) {
    if (keyCode === keys.up || keyCode === keys.down) {
      proceed = true;
    }
  } else {
    if (keyCode === keys.left || keyCode === keys.right) {
      proceed = true;
    }
  }

  if (proceed) {
    switchTabOnArrowPress(keyCode, target);
  }
};

const handleClick = event => activateTab(event.currentTarget, false);

const handleKeydown = event => {
  switch (event.keyCode) {
    case keys.left:
    case keys.right:
      determineOrientation(event.keyCode, event.currentTarget);
      break;
    case keys.enter:
    case keys.space:
      activateTab(event.currentTarget);
      break;
    default:
      break;
  }
};

const handleKeyup = event => {
  event.preventDefault();

  switch (event.keyCode) {
    case keys.end:
      focusLastTab();
      break;
    case keys.home:
      focusFirstTab();
      break;
    case keys.up:
    case keys.down:
      determineOrientation(event.keyCode, event.currentTarget);
      break;
    default:
      break;
  }
};

tabs.forEach(tab => {
  tab.addEventListener("click", handleClick);
  tab.addEventListener("keydown", handleKeydown);
  tab.addEventListener("keyup", handleKeyup);
});

const setDirection = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
   // tablist.setAttribute("aria-orientation", "vertical");
  } else {
   // tablist.setAttribute("aria-orientation", "horizontal");
  }
};

setDirection();

let timeout = false;

window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(setDirection, 200);
});
// const handleSubmit = (e) => {
//   e.preventDefault();
//   alert("test");
//   // const test = SetErrors(employee_val(values));
//   // // setGender(e.target.value)
//   // // setOptions("");
//   // setIsSubmitting(true);

// };

// const { handleChange, values, handleSubmit, errors,  options,designation,holidaylist,departments,uploadImage,myimage,employeelocation  } = Assetform(
//   // employee_val
// );

const { values, handleSubmit,handleChange,errors  } = Assetform(
  asset_val
);


    return (
      <main className="inner-content-box">
         <header className="main-otrer-top">Assets </header>
              <section  className="main-content-area">
            <div className="main-content-area-inner">
            <div className="sub-head">Add Assets
    <div className="top-right-outer add-btn-div">
                                    <div className="buttons-outer ">
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


        <div>
          <div id="app">
      <div className="tab-module">
        <div className="tab-module__tablist" role="tablist">
          <button className="tab-module__tab sub-line  Candidate-tab-button"  role="tab" aria-selected="true" aria-controls="colors-tab" id="colors">
          <div className="innver-box"  >
          <MdOutlineTopic className="basic-icon"/>
           <div className="emp-tabhead-txt">Specification </div>
           </div>
            
          </button>
          <div className="tab-module__tabcontent" tabindex="0"  role="tabpanel" id="colors-tab" aria-labelledby="colors">
          <div className="tab-outer">
      <div className="basic-inform-outer ">
<div className="row basic-inform-background ">
<div className="sub-head basic-inform-main-head">Specification
                                <div className="top-right-outer add-btn-div">
                                <button type="button" onClick={handleSubmit}  className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel " > Cancel </button> 

                                </div>
                            </div>
 {/* <form  className="form" noValidate></form> */}
  
  <div className="basic-inform-inner padding-top-0">

<div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Asset Category</label>
  <select
                        id="dropdown"
                        name="asset_category"
                        onChange={handleChange}
                        value={values.asset_category}
                        className="form-control"
                      >

                      {/* </select> */}



        {/* <select id = "dropdown" className="form-control"> */}
          <option value="Post">Logitech</option>
        </select>
        {errors.asset_category && (
                                  <p className="red-alert">{errors.asset_category}</p>
                                )}
  </div>
  </div>
  <div className="col-md-3">
  <div className="form-group">
    <label for="exampleFormControlInput1">Asset Name</label>
    <input
                                  type="text"
                                  name="asset_name"
                                  onChange={handleChange}
                                  value={values.asset_name}
                                  className="form-control"
                                ></input>
                                  {errors.asset_name && (
                                  <p className="red-alert">{errors.asset_name}</p>
                                )}
                                  
    {/* <input type="email" className="form-control"/> */}
    </div>
  </div>
  <div className="col-md-3">
      <div className="form-group">
        <label for="exampleFormControlInput1">Brand</label>
        <select
                        id="dropdown"
                        name="brand_name"
                        onChange={handleChange}
                        value={values.brand_name}
                        className="form-control"
                      >

                      {/* </select> */}



        {/* <select id = "dropdown" className="form-control"> */}
          <option value="Post">Logitech</option>
        </select>
        {errors.brand_name && (
                                  <p className="red-alert">
                                    {errors.brand_name}
                                  </p>
                                )}
      </div>
  </div>
  <div className="col-md-3">
      <div className="form-group">
        <label for="exampleFormControlInput1">Asset ID</label>

        <input
                                  type="text"
                                  name="asset_id"
                                  onChange={handleChange}
                                  value={values.asset_id}
                                  className="form-control"
                                ></input>
                                
        {/* <input type="email" className="form-control"/> */}
        {errors.asset_id && (
                                  <p className="red-alert">
                                    {errors.asset_id}
                                  </p>
                                )}
      
      </div>
  </div>
  <div className="col-md-3">
      <div className="form-group">
        <label for="exampleFormControlInput1">Model</label>

        <input
                                  type="text"
                                  name="model_name"
                                  onChange={handleChange}
                                  value={values.model_name}
                                  className="form-control"
                                ></input>
        {/* <input type="email" className="form-control"/> */}
    
        {errors.model_name && (
                                  <p className="red-alert">
                                    {errors.model_name}
                                  </p>
                                )}
      </div>
  </div>
  <div className="col-md-3">
      <div className="form-group">
        <label for="exampleFormControlInput1">Location</label>
 <select
                        id="dropdown"
                        name="location"
                        onChange={handleChange}
                       value={values.location}
                        className="form-control"
                      >

                      {/* </select> */}

        {/* <select id = "dropdown" className="form-control"> */}
          <option value="Post">Headquarters</option>
          <option value="Post">Headquarters1</option>
        </select>
        {errors.location && (
                                  <p className="red-alert">
                                    {errors.location}
                                  </p>
                                )}
        
      </div>
  </div>
  <div className="col-md-3">
      <div className="form-group">
        <label for="exampleFormControlInput1">Individual or Bulk Order ?</label>
{/* {values.location} */}
        <select
                        id="dropdown"
                        name="individual_bulk"
                        onChange={handleChange}
                        value={values.individual_bulk}
                        className="form-control"
                      >
                        
                      {/* </select> */}
       
       
        {/* <select id = "dropdown" className="form-control"> */}
          <option value="Post">Individual</option>
        </select>
        {errors.individual_bulk && (
                                  <p className="red-alert">
                                    {errors.individual_bulk}
                                  </p>
                                )}
        
      </div>
  </div>
  
  <div className="bottom-button-bg">
            <button type="button" onClick={handleSubmit}  className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel " > Cancel </button> 
        </div>
  
  </div>

</div>

        </div>

    </div>
          </div>
          <button className="tab-module__tab  sub-line  Candidate-tab-button" role="tab" aria-selected="false" aria-controls="styles-tab" id="styles" tabindex="-1" >
          <div className="innver-box"  >
              <MdGrading className="personal-icon"/>
              <div className="emp-tabhead-txt"> Details</div>
              </div>
          </button>
          <div className="tab-module__tabcontent" tabindex="0" role="tabpanel" id="styles-tab" aria-labelledby="styles" >

          <div className="tab-outer">
      <div className="basic-inform-outer">
<div className="row basic-inform-background ">
<div className="sub-head basic-inform-main-head">Details
                                <div className="top-right-outer add-btn-div">
                                <button type="button" className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel " > Cancel </button> 

                                </div>
                            </div>
  
  <div className="basic-inform-inner  padding-top-0">

<div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Connector Type</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Special Feature</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Keyboard Description</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Number of Keys</label><input type="email" className="form-control"/></div>
  </div>


  <div className="bottom-button-bg">
            <button type="button" className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel " > Cancel </button> 
        </div>
  
  </div>

</div>

        </div>

    </div>

           </div>
          
          <button className="tab-module__tab sub-line  Candidate-tab-button" role="tab" aria-selected="false" aria-controls="options-tab" id="options" tabindex="-1" >
          <div className="innver-box"  >
          <MdShoppingBasket className="employee-icon "/>
           <div className="emp-tabhead-txt">Purchase</div>
           </div>
          </button>
          <div className="tab-module__tabcontent" tabindex="0" role="tabpanel" id="options-tab" aria-labelledby="options" >
    
          <div className="tab-outer">
      <div className="basic-inform-outer ">
<div className="row basic-inform-background ">
<div className="sub-head basic-inform-main-head">Purchase
                                <div className="top-right-outer add-btn-div">
                                <button type="button" className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel " > Cancel </button> 

                                </div>
                            </div>
  
  <div className="basic-inform-inner padding-top-0">

<div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">purchase Date</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Cost</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Purchase order Number</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">vendor</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">vendor Contact number</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-9">
  <div className="form-group"><label for="exampleFormControlInput1">vendor Address</label><input type="email" className="form-control"/></div>
  </div>



  <div className="bottom-button-bg">
            <button type="button" className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel " > Cancel </button> 
        </div>
  
  </div>

</div>

        </div>

    </div>
          </div>

          <button className="tab-module__tab sub-line Candidate-tab-button" role="tab" aria-selected="false" aria-controls="options-tab" id="options" tabindex="-1" >
          <div className="innver-box"  >
          <BsMenuApp className="additional-icon"/>
           <div className="emp-tabhead-txt">More Info</div>
           </div>
          </button>
          <div className="tab-module__tabcontent" tabindex="0" role="tabpanel" id="accesories-tab" aria-labelledby="accesories" >
          <div className="tab-outer">
      <div className="basic-inform-outer ">
<div className="row basic-inform-background ">
<div className="sub-head basic-inform-main-head">More Info
                                <div className="top-right-outer add-btn-div">
                                <button type="button" className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel " > Cancel </button> 

                                </div>
                            </div>
  
  <div className="basic-inform-inner padding-top-0">

<div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Status</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Location</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Assigne to</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Series</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Warranty Date</label><input type="email" className="form-control"/></div>
  </div>
  <div className="col-md-3">
  <div className="form-group"><label for="exampleFormControlInput1">Warranty Service Type</label><input type="email" className="form-control"/></div>
  </div>
  
  <div className="col-md-6">
  <div className="form-group"><label for="exampleFormControlInput1">Warranty Summary</label><input type="email" className="form-control"/></div>
  </div>



  <div className="bottom-button-bg">
            <button type="button" className="btn  btn-save "  > Save</button>
            <button type="button" className="btn  btn-cancel " > Cancel </button> 
        </div>
  
  </div>

</div>

        </div>

    </div>
            </div>
          
              </div>
      </div>
    </div>  
     
        </div> 
        </div>
            </section>
        </main>
    )
}

import React, { Fragment } from 'react'
import './Employeelisttab.css'; 
import $ from 'jquery';
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import {FaThLarge, FaChartLine, FaTools } from "react-icons/fa";
import {FiAirplay } from "react-icons/fi"; 
import {MdOutlineSchool } from "react-icons/md"; 
import {GiReceiveMoney } from "react-icons/gi";
import {RiFileCloudLine,RiContactsBook2Line, RiFolderUserLine, RiBodyScanFill } from "react-icons/ri";
 
export default function RecruitmentTabs() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var href = $(e.target).attr('href');
    var $curr = $(".process-model  a[href='" + href + "']").parent();

    $('.process-model li').removeClass();

    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
});

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

    return (
        <div>
          <div id="app">
      <div class="tab-module">
        <div class="tab-module__tablist" role="tablist">
          <button class="tab-module__tab sub-line"  role="tab" aria-selected="true" aria-controls="colors-tab" id="colors">
         
          <RiFileCloudLine/>
           <div className="emp-tabhead-txt"> Basic  Information </div>
            
          </button>
          <div class="tab-module__tabcontent" tabindex="0"  role="tabpanel" id="colors-tab" aria-labelledby="colors">
          <section  className="main-content-area-cont">
                <div className="main-content-area-inner-cont">
                    <div className="sub-head tab-cont-head"> Basic Information

                        <div className="top-right-outer add-btn-div">   
                        <button type="button" class="btn  btn-save "  > Save</button>
                        <button type="button" class="btn  btn-cancel "  > Cancel </button> 
                       </div>
                    </div>
                    <div className="recruitment-top-right-box">                    
                    </div>

                    <div className="col-md-12">

 

                  </div>
                </div>
               
            </section>
          </div>
          <button class="tab-module__tab  sub-line" role="tab" aria-selected="false" aria-controls="styles-tab" id="styles" tabindex="-1" >
 
              <RiContactsBook2Line/>
              <div className="emp-tabhead-txt"> Personal  Information</div>
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="styles-tab" aria-labelledby="styles" >
          <section  className="main-content-area-cont">
                <div className="main-content-area-inner-cont">
                    <div className="sub-head tab-cont-head"> Personal Information

                        <div className="top-right-outer add-btn-div">   
                        <button type="button" class="btn  btn-save "  > Save</button>
                        <button type="button" class="btn  btn-cancel "  > Cancel </button> 
                       </div>
                    </div>
                    <div className="recruitment-top-right-box">                    
                    </div>

                    <div className="col-md-12">

 

                  </div>
                </div>
               
            </section>
          </div>
          <button class="tab-module__tab sub-line" role="tab" aria-selected="false" aria-controls="hardware-tab" id="hardware" tabindex="-1" >
          <RiFolderUserLine/>
           <div className="emp-tabhead-txt"> Employee Information</div>
          </button>
          <div  class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="hardware-tab" aria-labelledby="hardware" >
          <section  className="main-content-area-cont">
                <div className="main-content-area-inner-cont">
                    <div className="sub-head tab-cont-head"> Employee Information

                        <div className="top-right-outer add-btn-div">   
                        <button type="button" class="btn  btn-save "  > Save</button>
                        <button type="button" class="btn  btn-cancel "  > Cancel </button> 
                       </div>
                    </div>
                    <div className="recruitment-top-right-box">                    
                    </div>

                    <div className="col-md-12">

 

                  </div>
                </div>
               
            </section>
          </div>
          <button class="tab-module__tab sub-line" role="tab" aria-selected="false" aria-controls="options-tab" id="options" tabindex="-1" >
          <RiBodyScanFill/>
           <div className="emp-tabhead-txt"> Additional  Info</div>
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="options-tab" aria-labelledby="options" >
          <section  className="main-content-area-cont">
                <div className="main-content-area-inner-cont">
                    <div className="sub-head tab-cont-head"> Additional Information

                        <div className="top-right-outer add-btn-div">   
                        <button type="button" class="btn  btn-save "  > Save</button>
                        <button type="button" class="btn  btn-cancel "  > Cancel </button> 
                       </div>
                    </div>
                    <div className="recruitment-top-right-box">                    
                    </div>

                    <div className="col-md-12">

 

                  </div>
                </div>
               
            </section>
          </div>
          <button class="tab-module__tab  sub-line" role="tab" aria-selected="false" aria-controls="accesories-tab" id="accesories" tabindex="-1" >
          <MdOutlineSchool/>
           <div className="emp-tabhead-txt"> Education Info</div>
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="accesories-tab" aria-labelledby="accesories" >
          <section  className="main-content-area-cont">
                <div className="main-content-area-inner-cont">
                    <div className="sub-head tab-cont-head"> Education Information

                        <div className="top-right-outer add-btn-div">   
                        <button type="button" class="btn  btn-save "  > Save</button>
                        <button type="button" class="btn  btn-cancel "  > Cancel </button> 
                       </div>
                    </div>
                    <div className="recruitment-top-right-box">                    
                    </div>

                    <div className="col-md-12">

 

                  </div>
                </div>
               
            </section>
          </div>
          <button class="tab-module__tab " role="tab" aria-selected="false" aria-controls="accesories-tab" id="accesories" tabindex="-1" >
          <GiReceiveMoney/>
           <div className="emp-tabhead-txt"> Payroll  Info</div>
          
          </button>
          <div class="tab-module__tabcontent" tabindex="0" role="tabpanel" id="accesories-tab" aria-labelledby="accesories" >
          <section  className="main-content-area-cont">
                <div className="main-content-area-inner-cont">
                    <div className="sub-head tab-cont-head"> Payroll Information

                        <div className="top-right-outer add-btn-div">   
                        <button type="button" class="btn  btn-save "  > Save</button>
                        <button type="button" class="btn  btn-cancel "  > Cancel </button> 
                       </div>
                    </div>
                    <div className="recruitment-top-right-box">                    
                    </div>

                    <div className="col-md-12">

 

                  </div>
                </div>
               
            </section>
          </div>
        </div>
      </div>
    </div>  
     
        </div>
    )
}

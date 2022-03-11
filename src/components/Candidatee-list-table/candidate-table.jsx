import react from "react"
import ReactTable from "react-table";  
import React, { Component } from 'react'; 
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import {dashboard,asste,eyeico,location,eyeicoSched,eyeicoreject,eyeicowait} from '../../images';
import './candidatetable.css'
export default function Candidatetable()
{
    return(
        <div className="candidate-table">
        <div className="main-outer">
<div className="main-otrer-top">
<div className="top-manin-head">Recruitment 1</div>
</div>
<div className="main-content-area">
<div className="main-content-area-inner">
<div className="sub-head">Candidate Information 
    <div className="top-right-outer add-btn-div">
    <button type="button" class="btn  btn-maincolor btn-block"> <SiAddthis className="add-btn-icon"/> ADD</button> 
   
    </div>
</div>
<div  className="main-content-section">
        
        <div className=" ">
            <div className="col-md-5 p-l-0"> 
             
            <div class="btn-group">
                <button type="button" class="btn grid-view-btn">                    
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29463 10.179C8.13785 10.179 8.82142 10.8626 8.82142 11.7058V15.4379C8.82142 16.2811 8.13785 16.9647 7.29463 16.9647H3.56249C2.71927 16.9647 2.03571 16.2811 2.03571 15.4379V11.7058C2.03571 10.8626 2.71927 10.179 3.56249 10.179H7.29463ZM15.4375 10.179C16.2807 10.179 16.9643 10.8626 16.9643 11.7058V15.4379C16.9643 16.2811 16.2807 16.9647 15.4375 16.9647H11.7053C10.8621 16.9647 10.1786 16.2811 10.1786 15.4379V11.7058C10.1786 10.8626 10.8621 10.179 11.7053 10.179H15.4375ZM7.29463 11.1968H3.56249C3.28142 11.1968 3.05356 11.4247 3.05356 11.7058V15.4379C3.05356 15.719 3.28142 15.9468 3.56249 15.9468H7.29463C7.57571 15.9468 7.80356 15.719 7.80356 15.4379V11.7058C7.80356 11.4247 7.57571 11.1968 7.29463 11.1968ZM15.4375 11.1968H11.7053C11.4243 11.1968 11.1964 11.4247 11.1964 11.7058V15.4379C11.1964 15.719 11.4243 15.9468 11.7053 15.9468H15.4375C15.7186 15.9468 15.9464 15.719 15.9464 15.4379V11.7058C15.9464 11.4247 15.7186 11.1968 15.4375 11.1968ZM7.29463 2.03613C8.13785 2.03613 8.82142 2.7197 8.82142 3.56292V7.29506C8.82142 8.13828 8.13785 8.82185 7.29463 8.82185H3.56249C2.71927 8.82185 2.03571 8.13828 2.03571 7.29506V3.56292C2.03571 2.7197 2.71927 2.03613 3.56249 2.03613H7.29463ZM15.4375 2.03613C16.2807 2.03613 16.9643 2.7197 16.9643 3.56292V7.29506C16.9643 8.13828 16.2807 8.82185 15.4375 8.82185H11.7053C10.8621 8.82185 10.1786 8.13828 10.1786 7.29506V3.56292C10.1786 2.7197 10.8621 2.03613 11.7053 2.03613H15.4375ZM7.29463 3.05399H3.56249C3.28142 3.05399 3.05356 3.28184 3.05356 3.56292V7.29506C3.05356 7.57613 3.28142 7.80399 3.56249 7.80399H7.29463C7.57571 7.80399 7.80356 7.57613 7.80356 7.29506V3.56292C7.80356 3.28184 7.57571 3.05399 7.29463 3.05399ZM15.4375 3.05399H11.7053C11.4243 3.05399 11.1964 3.28184 11.1964 3.56292V7.29506C11.1964 7.57613 11.4243 7.80399 11.7053 7.80399H15.4375C15.7186 7.80399 15.9464 7.57613 15.9464 7.29506V3.56292C15.9464 3.28184 15.7186 3.05399 15.4375 3.05399Z" fill="#4A54D1"/>
                    </svg>
                </button>                
                <button type="button" class="btn grid-view-btn">
                    <svg className="m-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.87139 0.481445H0.319079C0.142714 0.481445 0 0.624323 0 0.800525V2.71475C0 2.89096 0.142714 3.03383 0.319079 3.03383H2.87139C3.04775 3.03383 3.19046 2.89096 3.19046 2.71475V0.800525C3.19046 0.624323 3.04775 0.481445 2.87139 0.481445ZM2.55231 2.39576H0.638077V1.11952H2.55231V2.39576Z" fill="black"/>
                        <path d="M2.87139 6.22363H0.319079C0.142714 6.22363 0 6.36651 0 6.54271V8.45694C0 8.63314 0.142714 8.77602 0.319079 8.77602H2.87139C3.04775 8.77602 3.19046 8.63314 3.19046 8.45694V6.54271C3.19046 6.36651 3.04775 6.22363 2.87139 6.22363ZM2.55231 8.13786H0.638077V6.86171H2.55231V8.13786Z" fill="black"/>
                        <path d="M2.87139 11.9668H0.319079C0.142714 11.9668 0 12.1097 0 12.2859V14.2001C0 14.3763 0.142714 14.5192 0.319079 14.5192H2.87139C3.04775 14.5192 3.19046 14.3763 3.19046 14.2001V12.2859C3.19046 12.1097 3.04775 11.9668 2.87139 11.9668ZM2.55231 13.881H0.638077V12.6049H2.55231V13.881Z" fill="black"/>
                        <path d="M15 1.43848H4.14752V2.07655H15V1.43848Z" fill="black"/>
                        <path d="M15 7.18164H4.14752V7.81972H15V7.18164Z" fill="black"/>
                        <path d="M15 12.9238H4.14752V13.5619H15V12.9238Z" fill="black"/>
                    </svg>
                </button>
            </div>    
            </div>
            <div className="col-md-7  pull-right p-m-r-0 "> 
                <div className="calendar-width">  
                    <input className="form-control" type="date" id="birthday" name="birthday"/>
                </div>
                <div className="calendar-width ">  
                    <input className="form-control" type="text" id="birthday" name="birthday"/>
                </div>
                <div className="calendar-width ">  
                    <input className="form-control" type="text" id="birthday" name="birthday"/>
                </div>
                <div className="search-icon-width ">  
                <div className="top-right-outer add-btn-div">
                        <button type="button" class="btn  btn-maincolor btn-block"> <FaSearch className="add-btn-icon"/></button> 
                    
                        </div>
                </div>
                 
            </div>
            
        </div>
        <div className="row m-t-60" >
 
        <div class="col-sm-12 row-table-event ">
                    
                       
                    <table class="table listing-table">
         <thead class="light-head">
           <tr>
             <th  class="col-2 width-12">Name </th>
             <th  class="col-4 width-10">Post</th>
             <th  class="col-6 width-15">Skill set</th>
             
             <th  class="col-2 width-8">Exp</th>
             <th  class="col-4 width-8">CTC</th>
             <th  class="col-6 width-8">EXP CTC</th>
             <th  class="col-2 width-8">Notice period</th>
             <th  class="col-4 width-10">Location</th>
             <th  class="col-6 width-8">Status</th>
                       <th  class="col-6 width-8">Action</th>
               </tr>
         </thead>
         <tbody>
           <tr>
             <td class="col-2 width-12">Anil Kumar</td>
             <td class="col-4 width-10">Java developer</td>
             <td class="col-2 width-15">HTML, CSS, JavaScript, Figma...</td>
             <td class="col-4 width-8">10 Years</td>
             <td class="col-2 width-8">5 LK/A</td>
             <td class="col-4 width-8">6 LK/A</td>
             <td class="col-2 width-8">2 Month</td>
             <td class="col-4 width-10">Kakkanad</td>
             <td class="col-2 width-8"><span className="status-nprogress">Inprogress</span></td>
                       <td class="col-6 width-8"> </td>
             </tr>  
            
         </tbody>
       </table>
                         
                              
        
                    </div>

        </div>
</div>
</div>

</div>
</div>
        </div>
        
    );
   

}


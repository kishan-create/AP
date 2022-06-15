import React, { useEffect, useState }  from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import { profileimage1 } from '../../images';
import { useParams } from 'react-router-dom';
import axios from "axios";


  
const Employeeprofile = () => {
      const [rows, setRows] = useState([]);
      const params = useParams();
      useEffect(() => {
            getEmployeeDetails(params.id);
           },[]);
           
const getEmployeeDetails = async (id) => {
    
      const reponse = await axios.get(
            `http://auditportal.bourntec.com:3001/audit_portal/public/api/GetEmployeeFullDetails/${id}` );
            const emp = reponse.data.emp;
            setRows(emp);
}
 console.log(rows[0]?.emp_name);
           
  return (
    <main className="inner-content-box">
      <header className="main-otrer-top"> Employee </header>
      <DndProvider backend={HTML5Backend}>
            <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className=" ">    
                            <div className="sub-head profile-sub">Employee Profile-{rows[0]?.emp_name}
                                                           </div>
                                               </div>
                    <div className="col-md-12">    
                             
                          <div class="flex-box employee-infot-flex">
                            <div  className="col-md-6 basic-information-card"> 
                                  <div  className="information-card-head">Basic Information
                                  </div>
                                  <div  className="row txt-row-hght border-0 employee-basic-outer"> 
                                        <div  className="col-md-4  "> 
                                              <div className="profilepic"> <img src={"http://auditportal.bourntec.com:3001/audit_portal/public/uploads/profile/"+rows[0]?.image} /></div>
                                              <div className="info-card-prfl-txt "> {rows[0]?.emp_name}</div>                                            
                                        </div> 
                                        <div  className="col-md-8 profile-basic-right">
                                                <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Employee Code             <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> {rows[0]?.emp_code}
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Designation            <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt ">{rows[0]?.designation_name}
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Joining Date           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> {rows[0]?.emp_joining_date}
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Company Email ID           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> {rows[0]?.emp_company_email_id}
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Contact Number           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt ">  {rows[0]?.emp_number}
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Reporting Person           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> 
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Gender            <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt ">  {rows[0]?.emp_gender}
                                                    </div>                                
                                              </div> 
                                              <div  className="row txt-row-hght">                                                     
                                                    <div  className="col-md-6 info-card-cont "> Location           <span className="dot-sty">:</span>
                                                    </div>
                                                    <div  className="col-md-6 info-card-cont-rgt "> {rows[0]?.emp_location}
                                                    </div>                                
                                              </div>  
                                        </div>
                                                                    
                                  </div>
                            </div>
                            <div className="col-md-6 personal-information-card">
                           
                                  <div  className="information-card-head"> Personal Information
                                    <div className="top-right-outer add-btn-div">   
                                          <button type="button" class="btn  btn-save emp-profl-edit-btn"  > <i class="fa fa-edit"></i></button> 
                                    </div>
                                  </div>
                                  
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Aadhaar Number  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Permanent Address <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Father/Mother/Spouse Name  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Temporary Address   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Emergency Contact Number   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Date Of Birth (Official)  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Personal Email ID  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Total year's of experience  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt ">
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Marital Status  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                 
                            </div>
                             
                          </div>  
                          <div class="flex-box employee-infot-flex">
                             
                            <div  className="col-md-6 education-information-card"> 
                                  <div  className="information-card-head"> Education Details
                                    <div className="top-right-outer add-btn-div">   
                                          <button type="button" class="btn  btn-save emp-profl-edit-btn"  > <i class="fa fa-edit"></i></button> 
                                    </div>
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> school Name <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Graduation  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> University  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Undergraduate  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont ">  Post Graduate  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  
                            </div>
                            <div className="col-md-6 employee-information-card">
                                  <div  className="information-card-head"> Employee Skills
                                  <div className="top-right-outer add-btn-div">   
                                          <button type="button" class="btn  btn-save emp-profl-edit-btn"  > <i class="fa fa-edit"></i></button> 
                                    </div>
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Primary Skills   <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt ">  {rows[0]?.primary_skill}
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Secondary Skills  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt ">  {rows[0]?.secondary_skill}
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Additional Skills  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                  <div  className="row txt-row-hght"> 
                                        <div  className="col-md-6 info-card-cont "> Year of Experience  <span className="dot-sty">:</span>
                                        </div>
                                        <div  className="col-md-6 info-card-cont-rgt "> 
                                        </div>                                
                                  </div>
                                   
                            </div>
                          </div>                  
                    </div>
                   
                </div>
                 
            </section>
             
      </DndProvider>
      
    </main>
  );
};

export default Employeeprofile;
 
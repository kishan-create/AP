import { useState,useEffect } from "react";

import axios from 'axios';
import swal from 'sweetalert';
const TableCandValidation = (setIsOpen) => {
const[values, SetValues] = useState ({
    username : '',
    postvalue :'',
    p_email : '',
    phonenumber : '',
    qualification : '',
    exp : '',
    ctc : '',
    expect_ctc : '',
    noticeprd:'',
    panel_members: '',
    dob : '',
    location : '',
    current_company : '',
    interview_rating:'',
    domain_exp : '',
    app_date : '',
    primary_skill : '',
    ref : '',
    p_members : '',
    idatetime : '',
    iplace : '',
    jobtitle : '',
    department_team : '',
    comments : '',
    c_status : '',
    reason : '',
    secskill:'',
    skillset:'',
    id:'',
})
const[errors,setErrors]=useState({})
const [isSubmitting, setIsSubmitting] = useState(false);
const[job,setJob]=useState([]);
const handleChange1 =e => { 
    const{name,value}=e.target
    SetValues({
        ...values,
        [name]:value
    })
}
const getpostName = async () => {
    const response = await fetch("http://localhost:8000/api/getJobs");
    const data = await response.json();
  
    const listnewtest = data.job;
  
    //const lo=JSON.stringify(listnew);
   
    setJob(listnewtest);
    
  }
  const deleteCandidate = async (e, id) => {
    const thisclickrow = e.currentTarget;
    thisclickrow.innerText = "Deleting";
    const res = await axios.get(`http://localhost:8000/api/deleteCandidate/${id}`);
    if (res.data.status == 200) {
      thisclickrow.closest("tr").remove();
      console.log(res.data.message);
    }
  }
const handleSubmit =e => { 
    e.preventDefault();
   // setErrors(validate(values));
   // setIsSubmitting(true);
   
   const promise= axios.post(`http://localhost:8000/api/updaterecruitement`, values);
   promise.then(function(res) {
    if(res.data.status===200)
    {
        swal({
            title: "Good job!",
            text: "updated successfully",
            icon: "success",    
            button: "ok",
        });
        setIsOpen(false);
    }
  })
 
    ///.then(function (response) {
       // console.log(response.data.message);
  //  })
   // .catch(function (error) {
      //  console.log("failed")
  //  })
    
  
 
    
}



    


return {handleChange1,values,handleSubmit,errors,getpostName,job,deleteCandidate};

}
export default TableCandValidation;
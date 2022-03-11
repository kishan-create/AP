import { useState,useEffect } from "react";
    import swal from 'sweetalert';
import axios from 'axios';
import { v4 as uuid } from "uuid";
const useForm = (validate) => {
const[values, SetValues] = useState ({
    username : '',
    postvalue :'',
    p_email : '',
    phonenumber : '',
    qualification : '',
    exp : '',
    ctc : '',
    expect_ctc : '',
    dob : '',
    location : '',
    current_company : '',
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
    skillset:'',
    noticeprd:'',
    secskill:'',
    skillset_input:''
})
const[pics, SetPics] = useState ([]);
const [selectedOption, setSelectedOption] = useState(0);
const itemsFromBackend = [
    { id: uuid(), applied_date: "2022-01-12", c_company: "Bourntec", contact_number: "1234567891", ctc: 5, dob: "2022-01-18", domain_exp: 5, education: "Btech", email: "teenu@gmail.com", exp_ctc: 15, job_id: 1,name: "shanuxcx",notice_prd: 3,position: 0,post: "PHP Developer",primary_skill: "test,css",ref: "ref",sec_skill: "testcss2",skillset: "Html,css,React js",status: "Inprogress",title: "JAVA DEVELOPER",total_exp: 6 }
];
const[errors,setErrors]=useState({})
const [isSubmitting, setIsSubmitting] = useState(false);
const[job,setJob]=useState([]);
useEffect(() => {
    getpostName();
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

const handleChange1 =e => { 
    const{name,value}=e.target
    SetValues({
        ...values,
        [name]:value
    })
}
const handleImage =e =>
{
    SetPics({
        resume:e.target.files[0]
    });
}
const getpostName = async () => {
    const response = await fetch("http://localhost:8000/api/getJobs");
    const data = await response.json();
  
    const listnewtest = data.job;
  
    //const lo=JSON.stringify(listnew);
   
    setJob(listnewtest);
    
  }

const handleSubmit =e => { 
    //console.log(values);
    e.preventDefault();
  
    setErrors(validate(values));
    setIsSubmitting(true);
  
 
    ///.then(function (response) {
       // console.log(response.data.message);
  //  })
   // .catch(function (error) {
      //  console.log("failed")
  //  })
    
  
 
    
}
const onSelect= (event) =>
{
   // console.log(event);
    setSelectedOption(event)
}

const onSubmitform = e => {
    const formData = new FormData();  
    formData.append('resume', pics.resume);
    formData.append('username',values.username);
    formData.append('postvalue',values.postvalue);
    formData.append('p_email',values.p_email);
    formData.append('phonenumber',values.phonenumber);
    formData.append('qualification',values.qualification);
    formData.append('exp',values.exp);
    formData.append('ctc',values.ctc);
    formData.append('expect_ctc',values.expect_ctc);
    formData.append('location',values.location);
    formData.append('dob',values.dob);
    formData.append('current_company',values.current_company);
    formData.append('domain_exp',values.domain_exp);
    formData.append('app_date',values.app_date);
    formData.append('primary_skill',values.primary_skill);
    formData.append('ref',values.ref);
    formData.append('p_members',values.p_members);
    formData.append('idatetime',values.idatetime);
    formData.append('iplace',values.iplace);
    formData.append('comments',values.comments);
    formData.append('c_status',values.c_status);
    formData.append('department_team',values.department_team);
    formData.append('reason',values.reason);
    formData.append('skillset',values.skillset);
    formData.append('noticeprd',values.noticeprd);
    formData.append('secskill',values.secskill);
    formData.append('skillset_input',selectedOption);
    //values.append('resume',pics.resume);
    const promise= axios.post('http://localhost:8000/api/add_employee_first', formData);
    promise.then(function(res) {
     if(res.data.status===200)
     {
 
         swal({
             title: "Good job!",
             text: "Candidate added successfully",
             icon: "success",    
             button: "ok",
         });
         values.username = '';
         values.postvalue = '';
         values.p_email = '';
         values.phonenumber = '';
         values.qualification = '';
         values.exp = '';
         values.ctc = '';
         values.expect_ctc = '';
         values.location = '';
         values.dob = '';
         values.location = '';
         values.current_company = '';
         values.domain_exp = '';
         values.app_date = '';
         values.primary_skill = '';
         values.ref = '';
         values.p_members = '';
         values.idatetime = '';
         values.iplace = '';
         values.comments = '';
         values.c_status = '';
         values.department_team = '';
         values.reason = '';
       //  pics.resume='';
       
     }
   })  
}

    


return {handleChange1,values,handleSubmit,errors,getpostName,job,handleImage,onSelect};

}
export default useForm;
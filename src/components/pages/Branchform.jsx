import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
const Branchform = branch_validation => {
  const [values, SetValues] = useState({
   branch_name:'',
   branch_code:'',
   branch_company:'',
   branch_type:'',
   branch_location:'',
   branch_date:'',
   branch_landline:'',
   branch_email:''
  });
 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);
  const[listnew,setListnew]=useState([]);
 //const [locationorg,Setlocationorg]=useState([]);
  const handleChange = e => {
    const { name, value } = e.target
    SetValues({
      ...values,
      [name]: value,
    })
  };

  useEffect(() => {
    getCompanyName();
    
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

 /* const loadOrganization = async () => {
    const orgresponse=await fetch("http://localhost:8000/api/getOrganization/");
    setOrg(orgresponse.data);
  }*/
  const getCompanyName = async () => {
    const response = await fetch("http://localhost:8000/api/getOrgnaizationname");
    const data = await response.json();
  
    const listnewtest = data.org;
  
    //const lo=JSON.stringify(listnew);
   
    setListnew(listnewtest);
     
  }
 
  
 // console.log(locationorg);
  const handleSubmit = e => {

    e.preventDefault();
    const test = setErrors(branch_validation(values));
    setIsSubmitting(true);
   

  }
  const onSubmitform = e => {

    //console.log(values)
    const response = axios.post('http://localhost:8000/api/add_branches', values);
    response.then(function (res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Organization added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
            branch_name:'',
            branch_code:'',
            branch_company:'',
            branch_type:'',
            branch_location:'',
            branch_date:'',
            branch_landline:'',
            branch_email:''
        })
      }
    })
  }



  return { handleChange,values,listnew,handleSubmit,errors};
}
export default Branchform;

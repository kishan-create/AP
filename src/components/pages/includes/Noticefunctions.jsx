import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Noticefunctions = (Noticevalidation,id) => {
  const [values, SetValues] = useState({
    emp_dateofresign: "",
    emp_frequency: "",
    emp_dateofrelieving: "",
    emp_id:id,
    last_working_day:"",
    revoke_reason:"",
  }); 

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [relisSubmitting, relsetIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };
 
const FrequencyChange=(e)=>{
  if(e.target.value==1)
  {
    var day=30;
  }
  else if(e.target.value==2)
  {
    var day=60;
  }
  else {
    var day=90;
  }
//var result = new Date(values.emp_dateofresign)+15;
var myCurrentDate=new Date();
var myFutureDate=new Date(myCurrentDate);
    myFutureDate.setDate(myFutureDate.getDate()+day);
    var es = new Date(myFutureDate);
    let dates = JSON.stringify(es)
dates = dates.slice(1,11)
 
SetValues({
  emp_frequency: e.target.value,
  emp_dateofrelieving:dates,
  emp_dateofresign:values.emp_dateofresign,
  emp_id:id
})
}
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
      // onRelivesubmitform();
      
    }
    // else if(relisSubmitting)  {
    //   onRelivesubmitform();
    // }
 
  }, [errors]);

  const handleSubmit = (e) => {
  
     
    
    e.preventDefault();
    const test = setErrors(Noticevalidation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
 
    const response = axios.post(
      "http://localhost:8000/api/add_notice",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {

        swal({
          title: "Good job!",
          text: "Notice added successfully",
          icon: "success",
          button: "ok",
        });

        SetValues({
          department_name: "",
          department_code: "",
        });
      }
     
    });
  };

  const handleRelieveSubmit = (e) => {
  
    e.preventDefault();

    onRelivesubmitform();
  };

  const handleRevokeSubmit=(e) =>  { 
    e.preventDefault();
   onRevokeform();
  }
const onRevokeform=(e)=>
{

  const response = axios.post(
    "http://localhost:8000/api/revokereason",
    values
  );
  response.then(function(res) {
    if (response.data.status === 200) {

      swal({
        title: "Good job!",
        text: "Revoke added successfully",
        icon: "success",
        button: "ok",
      });

      SetValues({
        revoke_reason:""
      });
    }
   
  });
  
}
  const onRelivesubmitform = (e) => {
    // alert("onRelivesubmitform")
   
    const response = axios.post(
      "http://localhost:8000/api/lastworking_day",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
      

        swal({
          title: "Good job!",
          text: "Last Working added successfully",
          icon: "success",
          button: "ok",
        });

        SetValues({
          department_name: "",
          department_code: "",
        });
      }
     
    });
  };

  return { handleChange, values, handleSubmit,handleRelieveSubmit, errors,FrequencyChange,handleRevokeSubmit };
};
export default Noticefunctions;

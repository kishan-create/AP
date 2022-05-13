import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
const ScheduleInterviewform  = (schedule_validation,loadData)  => {
    const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, SetValues] = useState({
    panel_members:'',
    idatetime:'',
    iplace:'',
    jobtitle:'',
    department_team:'',
    comments:'',
    interview_rating:''
   
  });
  

  const handleChange = e => {
    const { name, value } = e.target
    SetValues({
      ...values,
      [name]: value,
    })
  };
  const handleSubmit = e => {

    e.preventDefault();
    const test = setErrors(schedule_validation(values));
    setIsSubmitting(true);
  

  }
  useEffect(() => {
  
    
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);
  const onSubmitform = e => 
  {
    const response = axios.post('http://localhost:8000/api/add_schedule', values);
    response.then(function (res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Schedule added successfully",
          icon: "success",
          button: "ok",
        });
        loadData();
       // window.location.reload(false);
        //setIsOpen(false);
      }
    })
   
  }
  return { handleChange,values,handleSubmit,errors};
}
export default ScheduleInterviewform ;

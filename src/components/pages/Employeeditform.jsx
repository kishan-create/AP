import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
// const Employeeprofform = (job_validation) => {
const Employeeditform = (id) => {

  const [values, SetValues] = useState({
    aadhar_number: "",
    permenent_adress: "",
    f_m_s_name: "",
    temp_adress: "",
    emergency_contact_number: "",
    of_dob: "",
    p_email_adress: "",
    tot_exp: "",
    m_status: "",
    fk_id:"",
    persid:id
 
  });

//   const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);
  const [post, SetPost] = useState([]);
  const handleChange = (e) => {

    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // // const test = setErrors(job_validation(values));
    // setIsSubmitting(true);
    onSubmitform();
  };
  const onSubmitform = (e) => {
    console.log(values)
    const response = axios.post("http://localhost:8000/api/add_personalinformation", values);
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
            aadhar_number: "",
            permenent_adress: "",
            f_m_s_name: "",
            temp_adress: "",
            emergency_contact_number: "",
            of_dob: "",
            p_email_adress: "",
            tot_exp: "",
            m_status: "",
            fk_id:"",
            
        });
      }
    });
  };

  return { handleChange, values, handleSubmit,edithandleSubmit,  post };
};
export default Employeeditform;

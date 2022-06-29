import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { CompressOutlined } from "@mui/icons-material";
// const Employeeprofform = (job_validation) => {
const Employeeprofform = (id) => {

  const [values, SetValues] = useState({
    adhar_no: "",
    permenent_adress: "",
    f_m_s_name: "",
    temp_address: "",
    emergency_contact_number: "",
    of_dob: "",
    p_email_adress: "",
    tot_exp: "",
    m_status: "",
    fk_emp_id:id,
    p_fk_emp_id:"",
    p_fk_emp_id:id,

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
    console.log(values)
    
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
          adhar_no: "",
          permenent_adress: "",
          f_m_s_name: "",
          temp_address: "",
          emergency_contact_number: "",
          of_dob: "",
          p_email_adress: "",
          tot_exp: "",
          m_status: "",
          fk_emp_id:id,
          p_fk_emp_id:id,
            // fk_id:"",
        });
      }
    });
  };

  return { handleChange, values, handleSubmit,  post };
};
export default Employeeprofform;

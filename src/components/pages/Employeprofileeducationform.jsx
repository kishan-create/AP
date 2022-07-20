import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Employeprofileeducationform = (id,method,closeModal) => {
  const [values, SetValues] = useState({
    employee_education: "",
    employee_institution: "",

    employee_yearofgrad: "",
    employee_specialization: "",
    cmid:id,


  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    onSubmitform();
   
  };
  const onSubmitform = (e) => { 
   
    const response = axios.post(
      "http://localhost:8000/api/add_employeeeducation",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        swal({
          title: "Good job!",
          text: "Education Details added successfully",
          icon: "success",
          button: "ok",
        });
        closeModal();
        method(id);
      }
    });
  };

  return { handleChange, values, handleSubmit, errors, options, };
};
export default Employeprofileeducationform;
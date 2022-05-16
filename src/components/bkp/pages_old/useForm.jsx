import { useState, useEffect } from "react";

import axios from "axios";
const useForm = (validate) => {
  const [values, SetValues] = useState({
    username: "",
    postvalue: "",
    p_email: "",
    phonenumber: "",
    qualification: "",
    exp: "",
    ctc: "",
    expect_ctc: "",
    dob: "",
    location: "",
    current_company: "",
    domain_exp: "",
    app_date: "",
    primary_skill: "",
    ref: "",
    p_members: "",
    idatetime: "",
    iplace: "",
    jobtitle: "",
    department_team: "",
    comments: "",
    c_status: "",
    reason: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
<<<<<<< HEAD
    if (Object.keys(errors).length === 0 && isSubmitting) 
  {
   const promise= axios.post('http://localhost:8000/api/add_employee_first', values);
   promise.then(function(res) {
    if(res.data.status===200)
    {
        console.log(res.data.message);
    }
  })
 
    ///.then(function (response) {
       // console.log(response.data.message);
  //  })
   // .catch(function (error) {
=======
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const promise = axios.post(
        "http://localhost:8000/api/add_employee_first",
        values
      );
      promise.then(function(res) {
        if (res.data.status === 200) {
          console.log(res.data.message);
        }
      });

      ///.then(function (response) {
      // console.log(response.data.message);
      //  })
      // .catch(function (error) {
>>>>>>> ffd32a3ecc021c94fc41a422c884e521f09e9e7e
      //  console.log("failed")
      //  })
    } else {
    }
  };

  return { handleChange1, values, handleSubmit, errors };
};
export default useForm;

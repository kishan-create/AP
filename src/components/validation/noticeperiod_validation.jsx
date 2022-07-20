import React from "react";

export default function noticeperiod_validation(values) {  
   
  let errors = {};
  if (!values.emp_dateofresign.trim()) {
    errors.emp_dateofresign = "Date of Resign required";
  }
  if (!values.emp_frequency.trim()) {
    errors.emp_frequency = "Frequency required";
  }
  if (!values.emp_dateofrelieving.trim()) {
    errors.emp_dateofrelieving = "Date of Relieving required";
  }
  
  
 
  return errors;
}
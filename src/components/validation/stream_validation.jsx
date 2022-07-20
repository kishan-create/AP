import React from "react";

export default function stream_validation(values) {  
   
  let errors = {};
  if (!values.stream_name.trim()) {
    errors.stream_name = "Stream name required";
  }
  
 
  return errors;
}

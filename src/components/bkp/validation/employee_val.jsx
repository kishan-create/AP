import React from 'react'

export default function employee_val(values) {   
    let errors ={}
    
    if(!values.username.trim())
    {
        errors.username="username required";
    }
    if (!values.postvalue) {
        errors.postvalue = 'post is required';
      }
    return errors;
}


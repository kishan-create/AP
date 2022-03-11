import React from 'react'

export default function employee_val(values) {   
    let errors ={}
    
   
    if (!values.postvalue) {
        errors.postvalue = 'post is required';
      }
    return errors;
}


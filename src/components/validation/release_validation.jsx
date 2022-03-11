
import React from 'react'

export default function release_validation(values) { 
    let errorsrelease={}
    if(!values.release_date.trim())
    {
        errorsrelease.release_date="joing date required";
        
    }
  
    return errorsrelease;

}

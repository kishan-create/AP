
import React from 'react'

export default function rejection_validation(values) {
    let errorsrejection={}
    if(!values.rejectionstatus.trim())
    {
        errorsrejection.rejectionstatus="status required";
        
    }
    if(!values.reason.trim())
    {
        errorsrejection.reason="status required";
        
    }
   
    return errorsrejection;

}

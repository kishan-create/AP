
import React from 'react'

export default function schedule_validation(values) { 
    let errors={}
    if(!values.panel_members.trim())
    {
        errors.panel_members="Panel required";
        
    }
   
    return errors;

}

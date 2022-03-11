
import React from 'react'

export default function branch_validation(values) {
    let errors={}
    if(!values.branch_name.trim())
    {
        errors.branch_name="Branch name required";
        
    }
    if(!values.branch_code.trim())
    {
        errors.branch_code="Branch code required";
        
    }
    if(!values.branch_company.trim())
    {
        errors.branch_company="Branch  company required";
        
    }
    if(!values.branch_type.trim())
    {
        errors.branch_type="Branch  Type required";
        
    }
    if(!values.branch_location.trim())
    {
        errors.branch_location="Branch  location required";
        
    }
    if(!values.branch_date.trim())
    {
        errors.branch_date="Branch  Date required";
        
    }
    if(!values.branch_landline.trim())
    {
        errors.branch_landline="Branch contact number required";
        
    }
    if(!values.branch_email.trim())
    {
        errors.branch_email="Branch email required";
        
    }
    return errors;

}

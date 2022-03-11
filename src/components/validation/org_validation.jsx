
import React from 'react'

export default function org_validation(values) {
    let errors={}
    if(!values.org_name.trim())
    {
        errors.org_name="Organization name required";
        
    }
    if(!values.org_code.trim())
    {
        errors.org_code="Organization code required";
    }
    if(!values.org_type.trim())
    {
        errors.org_type="Organization type required";
    }
    if(!values.org_category.trim())
    {
        errors.org_category="Organization Category required";
    }
    if(!values.org_registration.trim())
    {
        errors.org_registration="Organization Registration required";
    }
    if(!values.org_location.trim())
    {
        errors.org_location="Organization location required";
    }
    return errors;

}

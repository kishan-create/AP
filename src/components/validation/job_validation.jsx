
import React from 'react'

export default function job_validation(values) {
    let errors={}
    if(!values.job_id.trim())
    {
        errors.job_id="job id required";
        
    }
    if(!values.job_post.trim())
    {
        errors.job_post="job post required";
        
    }
    if(!values.job_skillset.trim())
    {
        errors.job_skillset="job Skillset required";
        
    }
    if(!values.job_experience.trim())
    {
        errors.job_experience="job Experience required";
        
    }
    if(!values.job_openings.trim())
    {
        errors.job_openings="job Openings required";
        
    }
    if(!values.job_status.trim())
    {
        errors.job_status="job status required";
        
    }
    if(!values.job_date_open.trim())
    {
        errors.job_date_open="job date open required";
        
    }
    if(!values.job_date_close.trim())
    {
        errors.job_date_close="job date close required";
        
    }
    if(!values.job_location.trim())
    {
        errors.job_location="job location required";
        
    }
    if(!values.job_description.trim())
    {
        errors.job_description="job description required";
        
    }
  
    return errors;

}

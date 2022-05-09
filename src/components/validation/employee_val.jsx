import React from 'react'

export default function employee_val(values) {   
    let errors ={}
    
   
    if (!values.postvalue) {
        errors.postvalue = 'Post is required';
        errors.namevalue = 'Name is required';
        errors.Skillsetvalue = 'Skillset is required';
        errors.Emailvalue= 'Email is required';
        errors.contactvalue= 'Contact is required';
        errors.educationvalue= 'Education is required';
        errors.experiencevalue= 'Experience is required';
        errors.CTCvalue= 'CTC is required';
        errors.EXPCTCvalue= 'Expected CTC is required';
        errors.NPvalue= 'Notice period is required';
        errors.DOBvalue= 'Date of birth is required';
        errors.locvalue= 'Location is required';
        errors.currentcompanyvalue= 'Current company is required';
        errors.domainexperiencevalue= 'Domain experience is required';
        errors.applaydatevalue= 'Apply date is required';
        errors.primaryskillvalue= 'Primary skill is required';
        errors.secondaryskillvalue = 'Secondary skill is required';
        errors.referencevalue= 'Reference is required';
        errors.filevalue= 'Resume is required';
      }
    return errors;
}


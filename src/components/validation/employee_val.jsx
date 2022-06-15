import React from "react";

export default function employee_val(values) {
  let errors = {};

 if (!values.emp_name.trim()) {
    errors.emp_name = "employee name reqiured";
  }
  if (!values.emp_code.trim()) {
    errors.emp_code = "employee code reqiured";
  }
  if (!values.emp_desigination.trim()) {
    errors.emp_desigination = "employee designination reqiured";
  }
  if (!values.emp_joindate.trim()) {
    errors.emp_joindate = "employee join date reqiured";
  }
  if (!values.emp_email.trim()) {
    errors.emp_email = "employee email reqiured";
  }
  if (!values.emp_number.trim()) {
    errors.emp_number = "Contact number required";
  }
  if (!values.emp_holiday_calender.trim()) {
     errors.emp_holiday_calender = "Choose Holiday calander";
  }
  
 if (!values.emp_location.trim()) {
  errors.emp_location = "Choose Location";
}
 
 
  /*if (!values.emp_reportperson.trim()) {
    errors.emp_reportperson = "employee report person reqiured";
  }
  if (!values.emp_teamsactiondate.trim()) {
    errors.emp_teamsactiondate = "employee trasaction date reqiured";
  }
  if (!values.emp_effectivedate.trim()) {
    errors.emp_effectivedate = "employee effective date reqiured";
  }
  if (!values.emp_positionno.trim()) {
    errors.emp_positionno = "employee postion number reqiured";
  }
  if (!values.emp_ou.trim()) {
    errors.emp_ou = "employee ou reqiured";
  }

  if (!values.parent_ou.trim()) {
    errors.parent_ou = "employee paret ou reqiured";
  }
  if (!values.emp_region.trim()) {
    errors.emp_region = "employee region reqiured";
  }*/

 /* if (!values.emp_reporting_person.trim()) {
    errors.emp_reporting_person = "employee reporting person reqiured";
  }
  if (!values.emp_function.trim()) {
    errors.emp_function = "employee function reqiured";
  }
  if (!values.emp_employment_status.trim()) {
    errors.emp_employment_status = "employee status reqiured";
  }
  if (!values.emp_status.trim()) {
    errors.emp_status = "employee status reqiured";
  }
  if (!values.emp_next_status.trim()) {
    errors.emp_next_status = "employee next status reqiured";
  }

  if (!values.emp_next_statuson.trim()) {
    errors.emp_next_statuson = "employee status on reqiured";
  }
  if (!values.emp_cost_center.trim()) {
    errors.emp_cost_center = "employee cost center reqiured";
  }

  if (!values.emp_grade.trim()) {
    errors.emp_grade = "employee grade reqiured";
  }

  if (!values.emp_grade_band.trim()) {
    errors.emp_grade_band = "employee grade band reqiured";
  }

  if (!values.emp_department.trim()) {
    errors.emp_department = "employee department reqiured";
  }*/

/*  if (!values.emp_location.trim()) {
    errors.emp_location = "employee location reqiured";
  }

  if (!values.emp_country.trim()) {
    errors.emp_country = "employee grade country reqiured";
  }

  if (!values.emp_region.trim()) {
    errors.emp_region = "employee region reqiured";
  }

  /*if (!values.emp_orginal_hire_date.trim()) {
    errors.emp_orginal_hire_date = "employee hire date reqiured";
  }*/

 /* if (!values.emp_holiday_calender.trim()) {
    errors.emp_holiday_calender = "employee holiday calender reqiured";
  }

  /*if (!values.emp_reporting_manager.trim()) {
    errors.emp_reporting_manager = "employee reporting manger reqiured";
  }*/

  /*if (!values.emp_functional_manager.trim()) {
    errors.emp_functional_manager = "employee functional manager reqiured";
  }*/

 /* if (!values.emp_desigination.trim()) {
    errors.emp_desigination = "employee designation reqiured";
  }

 /* if (!values.emp_number.trim()) {
    errors.emp_number = "employee number reqiured";
  }*/
 if (!values.emp_gender.trim()) {
   errors.emp_gender = "employee gender reqiured";
 }

 /* if (!values.personal_address.trim()) {
    errors.personal_address = "Address name required";
  }
  if (!values.personal_city.trim()) {
    errors.personal_city = "City name required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_zipcode = "Zipcode required";
  }
  if (!values.personal_contactnumber.trim()) {
    errors.personal_contactnumber = "Contact number required";
  }
  if (!values.personal_hometelephone.trim()) {
    errors.personal_hometelephone = "Home telephone number required";
  }
  if (!values.personal_workmobile.trim()) {
    errors.personal_workmobile = "Work Mobile Number required";
  }
  if (!values.personal_extensionnumber.trim()) {
    errors.personal_extensionnumber = "Extension Number required";
  }
  if (!values.personal_preferredemaillanguage.trim()) {
    errors.personal_preferredemaillanguage =
      "Preferred Email language required";
  }
  if (!values.personal_workemail.trim()) {
    errors.personal_workemail = "Work Email required";
  }
  // if (!values.personal_personalemail.trim()) {
  //   errors.personal_personalemail = "Personal Email required";
  // }
  if (!values.personal_faxnumber.trim()) {
    errors.personal_faxnumber = "Fax number required";
  }
  if (!values.personal_name.trim()) {
    errors.personal_name = "Name required";
  }
  if (!values.personal_relationship.trim()) {
    errors.personal_relationship = "Relationship required";
  }
  if (!values.personal_emailid.trim()) {
    errors.personal_emailid = "Email required";
  }
  if (!values.personal_relationshipaddress.trim()) {
    errors.personal_relationshipaddress = "Relationship address required";
  }
  if (!values.personal_homephone.trim()) {
    errors.personal_homephone = "Home phone required";
  }
  if (!values.personal_mobile.trim()) {
    errors.personal_mobile = "Mobile number required";
  }
  if (!values.personal_physicianname.trim()) {
    errors.personal_physicianname = "Physician Name required";
  }
  if (!values.personal_physicianaddress.trim()) {
    errors.personal_physicianaddress = "Physician Address required";
  }
  if (!values.personal_phone.trim()) {
    errors.personal_phone = "Phone number required";
  }*/

  return errors;
}

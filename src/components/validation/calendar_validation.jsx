import React from "react";



export default function calendar_validation(values,typeDropdown,items) {
console.log(items.length);

  let errors = {};

  if (!values.holiday_name.trim()) {

    errors.holiday_name = "Holiday name is required";

  }
if(!typeDropdown)
{
  errors.calander_type = "project/location is required";
}
if(items.length==0)
{
  errors.holiday_name_drop = "Types of holidays is required";
}
if (!values.location_name.trim()) {

  errors.location_name = "location is required";

}
if (!values.project_name.trim()) {

  errors.project_name = "Project is required";

}




  



  // if (!values.holiday_name_drop.trim()) {

  //   errors.holiday_name_drop = "Types of holidays is required";

  // }

  return errors;

}
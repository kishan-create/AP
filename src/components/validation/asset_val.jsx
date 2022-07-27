import React from "react";

export default function asset_val(values) {
  let errors = {};
 

 if (!values.asset_name.trim()) {
    errors.asset_name = "asset name reqiured";
  }
  if (!values.brand_name.trim()) {
    errors.brand_name = "brand name reqiured";
  }
  if (!values.asset_category.trim()) {
    errors.asset_category = "asset category reqiured";
  }
  if (!values.asset_id.trim()) {
    errors.asset_id = "asset id reqiured";
  }
  if (!values.model_name.trim()) {
    errors.model_name = "model name reqiured";
  }
  if (!values.location.trim()) {
    errors.location = "location required";
  }
  if (!values.individual_bulk.trim()) {
     errors.individual_bulk = "individual_bulk";
  }
  
//  if (!values.emp_location.trim()) {
//   errors.emp_location = "Choose Location";
// }
 
 
//  if (!values.emp_gender.trim()) {
//    errors.emp_gender = "employee gender reqiured";
//  }

 
  return errors;
}

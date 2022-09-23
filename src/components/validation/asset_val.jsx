import React from "react";

export default function asset_val(values) {
  let errors = {};
 

 if (!values.asset_name.trim()) {
    errors.asset_name = "asset name required ";
  }
  if (!values.brand_name.trim()) {
    errors.brand_name = "brand name required ";
  }
  if (!values.asset_category.trim()) {
    errors.asset_category = "asset category required ";
  }
  if (!values.asset_id.trim()) {
    errors.asset_id = "asset id required ";
  }
  if (!values.model_name.trim()) {
    errors.model_name = "model name required ";
  }
  if (!values.location.trim()) {
    errors.location = "location required";
  }
  if (!values.individual_bulk.trim()) {
     errors.individual_bulk = "individual_bulk";
  }
  


 
  return errors;
}

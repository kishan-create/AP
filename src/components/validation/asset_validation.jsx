import React from "react";

export default function asset_validation(values) {  
   
  let errors = {};
  if (!values.asset_name.trim()) {
    errors.asset_name = "Asset name required";
  }
  if (!values.asset_category.trim()) {
    errors.asset_category = "Asset category required";
  }
  if (!values.asset_id.trim()) {
    errors.asset_id = "Asset ID required";
  }
  if (!values.asset_brand.trim()) {
    errors.asset_brand = "Asset brand required";
  }
  if (!values.asset_model.trim()) {
    errors.asset_model = "Asset model required";
  }
  if (!values.asset_location.trim()) {
    errors.asset_location = "Asset location required";
  }
  if (!values.asset_order.trim()) {
    errors.asset_order = "Asset order required";
  }
  
 
  return errors;
}

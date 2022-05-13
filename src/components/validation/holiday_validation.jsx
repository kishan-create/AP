import React from "react";
export default function holiday_validation(values){
    let errors = {};
    if (!values.holiday_name.trim()) {
        errors.holiday_name = "Holiday name is required";
      }
      return errors;
}
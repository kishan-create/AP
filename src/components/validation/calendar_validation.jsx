import React from "react";

export default function calendar_validation(values) {
  let errors = {};
  if (!values.holiday_name.trim()) {
    errors.holiday_name = "Holiday name is required";
  }
  if (!values.calander_type.trim()) {
    errors.calander_type = "Project/Location is required";
  }

  if (!values.project_name.trim()) {
    errors.project_name = "Project is required";
  }


  if (!values.location_name.trim()) {
    errors.location_name = "Location name is required";
  }

  if (!values.holiday_name_drop.trim()) {
    errors.holiday_name_drop = "Types of holidays is required";
  }
  return errors;
}

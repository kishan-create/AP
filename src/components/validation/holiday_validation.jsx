import React from "react";
export default function(values) {
  let errors = {};
  if (!values.holiday_name.trim()) {
    errors.holiday_name = "Holiday name is required";
  }

  if (!values.holiday_date.trim()) {
    errors.holiday_date = "Holiday date is required";
  }
  return errors;
}

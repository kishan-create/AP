import React from "react";
export default function calendarlist_validation(values) {
  let errors = {};
  if (!values.holidaylist_name.trim()) {
    errors.holidaylist_name = "Holiday name is required";
  }

  if (!values.holidaylist_type.trim()) {
    errors.holidaylist_type = "Holiday Type is required";
  }
  if (!values.holidaylist_location.trim()) {
    errors.holidaylist_location = "Location is required";
  }
  if (!values.holidaylist_holiday.trim()) {
    errors.holidaylist_holiday = "holidayname is required";
  }
  return errors;
}

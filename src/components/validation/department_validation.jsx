import React from "react";

export default function department_validation(values) {
  let errors = {};
  if (!values.department_name.trim()) {
    errors.department_name = "Department name required";
  }
  if (!values.department_code.trim()) {
    errors.department_code = "Department Code required";
  }
  return errors;
}

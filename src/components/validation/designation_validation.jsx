import React from "react";

export default function designation_validation(values) {
  let errors = {};
  if (!values.designation_name.trim()) {
    errors.designation_name = "Designation name required";
  }
  if (!values.designation_code.trim()) {
    errors.designation_code = "Designation Code required";
  }
  return errors;
}

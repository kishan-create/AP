import React from "react";

export default function personal_validation(values) {
  let errors = {};
  if (!values.personal_address.trim()) {
    errors.personal_address = "Address name required";
  }
  if (!values.personal_city.trim()) {
    errors.personal_city = "City name required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_zipcode = "zipcode required";
  }
//   if (!values.org_category.trim()) {
//     errors.org_category = "Organization category required";
//   }
//   if (!values.org_registration.trim()) {
//     errors.org_registration = "Organization registration required";
//   }
//   if (!values.org_location.trim()) {
//     errors.org_location = "Organization location required";
//   }
  return errors;
}

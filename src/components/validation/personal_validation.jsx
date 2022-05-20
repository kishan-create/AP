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
    errors.personal_zipcode = "Zipcode required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_contactnumber = "Contact number required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_hometelephone = "Home telephone number required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_workmobile = "Work Mobile Number required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_extensionnumber = "Extension Number required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_preferredemaillanguage = "Preferred Email language required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_workemail = "Work Email required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_personalemail = "Personal Email required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_faxnumber = "Fax number required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_name = "Name required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_relationship = "Relationship required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_emailid = "Email required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_relationshipaddress = "Relationship address required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_homephone = "Home phone required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_mobile = "Mobile number required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_physicianname = "Physician Name required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_physicianaddress = "Physician Address required";
  }
  if (!values.personal_zipcode.trim()) {
    errors.personal_phone = "Phone number required";
  }

  return errors;
}

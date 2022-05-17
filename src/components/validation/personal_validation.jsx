import React from "react";

export default function personal_validation(values) {
  let errorsa = {};
  if (!values.personal_address.trim()) {
    errorsa.personal_address = "Address name required";
  }
  if (!values.personal_city.trim()) {
    errorsa.personal_city = "City name required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_zipcode = "Zipcode required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_contactnumber = "Contact number required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_hometelephone = "Home telephone number required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_workmobile = "Work Mobile Number required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_extensionnumber = "Extension Number required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_preferredemaillanguage = "Preferred Email language required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_workemail = "Work Email required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_personalemail = "Personal Email required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_faxnumber = "Fax number required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_name = "Name required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_relationship = "Relationship required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_emailid = "Email required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_relationshipaddress = "Relationship address required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_homephone = "Home phone required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_mobile = "Mobile number required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_physicianname = "Physician Name required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_physicianaddress = "Physician Address required";
  }
  if (!values.personal_zipcode.trim()) {
    errorsa.personal_phone = "Phone number required";
  }

  return errorsa;
}

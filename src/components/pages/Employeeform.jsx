import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Employeeform = (employee_val) => {
  const [values, SetValues] = useState({
    emp_name: "",
    emp_code: "",
    emp_desigination: "",
    emp_joindate: "",
    emp_email: "",

    emp_reportperson: "",

    emp_teamsactiondate: "",
    emp_effectivedate: "",
    emp_positionno: "",
    emp_ou: "",
    emp_number: "",
    emp_gender: "",
    parent_ou: "",
    emp_region: "",
    emp_reporting_person: "",
    emp_function: "",
    emp_employment_status: "",
    emp_status: "",
    emp_next_status: "",
    emp_next_statuson: "",
    emp_cost_center: "",
    emp_grade: "",
    emp_grade_band: "",
    emp_department: "",
    emp_location: "",
    emp_country: "",
    emp_region: "",
    emp_orginal_hire_date: "",
    emp_holiday_calender: "",
    emp_reporting_manager: "",
    emp_functional_manager: "",
    emp_desigination: "",


    personal_address: "",
    personal_city: "",

    personal_zipcode: "",
    personal_contactnumber: "",
    personal_hometelephone: "",
    personal_workmobile: "",
    personal_extensionnumber: "",
    personal_preferredemaillanguage: "",
    personal_workemail: "",
    personal_faxnumber: "",
    personal_name: "",
    personal_relationship: "",
    personal_emailid: "",
    personal_relationshipaddress: "",
    personal_homephone: "",
    personal_mobile: "",
    personal_physicianname: "",
    personal_physicianaddress: "",
    personal_phone: "",

  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["Male", "Female"]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

  /* const loadOrganization = async () => {
    const orgresponse=await fetch("http://auditportal.bourntec.com:3001/audit_portal/public/api/getOrganization/");
    setOrg(orgresponse.data);
  }*/
  const getSelectDropdown = async () => {
    const response = await fetch(
      "http://auditportal.bourntec.com:3001/audit_portal/public/api/getOrgnaization_type"
    );
    const data = await response.json();
    const list = data.list;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(employee_val(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    //console.log(values)
    const response = axios.post(
      "http://auditportal.bourntec.com:3001/audit_portal/public/api/add_organization",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Employee added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
          emp_name: "",
          emp_code: "",
          emp_desigination: "",
          emp_joindate: "",
          emp_email: "",
          emp_number: "",
          emp_reportperson: "",
          emp_code: "",
          emp_teamsactiondate: "",
          emp_effectivedate: "",
          emp_positionno: "",
          emp_ou: "",
          parent_ou: "",
          emp_region: "",
          emp_reporting_person: "",
          emp_function: "",
          emp_employment_status: "",
          emp_status: "",
          emp_next_status: "",
          emp_next_statuson: "",
          emp_cost_center: "",
          emp_grade: "",
          emp_grade_band: "",
          emp_department: "",
          emp_location: "",
          emp_country: "",
          emp_region: "",
          emp_orginal_hire_date: "",
          emp_holiday_calender: "",
          emp_reporting_manager: "",
          emp_functional_manager: "",
          emp_desigination: "",

          // Personal form
          personal_address: "",
          personal_city: "",
      
          personal_zipcode: "",
          personal_contactnumber: "",
          personal_hometelephone: "",
          personal_workmobile: "",
          personal_extensionnumber: "",
          personal_preferredemaillanguage: "",
          personal_workemail: "",
          personal_faxnumber: "",
          personal_name: "",
          personal_relationship: "",
          personal_emailid: "",
          personal_relationshipaddress: "",
          personal_homephone: "",
          personal_mobile: "",
          personal_physicianname: "",
          personal_physicianaddress: "",
          personal_phone: "",



        });
      }
    });
  };

  return { handleChange, values, handleSubmit, errors, options };
};
export default Employeeform;

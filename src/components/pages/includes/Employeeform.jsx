import React, { useState, useEffect } from "react";
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
    emp_prev_exp:"",
  //  profilepic:"",

  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["Male", "Female"]);
  const[designation,SetDesignation]=useState([]);
  const[departments,SetDepartments]=useState([]);
  const[holidaylist,SetHolidaylist]=useState([]);
  const [myimage, setMyImage] = React.useState(null);
  const [profile, setProfile] = useState([]);
  const uploadImage = (e) => {
    console.log(e.target.files[0]);
    setMyImage(URL.createObjectURL(e.target.files[0]));
    
    setProfile({
      profilepics: e.target.files[0],
    });
  };
  console.log(profile.profilepics);
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    GetDesignationName();
    GetHolidayCalander();
    GetDepartmentName();
    if (Object.keys(errors).length === 0 && isSubmitting) {
      
      onSubmitform();
    }
  }, [errors]);

  /* const loadOrganization = async () => {
    const orgresponse=await fetch("http://auditportal.bourntec.com:3001/audit_portal/public/api/getOrganization/");
    setOrg(orgresponse.data);
  }*/
  const GetDepartmentName = async () => {
    const response = await fetch(
      "http://auditportal.bourntec.com:3001/audit_portal/public/api/getDepartmentName"
    );
    const data = await response.json();
    const listd = data.department;
    //console.log(listd);
    SetDepartments(listd);
  };
 // console.log(departments);
  const GetDesignationName=async()=>{ 
    const response = await fetch(
      "http://auditportal.bourntec.com:3001/audit_portal/public/api/getDesignationall"
    );
    const data = await response.json();
    const list = data.designation; 
    SetDesignation(list);
  }
  const GetHolidayCalander=async()=>{ 
    const response = await fetch(
      "http://auditportal.bourntec.com:3001/audit_portal/public/api/getHolidaynames"
    );
    const data = await response.json();
    const list = data.holidaylist; 
    SetHolidaylist(list);
  }
 //console.log(holidaylist);
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(employee_val(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    //console.log(values)
    const formData = new FormData();
    formData.append("profilepic", profile.profilepics);
    formData.append("emp_name", values.emp_name);
    formData.append("emp_code", values.emp_code);
    formData.append("emp_desigination", values.emp_desigination);
    formData.append("emp_joindate", values.emp_joindate);
    formData.append("emp_email", values.emp_email);
    formData.append("emp_prev_exp", values.emp_prev_exp);
    formData.append("emp_gender", values.emp_gender);
    formData.append("emp_holiday_calender", values.emp_holiday_calender);
    formData.append("emp_department", values.emp_department);
    formData.append("emp_primary_skill", values.emp_primary_skill);
    formData.append("emp_sec_skill", values.emp_sec_skill);
    const response = axios.post(
      "http://auditportal.bourntec.com:3001/audit_portal/public/api/add_audit_employees",
      formData
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Organization added successfully",
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
          emp_prev_exp:"",
           emp_primary_skill:"",
           emp_sec_skill:"",
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

  return { handleChange, values, handleSubmit, errors, options,designation,holidaylist,departments,uploadImage ,myimage};
};
export default Employeeform;

import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
const Organizationform = org_validation => {
  const [values, SetValues] = useState({
    org_name: '',
    org_code: '',
    org_type: '',
    org_category: '',
    org_registration: '',
    org_location: ''


  });
 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);

  const handleChange = e => {
    const { name, value } = e.target
    SetValues({
      ...values,
      [name]: value,
    })
  };

  useEffect(() => {
   
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

 /* const loadOrganization = async () => {
    const orgresponse=await fetch("http://localhost:8000/api/getOrganization/");
    setOrg(orgresponse.data);
  }*/
  const getSelectDropdown = async () => {
    const response = await fetch("http://localhost:8000/api/getOrgnaization_type");
    const data = await response.json();
    const list = data.list;

  }
  const handleSubmit = e => {

    e.preventDefault();
    const test = setErrors(org_validation(values));
    setIsSubmitting(true);

  }
  const onSubmitform = e => {

    //console.log(values)
    const response = axios.post('http://localhost:8000/api/add_organization', values);
    response.then(function (res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Organization added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
          org_name: "",
          org_code: "",
          org_type: "",
          org_category: "",
          org_registration: "",
          org_location: "",
        })
      }
    })
  }



  return { handleChange, values, handleSubmit, errors, options };
}
export default Organizationform;

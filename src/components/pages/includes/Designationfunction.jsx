import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Designationfunction = (designation_validation) => {
  const [values, SetValues] = useState({
    department_name: "",
    designation_name: "",
    designation_code: "",
    level_name: "",
   
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);
  const [listnew, setListnew] = useState([]);
  //const [locationorg,Setlocationorg]=useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    getDepartmentName();

    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

  /* const loadOrganization = async () => {
    const orgresponse=await fetch("http://auditportal2.bourntec.com:3001/audit_portal/public/api/getOrganization/");
    setOrg(orgresponse.data);
  }*/
  const getDepartmentName = async () => {
    const response = await fetch(
      "http://auditportal2.bourntec.com:3001/audit_portal/public/api/getDepartmentName"
    );
    const data = await response.json();

    const listnewtest = data.department;

    //const lo=JSON.stringify(listnew);

    setListnew(listnewtest);
  };

  // console.log(locationorg);
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(designation_validation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    //console.log(values)
    const response = axios.post(
      "http://auditportal2.bourntec.com:3001/audit_portal/public/api/add_designation",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Designation added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
          department_name: "",
          designation_name: "",
          designation_code: "",
          level_name: "",
        });
      }
    });
  };

  return { handleChange, values, listnew, handleSubmit, errors };
};
export default Designationfunction;

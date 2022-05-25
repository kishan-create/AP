import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Departmentfunctions = (department_validation) => {
  const [values, SetValues] = useState({
    department_name: "",
    department_code: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(department_validation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    //console.log(values)
    const response = axios.post(
      "http://auditportal.bourntec.com:3001/audit_portal/public/api/add_departments",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);

        swal({
          title: "Good job!",
          text: "Department added successfully",
          icon: "success",
          button: "ok",
        });

        SetValues({
          department_name: "",
          department_code: "",
        });
      }
     
    });
  };

  return { handleChange, values, handleSubmit, errors };
};
export default Departmentfunctions;

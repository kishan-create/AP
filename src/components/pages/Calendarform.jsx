import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Calendarform = (job_validation) => {
  const [values, SetValues] = useState({
    holiday_name: "",
    holiday_date: "",
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
    const test = setErrors(job_validation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    //console.log(values)
    const response = axios.post(
      "http://localhost:8000/api/add_holidays",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);

        swal({
          title: "Good job!",
          text: "Holiday added successfully",
          icon: "success",
          button: "ok",
        });

        SetValues({
          holiday_name: "",
          holiday_date: "",
        });
      }
      window.location.reload();
    });
  };

  return { handleChange, values, handleSubmit, errors };
};
export default Calendarform;

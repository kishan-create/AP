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
  const [post, SetPost] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    getPostname();
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

  const getPostname = async () => {
    const response = await fetch("http://localhost:8000/api/getHolidays");
   
    const data = await response.json();
    const list = data.post;
    SetPost(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(job_validation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    //console.log(values)
    const response = axios.post('http://localhost:8000/api/add_holidays', values);
    response.then(function (res) {
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
      // window.location.reload();
    });
  };

  return { handleChange, values, handleSubmit, errors, post };
};
export default Calendarform;

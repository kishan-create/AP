import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Noticeform = (noticeperiod_validation) => {
  const [values, SetValues] = useState({
    emp_dateofresign: "",
    emp_frequency: "",
    emp_dateofrelieving: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);
  const [post, SetPost] = useState([]);
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



  //console.log(post);
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(noticeperiod_validation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    //console.log(values)
    const response = axios.post("http://localhost:8000/api/add_notice", values);
    response.then(function(res) {
      if (res.data.status === 200) {
        swal({
          title: "Good job!",
          text: "Job added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
            emp_dateofresign: "",
            emp_frequency: "",
            emp_dateofrelieving: "",
        });
      }
    });
  };

  return { handleChange, values, handleSubmit, errors, post };
};
export default Noticeform;

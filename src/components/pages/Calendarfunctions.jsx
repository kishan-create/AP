import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Calendarfunctions = (calendar_validation) => {
  const [typeDropdown, setTypeDropdown] = useState();
  const [values, SetValues] = useState({
    holiday_name: "",
    
    project_name: "",
    calander_type: "",
    location_name: "",
    holiday_name_drop: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  
  const [items, setItems] = useState([]);

  const handleSelect = (selectedList) => {
    setItems(selectedList);
  };
  const handleRemove = (selectedList) => {
    setItems(selectedList);
  };
  const handleClick = (e) => {
    var id = e.target.value;
    if (id == 1) {
      setShowLocation(true);
      setShowProject(false);
    } else {
      setShowLocation(false);
      setShowProject(true);
    }
    setTypeDropdown(id);
   // SetValues({ calander_type: typeDropdown});
  };

  const handleChange = (e) => {
   
    const { name, value } = e.target;
    
    SetValues({
      ...values,
      [name]: value,
      
    });
  };
  
  console.log(values);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(calendar_validation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
   
    const formData = new FormData();
    formData.append("calander_type", typeDropdown);
    formData.append("holiday_name", values.holiday_name);
    formData.append("project_name", values.project_name);
    formData.append("location_name", values.location_name);
    formData.append("holiday_name_drop", JSON.stringify(items));
    const response = axios.post(
      "http://localhost:8000/api/add_holidays_calendar",
      formData
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Holiday Calander added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
          holiday_name: "",
          project_name: "",
          calander_type: "",

          location_name: "",
          holiday_name_drop: "",
        });
      }
    });
  };

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleClick,
    showProject,
    showLocation,
    typeDropdown,
    items,
    handleSelect,
    handleRemove,
  };
};
export default Calendarfunctions;

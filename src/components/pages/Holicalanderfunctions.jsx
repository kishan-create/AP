import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const HoliCalendarfunctions = (calendar_validation,ids,closeModal) => {
  const [values, SetValues] = useState({

    holiday_name_drop: "",
  });
const [rows,setRows]=useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [typeDropdown, setTypeDropdown] = useState();
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  


  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(calendar_validation(values));
    // const test = setErrors(props.calendar_validation(values));
    setIsSubmitting(true);
  };

  

  const updateHoliday = async (e) => {
    //  console.log(ids);
    const formData = new FormData();  
    e.preventDefault();
    formData.append("holiday_name_drop", JSON.stringify(items));
    formData.append("id", ids);
    const res = await axios.post(

      "http://auditportal2.bourntec.com:3001/audit_portal/public/api/addtoExistingValue", formData );
  
      closeModal();
    if(res.data.status===200){
      swal({
      title: "Good job!",
      text: "Holiday updated successfully",
      icon: "success",
      button: "ok",
    });
    setItems();
  
  }


};

  
  const onSubmitform = (e) => {
    console.log(items);
    const formData = new FormData();
     formData.append("holiday_name_drop", JSON.stringify(items));
    const res = axios.post(
      "http://auditportal2.bourntec.com:3001/audit_portal/public/api/getholidysbyid",
      formData
    );
 
      if (res.data.status === 200) {
    
        
        swal({
          title: "Good job!",
          text: "Holiday Calander added successfully",
          icon: "success",
          button: "ok",
        });
     
      }
    
  };

  return {
    updateHoliday,
    
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
export default HoliCalendarfunctions;

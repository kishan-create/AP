import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Assetform = (asset_validation) => {
  const [values, SetValues] = useState({
    asset_name: "",
    asset_category: "",
    asset_brand: "",
    asset_id: "",
    asset_model: "",
    asset_location: "",
    asset_order: "",
    
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
    console.log("po");
    e.preventDefault();
    const test = setErrors(asset_validation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => {
    // console.log("ji");
    const response = axios.post("http://localhost:8000/api/add_assets", values);
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Job added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
            asset_name: "",
            asset_category: "",
            asset_brand: "",
            asset_id: "",
            asset_model: "",
            asset_location: "",
            asset_order: "",
            
        });
      }
    });
  };

  return { handleChange, values, handleSubmit, errors, post };
};
export default Assetform;

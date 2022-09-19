import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Assetform = (asset_val) => {
  const [values, SetValues] = useState({
  asset_category:"",
    asset_name: "",
    brand_name: "",

 
    asset_id: "",
    model_name: "",
    location:"",
    individual_bulk:""



  });

  const [errors, SetErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["Male", "Female"]);



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
      else{
        onSubmitform();
      }
    }, [errors]);





  const handleSubmit = (e) => {
    
    const test = SetErrors(asset_val(values));
  
    setIsSubmitting(true);
  
  };
  const onSubmitform = (e) => {
 
 
 
   // const formData = new FormData();

    const response = axios.post(
      "http://localhost:8000/api/add_asset",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
     
        swal({
          title: "Good job!",
          text: "asset added successfully",
          icon: "success",
          button: "ok",
        });
    

        SetValues({
          asset_category:"",
          asset_name: "",
          brand_name: "",
      
          // brand:"",
          asset_id: "",
          model_name: "",
          location:"",
          individual_bulk:""
         


        });
      }
    });
  };

  return { handleChange, values, handleSubmit, errors, options};
};
export default Assetform;

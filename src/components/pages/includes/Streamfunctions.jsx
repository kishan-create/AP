import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Streamfunctions = (stream_validation) => {
  const [values, SetValues] = useState({
    stream_name: "",
  
   
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
    const orgresponse=await fetch("http://localhost:8000/api/getOrganization/");
    setOrg(orgresponse.data);
  }*/
  const getDepartmentName = async () => {
    const response = await fetch(
      "http://localhost:8000/api/getDepartmentName"
    );
    const data = await response.json();

    const listnewtest = data.department;

    //const lo=JSON.stringify(listnew);

    setListnew(listnewtest);
  };

  // console.log(locationorg);
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(stream_validation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => { 
   
    const response = axios.post(
      "http://localhost:8000/api/add_stream",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: res.data.message,
          icon: "success",
          button: "ok",
        });
        SetValues({
            stream_name: "",
         
        });
      }
    });
  };

  return { handleChange, values, listnew, handleSubmit, errors };
};
export default Streamfunctions;

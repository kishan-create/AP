import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const Substreamform = (substreamvalidation) => {
  const [values, SetValues] = useState({
    stream_name: "",
    substream_name: "",
   
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
    getStreamName();

    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

  /* const loadOrganization = async () => {
    const orgresponse=await fetch("http://localhost:8000/api/getOrganization/");
    setOrg(orgresponse.data);
  }*/
  const getStreamName = async () => {
    const response = await fetch(
      "http://localhost:8000/api/getStreamName"
    );
    const data = await response.json();

    const listnewtest = data.stream;

    //const lo=JSON.stringify(listnew);

    setListnew(listnewtest);
  };

  // console.log(locationorg);
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = setErrors(substreamvalidation(values));
    setIsSubmitting(true);
  };
  const onSubmitform = (e) => { 
    //console.log(values)
    const response = axios.post(
      "http://localhost:8000/api/add_substream",
      values
    );
    response.then(function(res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Branch added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
          stream_name: "",
         substream_name: "",
        });
      }
    });
  };

  return { handleChange, values, listnew, handleSubmit, errors };
};
export default Substreamform;

import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
const Jobform = job_validation => {
  const [values, SetValues] = useState({
    job_id: '',
    job_post:'',
    job_skillset:'',
    job_openings:'',
    job_experience:'',
    job_status:'',
    job_date_open:'',
    job_date_close:'',
    job_location:'',
    job_description:''
  });
 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState(["IT service", "Design"]);
 const[post,SetPost]=useState([]);
  const handleChange = e => {
    const { name, value } = e.target
    SetValues({
      ...values,
      [name]: value,
    })
  };

  useEffect(() => {
    getPostname();
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSubmitform();
    }
  }, [errors]);

 /* const loadOrganization = async () => {
    const orgresponse=await fetch("http://localhost:8000/api/getOrganization/");
    setOrg(orgresponse.data);
  }*/
  const getPostname = async () => {
    const response = await fetch("http://localhost:8000/api/getposttype");
    const data = await response.json();
    const list = data.post;
    SetPost(list);
  }
  //console.log(post);
  const handleSubmit = e => {

    e.preventDefault();
    const test = setErrors(job_validation(values));
    setIsSubmitting(true);

  }
  const onSubmitform = e => {

    //console.log(values)
    const response = axios.post('http://localhost:8000/api/add_jobs', values);
    response.then(function (res) {
      if (res.data.status === 200) {
        //console.log(res.data.message);
        swal({
          title: "Good job!",
          text: "Job added successfully",
          icon: "success",
          button: "ok",
        });
        SetValues({
          org_name: "",
          org_code: "",
          org_type: "",
          org_category: "",
          org_registration: "",
          org_location: "",
        })
      }
    })
  }



  return { handleChange, values, handleSubmit, errors, post };
}
export default Jobform;

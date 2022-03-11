import { useState,useEffect } from "react";
import axios from 'axios';
const Organizationform = org_validation => {
    const[values, SetValues] = useState ({
        org_name:'',
        org_code:'',
        org_type:'',
        org_category:'',
        org_registration:'',
        location:''

        
    });
   
    const[errors,setErrors]=useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [options, setOptions] = useState([]);
   
    const handleChange= e =>{
        const{name,value}=e.target
        SetValues({
            ...values,
           [name]:value,
        })
    };

    useEffect(() => {
        getSelectDropdown();
        if (Object.keys(errors).length === 0 && isSubmitting) {
          onSubmitform();
        }
      }, [errors]);
      function getSelectDropdown()
      {
        setOptions(["option1","option2"]) 
      }
    const handleSubmit= e =>
    {
        
        e.preventDefault();
       const test= setErrors(org_validation(values));
       setIsSubmitting(true);
     //  const promise= axios.post('http://localhost:8000/api/add_org', values);
       
       
    
        
       
        
    }
    const onSubmitform=e =>
    {

        console.log(values)
    }
    
  
    
    return {handleChange,values,handleSubmit,errors,options};
}
export default Organizationform;

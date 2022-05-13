import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
const Releaseform = release_validation => {
    const [errorsrelease, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [valuesrelease, SetValuesRelease] = useState({
        release_date: '',
        release_id:''
        });


    const handleChangeRelease = e => {
        const { name, value } = e.target

        SetValuesRelease({
            ...valuesrelease,
            [name]: value,
        })
    };

    const handleSubmitrelease = e => {
        //alert("hii");
        e.preventDefault();
        const test = setErrors(release_validation(valuesrelease));
        setIsSubmitting(true);


    }
    useEffect(() => {


        if (Object.keys(errorsrelease).length === 0 && isSubmitting) {
            onSubmitform();
        }
    }, [errorsrelease]);
    const onSubmitform = e => {
        const response = axios.post('http://localhost:8000/api/add_offerletter', valuesrelease);
        response.then(function (res) {
            if (res.data.status === 200) {
                //console.log(res.data.message);
                swal({
                    title: "Good job!",
                    text: "Schedule added successfully",
                    icon: "success",    
                    button: "ok",
                });
                //setIsOpen(false);
            }
        })

    }
    return { handleChangeRelease, valuesrelease, handleSubmitrelease, errorsrelease };
}
export default Releaseform;

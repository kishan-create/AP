import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
const Rejectionform = rejection_validation => {
    const [errorsrejection, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [valuesrejection, SetValuesRejection] = useState({
        rejectionstatus: '',
        reason: '',
        remark: '',

        r_id: '',

    });


    const handleChangerejection = e => {
        const { name, value } = e.target

        SetValuesRejection({
            ...valuesrejection,
            [name]: value,
        })
    };

    const handleSubmitrejection = e => {
        //alert("hii");
        e.preventDefault();
        const test = setErrors(rejection_validation(valuesrejection));
        setIsSubmitting(true);


    }
    useEffect(() => {


        if (Object.keys(errorsrejection).length === 0 && isSubmitting) {
            onSubmitform();
        }
    }, [errorsrejection]);
    const onSubmitform = e => {
        const response = axios.post('http://localhost:8000/api/add_rejection', valuesrejection);
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
    return { handleChangerejection, valuesrejection, handleSubmitrejection, errorsrejection };
}
export default Rejectionform;

import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
const Onboardingform = () => {
  const [modalState, setModalState] = useState(true);
  const[resume, SetResume] = useState ([]);
  const[log, SetLog] = useState ([]);
  const [editvalues, SetEditValues] = useState({
    username: '',
    postvalue: '',
    skillset: '',
    p_email: '',
    phonenumber: '',
    qualification: '',
    exp: '',
    ctc: '',
    expect_ctc: '',
    noticeprd: '',
    dob: '',
    location: '',
    current_company: '',
    domain_exp: '',
    app_date: '',
    primary_skill: '',
    secskill: '',
    ref: '',
    edit_b_id:'',
    
    edit_panel_members: '',
    edit_idatetime: '',
    edit_iplace: '',
    edit_jobtitle: '',
    edit_department_team: '',
    edit_interview_rating: '',
    edit_s_id: '',
    edit_comments: '',
    edit_rejectionstatus:'',
    edit_reason:'',
    edit_remark :'',
    edit_r_id:'',
    edit_release_date:'',
    edit_release_id:'',
    edit_basic_column_name:'',
    edit_resume:'',
    resume:''
  });
  const edithandleChange = e => {
    const { name, value } = e.target
    SetEditValues({
      ...editvalues,
      [name]: value
    })
  }
  const handleImage =e =>
  {
    SetResume({
          resume:e.target.files[0]
      });
  };
  const Viewlog = async(id) =>
  {
    const response = await axios.get(`http://localhost:8000/api/viewlog/${id}`);
  
  SetLog(response.data.log);
  setIsViewLog(true);
  }
  const getBasicdetails = async (id, column) => {
    const basic_id = id;
    //alert(column);
    if (column == 'Inprogress') {
      const reponse = await axios.get(`http://localhost:8000/api/editfecthbasicdata/${basic_id}`);
      console.log(reponse.data.candidate[0]);
      if (reponse.data.status == 200) {
        SetEditValues({
          username: reponse.data.candidate[0].name,
          post: reponse.data.candidate[0].post,
          skillset: reponse.data.candidate[0].skillset,
          p_email: reponse.data.candidate[0].email,
          phonenumber: reponse.data.candidate[0].contact_number,
          qualification: reponse.data.candidate[0].education,
          exp: reponse.data.candidate[0].total_exp,
          current_ctc: reponse.data.candidate[0].ctc,
          expect_ctc: reponse.data.candidate[0].exp_ctc,
          noticeprd: reponse.data.candidate[0].notice_prd,
          dob: reponse.data.candidate[0].dob,
          location: reponse.data.candidate[0].location,
          current_company: reponse.data.candidate[0].c_company,
          domain_exp: reponse.data.candidate[0].domain_exp,
          app_date: reponse.data.candidate[0].applied_date,
          primary_skill: reponse.data.candidate[0].primary_skill,
          secskill: reponse.data.candidate[0].sec_skill,
          ref: reponse.data.candidate[0].ref,
          edit_b_id:id,
          edit_basic_column_name:column,
          edit_resume:reponse.data.candidate[0].resume,
          resume:resume.resume
        })
      }

    }
    else if (column == 'Schedule') {
      const reponse = await axios.get(`http://localhost:8000/api/getscheduledata/${basic_id}`);
      if (reponse.data.status == 200) {
        SetEditValues({
          edit_panel_members: reponse.data.schedule[0].panelmembers,
          edi_idatetime: reponse.data.schedule[0].interview_time,
          edit_iplace: reponse.data.schedule[0].i_place,
          edit_jobtitle: reponse.data.schedule[0].job_title,
          edit_department_team: reponse.data.schedule[0].department,
          edit_interview_rating: reponse.data.schedule[0].rating,
          edit_s_id: reponse.data.schedule[0].s_id,
          edit_comments: reponse.data.schedule[0].commemts,
          edit_basic_column_name:column

        })
      }
    }
    else if (column == 'Rejection') {
      const reponse = await axios.get(`http://localhost:8000/api/getrejectdata/${basic_id}`);
      if (reponse.data.status == 200) {
        SetEditValues({
          edit_release_date: reponse.data.rejectdata[0].c_status,
          edit_reason: reponse.data.rejectdata[0].reasons,
          edit_remark: reponse.data.rejectdata[0].remarks,
          edit_r_id: reponse.data.rejectdata[0].r_id,
          edit_basic_column_name:column
        })
      }
    }
    else if(column == 'Release')
    {
      const response = await axios.get(`http://localhost:8000/api/getreleasedata/${basic_id}`);
      if (response.data.status == 200) {
        SetEditValues({
          edit_release_date: response.data.releasedata[0].offer_release_date,
          edit_release_id: response.data.releasedata[0].offer_id,
          edit_basic_column_name:column
         
        })
      }
    }
  }

  const handleSubmit_edit = async(e) => {
    e.preventDefault();
    const formData = new FormData(); 
    formData.append('resume', resume.resume);
    formData.append('username', editvalues.username);
    formData.append('post', editvalues.post);
    formData.append('skillset', editvalues.skillset);
    formData.append('p_email', editvalues.p_email);
    formData.append('phonenumber', editvalues.phonenumber);
    formData.append('qualification', editvalues.qualification);
    formData.append('exp', editvalues.exp);
    formData.append('current_ctc', editvalues.current_ctc);
    formData.append('expect_ctc', editvalues.expect_ctc);
    formData.append('noticeprd', editvalues.noticeprd);
    formData.append('dob', editvalues.dob);
    formData.append('location', editvalues.location);
    formData.append('current_company', editvalues.current_company);
    formData.append('domain_exp', editvalues.domain_exp);
    formData.append('app_date', editvalues.app_date);
    formData.append('primary_skill', editvalues.primary_skill);
    formData.append('secskill', editvalues.secskill);
    formData.append('ref', editvalues.ref);
    formData.append('edit_b_id', editvalues.edit_b_id);
    formData.append('edit_basic_column_name', editvalues.edit_basic_column_name);
    formData.append('edit_panel_members', editvalues.edit_panel_members);
    formData.append('edi_idatetime', editvalues.edi_idatetime);
    formData.append('edit_iplace', editvalues.edit_iplace);
    formData.append('edit_jobtitle', editvalues.edit_jobtitle);
    formData.append('edit_department_team', editvalues.edit_department_team);
    formData.append('edit_interview_rating', editvalues.edit_interview_rating);
    formData.append('edit_s_id', editvalues.edit_s_id);
    formData.append('edit_comments', editvalues.edit_comments);
    formData.append('edit_release_date', editvalues.edit_release_date);
    formData.append('edit_reason', editvalues.edit_reason);
    formData.append('edit_remark', editvalues.edit_remark);
    formData.append('edit_r_id', editvalues.edit_r_id);
    formData.append('edit_release_date', editvalues.edit_release_date);
    formData.append('edit_release_id', editvalues.edit_release_id);
  
   
    const response = await axios.post('http://localhost:8000/api/Updateboarddetails', formData);
   
    if(response.data.status===200)
    {

       alert("Updated successfully");
       setEditstate(false);
      }
     
  }
  return { getBasicdetails, editvalues, edithandleChange ,handleSubmit_edit,handleImage,Viewlog,log};

}

export default EditKanbanboard;

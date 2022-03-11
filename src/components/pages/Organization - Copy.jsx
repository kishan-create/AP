import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Jobdetailsmodal from "./Jobdetailsmodal"; 
import {location} from '../../images';
import {profilei} from '../../images/profilei.svg'; 
import Addorganization from './Addorgaization';
import Addbranches from './Addbranches';
//import Editbranches from './Editbranches';
import axios from 'axios';
import Modal from 'react-modal'; 
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdClose } from "@react-icons/all-files/md/MdClose";
const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

let id = 0;
function createData(branchname, brachcode, organizationname, branchtype, olocation, action) {
  id += 1;
  return { id, branchname, brachcode, organizationname, branchtype, olocation, action };
}

const data = [
  createData('Encaps', 'DPC','Bourntec Solutions', 'Development center', 'Cochin', ''),
  createData('Bourntec', 'ORC','Bourntec Solutions', 'Organization center', 'bhuvaneshwar', ''),
  createData('Bourntec', 'AO','Bourntec Solutions', 'administrative operation', 'hyderabad', ''),
    createData('Bourntec Solutions Inc', 'GH','Bourntec Solutions', 'Global Headquarters', 'US', ''),
];


  export default class Organization extends Component {
    constructor()
    {
        super()
        this.state={
          organization:[],
          options:["IT service", "Design"],
          loading:true,
          modalIsOpen: false,
          formData:{
            org_name:'',
            org_code:'',
            org_type:'',
            org_category:'',
            org_location:'',
            org_registration:'',
        }
         
        }
        this.closeModal = this.closeModal.bind(this);
       
    }
    
    handleInputs = (e) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [e.target.name]: e.target.value,
        },
      });
    };
    async componentDidMount(){
     const res=await axios.get("http://localhost:8000/api/getOrganization/");
     //console.log(res.data.sta);
     if(res.data.sta===200)
     {
       this.setState({
         organization:res.data.org,
         loading:false,
       });
     }
    }
     closeModal() {
      this.setState({modalIsOpen: false});
    }
    
   async edit (id) { 
     const org_id=id;
      const reponse=await axios.get(`http://localhost:8000/api/editfecthorgdata/${org_id}`)
      if(reponse.data.status==200)
      {
       
      this.setState({
        formData:{
          org_name: reponse.data.org.org_name,
          org_code: reponse.data.org.org_code,
          org_type: reponse.data.org.org_type,
          org_category:reponse.data.org.org_category,
          org_location:reponse.data.org.org_location,
          org_registration:reponse.data.org.org_registration,
          id:reponse.data.org.id,
        },
       
         modalIsOpen: true
         });
      }
     
  };
  updateOrganization = async(e) =>
  {
  
    e.preventDefault();
   const res=await axios.put('http://localhost:8000/api/update_organization',this.state.formData);

   
  };
  deleteOrganization =async(e,id) => {
    const thisclickrow=e.currentTarget;
    thisclickrow.innerText="Deleting";
  const res= await axios.delete(`http://localhost:8000/api/delete_organization/${id}`);
     if(res.data.status==200)
     {
      thisclickrow.closest("tr").remove();
       console.log(res.data.message);
     }
  };
  render() {
    
    /*if(this.state.loading)
    {

      var organization_table="";
    }
    else 
    {
      organization_table=
      this.state.organization.map((item) =>
       {
        return(
         
          <TableRow  key={item.id} >
          <TableCell  className="width-18"> {item.org_code}</TableCell>
          <TableCell numeric className="width-18">{item.org_name}</TableCell>                          
          <TableCell numeric className=" width-18">{item.org_category} </TableCell>
          <TableCell numeric className=" width-20">{item.org_type} </TableCell>
          <TableCell numeric className="width-18">{item.org_location}</TableCell>
          <TableCell numeric className="width-8">
          <div className="action-outer">
   
   <div className="edit-new-icon ">
     <a href="">
     <svg width="14" height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.76911 5.80111L3.04833 0.0803333C2.94122 -0.0267778 2.76767 -0.0267778 2.66067 0.0803333L0.0803334 2.66067C-0.0267778 2.76778 -0.0267778 2.94133 0.0803334 3.04833L5.80111 8.76911L8.76911 5.80111Z" fill="#4A54D1"/>
<path d="M9.59266 9.98866L6.0791 9.04722L9.04722 6.0791L9.98866 9.59266C10.053 9.83311 9.83311 10.053 9.59266 9.98866Z" fill="#4A54D1"/>
</svg>

</a>
                   </div>
<div className="delete-icon">
<a href="">
<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.242676 0.31216H2.19897V0.261343C2.19897 0.117019 2.30763 0 2.44165 0H4.43799C4.57201 0 4.68067 0.117019 4.68067 0.261343V0.31216H6.63696C6.77098 0.31216 6.87964 0.429179 6.87964 0.573503V1.60566C6.87964 1.74998 6.77098 1.867 6.63696 1.867H0.242676C0.108661 1.867 0 1.74998 0 1.60566V0.573503C0 0.429179 0.108661 0.31216 0.242676 0.31216Z" fill="#EB140A"/>
<path d="M0.607288 2.39648H6.27234C6.40635 2.39648 6.51501 2.5135 6.51501 2.65783V9.49013C6.51501 9.63445 6.40635 9.75147 6.27234 9.75147H0.607288C0.473274 9.75147 0.364613 9.63445 0.364613 9.49013V2.65783C0.364613 2.5135 0.473274 2.39648 0.607288 2.39648ZM4.59252 8.81099C4.59252 8.95531 4.70118 9.07233 4.8352 9.07233H5.06107C5.19509 9.07233 5.30375 8.95531 5.30375 8.81099V3.33697C5.30375 3.19265 5.19509 3.07563 5.06107 3.07563H4.8352C4.70118 3.07563 4.59252 3.19265 4.59252 3.33697V8.81099ZM3.08415 8.81099C3.08415 8.95531 3.19281 9.07233 3.32683 9.07233H3.5527C3.68672 9.07233 3.79538 8.95531 3.79538 8.81099V3.33697C3.79538 3.19265 3.68672 3.07563 3.5527 3.07563H3.32683C3.19281 3.07563 3.08415 3.19265 3.08415 3.33697V8.81099ZM1.57588 8.81099C1.57588 8.95531 1.68454 9.07233 1.81855 9.07233H2.04443C2.17844 9.07233 2.2871 8.95531 2.2871 8.81099V3.33697C2.2871 3.19265 2.17844 3.07563 2.04443 3.07563H1.81855C1.68454 3.07563 1.57588 3.19265 1.57588 3.33697V8.81099Z" fill="#EB140A"/>
</svg>
</a>
</div>


                   </div>

          </TableCell>
                            </TableRow>
        );
      });
      
    }*/
   
    return ( 
      <div>
       
        <main className="inner-content-box">
      <header className="main-otrer-top"> Organization Branches </header>
             <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head organization-sub-head"> Organization Details
                        <div className="top-right-outer add-btn-div organization-top-rt"> 
                        <div className="organization-button" >
                        <Addorganization />
                        </div>
                        <div className="organization-button">  
                         <Addbranches /> 
                         </div>              
                        </div>
                    </div>
                    <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
       className="job-detils-modal addabrch-modal"
        contentLabel="Example Modal" >
            <form onSubmit={this.updateOrganization} className='form' noValidate>
         
        <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
                <h4 >Edit Organization</h4>
            </div>
            <div className="popup-head-icon-sty">
               <MdClose className="popup-close-btn" onClick={this.closeModal} />
            </div>
        </div>
        <div className="popup-content-bg">
                  <div class ="row addabrch-content-box">
                <div class="col-md-12">
                <div class="row ">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">org Name</label>
                                <input name="org_name" type="text" onChange={this.handleInputs} value={this.state.formData.org_name} class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">org Code</label>
                                <input name="org_code"  onChange={this.handleInputs} value={this.state.formData.org_code} type="text" class="form-control" ></input>
                    
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Company Type</label>
                                <input name="org_type"  onChange={this.handleInputs} value={this.state.formData.org_type} type="text" class="form-control" ></input>
                               
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Category</label>
                                <select id = "dropdown"  onChange={this.handleInputs} value={this.state.formData.org_category} name="org_category" class="form-control">
                                { this.state.options.map((element, index) => <option value={element} key={index}>{element}</option>) }
  </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Organization Registration</label>
                                <input name="org_registration" onChange={this.handleInputs} value={this.state.formData.org_registration} type="text" class="form-control" placeholder="Development Center" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Location</label>
                                <input name="org_location" onChange={this.handleInputs} value={this.state.formData.org_location} type="text" class="form-control" placeholder="Development Center" ></input>
                            </div>
                        </div>
                      
                      
                        
                        <input type="hidden" name="id" value={this.state.id} />
                                             
                        
                     </div>
                </div>
            </div>
           
        </div>
        <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save "  > Update</button>
            <button type="button" class="btn  btn-cancel "  onClick={this.closeModal} > Cancel </button> 
        </div>
        
       </form>
                
      </Modal>
                    <div className="col-md-12 job-main-tb-outer">    
                    <Paper className="recruitment-table-outer job-outer organazation-table-top">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="width-18">Organaization Name</TableCell>
            <TableCell className="width-18">Organaization Code</TableCell>
            <TableCell className="width-18">Organization Category </TableCell>
            <TableCell className="width-20">Organization Type</TableCell>
            <TableCell className="width-18">Location</TableCell>
                  <TableCell className="width-8">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        { this.state.organization.map(n => {
            return (
              <TableRow  key={n.id} >
                    <TableCell  className="width-18"> {n.org_code}</TableCell>
                    <TableCell numeric className="width-18">{n.org_name}</TableCell>                          
                    <TableCell numeric className=" width-18">{n.org_category} </TableCell>
                    <TableCell numeric className=" width-20">{n.org_type} </TableCell>
                    <TableCell numeric className="width-18">{n.org_location}</TableCell>
                    <TableCell numeric className="width-8">
                    <div className="action-outer">
             
             <div className="edit-new-icon ">
            
             <button onClick={() => this.edit(n.id)}>Edit</button>
           
                             </div>
<div className="delete-icon">
  
<svg width="7" onClick={(e) => this.deleteOrganization(e,n.id)} height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.242676 0.31216H2.19897V0.261343C2.19897 0.117019 2.30763 0 2.44165 0H4.43799C4.57201 0 4.68067 0.117019 4.68067 0.261343V0.31216H6.63696C6.77098 0.31216 6.87964 0.429179 6.87964 0.573503V1.60566C6.87964 1.74998 6.77098 1.867 6.63696 1.867H0.242676C0.108661 1.867 0 1.74998 0 1.60566V0.573503C0 0.429179 0.108661 0.31216 0.242676 0.31216Z" fill="#EB140A"/>
<path d="M0.607288 2.39648H6.27234C6.40635 2.39648 6.51501 2.5135 6.51501 2.65783V9.49013C6.51501 9.63445 6.40635 9.75147 6.27234 9.75147H0.607288C0.473274 9.75147 0.364613 9.63445 0.364613 9.49013V2.65783C0.364613 2.5135 0.473274 2.39648 0.607288 2.39648ZM4.59252 8.81099C4.59252 8.95531 4.70118 9.07233 4.8352 9.07233H5.06107C5.19509 9.07233 5.30375 8.95531 5.30375 8.81099V3.33697C5.30375 3.19265 5.19509 3.07563 5.06107 3.07563H4.8352C4.70118 3.07563 4.59252 3.19265 4.59252 3.33697V8.81099ZM3.08415 8.81099C3.08415 8.95531 3.19281 9.07233 3.32683 9.07233H3.5527C3.68672 9.07233 3.79538 8.95531 3.79538 8.81099V3.33697C3.79538 3.19265 3.68672 3.07563 3.5527 3.07563H3.32683C3.19281 3.07563 3.08415 3.19265 3.08415 3.33697V8.81099ZM1.57588 8.81099C1.57588 8.95531 1.68454 9.07233 1.81855 9.07233H2.04443C2.17844 9.07233 2.2871 8.95531 2.2871 8.81099V3.33697C2.2871 3.19265 2.17844 3.07563 2.04443 3.07563H1.81855C1.68454 3.07563 1.57588 3.19265 1.57588 3.33697V8.81099Z" fill="#EB140A"/>
</svg>

</div>


                             </div>

                    </TableCell>
                                      </TableRow>
             
            );
          })}
            
       
          
        </TableBody>
      </Table>
       
       </Paper>          
                    </div>

                    <div className="accrodion-mob-outer">
  <Accordion preExpanded={"a"} className="job-accrodion">
  <AccordionItem uuid="a">
        <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Encaps
                  </div>
            <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">DFC</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Organization Name</div>
         <div className="right">: Bourntec Solutions</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Branch Type </div>
         <div className="right">: Development center</div>
        </div>
                    <div className="accord-detals-box">
        <div className="accordion-bottom-button">
<div className="more-button">View</div>
<div className="more-button more-outer"> </div>
<div className="more-button more-outer">Delete</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="b">
        <AccordionItemHeading className="accordion-inactive-status">
          <AccordionItemButton>  <div className="accordion-head-text">
            <div className="name notificatio-outer">Bourntec</div>
              <div className="desi joblocation">
          <img src={location}/>  
          <span>Bhuvaneshwar</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">ORC</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <div className="accord-detals-box">
         <div className="left">Organization Name</div>
         <div className="right">: Bourntec Solutions</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Branch Type </div>
         <div className="right">: Organization center</div>
        </div>
                    <div className="accord-detals-box">
        <div className="accordion-bottom-button">
<div className="more-button">View</div>
<div className="more-button more-outer"> 
</div>
<div className="more-button more-outer">Delete</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="c">
        <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Bourntec
                  </div>
            <div className="desi joblocation">
          <img src={location}/>  
          <span>Hyderabad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">AO</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Organization Name</div>
         <div className="right">: Bourntec Solutions</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Branch Type </div>
         <div className="right">: administrative operation</div>
        </div>
                    <div className="accord-detals-box">
        <div className="accordion-bottom-button">
<div className="more-button">View</div>
<div className="more-button more-outer"> </div>
<div className="more-button more-outer">Delete</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="d">
        <AccordionItemHeading className="accordion-inactive-status">
          <AccordionItemButton>  <div className="accordion-head-text">
            <div className="name notificatio-outer">Bourntec Solutions Inc</div>
              <div className="desi joblocation">
          <img src={location}/>  
          <span>US</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">GH</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <div className="accord-detals-box">
         <div className="left">Organization Name</div>
         <div className="right">: Bourntec Solutions</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Branch Type </div>
         <div className="right">: Global Headquarters</div>
        </div>
                    <div className="accord-detals-box">
        <div className="accordion-bottom-button">
<div className="more-button">View</div>
<div className="more-button more-outer"> </div>
<div className="more-button more-outer">Delete</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>
     
     
    </Accordion>
    </div>

                </div>
            </section>
    </main>
   
    
    </div>
    
    
    );
   
    
}

  }

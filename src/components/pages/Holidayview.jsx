import React, { Component } from 'react';

import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Holidaypopup from './Holidaypopup';
import axios from "axios";

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
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
function createData(Category, PropertyBrand , AssetId, ConnectorType, SpecialFeature,NumberofKeys, action) {
  id += 1;
  return { Category, PropertyBrand , AssetId, ConnectorType, SpecialFeature,NumberofKeys, action };
}

const data = [
  createData('NEW YEAR', ' JAN 1',  ''),  
  createData('REPUBLIC DAY', 'JAN 26',  ''),
  createData('MAUNDY THURSDAY', 'APR 14',  ''),
  createData('GOOD FRIDAY', 'APR 15',  ''),
  createData('INDEPENDENCE DAY', 'AUG 15',  ''),
  createData('SREE KRISHNA JAYANTHI  ', 'AUG 18',  ''),
  createData('FIRST ONAM   ', 'SEP 7',  ''),
  createData('THIRUVONAM  ', 'SEP 8',  ''),
  createData('MAHANAVAMI  ', 'OCT 4',  ''),
  createData('DEEPAVALI  ', 'OCT 24',  ''),
];


  export default class Holidayview extends Component {
    constructor() {
      super();
      this.state = {
        holiday: [],
        c_name:"",
        }
      };
   componentDidMount()
   {
    
     this.getallHolidays(this.props.match.params.id);
   }
    getallHolidays=async(id) =>{
    const reponse = await axios.get(
      `http://auditportal.bourntec.com:3001/audit_portal/public/api/getholidysbyid/${id}` );
      if (reponse.data.status === 200) {
       
        this.setState({
          holiday: reponse.data.holidaylist,
         
          loading: false,
       });
     }
   
   }
  
    handleoption=async(e)=> {
   var id=e.target.value;
   const reponse = await axios.get(
    `http://auditportal.bourntec.com:3001/audit_portal/public/api/getupdateholiday/${id}` );

    this.getallHolidays(this.props.match.params.id);
    
   }
   DeleteHolidayname = async (e,id) => { alert(id);

    e.preventDefault();

    const thisclickrow = e.currentTarget;

    thisclickrow.innerText = "Deleting";

    const res = await axios.get(

      `http://auditportal.bourntec.com:3001/audit_portal/public/api/delete_holidaynames/${id}`

    );

    if (res.data.status == 200) {

      thisclickrow.closest("tr").remove();

      alert("holiday Deleted successfully");

    }

  };
 
  render() {
    
   
    return (
      <div>
        
        <main className="inner-content-box">
      <header className="main-otrer-top"> Holiday Calander List      </header>
             <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head organization-sub-head">{this.state.holiday[0]?.hol_calendar_name}
                    <div className="top-right-outer add-btn-div">
                  <Holidaypopup/>

                                </div>
                    </div>
                     
                            <div id="app"></div>
                            
    <div className="col-md-12 ">
    <div className=" ">    
                    <Paper className="recruitment-table-outer job-outer organazation-table-top">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="cal-width-50">Holiday Name </TableCell>
            <TableCell className="cal-width-20">Date</TableCell>
            <TableCell className="cal-width-20">Optional Holidays</TableCell>
            <TableCell className="cal-width-10">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
       
        {this.state.holiday.map(n => {
           {if (n.optional === '1') 
           { 
             var checked="true";
             var chekid="0";
} else 
{ 
  var chekid="1";
} 
}
            return (
             
              <TableRow  key={n.auid} >
                    <TableCell  className="cal-width-50">  {n.hol_name}</TableCell>
                    <TableCell numeric className="cal-width-20">{n.hol_date}</TableCell>                          
                    <TableCell numeric className="cal-width-20"> <div className="edit-new-icon ">
             
               <input onClick={this.handleoption}  onTouchEnd={this.handleoption} checked={checked} type="checkbox" id="option_check" name="option_check" value={chekid+'_'+n.auid}></input>


                             </div></TableCell>   
                    <TableCell numeric className="cal-width-10">
                    <div className="action-outer">
             
            
<div className="delete-icon">

<svg onClick={(e) => this.DeleteHolidayname(e, n.auid)}  width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </div>             

                    

                </div>
            </section>
    </main>
    </div>
    )
}
  }

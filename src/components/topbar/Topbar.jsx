import react from "react";
import './topbar.css'
import {dashboard,asste,Grouplog} from '../../images';
import { FiAlignRight } from "@react-icons/all-files/fi/FiAlignRight";
import { BiTimeFive } from "@react-icons/all-files/bi/BiTimeFive";
import { BsBell } from "@react-icons/all-files/bs/BsBell";
import {useAuth}  from "../../context/auth.context";
export default function Topbar(){
  const user = useContext(useAuth); 
  alert('hii');
  alert()
    return(
      <div className=' head-style' >
      <div className='' >
           <nav className="  ">
            
               <div className=" col-md-6 p-l-0">
                 <a className=" topbar-icon " href="# onClick={this.props.toggle}"><FiAlignRight /> </a>
               </div>               
               <div className="  col-md-6 topbar-col-right">
                 <span className="topbar-icon-right"> <BiTimeFive/></span>
                 <span  className="topbar-icon-right"> <BsBell/></span>
                 <span> 	<img className="topbar-icon-right-img" src={Grouplog}/> <sup className="topbar-icon-right-img-txt">Ayer</sup></span>
               </div>
          
           </nav>
       </div>

       
       
 </div>
    );
}
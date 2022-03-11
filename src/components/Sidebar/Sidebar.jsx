import react from "react";
import './sidebar.css';
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { GrOptimize } from "@react-icons/all-files/gr/GrOptimize";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt";
import { MdSettings } from "@react-icons/all-files/md/MdSettings";

import {dashboard,asste,logonew} from '../../images';
export default function Sidebar(){
    return(
        <div className="sidebar-main">
        
        <div className="logo">
			<img src={logonew}/>
        </div>
        <div className="nav-start">
            <div className="nav-taxt">Navigation</div>
            <nav>
<ul>
<li><a href=""><MdDashboard/>
 Dashboard</a></li>
<li><a href=""><GrOptimize/>
 Asset</a></li>
<li><a href=""> <FaUserTie/>
 Employee</a></li>
<li><a href=""> <FaFileAlt/>
 projects</a></li>
<li><a href=""><MdSettings/>
 configration</a></li></ul>
</nav>
        </div>
        </div>
    );
}

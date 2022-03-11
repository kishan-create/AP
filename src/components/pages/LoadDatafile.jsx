import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { v4 as uuid } from "uuid";
const LoadDatafile = () => {
    const [columns, setColumns] = useState([]);
  const loadData = async () => {
    // alert("hii");
    const response = await fetch("http://localhost:8000/api/getcandidates");
    const scheduleresponse = await fetch("http://localhost:8000/api/getcandidates_schedule");
    const rejectionresponse = await fetch("http://localhost:8000/api/getcandidates_rejection");
    const waitingresponse = await fetch("http://localhost:8000/api/getcandidates_waiting");
    const releaseresponse = await fetch("http://localhost:8000/api/getcandidates_release");
    const data = await response.json();
    const scheduledata = await scheduleresponse.json();
    const rejectiondata = await rejectionresponse.json();
    const waitingdata = await waitingresponse.json();
    const releasedata = await releaseresponse.json();
    // console.log(data);
    const savedate = data.candidate;
    const schedulesavedata = scheduledata.candidate;
    const rejectionsavedata = rejectiondata.candidate;
    const waitingsavedata = waitingdata.candidate;
    const releasesavedata = releasedata.candidate;
    //console.log(savedate);
    var inprogessObj = JSON.parse(savedate);
    var scheduleObj = JSON.parse(schedulesavedata);
    var rejectionObj = JSON.parse(rejectionsavedata);
    var waitingObj = JSON.parse(waitingsavedata);
    var releaseObj = JSON.parse(releasesavedata);
    setColumns({
      [uuid()]: {
        name: "Inprogress",
        items: inprogessObj,
        count: 2

      },
      [uuid()]: {
        name: "Schedule",
        items: scheduleObj,
        count: 1
      },
      [uuid()]: {
        name: "Rejection",
        items: rejectionObj,
        count: 3

      },
      [uuid()]: {
        name: "Waiting",
        items: waitingObj,
        count: 4
      },
      [uuid()]: {
        name: "Release",
        items: releaseObj,
        count: 5
      }
    })
    
  };
  //loadData();
 
 // console.log("shanu");
 
  return {columns };

}

export default LoadDatafile;

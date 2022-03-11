import React from "react";
 
const Schedulepopup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
       hi
      </div>
    </div>
  );
};
 
export default Schedulepopup;
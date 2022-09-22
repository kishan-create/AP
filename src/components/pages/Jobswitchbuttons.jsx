import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


export default function Jobswitchbuttons() {
  
 

  return (
    <div>

 
<div class="container">
  <div class="switches-container">
    <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked"/>
    <input type="radio" id="switchYearly" name="switchPlan" value="Yearly"  />
    <label for="switchMonthly">Active</label>
    <label for="switchYearly">Inactive</label>
    <div class="switch-wrapper">
      <div class="switch">
        <div>Active</div>
        <div>Inactive</div>
      </div>
    </div>
  </div>
  
</div>
      
    </div>  
  );
}

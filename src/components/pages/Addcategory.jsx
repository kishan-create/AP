import React, { Component } from 'react';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
 import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
 import Collapse from "@kunukn/react-collapse";

 const initialState = [false, false, false];
 function reducer(state, { type, index }) {
   switch (type) {
     case "expand-all":
       return [true, true, true];
     case "collapse-all":
       return [false, false, false];
     case "toggle":
       state[index] = !state[index];
       return [...state];
 
     default:
       throw new Error();
   }
 }
 
 function Block({ isOpen, title, onToggle, children }) {
   return (
     <div className="block boc-outer">
        <Collapse layoutEffect isOpen={isOpen} >
         {children}
       </Collapse>
     </div>
   );
 }
 
 export default function  Addcategory () {
   const [state, dispatch] = React.useReducer(reducer, initialState);
 

        
        return (


            <div>

                <main className="inner-content-box">
                    <header className="main-otrer-top">Configration </header>

                    <section className="main-content-area">
                        <div className="main-content-area-inner">
                            <div className="sub-head border-0">Add Category
                                <div className="top-right-outer add-btn-div category-top-button">
                                <a href="Addproperty"> <button type="button" class="btn  btn-large "  >Add Property</button></a>
                                <button type="button" class="btn  btn-cancel"  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 

                                                                   </div>

                                                                   <div className="border-top"></div>
                            </div>

                            <div className="basic-inform-inner padding-top-0 categroy-top" >
                            <div className="col-md-3 padding-left-5">
  <div class="form-group"><label for="exampleFormControlInput1">Product Name</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Laptop</option>
 </select>
  </div>
  </div>
  <div className="add-category-bt">
  <button type="button" class="btn  btn-maincolor"  onClick={() => dispatch({ type: "expand-all" })}
           disabled={state.every((s) => s === true)}> <SiAddthis className="add-btn-icon"/></button> 
  </div>
  <div className="col-md-3 mob-category-wdth">
  <div className="emplyesearch add-category-seearch">
                                    <input className="form-control" type="text" id="birthday" name="birthday" placeholder="Search " />
                                    <button type="button"> <FaSearch className="add-btn-icon" /></button>
                                </div>
</div>


     <Block
         isOpen={state[0]}
         onToggle={() => dispatch({ type: "toggle", index: 0 }) } className="open-close"
       >
<div className="row add-category-show-box ">
<div className="col-md-12 inner-box">
<div className="heading">Add  Specifications</div>

<div className="row">

<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Brand</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">SL Numbber</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Assect ID</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Location</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">RAM</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Quantity</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>

  <div className="add-category-save-outer">
  <button type="button" class="btn  btn-save ">  Add</button>
            <button type="button" class="btn  btn-cancel "  onClick={() => dispatch({ type: "collapse-all" })}
           disabled={state.every((s) => s === false)} > Cancel </button> 

  </div>
    </div>
    </div>

</div>  </Block>
                            </div>

                        </div>
                    </section>
                </main>


            </div>
        )
    }


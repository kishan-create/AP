import React, { useState } from "react";
 
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    
  }
`;

const Toggle = styled.button`
  width: 100px;
  height: 50px;
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  outline: none;
  background-color: ${props => (props.on ? "#4cd137" : "#353b48")};
  border: 3px solid white;

  &::after {
    content: "";
    position: absolute;
    top: 3.5px;
    will-change: transform;
    transform: translate(${props => (props.on ? 5.5 : -44)}px);
    transition: transform 0.2s ease-out;
    width: 35px;
    height: 35px;
    background: white;
    border: 2px solid #7f8fa6;
    outline: none;
    border-radius: 50%;
  }
`;

const Togbtn = () => {
  const [on, toggle] = useState(true);

  return (
    <div className="App">
      <GlobalStyle /> 
      <Toggle on={on} onClick={() => toggle(!on)} />
    </div>
  );
};

export default Togbtn;

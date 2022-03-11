import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./loginstyle.css";
import {dashboard,asste,logonew,loginbg} from '../../images';
import {AuthApi} from '../../api/auth';
import { useAuth } from "../../context/auth.context";
import axios from "axios";
import Dashboard from "../pages/Dashboard";
//const {userData} = AuthProvider();
export const UserContext = React.createContext();

export default function Login() {
  
  const value = React.useContext(UserContext);  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  let history = useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit= async (event) =>{
    event.preventDefault(); 
    axios
    .post("http://localhost:8000/api/user-login", {
      email: email,
      password:password,
    }) .then((response) => {
      if (response.data.status === 200) {
      //  setProfile(response);
     
      let user = { ...response.data.user };
      user.token = response.data.token;
      user = JSON.stringify(user);
      setUser(user);
      localStorage.setItem("user", user);
      history.push("/Dashboard");
      }
    })
    
  }
 
  return (
    
    <div className="Login login-bg">
      <div className="leftside-box">
      <div className="logo">
			<img src={logonew}/> 
        </div>
       
        <div className="logobg">
			<img src={loginbg}/>
        </div>
      </div>
      <div className="loginbox">
        <h1 className="white-tx">Welcome</h1>
        <h3 className="white-tx-sm">Login To Your Account </h3>
      <Form onSubmit={handleSubmit} className="form-p">
        <Form.Group size="lg" controlId="email">
          <Form.Label className="label-sty">Username</Form.Label>
          <Form.Control  className="form-control-new" placeholder="Enter Username" autoFocus  type="email"  value={email}  onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label-sty">Password</Form.Label>
          <Form.Control className="form-control-new"  placeholder="Enter Password" type="password" value={password}  onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="check-mag">
        <div className="topping">
        <input type="checkbox" id="topping" name="topping"  className="topping"
        value="Paneer" />
          <span className="keep-login"> Keep me logged in</span> 
      </div>
      
        </div>
        
        <Button block size="lg" type="submit"  className="btn-submit" >
          Login
        </Button>
        <div className="forgot-pass">Forgot Password ? </div>
      </Form>
      
      </div>
      
    </div>
    
  );
}
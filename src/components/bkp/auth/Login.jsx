import React, { Component } from 'react'
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useAuth } from './Auth';
export default class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            password: "",
            msg: "",
            isLoading: false,
            redirect: false,
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
           
          };
          
    }
 
    onChangehandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
      };
      onSignInHandler = () => {
        this.setState({ isLoading: true });
        axios
          .post("http://localhost:8000/api/user-login", {
            email: this.state.email,
            password: this.state.password,
          })
          .then((response) => {
            this.setState({ isLoading: false });
            if (response.data.status === 200) {
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userData", JSON.stringify(response.data.data));
                
              // sessionStorage.setItem("isLoggedIn", true);
               //sessionStorage.setItem("userData", JSON.stringify(response.data.data));
              this.setState({
                msg: response.data.message,
                redirect: true,
              });      
            }
            if (
              response.data.status === "failed" &&
              response.data.success === undefined
            ) {
              this.setState({
                errMsgEmail: response.data.validation_error.email,
                errMsgPwd: response.data.validation_error.password,
              });
              setTimeout(() => {
                this.setState({ errMsgEmail: "", errMsgPwd: "" });
              }, 2000);
            } else if (
              response.data.status === "failed" &&
              response.data.success === false
            ) {
              this.setState({
                errMsg: response.data.message,
              });
              setTimeout(() => {
                this.setState({ errMsg: "" });
              }, 2000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };        
  render() {
    if (this.state.redirect) {
        return <Redirect to="/Kanban" />;
      }
     // const login = localStorage.getItem("isLoggedIn");
     const login=sessionStorage.getItem("isLoggedIn");
      if (login) {
        return <Redirect to="/Kanban" />;
      }
      const isLoading = this.state.isLoading;
    return (
        
        <div>
            <main className="inner-content-box">
            <DndProvider backend={HTML5Backend}>
            <section className="main-content-area">
            <div className="sub-head"> Job Openings
                <div className="top-right-outer add-btn-div">
                 HI

                </div>
              </div>
              <div className="col-md-12 job-main-tb-outer">
        <Form className="containers">
         
            <Label for="email">Email id</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChangehandler}
            />
            <span className="text-danger">{this.state.msg}</span>
            <span className="text-danger">{this.state.errMsgEmail}</span>
          
         
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.onChangehandler}
            />
            <span className="text-danger">{this.state.errMsgPwd}</span>
          
          <p className="text-danger">{this.state.errMsg}</p>
          <Button
            className="text-center mb-4"
            color="success"
            onClick={this.onSignInHandler}
          >
            Sign In
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm ml-5"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <span></span>
            )}
          </Button>
        </Form> </div>
        </section>
        </DndProvider>
        </main>
      </div>
      
    )
  }
}

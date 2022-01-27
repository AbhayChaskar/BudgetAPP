import React, { Component,useState } from 'react'
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router,Route,Routes,Switch,NavLink} from 'react-router-dom';
import { Col,Container,Row,Form,FormControl } from 'react-bootstrap';
import axios from 'axios';
import SocialLogin from './SocialLogin'

const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForEve =RegExp(/^(?!^ +$)^.+$/);

export class Login extends Component {
    constructor(props){
        super(props)
        this.state={email:'',password:'',
               errors:{
                email:'',
                password:''
            }
        }
    }

    handle = (event) => {
        const { name, value } = event.target
 
        let errors=this.state.errors;
       
        switch(name){
            
            case 'email':
                errors.email=regForEmail.test(value)?'':'email Address is invalid';
                
                break;
            
            case 'password':
                errors.password=regForEve.test(value)?'':'password is invalid';
                
                break;
            
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
    }
    formSubmit=(event)=>{
        event.preventDefault();
        if(this.validate(this.state.errors))
        { 
            if(this.state.email!==""&&this.state.password!==""){
                this.add();
            }
            else{
                alert("Some fields missing");
            }
        }
        else {
            alert("Please Enter Valid details");
        }
     }
      validate=(errors)=>{
         let valid=true;
         Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
         return valid;
     }
    add = (event) => {   
        const URL = "http://localhost:3004/Users"
        
        axios.get(URL)
            .then(res=>{
                console.log(res);
                if(res.email==this.state.email && res.password==this.state.password){
                    alert("Logged In Successfully !!!");
                    localStorage.clear();
                    window.location.href="./home";
                }
                else{
                    alert("Invalid Details, Login Failed");
                }
            })
            .catch(err => { console.log(err) })  
    }
    
    render() {
        const {errors}=this.state;
        var courseName=localStorage.getItem("sub")
        return (
            <Container className="bg-dark text-warning mt-5 pt-5">
                 <h2 className="text-center text-warning " style={{fontFamily:"cursive"}}>Login Page</h2>
                 <br/>
                 <br/>
            <Row className="justify-content-md-center">
            <Col md="4">

            Email:
            <FormControl
                placeholder="Your Email id"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={this.handle}
                name="email"
                style={{width:"500px",marginLeft:"80px",marginTop:"-30px"}}
            />{errors.email.length>0 && <span className="text-danger">{errors.email}</span>}<br/>
            <br/>

            Password:
            <FormControl
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={this.handle}
                type="password"
                name="password"
                style={{width:"500px",marginLeft:"80px",marginTop:"-30px"}}
            />{errors.password.length>0 && <span className="text-danger">{errors.password}</span>}<br/>
            
            <i className="far fa-user"></i> <NavLink className="text-warning ml-1" to="/">Not Registered yet?</NavLink><br/>
            <Button variant="outline-warning" className="mt-3 mb-3" style={{marginLeft:"260px"}} href="/home" onClick={this.formSubmit}>Login</Button>
            </Col>
            <Col xs lg="2">
            </Col>
            </Row>
            <SocialLogin/>
            <div className="mb-5 pb-5"></div>
            </Container>
        )
    }
}

export default Login
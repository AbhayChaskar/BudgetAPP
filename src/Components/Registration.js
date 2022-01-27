import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router,Route,Routes,Switch,NavLink} from 'react-router-dom';
import { Col,Container,Row,Form,FormControl,InputGroup } from 'react-bootstrap';
import axios from 'axios';

const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName =RegExp(/^[A-Za-z]/);
const regForPass =RegExp(/^(?!^ +$)^.+$/);

export class Login extends Component {
    constructor(props){
        super(props)
        this.state = { fname: '', lname: '', username: '',email:'',password:'',cpassword:'', 
        errors:{
            fname:'',
            lname:'',
            username:'',
            email:'',
            password:'',
            cpassword:''
            }
        }
    }
    handle = (event) => {
        const { name, value } = event.target
 
        let errors=this.state.errors;
       
        switch(name){
            
            case 'fname':
                errors.fname=regForName.test(value)?'':'Enter Valid first Name';
                break;

            case 'lname':
                errors.lname=regForName.test(value)?'':'Enter Valid Last Name';
                break;

            case 'username':
                errors.username=regForPass.test(value)?'':'Enter Username';
                break;

            case 'email':
                errors.email=regForEmail.test(value)?'':'email Address is invalid';
                break;
            
            case 'password':
                errors.password=regForPass.test(value)?'':'password is invalid';
                break;

            case 'cpassword':
                errors.cpassword=regForPass.test(value)?'':'Confirm Your Password';
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
                alert("Registerd Successfully, Go back to Login Page!");
                this.add()
                localStorage.clear();
                window.location.reload();
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
        axios.post(URL, {
            fname: this.state.fname, 
            lname:this.state.lname,
            username:this.state.username,
            email:this.state.email,
            password: this.state.password,
            // course:localStorage.getItem("sub")
            })
            .catch(err => { console.log(err) })  
    }
    
    render() {
        const {errors}=this.state;
        // var courseName=localStorage.getItem("sub")
        return (
            <Container className="bg-dark text-warning mt-4 pt-4">
                 <h2 className="text-center text-warning " style={{fontFamily:"cursive"}}>Registration Page</h2>
                 <br/><br/>
            <Row className="justify-content-md-center">
            <Col md="4">

            Name:
            <Form.Control name="fname" onChange={this.handle} placeholder="First name" style={{width:"500px",marginLeft:"110px",marginTop:"-30px"}} />
            {errors.fname.length>0 && <span className="text-danger">{errors.fname}</span>}<br/>
            <br/>

            Last Name:
            <Form.Control name="lname" onChange={this.handle} placeholder="Last name" style={{width:"500px",marginLeft:"110px",marginTop:"-30px"}}/>
            {errors.lname.length>0 && <span className="text-danger">{errors.lname}</span>}<br/>
            <br/>

            Username:
            <FormControl
                placeholder="Any username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={this.handle}
                name="username"
                style={{width:"500px",marginLeft:"110px",marginTop:"-30px"}}
            />{errors.username.length>0 && <span className="text-danger">{errors.username}</span>}<br/>
            <br/>

            Email:
            <FormControl
                placeholder="Your Email id"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={this.handle}
                name="email"
                style={{width:"500px",marginLeft:"110px",marginTop:"-30px"}}
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
                style={{width:"500px",marginLeft:"110px",marginTop:"-30px"}}
            />{errors.password.length>0 && <span className="text-danger">{errors.password}</span>}<br/>
            <br/>

            Confirm Pass:
            <Form.Control type="password" name="cpassword" onChange={this.handle} placeholder="Confirm Password" style={{width:"500px",marginLeft:"110px",marginTop:"-30px"}}/>
            {errors.cpassword.length>0 && <span className="text-danger">{errors.cpassword}</span>}<br/>
            
            <i class="far fa-user"></i> <NavLink className="text-warning ml-1" to="/login">Already Registered?</NavLink><br/>
            <Button variant="outline-warning" className="mt-3 mb-3" style={{marginLeft:"260px"}} onClick={this.formSubmit}>Register</Button>
            </Col>
            <Col xs lg="2">
            </Col>
            </Row>
            <div className="mb-4 pb-4"></div>
            </Container>
        )
    }
}

export default Login
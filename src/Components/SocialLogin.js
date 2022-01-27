import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Routes,Switch,NavLink} from 'react-router-dom';
import SocialButton from "../Components/SocialButton";
export default function SocialLogin() {
const [data,setData]=useState('')

    const handleSocialLogin = (user) => {
        console.log(user);
        setData(user._profile)
        alert("redirecting to Home Page");
        
      };
      
      const handleSocialLoginFailure = (err) => {
        console.error(err);
      };
    return (
        <div className="text-center">
            {/* <h2>Social Login</h2> */}
            <SocialButton
                variant="outline-warning"
                provider="facebook"
                appId="583890546203529"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
                className="mt-5 ml-5"
                >
                SignUp with Facebook <i class="fab fa-facebook"></i>
            </SocialButton>
            <SocialButton
                variant="outline-warning"
                provider="google"
                appId="353670636648-qn2np1nu9rgs14u385letj90p8gnput2.apps.googleusercontent.com"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
                className="mt-5 ml-5"
                >
                SignUp with Gmail <i class="fas fa-envelope-open-text"></i> 
            </SocialButton>
            <br/>

            {/* name:<h3>{data.name}</h3>
            email:<h3>{data.email}</h3>
            id:<h3>{data.id}</h3>
            provider:<h3>{data.provider}</h3> */}
        </div>
    )
}

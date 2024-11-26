import React from "react";
import './login.css';
import { FaUserAlt,FaLock } from "react-icons/fa";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebaseconf';

const LoginForm = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log(userCredential.user.email);
                const username = userCredential.user.email
                if (username === 'smnaik1109@gmail.com') {
                    Navigate('/admin');
                  } else {
                    Navigate(`/user?email=${username}`);
                  }               
            })
            .catch(error => {
                console.error('Error:', error.message);
                alert("Invalid Credentials");  
            });
    };
    const [isMouseOver , setMouseOver]=useState(false);

    function OnMouseOver(){
        setMouseOver(true);
    }
    function OnMouseOut() {
        setMouseOver(false);
    }

    function changeTextColor(input) {
        input.style.color = "black";
    }

    return ( <div className="wrapper"> 
    <form className="auth-fields-and-buttons" id="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box" >
         <input type="text" placeholder="Username" id="email-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
         <FaUserAlt  className="icon"/>
        </div>

        <div className="input-box">
         <input type="password" placeholder="Password" oninput="changeTextColor(this)" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
         <FaLock className="icon"/>
        </div>
        {/* <div className="remember-frogot">
            <label> 
                <input type="checkbox" />Remember me</label>
                <a href="#">forgot password?</a>
        </div> */}
        <button type="submit" id="butt" 
        onMouseOver={OnMouseOver} style={{backgroundColor:(isMouseOver)?"#2ec4b6":"white"}}
        onMouseOut={OnMouseOut}
        >Login</button>
        {/* <div className="register">
            <p>Dont have an account?<a href="#">Register</a></p>
        </div> */}
        </form>
        </div> );
}


export default LoginForm;
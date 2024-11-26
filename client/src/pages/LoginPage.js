import React from 'react'
import {useEffect, useState} from 'react';
import app from '../firebaseconf';
import LoginForm from './components/Login/Login.js';
import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';
import Services from './components/Services/Services.js';
import Footer from './components/Footer/Footer.js';


function Login() {
    //const [backendData, setBackendData] = useState([{}]);      

    return (<div>
        <Navbar/>
        <main>
          <div id="home"className='Log' >
            <LoginForm/>
          </div>
          <div id="about"  className='About'>
             <About/> 
          </div>
          <div id="services" className='services'>
            <Services/>
          </div>
         </main>
        <div className='contact' id='contact'>
        <Footer/>
        </div>
      </div>)
    };


export default Login


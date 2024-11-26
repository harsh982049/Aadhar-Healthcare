import React from "react";
import {Link} from "react-scroll";
import imageName from '../../components/images/logo.png';
import './navbar.css';
const Navbar = () =>{
    return (
   <div className="fixed w-full z-10 text-white ">
     <div>
        <div className = " flex flex-row justify-between p-5 md:px-32 px-5  bg-backgColor  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
             <div className="flex flex-row  items-center cursor-pointer">
                  <Link to='home' spy={true} smooth={true} duration={500}>
                  <p className="Image">
                     <img src={imageName} alt="logo"/>
                     <h1 className="text-2xl font-semibold text-logoColor">AadharHealth</h1>
                  </p>
                  </Link>
             </div>
             <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8 mar">
                <Link to='home' spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" >Home</Link>
                <Link to='about' spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all  cursor-pointer" >About</Link>
                <Link to='services' spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all  cursor-pointer" >Services</Link>
             </nav>
             <div className="hidden lg:flex">
                <Link to='contact' spy={true} smooth={true} duration={500} className="bg-contactColor font-semibold text-white px-4 py-2 rounded-md transition-all hover:text-black buto cursor-pointer ">
                 <button>
                 Contact Us
                 </button>
                </Link>
             </div>
        </div>
     </div>
   </div>
    )
}

export default Navbar;
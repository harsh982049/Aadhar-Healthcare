import React from "react";
// import './App.css';
// import './footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="foot">
                <div className="hidden lg:flex">
                    <p className="text-contactColor font-semibold  px-4 py-2 rounded-md  fubuto " style={{ fontSize: '2rem' }}>
                        Contact
                    </p>
                </div>
                <div className="address">
                    <p>201-kantakunj,Munshi nagar,Behind Sony Mony,Andheri West,Mumbai,Maharashtra,India</p>
                </div>
                <div className="mail-Id">
                    <h3>AadharhealthCare@gmail.com</h3>
                </div>
                
                <div className="pp">
                   
                   
                  <p className="text-white ">-----------------------------------------------------------------------------------------------------------------------------------------------</p>
                   
                  </div>
                    <div className="footicon" >
                    <ul>
                        <li>
                            <a className="facebook" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className="fa fab  fa-facebook" aria-hidden="true"><FaFacebookF/></i>
                            </a>
                        </li>
                        <li>
                            <a className="twitter" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className="fa  fab fa-twitter" aria-hidden="true"><FaTwitter/></i>
                            </a>
                        </li>
                        <li>
                            <a className="instagram" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className="fa  fab  fa-instagram" aria-hidden="true"><FaInstagram/></i>
                            </a>
                        </li>
                        <li>
                            <a className="google" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className="fa fa-google-plus" aria-hidden="true"><FaGooglePlusG/></i>
                            </a>
                        </li>
                    </ul>
                
                </div>
            </div>
        </div>
            
    );
}

export default Footer;
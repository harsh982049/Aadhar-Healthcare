import React from "react";
import AboutImage from "../../components/images/medical-banner-with-stethoscope.jpg";
import './about.css';
const About=()=>{
    return( 
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-15 big-box">
        <div className="w-full lg:w-3/4 space-y-4 about-box text-contactColor">
          <h1 className="text-4xl font-semibold text-center lg:text-start about-head">About Us</h1>
          <p className="text-justify lg:text-start para">Our medical data retrieval system is a comprehensive solution designed to streamline the process of accessing vital healthcare information. With a focus on efficiency and accuracy, our platform empowers healthcare professionals to retrieve patient data swiftly and securely, ensuring timely decision-making and quality patient care.</p>
          <p className="text-justify lg:text-start para">At the heart of our platform is a commitment to improving healthcare outcomes through enhanced data accessibility and interoperability. We understand the challenges faced by healthcare providers in navigating complex data landscapes, and our system is tailored to address these challenges head-on. By facilitating the exchange of information across healthcare settings and ensuring data integrity and privacy</p>
        </div>
        <div className="w-full lg:w-3/4">
        <img src={AboutImage} className="rounded-lg iimg" />
        </div>
    </div> );
}

export default About;
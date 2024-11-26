import React from "react";
import ServiceCard from "./ServiceCard";
import { FaLock } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { FcServices } from "react-icons/fc";

const Services = () =>{
    
     const icon1=<FaLock size={35} className="text-backgroundColor"/>
     const icon2=<FcServices size={35} className="text-backgroundColor"/>
     const icon3=<MdMedicalServices size={35} className="text-backgroundColor"/>

 return(
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
        <div className="flex flex-col item-center lg:flex-row justify-between">
            <div>
                <h1 className="text-4xl font-semibold text-center ser lg:text-start">Our Services</h1>
                <p className="mt-2 text-center lg:text-start">Here are the key services we stive to provide</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-14">
            <ServiceCard icon={icon1} title="Security" paragraph="Our Website ensures high level security to ensure that the highly sensitive medical data is not compromised upon" />
            <ServiceCard icon={icon2} title="User Control" paragraph="User has full control over the data that he/she wishes to reveal to othe health organisations" />
            <ServiceCard icon={icon3} title="Life Saving" paragraph="Authorised health organisations with valid credentials can access the critical health data essential in emergency situations with the help of the aadhar number" />
        </div>
    </div>
 )
}

export default Services;
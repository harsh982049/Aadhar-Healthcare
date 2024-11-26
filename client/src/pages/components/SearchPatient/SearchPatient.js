import React from "react";
import './SearchPatient.css';
import { FaUserAlt,FaLock } from "react-icons/fa";
import {useState} from "react";
import { HiIdentification } from "react-icons/hi2";
import ReactDOM from "react-dom";


const SearchPatient = ()=> {

    const [aadharNumber, setAadharNumber] = useState('');
    const [backendData, setBackendData] = useState(null); 

    const handleFindPatient = (event) => {
        event.preventDefault();
        if (!aadharNumber) {
            alert('Please enter Aadhar number');
            return;
        }
        const requestBody = {
            aadharNumber: aadharNumber
        };
        fetch('/searchPatient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setBackendData(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    };

    if(backendData){
        const resultContainer = document.getElementById('result-container');
        const aadharInput = document.getElementById('input');
        const btn = document.getElementById('btn-container');
        const header = document.getElementById('header');
        //console.log(aadharInput);
        aadharInput.style.display = "none";
        btn.style.display = "none";
        header.style.display = "none";
        resultContainer.innerHTML = '';
        //console.log(backendData);
        for (const [key, value] of Object.entries(backendData)) {
            // Check if the value is not null or undefined
            if (value !== null && value !== undefined) {
                // Create a new paragraph element for each property
                const paragraph = document.createElement('div');
                //console.log(key);
                paragraph.setAttribute('id', 'final');
                if(key=='Pid')
                {
                    const Heading = document.createElement('h3');
                    Heading.textContent = "Personal Details: ";
                    const part1 = document.createElement('div');
                    const part2 = document.createElement('div');
                    ReactDOM.render(<HiIdentification pid={value} />, part1);
                    part2.textContent = ` : ${value}`;
                    paragraph.appendChild(part1);
                    paragraph.appendChild(part2);
                    resultContainer.appendChild(Heading);
                    resultContainer.appendChild(paragraph);
                }
                else if(key=='BillingAmount' || key == 'AgeFlag' || key == 'BloodGroupFlag' || key == 'GenderFlag'){
                
                }
                else if(key == 'Hospitalflag'){
                    if(value == false) {
                        //console.log(value + "Logged here");
                        break; 
                    }    
                }
                else if(key=='Hospital'){
                    const Heading = document.createElement('h3');
                    paragraph.textContent = `${key}: ${value}`;
                    Heading.textContent = "Hospitalisation Details: ";
                    resultContainer.appendChild(Heading);
                    resultContainer.appendChild(paragraph);

                }
                else{
                    if(key == 'DateOfBirth' && !backendData.AgeFlag){}
                    else if(key == 'BloodGroup' && !backendData.BloodGroupFlag){}
                    else if(key == 'Gender' && !backendData.GenderFlag){}
                    else if(key == 'DateOfBirth'){
                        let text = value.toString();
                        paragraph.textContent = `${key}: ${text.substring(0, 9)}`;
                        resultContainer.appendChild(paragraph);
                    }                        
                    else{
                        paragraph.textContent = `${key}: ${value}`;
                        resultContainer.appendChild(paragraph);
                    }
                }
                
            }
        }
    }
    
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
    <form className="auth-fields-and-buttons" id="login-form" onSubmit={handleFindPatient}>
        <div id="header">
            <h1>Search Patient</h1>
        </div>
        <div className="input-box" id="input">
         <input type="text" placeholder="Aadhar-Number" id="aadharNumber-input" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} required />
         <FaUserAlt  className="icon"/>
        </div>
        <div id="btn-container">
            <button type="submit" id="butt" 
            onMouseOver={OnMouseOver} style={{backgroundColor:(isMouseOver)?"#2ec4b6":"white"}}
            onMouseOut={OnMouseOut}
            >Search</button>
        </div>
        </form>
        <div id="result-container">

        </div>
        </div> );
}


export default SearchPatient;
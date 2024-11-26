import React from 'react'
import Navbar2 from './components/Navbar2/Navbar2';
import Footer from './components/Footer/Footer';
import { useState,useEffect } from 'react';
import ReactDOM from "react-dom";
import { HiIdentification } from "react-icons/hi2";



function User() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [backendData, setBackendData] = useState(null); 
  const params = new URLSearchParams(window.location.search);
  let arr = [false, false, false, false];

  useEffect(() => {
    const email = params.get('email');
    //console.log("Email logged here" + email);
    const getUser = async () => {
      try {
        const checkRoleResponse = await fetch('/searchRole', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
        });
        if (!checkRoleResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const aadharResponse = await checkRoleResponse.json();
        const pid = aadharResponse.Pid;
        //console.log("pid from searchRole:" + pid);
        const userResponse = await fetch('/searchUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ aadharNumber: pid })
        });
        if (!userResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await userResponse.json();
        setBackendData(userData);
        //console.log(userData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    getUser(); 
  }, []); 
  
  if(backendData){
    const resultContainer = document.getElementById('result-container');
    let hospitalDone = false;
    resultContainer.innerHTML = '';
    //console.log(backendData);
    for (const [key, value] of Object.entries(backendData)) {
        if (value !== null && value !== undefined) {
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
            else if(key=='BillingAmount' || key == 'AgeFlag' || key == 'BloodGroupFlag' || key == 'GenderFlag' || key == 'Hospitalflag'){
                
            }
            else if(key=='Hospital'){
                const Heading = document.createElement('h3');
                paragraph.textContent = `${key}: ${value}`;
                Heading.textContent = "Hospitalisation Details: ";
                const label = document.createElement('label');
                label.className = 'switch';
                const input = document.createElement('input');
                input.type = 'checkbox';
                const span = document.createElement('span');
                span.className = 'slider round';
                label.appendChild(input);
                label.appendChild(span);
                Heading.appendChild(label);
                resultContainer.appendChild(Heading);
                resultContainer.appendChild(paragraph);
                hospitalDone = true;
                if(backendData.Hospitalflag){
                  input.checked = true;
                  arr[3] = true;
                }

            }
            else if(key == 'DateOfBirth'){
              let text = value.toString();
              paragraph.textContent = `${key}: ${text.substring(0, 9)}`;
              resultContainer.appendChild(paragraph);
              const label = document.createElement('label');
              label.className = 'switch ml-2';
              const input = document.createElement('input');
              input.type = 'checkbox';
              const span = document.createElement('span');
              span.className = 'slider round';
              label.appendChild(input);
              label.appendChild(span);
              paragraph.appendChild(label);
              if(backendData.AgeFlag){
                input.checked = true;
                arr[0] = true;
              }
            }
            else{
                paragraph.textContent = `${key}: ${value}`;
                resultContainer.appendChild(paragraph);
                
                if(key == 'Name' || hospitalDone){
                }   
                else{
                  const label = document.createElement('label');
                  label.className = 'switch ml-2';
                  const input = document.createElement('input');
                  input.type = 'checkbox';
                  const span = document.createElement('span');
                  span.className = 'slider round';
                  label.appendChild(input);
                  label.appendChild(span);
                  paragraph.appendChild(label);
                  if(key == 'Gender' && backendData.GenderFlag){
                    input.checked = true;
                    arr[1] = true;
                  }
                  if(key == 'BloodGroup' && backendData.BloodGroupFlag){
                    input.checked = true;
                    arr[2] = true;
                  }
                }
            }            
        }
    }
}

//const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// let arr1 = [false, false, false, false];
const updatePrefs = (event) => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkedStatus = [];

  checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
          checkedStatus[index] = true;
      } else {
          checkedStatus[index] = false;
      }
  });

  //console.log(checkedStatus);

  alert("Preferences Have Been Updated!");
  event.preventDefault();
  //console.log("aadharNumber is: "+backendData.Pid);
  const requestBody = {
    aadharNumber: backendData.Pid,
    DateofBirth: checkedStatus[0],
    Gender: checkedStatus[1],
    BloodGroup: checkedStatus[2],
    Hospital: checkedStatus[3]
  };
  fetch('/updatePrefs', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
  })
}

  return (
    <div>
            <Navbar2/>
            <main className=''>
            <div id="home"className='Log '>
                <div className='wrapper mt-16'>
                  <div id="result-container">
                  </div>
                  <div className=' mt-4'>
                    <btn className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded " onClick={updatePrefs}>
                        UPDATE
                    </btn>
                  </div>
                </div>                
            </div>
            </main>
            <div className='contact' id='contact'>
                <Footer />
            </div>
        </div>
  )
}

export default User;
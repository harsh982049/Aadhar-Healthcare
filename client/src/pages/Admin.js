import React, { useState, useEffect } from 'react';
import SearchPatient from './components/SearchPatient/SearchPatient';
import Footer from './components/Footer/Footer';
import Navbar2 from './components/Navbar2/Navbar2';

function Admin() {
    // const [aadharNumber, setAadharNumber] = useState('');
    // const [backendData, setBackendData] = useState(null); 

    // const handleFindPatient = () => {
    //     if (!aadharNumber) {
    //         alert('Please enter Aadhar number');
    //         return;
    //     }
    //     const requestBody = {
    //         aadharNumber: aadharNumber
    //     };
    //     fetch('/searchPatient', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(requestBody)
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setBackendData(data);
    //             //console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Fetch error:', error);
    //         });
    // };

    // if(backendData){
    //     //console.log(backendData.Name);
    // }

    return (
        <div>
            <Navbar2/>
            <main>
            <div id="home"className='Log' >
                <SearchPatient/>
            </div>
            <div id="home"className='Log' >
                
            </div>
            </main>
            <div className='contact' id='contact'>
                <Footer />
            </div>
        </div>
    );
}

export default Admin;

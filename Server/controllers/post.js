const pool = require('../config/sqlCon');

async function getpatient(Pid){
    const res = await pool.query(`SELECT * FROM userdata JOIN hospitalisationdata ON userdata.Pid= hospitalisationdata.Pid WHERE userdata.Pid = ?`, [Pid]);
    return res;
}

const findpatient = async (req, res) => { 
    try {
        const aadharNumber = req.body.aadharNumber;
        const patient = await getpatient(aadharNumber); 
        res.json(patient[0][0]); 
    } catch (error) {
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

async function getuser(Pid){
    const res = await pool.query(`SELECT * FROM userdata JOIN hospitalisationdata ON userdata.Pid= hospitalisationdata.Pid WHERE userdata.Pid = ?`, [Pid]);
    return res;
}

const finduser = async (req, res) => { 
    try {
        //console.log("Hua hai call");
        const aadharNumber = req.body.aadharNumber;
        const patient = await getuser(aadharNumber);
        //console.log(patient[1][0][0]); 
        const patientdata = patient[0][0];
        res.json(patientdata); 
    } catch (error) {
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

async function getrole(email){
    const res = await pool.query(`SELECT Pid FROM roles WHERE emailID = ? `, String(email) ); //!COMPLETE QUERY
    return res;
}

const checkrole = async (req, res) => {
    try{
        const email = req.body.email;
        const role = await getrole(email);
        res.json(role[0][0]);
    } catch(error){
        console.error('Error searching for patient:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}
const updateprefs = async (req, res) => {
    try {
        const aadharNumber = req.body.aadharNumber;
        const DateofBirth = req.body.DateofBirth;
        const Gender = req.body.Gender;
        const BloodGroup = req.body.BloodGroup;
        const Hospital = req.body.Hospital;
        //console.log("Aadhar Number is "+aadharNumber);
        const sql = `
            UPDATE userdata 
            SET AgeFlag = ?, GenderFlag = ?, BloodGroupFlag = ?, Hospitalflag = ? 
            WHERE Pid = ?
        `;
        const values = [DateofBirth, Gender, BloodGroup, Hospital, aadharNumber];
        const result = await pool.query(sql, values);
        //console.log(Query)
        //console.log(result);
        res.status(200).send("Preferences updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}



module.exports = {
    findpatient,
    checkrole,
    finduser,
    updateprefs
  };

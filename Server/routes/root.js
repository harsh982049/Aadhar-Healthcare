const express = require('express');
const router = express.Router();
const path = require('path');
const {findpatient, checkrole, finduser, updateprefs} = require('../controllers/post');
const verifyToken = require('../middleware/verifyToken');

router.get('/validateIdToken', verifyToken, (req, res) => {
    res.status(200).send('Valid ID token');
});


router.post('/generateIdToken', (req, res) => {
    const { userCredential } = req.body;
    console.log(userCredential);
    userCredential.getIdToken()
        .then(userId => {
            res.json(userId);
        })
        .catch(error => {
            console.error('Error generating ID token:', error);
            res.status(500).json({ error: 'Failed to generate ID token' });
        });
});


router.post('/searchPatient',  findpatient);

router.post('/searchRole', checkrole);

router.post('/searchUser', finduser);

router.post('/updatePrefs', updateprefs);

module.exports = router;
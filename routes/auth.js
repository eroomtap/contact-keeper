const express = require('express');

const router = express.Router();

//@route GET api/auth
//@desc Get logged in users
//@access Private

router.post('/', (req,res) =>{
	res.send('Register a user');
});

//@route POST api/auth
//@desc authorize users
//@access Public

router.post('/', (req,res) =>{
	res.send('Register a user');
});

module.exports = router;

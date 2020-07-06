const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth.js')
const { check, validationResult } = require('express-validator');
const User = require('../models/Users.js');

//@route GET api/auth
//@desc Get logged in users
//@access Private

router.get('/', auth, async (req,res) =>{
	try{
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch(err){
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//@route POST api/auth
//@desc authorize users
//@access Public

router.post('/', [
	check('email','Please include a valid email').isEmail(),
	check('password','Please include a valid password').exists()
	], 
	async (req,res) =>{
		const error=validationResult(req);
		if(!error.isEmpty()){
			return res.status(400).json({error:error.array()});
		}

		const { email, password } = req.body;

		try{
			let user = await User.findOne({ email });

			if(!user) {
				return res.status(400).json({ msg: 'Invalid username or password'});
			}
			const isMatch = await bcrypt.compare(password, user.password);

			if(!isMatch){
				return res.status(400).json({ msg: 'Invalid username or password'});
			} 

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn:36000
				},
				(err,token) => {
					if(err) throw err;
					res.json({ token });
				}
			);

		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;

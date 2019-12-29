const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const User = require('../models/users');
const auth = require('../../controllers/auth');

const router = new express.Router();

router.post('/users/login', async (req, res) =>{
    let email = req.body.email;
    let password = req.body.password;

    let user = await User.findOne({email: email});

    if(user){
        let compareResult = await bcrypt.compare(password, user.password);

        if(compareResult){
            let token = auth.generateToken(user);
            res.cookie('auth_token', token);
            res.send({
                redirectURL:'/admin'
            });
        }
        else{
            res.status(400);
            res.send('rejected')
        }
    }else{
        res.status(400)
        res.send('rejected')
    }
})


router.post('/users/register', async (req, resp) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({email: email});
    if(!user) {
        let encryptedHash = await bcrypt.hash(password, 8);
        let newUser = new User({
            email: email,
            password: encryptedHash
        })
        await newUser.save();
        resp.send('Done');
    } else {
        resp.send('Rejected');
    }
})

module.exports = router;
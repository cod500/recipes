const express = require('express');
const mongoose = require('mongoose');
const Emails = require('../models/emails');
const middlewareAuth = require('../../middleware/auth');
const uniqid = require('uniqid');


const router = new express.Router();

router.get('/emails', middlewareAuth, async (req, res) =>{
   const email = await Emails.find({})
   res.send(email)
})

router.post('/emails', (req, res) =>{
    const email = new Emails({
        id: uniqid(),
        email: req.body.email,
        name: req.body.name,
        text: req.body.text,

    })

    email.save()
    res.send('Email saved')
})

router.delete('/emails/:id', middlewareAuth, async (req, res) =>{
    await Emails.deleteOne({id: req.params.id})
    res.send('Deleted')
})

module.exports = router;
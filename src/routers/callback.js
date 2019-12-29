const Callback = require('../models/callback');
const middlewareAuth = require('../../middleware/auth');
const express = require('express');
const mongoose = require('mongoose');
const uniqid = require('uniqid');
const path = require('path');


const router = new express.Router()

router.use(express.json())

router.get('/callback', async (req, res) =>{
    res.send(await Callback.find({}));

})

router.post('/callback', middlewareAuth, async (req, res) =>{
    let reqBody = req.body;
    const callback = new Callback({
        id: uniqid(),
        phoneNumber: reqBody.phoneNumber,
    })

    await callback.save()
    res.send('Callback complete')
})

router.delete('/callback/:id', middlewareAuth, async (req, res) =>{
    const id = req.params.id;

    await Callback.deleteOne({id: id});
    res.send('Deleted')

})

// const callback = new Callback({
//     id: uniqid(),
//     phoneNumber: 8503373922,
// })

// // callback.save()
// console.log(callback)

// console.log('Click me')

module.exports = router
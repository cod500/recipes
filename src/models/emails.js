const express = require('express');
const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    id:{
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Emails = new mongoose.model('Email', emailSchema)
module.exports = Emails;
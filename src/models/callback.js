const express = require('express');
const mongoose = require('mongoose');
const uniqid = require('uniqid')

const callbackSchema = new mongoose.Schema({
    id: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Callback = new mongoose.model('Callback', callbackSchema)

module.exports = Callback;
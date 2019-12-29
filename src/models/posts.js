const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id:{
        type: String
    },
    title:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    text: {
        type: String
    },
    details:{
        type: String
    },
    country: {
        type: String
    },
    imageURL:{
        type: String
    }
})

const Post = new mongoose.model('Post', postSchema)

module.exports = Post
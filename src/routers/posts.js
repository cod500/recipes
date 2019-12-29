const express = require('express');
const mongoose = require('mongoose');
const uniqid = require('uniqid');
const Post = require('../models/posts');
const middlewareAuth = require('../../middleware/auth');

const router = new express.Router();

// var imageStorage = multer.diskStorage({
//     destination: function (req, file, cb){
//         cb(null, 'public/images')
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname)
//     }
// })


// router.use(multer({storage: imageStorage}).single('imageFile'));

router.get('/posts', async (req, res) =>{
    const posts =  await Post.find({})
     res.send(posts)
 })

 router.get('/posts/:id', async (req, res) =>{
    const post =  await Post.findOne({id: req.params.id})
     res.send(post)
 })

 router.post('/posts', middlewareAuth, async (req, res) =>{
    let reqBody = req.body;
    let imgPath;
    if(reqBody.imageURL) {
        imgPath = reqBody.imageURL;
    } else {
        imgPath = req.file.path.substring(req.file.path.indexOf('/'), req.file.path.length);
    }
    // let imgPath;

    // if(req.body.imageURL){
    //     imgPath = req.body.imageURL
    // }
    // else imgPath = req.file.path.substring(req.file.path.indexOf(path.sep), req.file.path.length)

    const post = new Post({
        id: uniqid(),
        title: req.body.title,
        description: req.body.description,
        text: req.body.text,
        details: req.body.details,
        country: req.body.country,
        imageURL: imgPath
    })

    await post.save()
    
    res.send(post)
 })

router.put('/posts/:id', middlewareAuth,async (req, resp) => {
    let id = req.params.id;
    await Post.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

 router.delete('/posts/:id', middlewareAuth, async (req, res) =>{
     try{
        const post = await Post.deleteOne({id: req.params.id});
        if(!post){
            return res.send('no user found')
        }
        post.save()
        res.send('Post deleted')
     }
     catch(e){
         res.send('Wha the hell')
     }
    
 })

 module.exports = router
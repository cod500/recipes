const express = require('express');
const multer = require('multer');
let cookieParser = require('cookie-parser');
const postRouter = require('./routers/posts');
const callbackRouter = require('./routers/callback');
const emailsRouter = require('./routers/emails');
const userRouter = require('./routers/users')
const uniqid = require('uniqid');
const path = require('path');
const Emails = require('./models/emails');
const User = require('./models/users')
const Post = require('./models/posts');
const auth = require('../controllers/auth')
require('../src/db/mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

app.use(multer({storage: imageStorage}).single('imageFile'));
app.use(express.static('public'));
app.use(cookieParser());;

app.use(postRouter);
app.use(callbackRouter);
app.use(emailsRouter);
app.use(userRouter);



app.get('/site', async (req, res) =>{
        let id = req.query.id;
        const post = await Post.findOne({id: id})
        res.render('site', {
            title: post.title,
            imageURL: post.imageURL,
            date: post.date,
            text: post.text
        })
})


app.get('/admin', (req, res) =>{
    let token = req.cookies['auth_token']
    if(token && auth.checkToken(token)){
        res.render('admin')
    }else{
        res.redirect('/login')
    }
    
})

app.get('/login', (req, res) =>{
    res.render('login')
})

//config port for local or deployment
const port = process.env.PORT || 4000
//set up server
app.listen(port, () =>{
    console.log(`listening on ${port}`)
})
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://degall84:1234@cluster1-koink.mongodb.net/recipe',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() =>{
    console.log('mongoDB connected...')
}).catch((e) =>{
    console.log(e)
})

// mongodb://localhost/travels-dev
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/Author",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=> console.log("connected tto the Database"))
    .catch(err => console.log("Something Wrong!" , err));
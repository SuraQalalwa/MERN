const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost/Team",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("Connected to the database"))
.catch(err=>console.log("Something went Wrong!", err));
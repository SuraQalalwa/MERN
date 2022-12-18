const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const ManagerSchema = new mongoose.Schema({
    title: {type: String,required: true},
    price: {type: Number,required: true},
    description:{type: String,required: true},
    },
    {timestamps:true},
    )
    module.exports.Manager = mongoose.model("Manager", ManagerSchema);
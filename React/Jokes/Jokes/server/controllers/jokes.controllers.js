const Jokes = require('../models/jokes.models');

module.exports.findAlljokes=(req,res)=>{
    Jokes.find()
        .then((allJokes)=>res.json({jokes: allJokes}))
        .catch((err)=> res.json({message: "Somthing went wrong", error:err}));
};

module.exports.createJokes=(req,res)=>{
    Jokes.create(req.body)
        .then(newJokes=> res.json({joke: newJokes}))
        .catch((err)=> res.json({message: "Something went wrong", error:err}))
};

module.exports.updateJoke=(req,res)=>{
    Jokes.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true, runValidators: true}
        .then(updateJoke=>res.json({joke:updateJoke}))
        .catch(err=>res.json({message: "Somthing went wrong",error:err}))
    )};

module.exports.deletejoke=(req,res)=>{
    Jokes.findOneAndRemove({_id:req.params.id})
        .then(result=>res.json({result: result}))
        .catch(err=>res.json({message: "Somthing went wrong", error:err}))
};
module.exports.getjoke=(req,res)=>{
    Jokes.findOne({_id:req.params.id})
        .then((joke)=>res.json({joke: joke}))
        .catch(err=>res.json({message: "Somthing went wrong", error:err}))
    };


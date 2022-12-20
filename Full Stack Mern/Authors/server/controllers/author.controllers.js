const {Author} = require('../models/author.models');

module.exports.createAuthor=(req, res)=>{
    const {name}= req.body;
    Author.create({
        name
    })
    .then(author=>res.json(author))
    .catch(err => res.status(400).json(err));
};

module.exports.getAllAuthors=(req,res)=>{
    Author.find({})
        .then(authors=> res.json(authors))
        .catch(err => res.json(err))
};

module.exports.getOneAuthor=(req,res)=>{
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
};

module.exports.updateAuthor=(req,res)=>{
    Author.findOneAndUpdate({_id:req.params.id},req.body, {new:true})
        .then(author => res.json(author))
        .catch(err => res.json(err))
};

module.exports.deleteAuthor=(req,res)=>{
    Author.deleteOne({_id:req.params.id})
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json(err))
};



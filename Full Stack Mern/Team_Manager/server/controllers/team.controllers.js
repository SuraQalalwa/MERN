const {Team} = require('../models/team.models')
module.exports.createTeam=(req, res)=>{
    const {playerName, position} = req.body;
    Team.create({
        playerName,
        position,  })
        .then(team => res.json(team))
        .catch(err => res.status(400).json(err));
};

module.exports.AllTeams=(req,res)=>{
    Team.find({})
        .then(teams => res.json(teams))
        .catch(err => res.json(err));
};

module.exports.getOneTeam = (req,res)=>{
    Team.findOne({_id: req.params.id})
        .then(team => res.json(team))
        .catch(err => res.json(err));
};

module.exports.updateTeam=(req, res)=>{
    Team.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedTeam => res.json(updatedTeam))
        .catch(err=> res.json(err))
};

module.exports.deleteTeam=(req, res)=>{
    Team.deleteOne({_id: req.params.id})
        .then(deletedTeam => res.json(deletedTeam))
        .catch(err=> res.json(err))
}

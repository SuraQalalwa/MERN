const TeamController= require('../controllers/team.controllers');
module.exports = (app)=>{
    app.get('/', TeamController.AllTeams);
    app.get('/:id', TeamController.getOneTeam);
    app.post('/', TeamController.createTeam);
    app.delete('/:id', TeamController.deleteTeam)
    app.put('/:id', TeamController.updateTeam);
}
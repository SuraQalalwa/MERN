const JokesController = require('../controllers/jokes.controllers');

module.exports = app => {
    app.get("/api/jokes", JokesController.findAlljokes);
    app.get("/api/jokes/:id", JokesController.getjoke);
    app.put("/api/jokes/update/:id", JokesController.updateJoke);
    app.post("/api/jokes/new",JokesController.createJokes);
    app.delete("/api/jokes/delete/:id", JokesController.deletejoke)
}

    
    
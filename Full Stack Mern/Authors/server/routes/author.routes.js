const AuthorController = require('../controllers/author.controllers');
module.exports=(app)=>{
    app.post('/', AuthorController.createAuthor);
    app.get('/', AuthorController.getAllAuthors);
    app.get('/:id', AuthorController.getOneAuthor);
    app.put('/:id', AuthorController.updateAuthor);
    app.delete('/:id', AuthorController.deleteAuthor);

}
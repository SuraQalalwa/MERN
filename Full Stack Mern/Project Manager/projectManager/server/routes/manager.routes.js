const ManagerController = require('../controllers/manager.controllers');

module.exports = function (app) {
    app.get('/api', ManagerController.index);
    app.post('/api/new', ManagerController.creatManager);
    // app.use('/manager', ManagerController);
    // app.use('/manager/:id', ManagerController);
    // app.use('/manager/:id/edit', ManagerController);
    // app.use('/manager/:id/delete', ManagerController);
}
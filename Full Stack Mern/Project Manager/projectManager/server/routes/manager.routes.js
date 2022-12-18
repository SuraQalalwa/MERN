const ManagerController = require('../controllers/manager.controllers');

module.exports = function (app) {
    app.get('/api', ManagerController.index);
    app.post('/', ManagerController.creatManager);
    app.get('/', ManagerController.AllProductManager);
    app.get('/product/:id', ManagerController.getOneProduct);
    // app.use('/manager/:id/edit', ManagerController);
    // app.use('/manager/:id/delete', ManagerController);
}
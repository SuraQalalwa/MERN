const ManagerController = require('../controllers/manager.controllers');

module.exports = function (app) {
    app.get('/api', ManagerController.index);
    app.post('/', ManagerController.creatManager);
    app.get('/', ManagerController.AllProductManager);
    app.get('/product/:id', ManagerController.getOneProduct);
    app.put('/product/:id', ManagerController.updateProduct);
    app.delete('/product/:id', ManagerController.deleteProduct);
}
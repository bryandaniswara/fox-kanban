const routes = require('express').Router();
const authtentification = require('../middleware/authentification');
const TaskController = require('../controllers/TaskController');

routes.use(authtentification);

routes.get('/', TaskController.list);

routes.get('/task/add', TaskController.add);
routes.post('/task/create', TaskController.create);

routes.get('/task/detail/:id', TaskController.detail);

routes.get('/task/assign/:id', TaskController.assign);
routes.post('/task/assign/:id', TaskController.assignPost);

routes.get('/task/edit/:id', TaskController.edit);
routes.post('/task/update/:id', TaskController.update);

routes.get('/task/move/:id/:status', TaskController.move);

routes.get('/task/delete/:id', TaskController.delete);

module.exports = routes;
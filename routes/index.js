const routes = require('express').Router();
const TasksRoutes = require('./TasksRoutes');
const UserRoutes = require('./UserRoutes');
const userController = require('../controllers/UserController')
const TaskController = require('../controllers/TaskController')
const authentification = require('../middleware/authentification');
const authtentification = require('../middleware/authentification');

// register
routes.get('/register',userController.registerForm)
routes.post('/register',userController.registerPost)
routes.post('/verification',userController.verification)


// login
routes.get('/login',userController.loginForm)
routes.post('/login',userController.loginPost)

routes.use(authtentification)
// edit
routes.get('/setting/:id',userController.setting)
routes.post('/setting/:id',userController.settingPost)

//logout
routes.get('/logout',userController.logout)

routes.get('/task', TaskController.list);

routes.get('/task/add', TaskController.add);
routes.post('/task/create', TaskController.create);

routes.get('/task/assign/:id', TaskController.assign);
routes.post('/task/assign/:id', TaskController.assignPost);

routes.get('/task/edit/:id', TaskController.edit);
routes.post('/task/update/:id', TaskController.update);

routes.get('/task/move/:status/:id', TaskController.move);

routes.get('/task/delete/:id', TaskController.delete);


// routes.use('/', UserRoutes);
// routes.use('/', TasksRoutes);

module.exports = routes;
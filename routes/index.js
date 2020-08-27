const routes = require('express').Router();
const TasksRoutes = require('./TasksRoutes');
const UserRoutes = require('./UserRoutes');

routes.use('/', UserRoutes);
routes.use('/', TasksRoutes);

module.exports = routes;
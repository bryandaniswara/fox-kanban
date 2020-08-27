const routes = require('express').Router();
const TasksRoutes = require('./TasksRoutes');

routes.use('/', TasksRoutes);

module.exports = routes;
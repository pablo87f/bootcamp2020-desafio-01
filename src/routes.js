const { Router } = require('express');
const ProjectsController = require('./controllers/projects.controller')
const TasksController = require('./controllers/tasks.controller')
const Middlewares = require('./middlewares')

const routes = Router();

routes.get('/projects', ProjectsController.index)
routes.get('/projects/:id', Middlewares.checkProjectExists, ProjectsController.show)
routes.post('/projects', Middlewares.checkRequiredProjectFields, ProjectsController.store)
routes.put('/projects/:id', Middlewares.checkProjectExists, ProjectsController.update)
routes.delete('/projects/:id', Middlewares.checkProjectExists, ProjectsController.destroy)

routes.post('/projects/:id/tasks', Middlewares.checkProjectExists, TasksController.store)

module.exports = routes
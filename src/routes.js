const { Router } = require('express');
const ProjectsController = require('./controllers/projects.controller')
const TasksController = require('./controllers/tasks.controller')

const routes = Router();

routes.get('/projects', ProjectsController.index)
routes.get('/projects/:id', ProjectsController.show)
routes.post('/projects', ProjectsController.store)
routes.put('/projects/:id', ProjectsController.update)
routes.delete('/projects/:id', ProjectsController.destroy)

routes.get('/tasks', TasksController.index)
routes.get('/tasks/:id', TasksController.show)
routes.post('/tasks', TasksController.store)
routes.put('/tasks/:id', TasksController.update)
routes.delete('/tasks/:id', TasksController.destroy)

module.exports = routes
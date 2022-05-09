const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const PostController = require('./controllers/PostController')

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/posts', PostController.index)
routes.get('/posts/:id', PostController.show)
routes.post('/posts', PostController.create)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.delete)

module.exports = routes
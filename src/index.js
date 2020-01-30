const express = require('express');
const http = require('http')
const routes = require('./routes')
const Middlewares = require('./middlewares')

const app = express();
app.use(Middlewares.requestCounter)
const server = http.Server(app)


app.use(express.json());
app.use(routes);

server.listen(3000)

console.log('Server running into http://localhost:3000')


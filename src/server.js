'use strict';

const express = require('express');

const notFoundHandler = require('./handlers/404');
const serverErrorHandler = require('./handlers/500');
const logger = require('./middleware/logger');
const reqName = require('./middleware/validator');
const app = express();

app.use(express.json());
app.use(logger);

function start(PORT) {
    app.listen(PORT, ()=> console.log(`listening on ${PORT}`))
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', reqName('Nedal'), (req, res) => {
  res.json({
    message: 'route test',
    person: req.person,
  });
});

app.get('/person/:name', (req, res) => {
  console.log(req.params.name);
  res.json({
    name: req.params.name,
  });
});

app.get('/throwing-error', reqName(2), (req, res) => {
  res.send(`Result of squaring  ${req.person}`);
});

app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  app: app,
  start: start
};
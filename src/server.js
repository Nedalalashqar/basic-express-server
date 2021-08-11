'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./handlers/404');
const serverErrorHandler = require('./handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
app.use(logger);
app.use(express.json());

function start(PORT) {
    app.listen(PORT, ()=> console.log(`listening on ${PORT}`))
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/bad', (req,res)=> {
  let number = 5;
  number.forEach(i=> console.log(i));
  res.send('Bad Route ');
})

app.get('/person',validator, (req, res)=> {
  res.json({
     name: req.name,
  });
});

app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  app: app,
  start: start
};
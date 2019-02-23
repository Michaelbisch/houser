require('dotenv').config()
const massive = require('massive')
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('../server/controller');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
  
    console.log('Connected to database');
    app.listen(SERVER_PORT, () =>
      console.log(`Listening on port ${SERVER_PORT}`)
    );
  });


  app.get('/api/houses', ctrl.getAllHouses)

  app.post('/api/house', ctrl.addHouse)

  app.delete('/api/house/:id', ctrl.deleteHouse)
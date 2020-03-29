const crypto = require('crypto');
const express = require('express');
const NGOController = require('./controllers/NGOControllers');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');


const routes = express.Router();

routes.get('/ngo', NGOController.index);
routes.get('/incidents/?', IncidentController.index)

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);
routes.post('/ngo', NGOController.create);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

  module.exports = routes;
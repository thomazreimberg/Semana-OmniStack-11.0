const express = require('express');

const OngController = require('./constrollers/OngController');
const IncidentsController = require('./constrollers/IncidentController');
const ProfileController = require('./constrollers/ProfileController');
const SessionController = require('./constrollers/SessionController');
const RecoverIdController =  require('./constrollers/RecoverIdController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.put('./ongs', RecoverIdController.update);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;
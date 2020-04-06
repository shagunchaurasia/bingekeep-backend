const routes = require('express').Router();
const dialogFlowController = require('./../controllers/dialogFlowController');

routes.post('/df_text_query', dialogFlowController.dfTextQuery);

routes.post('df_event_query', dialogFlowController.dfEventQuery); 

module.exports = routes;
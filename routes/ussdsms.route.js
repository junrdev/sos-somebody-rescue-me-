const express = require('express');
const {
    helloWorld, recieveSms
} = require('../controllers/ussd.controller');

const Router = express.Router();


Router.post('/', helloWorld)
// Router.post('/sms', helloWorld)
    .post('/incoming-messages', recieveSms)

module.exports = Router;
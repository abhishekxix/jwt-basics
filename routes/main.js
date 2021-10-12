const express = require('express');
const { login, dashboard } = require('../controllers/main');
const mainRouter = express.Router();

mainRouter.route('/login').post(login);
mainRouter.route('/dashboard').get(dashboard);

module.exports = mainRouter;

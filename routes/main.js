const express = require('express');
const { login, dashboard } = require('../controllers/main');
const authenticationMiddleware = require('../middleware/auth');
const mainRouter = express.Router();

mainRouter.route('/login').post(login);
mainRouter.route('/dashboard').get(authenticationMiddleware, dashboard);

module.exports = mainRouter;

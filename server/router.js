const Router = require('express').Router();

Router.use('/auth',require('./api/auth/auth.router.js'));

module.exports = Router;

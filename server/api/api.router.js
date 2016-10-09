const Router = require('express').Router();

Router.use(require('cookie-parser')());

Router.use('/auth',require('./auth/auth.router'));
Router.use('/profile',require('./profile/profile.router'));

module.exports = Router;

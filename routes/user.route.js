var express = require('express');

var UserController= require('../controllers/user.controller');


var userRouter=express.Router();

userRouter.post('/register',UserController.register);

userRouter.post('/login',UserController.login);

userRouter.post('/forgotPassword', UserController.forgotPassword);

userRouter.post('/changePassword',UserController.changePassword);

module.exports= userRouter;
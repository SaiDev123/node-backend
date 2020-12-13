var express = require('express');

var UserController= require('../controllers/user.controller');


var userRouter=express.Router();

userRouter.post('/register',UserController.register);

module.exports= userRouter;
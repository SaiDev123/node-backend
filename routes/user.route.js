var express = require('express');

var UserController= require('../controllers/user.controller');

var userRouter=express.Router();

//http://localhost:9013/register

userRouter.post('/register',UserController.register);

////http://localhost:9013/login

userRouter.post('/login',UserController.login);

// http://localhost:9013/forgotPassword
userRouter.post('/forgotPassword', UserController.forgotPassword);

userRouter.post('/changePassword',UserController.changePassword);

module.exports= userRouter;

/*

Login:

API URL: http://localhost:9013/login


Request Method: POST 

Request Body: {
    "emailId": "",
     "password": "",
}

Response: token



Register:

API URL: http://localhost:9013/register


Request Body: {
    "emailId": "",
     "password": "",
      "username":""
}

Response: token

*/
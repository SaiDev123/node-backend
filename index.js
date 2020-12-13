var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

var userRoute=require('./routes/user.route');
var Config=require('./config/app-config');
var DBConnect=require('./config/db.config');

//creates an express application.
var app=express();

//middlewares
app.use(express.json());

//Connecting to DB
DBConnect.connectToDB();

//health-check
app.get('/healthcheck', (request,response) =>{
response.send("<h1>Application is up and running </h1>");
})

// routes configuration

app.use(userRoute);

//error handling middleware
app.use((error,request,response,next) => {
    response.send("something wrong! please try later");
})

app.listen(Config.PORT,() => {
    console.log("server started! on "+Config.PORT);
})


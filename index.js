var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

var userRoute=require('./routes/user.route');
var productRoute=require('./routes/product.route');
var Config=require('./config/app-config');
var DBConnect=require('./config/db.config');

//creates an express application.
var app=express();

//middlewares
app.use(express.json());
app.use(cors());

//Connecting to DB
DBConnect.connectToDB();

//health-check
app.get('/healthcheck', (request,response) =>{
response.send("<h1>Application is up and running </h1>");
})

// routes configuration

app.use(userRoute);
app.use(productRoute);

//error handling middleware
app.use((error,request,response,next) => {
    console.log(error);
    response.send("something wrong! please try later");
})

app.listen(Config.PORT,() => {
    console.log("server started! on "+Config.PORT);
})




//http://127.0.0.1:5500/5Jan2021/register.html
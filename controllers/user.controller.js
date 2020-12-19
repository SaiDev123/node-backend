var jwt= require('jsonwebtoken');

var UserModel= require('../models/user/user.model');
var Config= require('../config/app-config');
var EmailService = require('../services/EmailService');

exports.register=(req,res) =>{

    var user=req.body;

      var newUser=new UserModel(user);

      newUser.save((err,doc) =>{
          if(err){
             res.send({error:err.message});
          }
          if(doc){
            
                    var payload= {
                        subject: doc._id
                    }

                   let token=jwt.sign(payload,Config.JWT_SECRET_KEY);

                    if(token){

                        let options= {
                             to : user.emailId,
                             subject: "Thanks for registering with us",
                             text: "Thanks for registering with us",
                             html :`
                               
                                  <h1> Verify Your email </h1>
                             
                             `
                        }
                       EmailService.sendEmail(options);
                    }
              res.status(200).send({token:token});
          }
      })
}

exports.login= function(req,res) {

     var user=req.body;

     UserModel.findOne({emailId:user.emailId},(err,doc) => {

        console.log('doc',doc);
        console.log('error',err);
         if(err){
             res.send({error:err.message})
         }
         if(doc){

             if(doc.password === user.password){

            var payload= {
                subject: doc._id
            }

           let token=jwt.sign(payload,Config.JWT_SECRET_KEY);
            res.send({token:token});
        }
        else
        {
            res.status(401).send("password incorrect");
        }
    }
    else
    {
        res.send("emailid not registered!");
    }
     })
}


exports.forgotPassword= (req,res) => {

    var user=req.body;

    UserModel.findOne({emailId:user.emailId},(err,doc) => {

        console.log('doc',doc);
        console.log('error',err);
         if(err){
             res.send({error:err.message})
         }
         if(doc){
            let options= {
                to : user.emailId,
                subject: "Password Reset",
                text: "Password Reset",
                html :`
                     <h1><a href="abc.html"> Click on the Link</a></h1>
                      `
           }
          EmailService.sendEmail(options);
          res.send("A password reset link has been sent to your email");
         }
         else
         {
             res.send("email does not exist");
         }
     })
}

exports.changePassword=(req,res) =>{

    var user=req.body;

      UserModel.findOne({emailId:user.emailId}, (err,doc) => {
          if(err) {
             res.send({error:err.message})
          }
          if(doc){
             UserModel.updateOne({emailId:user.emailId}, {password:user.password},(err,raw) => {
                 console.log(err);
                 console.log(raw);
                 if(raw.nModified == 1){
                     res.send("password changed");
                 }
             })
          }
          else
          {
              res.send("invalid email");
          }
      })
}
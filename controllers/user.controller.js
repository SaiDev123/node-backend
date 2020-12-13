var UserModel= require('../models/user/user.model');

exports.register=(req,res) =>{

    var user=req.body;

      var newUser=new UserModel(user);

      newUser.save((err,doc) =>{
          if(err){
             res.send({error:err.message});
          }
          if(doc){
              res.status(200).send({"user":doc});
          }
      })
}


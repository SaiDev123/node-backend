var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var UserSchema= new Schema(
    {
       username: {
           type:String,
           unique:true,
           index:true,
           required:true
       },
       password: {
           type:String,
           required:true
       },
       emailId:{
           type:String,
           unique:true,
           required:true,
           index:true
       }
    }
);

module.exports=mongoose.model('user',UserSchema);
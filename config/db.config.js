var mongoose=require('mongoose');

var Config= require('./app-config');

exports.connectToDB=() =>{

mongoose.connect(Config.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true} ,(error) => {
    if(error){
        console.log(error);
    }
    else
    {
        console.log("connected to db");
    }
})
}

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var productSchema= new Schema(
    {
       pid: {
           type:Number,
           unique:true,
           index:true,
           required:true
       },
       name: {
           type:String,
           required:true
       },
       price:{
           type:Number,
           required:true,
           index:true
       },
       imgSrc: {
           type:String,
             required:true
       },
       description: {
           type:Object
       },
       color:{
           type:Array
       },
       category:{
           type:String
       },
       subCategory:{
           type:String
       },
       rating:{
            type:Number,
            default:0
       },
       reviews: {
           type:Array,
           default:[]
       }
    }
);
module.exports=mongoose.model('product',productSchema);
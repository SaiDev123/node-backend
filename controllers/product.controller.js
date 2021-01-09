var productModel=require('../models/product/product.model');

exports.addProduct=function(request,response){
var product= request.body;
 var newProduct=new productModel(product);
 newProduct.save(function(err, doc){
     if(err){
         response.send({error:err.message,status:false})
     }
     if(doc){
         response.status(200).send({message:"success",status:true});
     }
 })
}
exports.getProducts=function(request,response){
    productModel.find({}, function(err,products){
        if(err){
            response.send({error:err.message})
        }
        else
        {
          response.send(products);
        }
    })
}
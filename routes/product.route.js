var express = require('express');

var productController= require('../controllers/product.controller');

var productRouter=express.Router();

//http://localhost:9013/addProduct
productRouter.post('/addProduct',productController.addProduct);
//http://localhost:9013/products  method:get
productRouter.get('/products', productController.getProducts);

module.exports=productRouter;
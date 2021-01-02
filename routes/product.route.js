var express = require('express');

var productController= require('../controllers/product.controller');

var productRouter=express.Router();

productRouter.post('/addProduct',productController.addProduct);

module.exports=productRouter;
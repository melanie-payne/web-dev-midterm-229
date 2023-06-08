let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Product = require('../models/product');

//Manage routes
router.get('/', (req, res, next) => {
    Product.find((err, productList) => {
        if(err){
            return console.error(err);
        }else{
            //console.log(productList);
            res.render('product/list', {title: 'Product Info', ProductList: productList})
        }
    });
});

// to open add product page
router.get('/add', (req, res, next) => {
    res.render('product/add', {title: 'Add Product'})
});

// insert product data into mongoDB collection

module.exports = router;
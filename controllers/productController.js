'use strict';

const Product = require('../models/products');

exports.findAll = function(req, res) {
    Product.findAll(function(err, product){
      console.log('ProductController')
      if (err) {
         res.send(err);
      }
      //console.log('res', product);
      res.send(product);
    }) ;
};
'use strict';

const Supplier = require('../models/supplier');

exports.findAll = function(req, res) {
    Supplier.findAll(function(err, supplier){
        console.log('SupplierController')
        if (err) {
            res.send(err);
        }
        //console.log('res', supplier);
        res.send(supplier);
    }) ;
};
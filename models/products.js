'use strict';

var dbConn = require('../config/db.config');

var Product = function(product) {
    this.sku = product.sku;
    this.name = product.name;
    this.brand = product.brand;
    this.currentstock = product.currentstock;
    this.thresholdstock = product.thresholdstock;
};

Product.findAll = function(result) {
    dbConn.then(
        session => {
            return session.getSchema('omniventory').getTable('products')
                .select()
                .execute()
                .then((data)=> {
                    result(null, data.fetchAll());
                })
        }
    );
}


module.exports=Product;
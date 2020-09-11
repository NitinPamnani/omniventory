'use strict';

var dbConn = require('../config/db.config');

var Order = function(order) {
    this.id = order.id;
    this.sku = order.sku;
    this.name = order.name;
    this.orderQuantity = order.orderQuantity;
    this.orderDate= order.orderDate;
};

Order.placeOrder = function(req, res, next) {
    dbConn.then(
        session => {
            const table = session.getSchema('omniventory').getTable('order');

            return table
                .insert(['productId','numbersord','orderdate'])
                .values([req.body.id,req.body.orderQuantity,req.body.orderDate])
                .execute()
                .then(()=>{
                    session.sql('UPDATE omniventory.products SET currentstock = currentstock-'+req.body.orderQuantity+' WHERE id='+req.body.id)
                        .execute()
                        .then((data)=>{
                            if(data.getAffectedItemsCount() >=1 ) {
                                res.json({msg:"success"});
                            } else {
                                res.json({msg:"failure"});
                            }
                        });
                })
        }
    )
};

module.exports = Order;
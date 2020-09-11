'use strict';

var dbConn = require('../config/db.config');

var Supplier = function(supplier) {
    this.name = supplier.name;
    this.address = supplier.address;
};

Supplier.findAll = function(result) {
    dbConn.then(
        session => {
            return session.getSchema('omniventory').getTable('supplier')
                .select(['id', 'name'])
                .execute()
                .then((data)=>{
                    result(null, data.fetchAll());
                })

        }
    );
}

module.exports=Supplier;
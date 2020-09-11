'use strict';

var dbConn = require('../config/db.config');

var Purchase = function(purchase) {
    this.id = purchase.id;
    this.sku = purchase.sku;
    this.supplierId = purchase.supplierToPurchaseFrom;
    this.numbersreqd = purchase.quantityToPurchase;
};

Purchase.makePurchase = function(req, res, next) {
    dbConn.then(
      session => {
          const table = session.getSchema('omniventory').getTable('purchase');

          return table
              .insert(['supplierId', 'productId', 'numbersreqd', 'purchasedate'])
              .values([req.body.supplierToPurchaseFrom, req.body.id, req.body.quantityToPurchase, req.body.purchaseDate])
              .execute()
              .then(() => {
                  session.sql('UPDATE omniventory.products SET currentstock = currentstock+'+req.body.quantityToPurchase+' WHERE id='+req.body.id)
                      .execute()
                      .then((data)=>{
                          if(data.getAffectedItemsCount() >= 1) {
                              res.json({msg:"success"});
                          } else {
                              res.json({msg:"failure"});
                          };
                      })
              })
      }
    );



}

module.exports = Purchase;
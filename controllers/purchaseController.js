'use strict';

const Purchase = require('../models/purchase');

exports.makePurchase = function(req, res, next) {
    Purchase.makePurchase(req, res, next);
};
'use strict';

const Order = require('../models/order');

exports.placeOrder = function(req,res,next) {
    Order.placeOrder(req, res, next);
};
  CREATE TABLE `products` (
       `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
       `sku` int(11) unsigned NOT NULL,
       `name` varchar(255) DEFAULT NULL,
       `brand` varchar(255) DEFAULT NULL,
       `currentstock` int(11) DEFAULT NULL,
       `thresholdstock` int(11) DEFAULT NULL,
       PRIMARY KEY(`id`)
       ) ENGINE=InnoDB DEFAULT CHARSET=utf8;



    CREATE TABLE `address` (
      `id` int(11) unsigned NOt NULL AUTO_INCREMENT,
      `line1` varchar(255) DEFAULT NULL,
      `line2` varchar(255) DEFAULT NULL,
      `zipcode` int(6) DEFAULT NULL,
      PRIMARY KEY(`id`)
      ) ENGINE=InnoDB DEFAULt CHARSET=utf8;


     CREATE TABLE `supplier` (
       `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
       `name` varchar(255) DEFAULT NULL,
       `addressId` int(11) unsigned NOT NULL,
       PRIMARY KEY (`id`),
       KEY `supplier_address_fk` (`addressId`),
       CONSTRAINT `supplier_address_fk` FOREIGN KEY (`addressId`) REFERENCES `address` (`id`)
       )ENGINE=InnoDB DEFAULT CHARSET=utf8;





      CREATE TABLE `purchase` (
       `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
       `supplierId` int(11) unsigned NOT NULL,
       `productId` int(11) unsigned NOT NULL,
       `numbersreqd` int(11) DEFAULT NULL,
       `purchasedate` date NOT NULL,
       PRIMARY KEY (`id`),
       KEY `supplier_purchase_fk` (`supplierId`),
       KEY `product_purchase_fk` (`productId`),
       CONSTRAINT `supplier_purchase_fk` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`id`),
       CONSTRAINT `product_purchase_fk` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
       )ENGINE=InnoDB DEFAULT CHARSET=utf8;





      CREATE TABLE `order` (
           `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
           `productId` int(11) unsigned NOT NULL,
           `numbersord` int(11) DEFAULT NULL,
           `orderdate` date NOT NULL,
           PRIMARY KEY (`id`),
           KEY `consumer_order_fk` (`consumerId`),
           KEY `product_order_fk` (`productId`),
           CONSTRAINT `product_order_fk` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
           )ENGINE=InnoDB DEFAULT CHARSET=utf8;

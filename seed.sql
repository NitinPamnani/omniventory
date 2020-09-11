INSERT INTO products(`id`,`sku`,`name`,`brand`,`currentstock`, `thresholdstock`)
VALUES
      (1,'1234','LearnPencilShading','Penguin','10','5'),
      (2,'1235','HowToDrawCartoons','Pustak Mahal','10','4'),
      (3,'1236','ElectronicsForYou','Digit','200','150'),
      (4,'1237','OpenSourceForYou','Digit','200','150'),
      (5,'1238','BlackBookOfPerl','Digit','20','4'),
      (6,'1239','LearnPencilShading2','ITC','10','5'),
      (7,'1240','SketchBook','ITC','10','5'),
      (8,'1241','ColorFillBook','ITC','10','5'),
      (9,'1242','ProseAndPoetry','Penguin','100','80'),
      (10,'1243','WhatToEatAndWhy','Pustak Mahal','1000','200'),
      (11,'1244','TimeManagement','Pustak Mahal','1000','200'),
      (12,'1245','OptimalHealthRevolution','AMD','1000','200'),
      (13,'1246','DeepWork','AMD','200','10'),
      (14,'1247','PowerOfHabit','AMD','200','10'),
      (15,'1248','ThinkingSmallAndBig','ITC','200','10'),
      (16,'1249','SuppleLeopard','ITC','200','10'),
      (17,'1250','BodyAsAWeapon','ITC','200','10'),
      (18,'1251','Calisthenics101','DK','200','10'),
      (19,'1252','Warcry','Penguin','90','1'),
      (20,'1253','AfterMath','Navneet','10','1');


INSERT INTO address(`id`, `line1`, `line2`, `zipcode`)
VALUES
      (1,'ABC STREET', 'DEF CITY, GHI STATE', '123456'),
      (2,'DEF STREET', 'GHI CITY, JKL STATE', '123457'),
      (3,'MNO STREET', 'PQR CITY, STU STATE', '123458'),
      (4,'VWX STREET', 'YZA CITY, BCD STATE', '123459'),
      (5,'EFG STREET', 'HIJ CITY, KLM STATE', '123460'),
      (6,'NOP STREET', 'QRS CITY, TUV STATE', '123461'),
      (7,'WXY STREET', 'ZAB CITY, CDE STATE', '123462');

INSERT INTO supplier(`id`, `name`, `addressId`)
VALUES
      (1,'The Book Store',1),
      (2,'Universal Book Depot',2),
      (3,'Delhi Book House',3),
      (4,'Penguin and Co',4),
      (5,'ITC Retailers',5),
      (6,'AMD Enterprises',6),
      (7,'Navneet Distributors',7);


INSERT INTO purchase(`id`, `supplierId`, `productId`, `numbersreqd`, `purchasedate`)
VALUES
      (1, 2, 1, 10, '2020-03-03'),
      (2, 3, 2, 10, '2020-03-04'),
      (3, 4, 3, 200,'2020-03-05'),
      (4, 4, 4, 200,'2020-03-05'),
      (5, 1, 5, 20, '2020-03-07'),
      (6, 7, 6, 10, '2020-03-09'),
      (7, 5, 7, 10, '2020-03-09'),
      (8, 5, 8, 10, '2020-03-09'),
      (9, 6, 9, 100,'2020-03-10'),
      (10, 5, 10, 1000,'2020-03-11'),
      (11, 4, 11, 1000,'2020-03-11'),
      (12, 3, 12, 1000,'2020-03-11'),
      (13, 7, 13, 200,'2020-03-12'),
      (14, 2, 14, 200,'2020-03-12'),
      (15, 2, 15, 200,'2020-03-13'),
      (16, 4, 16, 200,'2020-03-14'),
      (17, 5, 17, 200,'2020-03-14'),
      (18, 7, 18, 200,'2020-03-15'),
      (19, 4, 19, 90,'2020-03-15'),
      (20, 1, 20, 10,'2020-03-16');
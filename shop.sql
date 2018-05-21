/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost
 Source Database       : shop

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : utf-8

 Date: 05/21/2018 16:47:18 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `cart`
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(110) NOT NULL,
  `product` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `time` varchar(100) NOT NULL,
  `switch` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `cart`
-- ----------------------------
BEGIN;
INSERT INTO `cart` VALUES ('19', 'human', '4', '1', '2018-04-27 14:29:20', '[]'), ('20', 'human', '5', '1', '2018-04-28 14:12:15', '[]'), ('22', 'human', '7', '1', '2018-04-28 14:14:19', '[\"牛奶白\"]'), ('23', 'human', '7', '2', '2018-05-12 10:11:25', '[\"情侣款\"]');
COMMIT;

-- ----------------------------
--  Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `product` varchar(2000) NOT NULL,
  `time` varchar(100) NOT NULL,
  `status` varchar(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `attention` varchar(400) DEFAULT NULL,
  `price` decimal(60,2) NOT NULL,
  `manage` varchar(100) DEFAULT NULL,
  `orderID` varchar(20) DEFAULT NULL,
  `payWay` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `order`
-- ----------------------------
BEGIN;
INSERT INTO `order` VALUES ('1', 'human', '[{\"id\":1, \"name\":\"Apple Watch Sport\",\"num\":1,\"switch\":[\"黑色\",\"38毫米\"],\"image\":\"Apple Watch Sport/AppleWatchSport_thumbnail_1.jpg\",\"price\":2288.00,\"stock\":301}]', '2018-04-04 18:42:25', 'Closed', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼101\"}}', null, '2288.00', null, null, '在线付款'), ('8', 'humans', '[{\"id\":1,\"name\":\"Apple Watch Sport\",\"num\":1,\"switch\":[\"黑色\",\"38毫米\"],\"image\":\"Apple Watch Sport/AppleWatchSport_thumbnail_1.jpg\",\"price\":2288,\"stock\":301},{\"id\":3,\"name\":\"ALPHA 2\",\"num\":2,\"switch\":[\"蓝色\"],\"image\":\"ALPHA 2/ALPHA_thumbnail_蓝色.jpg\",\"price\":7999,\"stock\":291}]', '2018-04-24 15:54:1', 'Paying', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼101\"}}', '发中通', '18286.00', null, null, '在线付款'), ('10', 'human', '[{\"id\":1,\"name\":\"Apple Watch Sport\",\"num\":1,\"switch\":[\"黑色\",\"38毫米\"],\"image\":\"Apple Watch Sport/AppleWatchSport_thumbnail_1.jpg\",\"price\":2288,\"stock\":301}]', '2018-04-24 19:55:06', 'Receiving', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼101\"}}', '', '2288.00', null, '129321354', '在线付款'), ('11', 'human', '[{\"id\":7,\"name\":\"公子小白\",\"num\":2,\"switch\":[\"金属灰\"],\"image\":\"公子小白/bai_thumbnail_牛奶白.jpg\",\"price\":1880,\"stock\":77},{\"id\":6,\"name\":\"Pico Neo\",\"num\":1,\"switch\":[],\"image\":\"Pico Neo/picoNeo_thumbnail_1.jpg\",\"price\":3399,\"stock\":403}]', '2018-04-24 21:46:36', 'Receiving', '{\"name\":\"胡猛2\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"辽宁省\",\"tier2\":\"抚顺市\",\"addressDesc\":\"江苏师范大学\"}}', '', '7159.00', null, '7651741231', '货到付款'), ('12', 'human', '[{\"id\":4,\"name\":\"九号平衡车\",\"num\":1,\"switch\":[],\"image\":\"九号平衡车/balanceCar_thumbnail_1.jpg\",\"price\":1999,\"stock\":877}]', '2018-04-24 22:17:36', 'Finish', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼101\"}}', '', '1999.00', null, '1231231123', '货到付款'), ('13', 'human', '[{\"id\":1,\"name\":\"Apple Watch Sport\",\"num\":4,\"switch\":[\"白色\",\"42毫米\"],\"image\":\"Apple Watch Sport/AppleWatchSport_thumbnail_1.jpg\",\"price\":2288,\"stock\":301}]', '2018-04-25 10:45:50', 'Auditing', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼101\"}}', '快递发顺丰', '9152.00', null, null, '货到付款'), ('14', 'humans', '[{\"id\":3,\"name\":\"ALPHA 2\",\"num\":1,\"switch\":[\"红色\"],\"image\":\"ALPHA 2/ALPHA_thumbnail_蓝色.jpg\",\"price\":7999,\"stock\":291}]', '2018-04-25 13:12:40', 'Closed', '{\"name\":\"humans\",\"phone\":\"15278481111\",\"address\":{\"tier1\":\"山西省\",\"tier2\":\"晋城市\",\"addressDesc\":\"jiodaosnv\"}}', '', '7999.00', '所在地暂无货', null, '货到付款'), ('17', 'human', '[{\"id\":8,\"name\":\"Oculus Rift\",\"num\":1,\"switch\":null,\"image\":\"Oculus Rift/Oculus Rift.png\",\"price\":2799,\"stock\":10}]', '2018-04-26 12:21:11', 'Receiving', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼221\"}}', '发申通', '2799.00', null, '1535531123', '货到付款'), ('18', 'human', '[{\"id\":1,\"name\":\"Apple Watch Sport\",\"num\":1,\"switch\":[\"黄色\",\"42毫米\"],\"image\":\"Apple Watch Sport/AppleWatchSport_thumbnail_1.jpg\",\"price\":2288,\"stock\":300}]', '2018-04-27 14:18:57', 'Paying', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼221\"}}', '发圆通', '2288.00', null, null, '在线支付'), ('19', 'human', '[{\"id\":1,\"name\":\"Apple Watch Sport\",\"num\":1,\"switch\":[\"宝蓝色\",\"42毫米\"],\"image\":\"Apple Watch Sport/AppleWatchSport_thumbnail_1.jpg\",\"price\":2288,\"stock\":300},{\"id\":7,\"name\":\"公子小白\",\"num\":1,\"switch\":[\"情侣款\",\"38毫米\"],\"image\":\"公子小白/bai_thumbnail_牛奶白.jpg\",\"price\":1880,\"stock\":77}]', '2018-04-27 14:29:58', 'Receiving', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼221\"}}', '', '4168.00', null, '52341231', '货到付款'), ('20', 'human', '[{\"id\":8,\"name\":\"Oculus Rift\",\"num\":1,\"switch\":null,\"image\":\"Oculus Rift/Oculus Rift.png\",\"price\":2799,\"stock\":112}]', '2018-04-27 15:33:12', 'Receiving', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼221\"}}', '', '2799.00', null, '31434123123', '货到付款'), ('22', 'human', '[{\"id\":7,\"name\":\"公子小白\",\"num\":1,\"switch\":[\"牛奶白\",\"38毫米\"],\"image\":\"公子小白/bai_thumbnail_牛奶白.jpg\",\"price\":1880}]', '2018-05-05 15:36:43', 'Auditing', '{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼221\"}}', '123', '1880.00', null, null, '货到付款');
COMMIT;

-- ----------------------------
--  Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `image` varchar(255) COLLATE utf8_bin NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `switch` varchar(1255) COLLATE utf8_bin DEFAULT NULL,
  `detail` varchar(1255) COLLATE utf8_bin DEFAULT NULL,
  `function` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `packing` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `product`
-- ----------------------------
BEGIN;
INSERT INTO `product` VALUES ('1', 'Apple Watch Sport', 'Apple Watch Sport/AppleWatchSport_thumbnail_1.jpg', '2288.00', '241', '{\"image\":[\"AppleWatchSport_thumbnail_1.jpg\",\"AppleWatchSport_thumbnail_黑色.jpg\",\"AppleWatchSport_thumbnail_白色.jpg\",\"AppleWatchSport_thumbnail_宝蓝色.jpg\",\"AppleWatchSport_thumbnail_橙色.jpg\",\"AppleWatchSport_thumbnail_黄色.jpg\"],\"选择颜色\":[\"黑色\",\"白色\",\"宝蓝色\",\"橙色\",\"黄色\"],\"表壳尺寸\":[\"38毫米\",\"42毫米\"]}', '[\"AppleWatchSport_detail_1.jpg\",\"AppleWatchSport_detail_2.jpg\"]', '[]', '[]'), ('2', 'Gear VR', 'Gear VR/gearVR_thumbnail_1.jpg', '1288.00', '421', '{\'image\':[\'gearVR_thumbnail_1.jpg\',\'gearVR_thumbnail_2.jpg\',\'gearVR_thumbnail_3.jpg\']}', '[\'gearVR_detail_1.jpg\',\'gearVR_detail_2.jpg\',\'gearVR_detail_3.jpg\',\'gearVR_detail_4.jpg\',\'gearVR_detail_5.jpg\',\'gearVR_detail_6.jpg\',\'gearVR_detail_7.jpg\']', '[]', '[]'), ('3', 'ALPHA 2', 'ALPHA 2/ALPHA_thumbnail_蓝色.jpg', '7999.00', '291', '{\'image\':[\'ALPHA_thumbnail_蓝色.jpg\',\'ALPHA_thumbnail_红色.png\',\'ALPHA_thumbnail_1.jpg\'],\'选择颜色\':[\'蓝色\',\'红色\']}', '[\'ALPHA_detail_1.jpg\',\'ALPHA_detail_2.jpg\',\'ALPHA_detail_3.jpg\',\'ALPHA_detail_4.jpg\',\'ALPHA_detail_5.jpg\',\'ALPHA_detail_6.jpg\',\'ALPHA_detail_7.jpg\',\'ALPHA_detail_8.jpg\']', '[]', '[]'), ('4', '九号平衡车', '九号平衡车/balanceCar_thumbnail_1.jpg', '1999.00', '877', '{\'image\':[\'balanceCar_thumbnail_1.jpg\',\'balanceCar_thumbnail_2.jpg\',\'balanceCar_thumbnail_3.jpg\']}', '[\'balanceCar_detail_1.jpg\',\'balanceCar_detail_2.jpg\',\'balanceCar_detail_3.jpg\',\'balanceCar_detail_4.jpg\']', '[]', '[]'), ('5', 'Phantom 4', 'Phantom 4/Phantom4_thumbnail_1.png', '9899.00', '96', '{\'image\':[\'Phantom4_thumbnail_1.png\',\'Phantom4_thumbnail_2.jpg\']}', '[\'Phantom4_detail_1.jpg\',\'Phantom4_detail_2.jpg\',\'Phantom4_detail_3.jpg\',\'Phantom4_detail_4.jpg\']', '[]', '[]'), ('6', 'Pico Neo', 'Pico Neo/picoNeo_thumbnail_1.jpg', '3399.00', '230', '{\'image\':[\'picoNeo_thumbnail_1.jpg\',\'picoNeo_thumbnail_2.jpg\',\'picoNeo_thumbnail_3.jpg\']}', '[\'picoNeo_detail_1.png\',\'picoNeo_detail_2.jpg\',\'picoNeo_detail_3.jpg\',\'picoNeo_detail_4.jpg\',\'picoNeo_detail_5.png\',\'picoNeo_detail_6.png\',\'picoNeo_detail_7.png\',\'picoNeo_detail_8.png\',\'picoNeo_detail_9.png\']', '[\'picoNeo_function_1.png\']', '[]'), ('7', '公子小白', '公子小白/bai_thumbnail_牛奶白.jpg', '1880.00', '173', '{\"image\":[\"bai_thumbnail_牛奶白.jpg\",\"bai_thumbnail_金属灰.jpg\",\"bai_thumbnail_情侣款.jpg\"],\"选择颜色\":[\"牛奶白\",\"金属灰\",\"情侣款\"]}', '[\"bai_detail_1.jpg\",\"bai_detail_2.jpg\",\"bai_detail_3.jpg\",\"bai_detail_4.jpg\",\"bai_detail_5.jpg\",\"bai_detail_6.jpg\",\"bai_detail_7.jpg\",\"bai_detail_8.jpg\",\"bai_detail_9.jpg\"]', '[]', '[\"bai_packing_1.jpg\"]'), ('8', 'Oculus Rift', 'Oculus Rift/Oculus Rift.png', '2799.00', '110', '{\"image\":[\"Oculus Rift.png\"]}', '[\"produce1.jpg\"]', '[]', '[]');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `phone` varchar(255) COLLATE utf8_bin NOT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `coupon` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(2000) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1', 'human', 'humans', '15262051386', 'humeng_sq@163.com', '100', '[{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼221\"}},{\"name\":\"胡猛\",\"phone\":\"15262051386\",\"address\":{\"tier1\":\"内蒙古自治区\",\"tier2\":\"呼和浩特市\",\"addressDesc\":\"新城区 申城佳苑10号楼109\"}}]'), ('2', 'jiangs', 'jiangshinshn', '15262051286', 'jiang@163.com', null, null), ('4', 'humans', 'human', '15262051386', 'humeng_sq@163.com', null, '[{\"name\":\"humans\",\"phone\":\"15278481111\",\"address\":{\"tier1\":\"山西省\",\"tier2\":\"晋城市\",\"addressDesc\":\"jiodaosnv\"}}]'), ('7', 'asd', 'sdaisjdia', '15262051388', 'huawda@163.com', null, null);
COMMIT;

-- ----------------------------
--  View structure for `cartinfo`
-- ----------------------------
DROP VIEW IF EXISTS `cartinfo`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `cartinfo` AS select `a`.`id` AS `id`,`a`.`product` AS `product`,`a`.`num` AS `num`,`a`.`switch` AS `switch`,`a`.`user` AS `user`,`a`.`time` AS `time`,`b`.`price` AS `sPrice`,`b`.`name` AS `pName`,`b`.`stock` AS `stock`,`b`.`image` AS `image` from (`cart` `a` left join `product` `b` on((`a`.`product` = `b`.`id`)));

-- ----------------------------
--  View structure for `orderinfo`
-- ----------------------------
DROP VIEW IF EXISTS `orderinfo`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `orderinfo` AS select `a`.`id` AS `id`,`a`.`address` AS `address`,`a`.`product` AS `product`,`a`.`status` AS `status`,`a`.`user` AS `user`,`a`.`time` AS `time`,`c`.`name` AS `uName` from (`order` `a` left join `user` `c` on((`a`.`user` = `c`.`id`)));

SET FOREIGN_KEY_CHECKS = 1;

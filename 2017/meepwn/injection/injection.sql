CREATE DATABASE `injection`;
USE `injection`;

CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(500) NOT NULL,
  `passwd` varchar(500) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `users` AUTO_INCREMENT=1;

CREATE TABLE `links` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `link` varchar(500) NOT NULL,
  `count` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`lid`),
  UNIQUE KEY (`uid`, `link`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `links` AUTO_INCREMENT=1;

INSERT INTO `users` VALUES (0, 'admin', 'this_is_my_password');
INSERT INTO `links` VALUES (0, 1, 'MeePwnCTF{this_is_the_flag}', 0, 0);
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(32) primary key auto_increment,
  `username` varchar(300) UNIQUE KEY,
  `nickname` varchar(300) UNIQUE KEY,
  `password` varchar(32),
  `email` varchar(300) UNIQUE KEY
);

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(32) primary key auto_increment,
  `user_id` int(32),
  `title` varchar(300),
  `content` varchar(1000)
);

CREATE TABLE IF NOT EXISTS `reports` (
  `id` int(32) primary key auto_increment,
  `user_id` int(32),
  `email` varchar(300),
  `type_id` int(32)
);

CREATE TABLE IF NOT EXISTS `avatar` (
    `id` int(32) primary key auto_increment,
    `data` blob,
    `user_id` int(32) UNIQUE KEY,
    `filepath` varchar(300),
    `photo_type` varchar(20)
);


/**

 Author: Cristian Romero Povea

*/

CREATE SCHEMA `fathom-jokes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci ;

CREATE TABLE `fathom-jokes`.`joke_types` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET latin1 NOT NULL,
  `active` bit NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT now(),
  `updated_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `joke_types` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `fathom-jokes`.`jokes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `joke_type` bigint NOT NULL,
  `setup` varchar(255) CHARACTER SET latin1 NOT NULL,
  `punchline` varchar(255) CHARACTER SET latin1 NOT NULL,
  `active` bit NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT now(),
  `updated_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  CONSTRAINT `jokes` FOREIGN KEY (`joke_type`) REFERENCES `joke_types` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
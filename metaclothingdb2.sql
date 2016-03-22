-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
SHOW WARNINGS;
-- -----------------------------------------------------
-- Schema metaclothingdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `metaclothingdb` ;

-- -----------------------------------------------------
-- Schema metaclothingdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `metaclothingdb` DEFAULT CHARACTER SET latin1 ;
SHOW WARNINGS;
USE `metaclothingdb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `isemployee` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `address` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `address` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `streetaddress` VARCHAR(100) NOT NULL,
  `city` VARCHAR(20) NOT NULL,
  `stateabbrev` VARCHAR(2) NOT NULL,
  `zip` INT(11) NOT NULL,
  `userid` INT(11) NOT NULL,
  `isbilling` TINYINT(1) NULL DEFAULT NULL,
  `isshipping` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_billingaddress` (`userid` ASC),
  CONSTRAINT `fk_billingaddress`
    FOREIGN KEY (`userid`)
    REFERENCES `user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `cart` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userid` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_cart` (`userid` ASC),
  CONSTRAINT `fk_cart`
    FOREIGN KEY (`userid`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `item` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `item` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `price` INT(11) NOT NULL,
  `brand` VARCHAR(20) NOT NULL,
  `rating` INT(11) NOT NULL,
  `category` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 100
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `cartitem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cartitem` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `cartitem` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `quantity` INT(11) NOT NULL,
  `cartid` INT(11) NOT NULL,
  `itemid` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_cartitem` (`itemid` ASC),
  INDEX `idx_cartitem_0` (`cartid` ASC),
  CONSTRAINT `fk_cartitem_0`
    FOREIGN KEY (`cartid`)
    REFERENCES `cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cartitem`
    FOREIGN KEY (`itemid`)
    REFERENCES `item` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `sale`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sale` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `sale` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `userid` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_sale` (`userid` ASC),
  CONSTRAINT `fk_sale`
    FOREIGN KEY (`userid`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `saleitem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `saleitem` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `saleitem` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `quantity` INT(11) NOT NULL,
  `saleid` INT(11) NOT NULL,
  `itemid` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_orderitem` (`saleid` ASC),
  INDEX `idx_orderitem_0` (`itemid` ASC),
  CONSTRAINT `fk_orderitem_0`
    FOREIGN KEY (`itemid`)
    REFERENCES `item` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orderitem`
    FOREIGN KEY (`saleid`)
    REFERENCES `sale` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

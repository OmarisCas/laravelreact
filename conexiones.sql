-- MySQL Script generated by MySQL Workbench
-- Mon Mar  8 09:21:03 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema conexiones
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema conexiones
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `conexiones` DEFAULT CHARACTER SET utf8 ;
USE `conexiones` ;

-- -----------------------------------------------------
-- Table `conexiones`.`personas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `conexiones`.`personas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `nombres` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `conexiones`.`estados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `conexiones`.`estados` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `conexiones`.`dispositivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `conexiones`.`dispositivos` (
  `id` INT NOT NULL,
  `persona_id` INT NOT NULL,
  `estado_id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  `direccionmac` VARCHAR(45) NOT NULL,
  `direccionip` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dispositivos_personas_idx` (`persona_id` ASC) ,
  INDEX `fk_dispositivos_estados1_idx` (`estado_id` ASC) ,
  CONSTRAINT `fk_dispositivos_personas`
    FOREIGN KEY (`persona_id`)
    REFERENCES `conexiones`.`personas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_dispositivos_estados1`
    FOREIGN KEY (`estado_id`)
    REFERENCES `conexiones`.`estados` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

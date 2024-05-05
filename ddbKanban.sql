-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Developer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Developer` (
  `id_developer` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `imagen` VARCHAR(150) NULL,
  PRIMARY KEY (`id_developer`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Estado` (
  `id_estado` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_estado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Tarea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Tarea` (
  `id_tarea` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) BINARY NULL,
  `duracion` INT NULL,
  `id_developer` INT NOT NULL,
  `Estado_id_estado` INT NOT NULL,
  PRIMARY KEY (`id_tarea`),
  INDEX `fk_Tarea_Developer_idx` (`id_developer` ASC) VISIBLE,
  INDEX `fk_Tarea_Estado1_idx` (`Estado_id_estado` ASC) VISIBLE,
  CONSTRAINT `fk_Tarea_Developer`
    FOREIGN KEY (`id_developer`)
    REFERENCES `mydb`.`Developer` (`id_developer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tarea_Estado1`
    FOREIGN KEY (`Estado_id_estado`)
    REFERENCES `mydb`.`Estado` (`id_estado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

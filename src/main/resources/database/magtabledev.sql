/*
    Program Name: magtabledev.sql
    Author: Mustafa Al Khaldi
    Created: February 4, 2020
    Description: Use Case one database scheme for MagTable
 */
DROP DATABASE IF EXISTS magtabledev;
CREATE DATABASE magtabledev;

USE magtabledev;

CREATE TABLE `UserLevel` (
    levelID TINYINT(1) NOT NULL,
    description VARCHAR(20),
    PRIMARY KEY (levelID)
);

CREATE TABLE `User` (
    userID VARCHAR(32) NOT NULL,
    levelID TINYINT(1) NOT NULL,
    username VARCHAR(32) UNIQUE,
    password VARCHAR(60) NULL NULL,
    PRIMARY KEY (userID),
    KEY `FK_levelID` (levelID),
    CONSTRAINT `FK_levelID` FOREIGN KEY (levelID) REFERENCES `UserLevel` (levelID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

COMMIT;


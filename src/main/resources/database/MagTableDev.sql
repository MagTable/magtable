/*
    Program Name: MagTableDev
    Author: Mustafa Al Khaldi
    Created: February 4, 2020
    Description: Use Case one database scheme for MagTable
 */
DROP DATABASE IF EXISTS magtabledev;
CREATE DATABASE magtabledev;

USE magtabledev;

CREATE TABLE Role (
    roleID INT(1) NOT NULL,
    rolename VARCHAR(25) NOT NULL,
    PRIMARY KEY (roleID)
);

CREATE TABLE User (
    userID INT(32) NOT NULL AUTO_INCREMENT,
    roleID INT(1) NOT NULL,
    username VARCHAR(32) UNIQUE,
    password VARCHAR(60) NULL NULL,
    PRIMARY KEY (userID),
    KEY FK_Role_User (roleID),
    CONSTRAINT FK_Role_User FOREIGN KEY (roleID) REFERENCES Role (roleID) ON DELETE RESTRICT ON UPDATE RESTRICT
);
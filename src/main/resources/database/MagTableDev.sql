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
    roleID   INT(1)      NOT NULL,
    rolename VARCHAR(25) NOT NULL,
    PRIMARY KEY (roleID)
);

CREATE TABLE User (
    userID    INT(32)     NOT NULL AUTO_INCREMENT,
    `role`    INT(2)      NOT NULL,
    username  VARCHAR(32) UNIQUE,
    password  VARCHAR(60) NULL NULL,
    resetflag boolean DEFAULT true,
    PRIMARY KEY (userID),
    CONSTRAINT FK_User_Role FOREIGN KEY (`role`) REFERENCES `Role` (`roleID`) ON DELETE RESTRICT ON UPDATE RESTRICT
);


CREATE TABLE BrixChart (
    brixChartID         INT(32)  NOT NULL AUTO_INCREMENT,
    recommendedDailyMix INT(2)   NOT NULL,
    brix                FLOAT(3) NOT NULL,
    freezingPoint       INT(2)   NOT NULL,
    concentration       FLOAT(3) NOT NULL,
    PRIMARY KEY (brixChartID)
);

CREATE TABLE Truck (
    truckID INT(32)       NOT NULL,
    status  VARCHAR(4)    NOT NULL,
    notice  VARCHAR(2000) NOT NULL,
    PRIMARY KEY (TruckID)
);

CREATE TABLE Position (
    positionID  INT(2)      NOT NULL,
    description VARCHAR(25) NOT NULL,
    PRIMARY KEY (positionID)
);

CREATE TABLE Tower (
    towerID    INT(32) NOT NULL,
    `position` INT(2)  NOT NULL,
    PRIMARY KEY (towerID),
    CONSTRAINT FK_Tower_position FOREIGN KEY (`position`) REFERENCES `Position` (`positionID`) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE Equipment (
    equipmentID INT(32) NOT NULL AUTO_INCREMENT,
    truckID     INT(32) NOT NULL,
    towerID     INT(32) NOT NULL,
    PRIMARY KEY (equipmentID),
    CONSTRAINT FK_Truck_ID FOREIGN KEY (truckID) REFERENCES Truck (truckID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT FK_Tower_ID FOREIGN KEY (towerID) REFERENCES Tower (towerID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE ParkingLocation (
    locationID          VARCHAR(32) NOT NULL,
    padCode             VARCHAR(4)  NOT NULL,
    parkingLocationCode VARCHAR(4)  NOT NULL,
    PRIMARY KEY (LocationID)
);

CREATE TABLE MagTableRecord (
    magID      VARCHAR(32) NOT NULL,
    dailyMix   INT(2)      NOT NULL,
    forcastLow INT(2)      NOT NULL,
    PRIMARY KEY (magID)
);

CREATE TABLE Assignment (
    assignmentID      VARCHAR(32) NOT NULL,
    magID             VARCHAR(32) NOT NULL,
    equipmentID       INT(32)     NOT NULL,
    locationID        VARCHAR(32) NOT NULL,
    date              DATETIME    NOT NULL,
    PRIMARY KEY (assignmentID),
    CONSTRAINT FK_Mag_ID FOREIGN KEY (magID) REFERENCES MagTableRecord (magID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT FK_Equipment_ID FOREIGN KEY (equipmentID) REFERENCES Equipment (equipmentID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT FK_Location_ID FOREIGN KEY (locationID) REFERENCES ParkingLocation (locationID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE BrixRecord (
    brixRecordID      VARCHAR(32) NOT NULL,
    assignmentID      VARCHAR(32) NOT NULL,
    nozzle            FLOAT(3)    NOT NULL,
    type1             FLOAT(3)    NOT NULL,
    type4             FLOAT(3)    NOT NULL,
    timeMeasured      DATETIME    NOT NULL,
    PRIMARY KEY (BrixRecordID),
    CONSTRAINT FK_Assignment_ID FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE Shift (
    shiftID      VARCHAR(32) NOT NULL,
    assignmentID VARCHAR(32) NOT NULL,
    description  VARCHAR(20),
    timeOfDay    CHAR(2)     NOT NULL,
    employeeName VARCHAR(25) NOT NULL,
    startTime    DATETIME    NOT NULL,
    endTime      DATETIME    NOT NULL,
    PRIMARY KEY (shiftID),
    CONSTRAINT FK_Assignment_ID_Shift FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

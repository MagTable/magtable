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
    userID    INT(5)     NOT NULL AUTO_INCREMENT,
    `role`    INT(2)      NOT NULL,
    username  VARCHAR(32) UNIQUE,
    password  VARCHAR(60) NULL NULL,
    resetflag boolean DEFAULT true,
    PRIMARY KEY (userID),
    CONSTRAINT FK_User_Role FOREIGN KEY (`role`) REFERENCES `Role` (`roleID`) ON DELETE RESTRICT ON UPDATE RESTRICT
);


CREATE TABLE BrixChart (
    brixChartID         INT(5)   NOT NULL AUTO_INCREMENT,
    recommendedDailyMix INT(2)   NOT NULL,
    brix                FLOAT(3) NOT NULL,
    freezingPoint       INT(2)   NOT NULL,
    concentration       FLOAT(3) NOT NULL,
    PRIMARY KEY (brixChartID)
);

CREATE TABLE Truck (
    truckID     INT(5)        NOT NULL,
    status      VARCHAR(4)    NOT NULL,
    notice      VARCHAR(2000) NOT NULL,
    vehicleType VARCHAR(30)   NOT NULL,
    PRIMARY KEY (TruckID)
);

CREATE TABLE Position (
    positionID  INT(2)      NOT NULL,
    description VARCHAR(25) NOT NULL,
    PRIMARY KEY (positionID)
);

CREATE TABLE Tower (
    towerID    INT(5) NOT NULL,
    `position` INT(2) NOT NULL,
    PRIMARY KEY (towerID),
    CONSTRAINT FK_Tower_position FOREIGN KEY (`position`) REFERENCES `Position` (`positionID`) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE ParkingLocation (
    locationID          INT(5)     NOT NULL,
    padCode             VARCHAR(4) NOT NULL,
    parkingLocationCode VARCHAR(4) NOT NULL,
    PRIMARY KEY (LocationID)
);

CREATE TABLE MagTableRecord (
    magID      INT(5) NOT NULL AUTO_INCREMENT,
    dailyMix   INT(2) NOT NULL,
    forcastLow INT(2) NOT NULL,
    PRIMARY KEY (magID)
);

CREATE TABLE Assignment (
    assignmentID INT(5)   NOT NULL AUTO_INCREMENT,
    magID        INT(5)   NOT NULL,
    locationID   INT(5),
    date         DATETIME NOT NULL,
    PRIMARY KEY (assignmentID),
    CONSTRAINT FK_Mag_ID FOREIGN KEY (magID) REFERENCES MagTableRecord (magID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT FK_Location_ID FOREIGN KEY (locationID) REFERENCES ParkingLocation (locationID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE Equipment (
    equipmentID  INT(5) NOT NULL,
    assignmentID INT(5) NOT NULL,
    truckID      INT(5),
    towerID      INT(5),
    status       VARCHAR(4),
    notice       VARCHAR(2000),
    position     INT(2),
    PRIMARY KEY (equipmentID),
    CONSTRAINT FK_Assignment_ID_Equipment FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT ,
    CONSTRAINT CK_Equipment_ID CHECK (
        CASE
            WHEN equipmentID < 1000 THEN truckID = equipmentID
            WHEN equipmentID >= 1000 THEN towerID = equipmentID
        END),
    CONSTRAINT FK_Truck_ID FOREIGN KEY (truckID) REFERENCES Truck (truckID) ON DELETE RESTRICT ON UPDATE RESTRICT ,
    CONSTRAINT FK_Tower_ID FOREIGN KEY (towerID) REFERENCES Tower (towerID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE BrixRecord (
    brixRecordID INT(5)   NOT NULL AUTO_INCREMENT,
    assignmentID INT(5)   NOT NULL,
    nozzle       FLOAT(3) NOT NULL,
    type1        FLOAT(3) NOT NULL,
    type4        FLOAT(3) NOT NULL,
    litersPurged INT(5)   NOT NULL,
    timeMeasured DATETIME NOT NULL,
    PRIMARY KEY (BrixRecordID),
    CONSTRAINT FK_Assignment_ID_Brix FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT ,
    CONSTRAINT CK_litersPurged CHECK ( litersPurged >= 0),
    CHECK ( litersPurged <= 200 )
);

CREATE TABLE Shift (
    shiftID       INT(10)     NOT NULL AUTO_INCREMENT,
    assignmentID  INT(5)      NOT NULL,
    description   VARCHAR(20) NOT NULL,
    timeOfDay     CHAR(2)     NOT NULL,
    employeeName  VARCHAR(50) NOT NULL,
    startTime     DATETIME    NOT NULL,
    endTime       DATETIME    NOT NULL,
    activeBaylead BOOLEAN     NOT NULL,
    hasAvop       BOOLEAN     NOT NULL,
    isGreen       BOOLEAN     NOT NULL,
    PRIMARY KEY (shiftID),
    CONSTRAINT FK_Assignment_ID_Shift FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT ,
    CONSTRAINT CK_timeOfDay CHECK ( timeOfDay = 'AM' OR timeOfDay = 'PM')
);

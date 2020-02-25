/*
    Program Name: MagTableDev
    Author: Mustafa Al Khaldi
    Created: February 21, 2020
    Description: Use Case two updated database scheme for MagTable.
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

CREATE TABLE Truck (
    truckID     INT(5)        NOT NULL,
    status      VARCHAR(4)    NOT NULL,
    notice      VARCHAR(2000) NOT NULL,
    PRIMARY KEY (TruckID)
);

CREATE TABLE Tower (
    towerID  INT(5)      NOT NULL,
    position VARCHAR(25) NOT NULL,
    PRIMARY KEY (towerID)
);

CREATE TABLE Shift
(
    shiftID      INT(10)     NOT NULL AUTO_INCREMENT,
    assignmentID INT(5)      NOT NULL,
    description  VARCHAR(20) NOT NULL,
    employeeName VARCHAR(50) NOT NULL,
    startTime    DATETIME    NOT NULL,
    endTime      DATETIME    NOT NULL,
    noAvop       BOOLEAN     NOT NULL,
    isGreen      BOOLEAN     NOT NULL,
    PRIMARY KEY (shiftID)
);

# CREATE TABLE BrixChart (
#     brixChartID         INT(5)   NOT NULL AUTO_INCREMENT,
#     recommendedDailyMix INT(2)   NOT NULL,
#     brix                FLOAT(3) NOT NULL,
#     freezingPoint       INT(2)   NOT NULL,
#     concentration       FLOAT(3) NOT NULL,
#     PRIMARY KEY (brixChartID)
# );

# CREATE TABLE ParkingLocation (
#     locationID          INT(5)     NOT NULL,
#     padCode             VARCHAR(4) NOT NULL,
#     parkingLocationCode VARCHAR(4) NOT NULL,
#     PRIMARY KEY (LocationID)
# );

# CREATE TABLE MagTableRecord (
#     magID      INT(5) NOT NULL AUTO_INCREMENT,
#     dailyMix   INT(2) NOT NULL,
#     forcastLow INT(2) NOT NULL,
#     date         DATETIME NOT NULL,
#     PRIMARY KEY (magID)
# );

# CREATE TABLE Assignment (
#     assignmentID INT(5)   NOT NULL AUTO_INCREMENT,
#     magID        INT(5)   NOT NULL,
#     locationID   INT(5),
#     PRIMARY KEY (assignmentID),
#     CONSTRAINT FK_Mag_ID FOREIGN KEY (magID) REFERENCES MagTableRecord (magID) ON DELETE RESTRICT ON UPDATE RESTRICT,
#     CONSTRAINT FK_Location_ID FOREIGN KEY (locationID) REFERENCES ParkingLocation (locationID) ON DELETE RESTRICT ON UPDATE RESTRICT
# );


# CREATE TABLE BrixRecord (
#     brixRecordID INT(5)   NOT NULL AUTO_INCREMENT,
#     assignmentID INT(5)   NOT NULL,
#     nozzle       FLOAT(3) NOT NULL,
#     type1        FLOAT(3) NOT NULL,
#     type4        FLOAT(3) NOT NULL,
#     litersPurged INT(5)   NOT NULL,
#     timeMeasured DATETIME NOT NULL,
#     PRIMARY KEY (BrixRecordID),
#     CONSTRAINT FK_Assignment_ID_Brix FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT ,
#     CONSTRAINT CK_litersPurged CHECK ( litersPurged >= 0),
#     CHECK ( litersPurged <= 200 )
# );

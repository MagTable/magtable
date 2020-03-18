/*
    Program Name: MagTableDev
    Author: Mustafa Al Khaldi
    Created: February 21, 2020
    Description: Use Case two updated database scheme for MagTable.
 */
DROP DATABASE IF EXISTS magtabledev;
CREATE DATABASE magtabledev;

USE magtabledev;

CREATE TABLE Role
(
    roleID   INT(1)      NOT NULL,
    rolename VARCHAR(25) NOT NULL,
    PRIMARY KEY (roleID)
);

CREATE TABLE User
(
    userID    INT(5)      NOT NULL AUTO_INCREMENT,
    `role`    INT(2)      NOT NULL,
    username  VARCHAR(32) UNIQUE,
    password  VARCHAR(60) NULL NULL,
    resetflag BOOLEAN DEFAULT true,
    PRIMARY KEY (userID),
    CONSTRAINT FK_User_Role FOREIGN KEY (`role`) REFERENCES `Role` (`roleID`) ON DELETE RESTRICT ON UPDATE RESTRICT
);
CREATE TABLE MagTableRecord
(
    magtableRecordID    INT(5) NOT NULL AUTO_INCREMENT,
    dailyMix            INT(2),
    forecastLow         INT(2),
    publishedBy         VARCHAR(32),
    timePublished       DATETIME DEFAULT NOW(),
    PRIMARY KEY (magtableRecordID)
);

CREATE TABLE Equipment
(
    equipmentID     INT(5)          NOT NULL,
    type            VARCHAR(25)     NOT NULL,   -- tower description / truck type
    status          VARCHAR(4),     -- truck operational status
    notice          VARCHAR(2000),  -- truck operational notices
    active          BOOLEAN,
    PRIMARY KEY (equipmentID)
);



CREATE TABLE BrixRecord
(
    brixRecordID        INT(5) NOT NULL AUTO_INCREMENT,
    equipmentID         INT(5) NOT NULL,
    nozzle              FLOAT(3),
    type1               FLOAT(3),
    type4               FLOAT(3),
    litersPurged        INT(5),
    timeMeasured        DATETIME,
    PRIMARY KEY (BrixRecordID),
    CONSTRAINT FK_BrixRecord_Assignment FOREIGN KEY (equipmentID) REFERENCES Equipment (equipmentID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT CK_equipment_truck CHECK (equipmentID >= 0 AND equipmentID <= 1000), -- must be a truck
    CONSTRAINT CK_litersPurged CHECK (litersPurged >= 0 AND litersPurged <= 1000)
);

CREATE TABLE AssignmentParkingLocation
(
    assignmentParkingLocationID INT(10) NOT NULL AUTO_INCREMENT,
    parkingLocationID           INT(5),
    position                    VARCHAR(6),
    bay                         INT(2),
    PRIMARY KEY (assignmentParkingLocationID)
);

CREATE TABLE AssignmentEquipment
(
    assignmentEquipmentID  INT(10) NOT NULL AUTO_INCREMENT,
    equipmentID  INT(5)  NOT NULL,
    magtableRecordID    INT(5) NOT NULL,
    assignmentParkingLocationID INT(10),
    status       VARCHAR(4),
    notice       VARCHAR(2000),
    PRIMARY KEY (assignmentEquipmentID),
    CONSTRAINT FK_Mag_ID FOREIGN KEY (magtableRecordID) REFERENCES MagTableRecord (magtableRecordID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT FK_EQUIPMENT FOREIGN KEY (equipmentID) REFERENCES Equipment (equipmentID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT FK_PLLOC FOREIGN KEY (assignmentParkingLocationID) REFERENCES assignmentparkinglocation (assignmentParkingLocationID) ON DELETE RESTRICT ON UPDATE RESTRICT

);

CREATE TABLE Shift
(
    shiftID      INT(10) NOT NULL, -- todo w2w unique ids
    assignmentEquipmentID  INT(10) NOT NULL,
    timeOfDay    VARCHAR(2),
    isPrimary    BOOLEAN,
    description  VARCHAR(30),
    name         VARCHAR(50),
    startTime    VARCHAR(4),
    endTime      VARCHAR(4),
    noAvop       BOOLEAN,
    isGreen      BOOLEAN,
    PRIMARY KEY (shiftID, assignmentEquipmentID),
    CONSTRAINT FK_ShiftEquip FOREIGN KEY (assignmentEquipmentID) REFERENCES AssignmentEquipment (assignmentEquipmentID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT fk_timeofday CHECK(timeOfDay = 'PM' OR timeOfDay = 'AM')


);

CREATE TABLE W2WShift
(
    shiftID      INT(10) NOT NULL AUTO_INCREMENT,
    description  VARCHAR(30),
    name         VARCHAR(50),
    startTime    VARCHAR(4),
    endTime      VARCHAR(4),
    noAvop       BOOLEAN,
    isGreen      BOOLEAN,
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

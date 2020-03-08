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

CREATE TABLE Truck
(
    truckID INT(5) NOT NULL,
    status  VARCHAR(4),
    notice  VARCHAR(2000),
    PRIMARY KEY (TruckID),
    CONSTRAINT CK_Truck_Status CHECK (status = 'GO' OR status = 'INOP' OR status = 'CON' OR status = 'OOS')
);

CREATE TABLE Tower
(
    towerID  INT(5)      NOT NULL,
    position VARCHAR(25) NOT NULL,
    PRIMARY KEY (towerID)
);

CREATE TABLE ParkingLocation
(
    id        INT(5)     NOT NULL,
    apron     VARCHAR(4) NOT NULL,
    phonetic  CHAR(1)    NOT NULL,
    east      BOOLEAN    NOT NULL,
    center    BOOLEAN    NOT NULL,
    west      BOOLEAN    NOT NULL,
    `left`    INT(2),
    `right`   INT(2),
    composite INT(2),
    `double`  BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE MagTableRecord
(
    magID         INT(5) NOT NULL AUTO_INCREMENT,
    dailyMix      INT(2),
    forecastLow   INT(2),
    publishedBY   VARCHAR(32),
    timePublished DATETIME,
    PRIMARY KEY (magID)
);

CREATE TABLE Assignment
(
    assignmentID    INT(10) NOT NULL AUTO_INCREMENT,
    magID           INT(5)  NOT NULL,
    PRIMARY KEY (assignmentID),
    CONSTRAINT FK_Mag_ID FOREIGN KEY (magID) REFERENCES MagTableRecord (magID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE PlAssignment
(
    plAssignmentID INT(10) NOT NULL AUTO_INCREMENT,
    assignmentID   INT(10) NOT NULL,
    id             INT(5),
    position       VARCHAR(6),
    bay            INT(2),
    PRIMARY KEY (plAssignmentID),
    CONSTRAINT FK_PLA_Assignment FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT FK_PLA_PL FOREIGN KEY (id) REFERENCES ParkingLocation (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);


CREATE TABLE Equipment
(
    equipmentID  INT(10) NOT NULL AUTO_INCREMENT,
    id           INT(5)  NOT NULL,
    assignmentID INT(10) NOT NULL,
    status       VARCHAR(4),
    notice       VARCHAR(2000),
    PRIMARY KEY (equipmentID),
    CONSTRAINT FK_Equipment_Assignment FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE Shift
(
    shiftID      INT(10) NOT NULL AUTO_INCREMENT,
    assignmentID INT(10) NOT NULL,
    description  VARCHAR(20),
    name         VARCHAR(50),
    startTime    DATETIME,
    endTime      DATETIME,
    noAvop       BOOLEAN,
    isGreen      BOOLEAN,
    PRIMARY KEY (shiftID),
    CONSTRAINT FK_Shift_Assignment FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE BrixRecord
(
    brixRecordID INT(5) NOT NULL AUTO_INCREMENT,
    assignmentID INT(5) NOT NULL,
    nozzle       FLOAT(3),
    type1        FLOAT(3),
    type4        FLOAT(3),
    litersPurged INT(5),
    timeMeasured DATETIME,
    PRIMARY KEY (BrixRecordID),
    CONSTRAINT FK_BrixRecord_Assignment FOREIGN KEY (assignmentID) REFERENCES Assignment (assignmentID) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT CK_litersPurged CHECK (litersPurged >= 0 AND litersPurged <= 200)
);



# CREATE TABLE BrixChart (
#     brixChartID         INT(5)   NOT NULL AUTO_INCREMENT,
#     recommendedDailyMix INT(2)   NOT NULL,
#     brix                FLOAT(3) NOT NULL,
#     freezingPoint       INT(2)   NOT NULL,
#     concentration       FLOAT(3) NOT NULL,
#     PRIMARY KEY (brixChartID)
# );

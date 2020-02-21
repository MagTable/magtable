use magtabledev;
/*
    Program Name: MagTableInsert
    Author: Mustafa Al Khaldi
    Created: February 21, 2020
    Description: Use Case two updated database inserts for the database.
 */

DELETE FROM user;
DELETE FROM role;
DELETE FROM brixchart;
DELETE FROM equipment;
DELETE FROM tower;
DELETE FROM position;
DELETE FROM truck;
DELETE FROM shift;
DELETE FROM brixrecord;
DELETE FROM assignment;
DELETE FROM parkinglocation;
DELETE FROM magtablerecord;

/*
 These inserts are inorder to set up the database in terms of dependencies. When data about assignments and shifts
 are inserted, these initials inserts prevent foreign key constraints from popping up and preventing testing.
 Make sure to use these data points when testing data or add more data points as you see fit.
 When adding data points, rerun the whole script inorder to spot any constraints you are triggering.
 */
INSERT INTO role VALUES (1, 'System Administrator');
INSERT INTO role VALUES (2, 'Personnel Manager');
INSERT INTO role VALUES (3, 'Mechanic');

INSERT INTO `user` (`role`, username, password, resetflag) VALUES (1, 'mustafa', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);
INSERT INTO `user` (role, username, password,resetflag) VALUES (2, 'david', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);
INSERT INTO `user` (role, username, password, resetflag) VALUES (3, 'steven', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);

INSERT INTO position (positionID, description) VALUES (1, 'Tower Spotter');
INSERT INTO position (positionID, description) VALUES (2, 'EDA-CTM');
INSERT INTO position (positionID, description) VALUES (3, 'EDA-Ice Man');
INSERT INTO position (positionID, description) VALUES (4, 'EDA-Ice House');
INSERT INTO position (positionID, description) VALUES (5, 'WDA-CTM');
INSERT INTO position (positionID, description) VALUES (6, 'WDA-Ice Man');
INSERT INTO position (positionID, description) VALUES (7, 'WDA-Ice House');

INSERT INTO tower (towerID, position) VALUES (1000, 1);
INSERT INTO tower (towerID, position) VALUES (1001, 2);
INSERT INTO tower (towerID, position) VALUES (1002, 3);
INSERT INTO tower (towerID, position) VALUES (1003, 4);
INSERT INTO tower (towerID, position) VALUES (1011, 5);
INSERT INTO tower (towerID, position) VALUES (1012, 6);
INSERT INTO tower (towerID, position) VALUES (1013, 7);

INSERT INTO truck (truckID, status, notice, vehicleType) VALUES  (24, 'GO', '', '');
INSERT INTO truck (truckID, status, notice, vehicleType) VALUES  (26, 'GO', '', '');
INSERT INTO truck (truckID, status, notice, vehicleType) VALUES  (32, 'GO', '', '');
INSERT INTO truck (truckID, status, notice, vehicleType) VALUES  (34, 'GO', '', '');
INSERT INTO truck (truckID, status, notice, vehicleType) VALUES  (36, 'GO', '', '');

/*
 These inserts are desgined to show a sample of data will appear and be stored in the database.
 This is the data you are trying to test for in order to stress test the database or find out how and where
 information is stored in the database.
 You are expected to check back on the inserts above to see if you are referencing a non existent tower or truck.
 Failure to do will result in a foreign key restraint being triggered.
 */

INSERT INTO magtablerecord (dailyMix, forcastLow) VALUES (10, -10);

#Assignment 1
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, truckID, status, notice) VALUES (1, 24, 'CON', 'Equipment Conditional Status Message');

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (1, 'Mechanic', 'AM', 'MJ kochuk', '2020-02-20 04:00:00', '2020-02-20 16:00:00', FALSE, FALSE, FALSE);

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (1, 'Mechanic', 'PM', 'Arran Woodruff', '2020-02-20 04:00:00', '2020-02-20 16:00:00', FALSE, FALSE, FALSE);

#Assignment 2
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, truckID, status, notice) VALUES (2, 26, 'GO', '');

INSERT INTO brixrecord (assignmentID, nozzle, type1, type4, litersPurged, timeMeasured)
VALUES (2, 24.5, 52.3, 32.4, 80, '2020-02-20 16:30:00');

#Assignment 3
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, truckID, status, notice) VALUES (3, 32, 'INOP', '');

#Assignment 4
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, truckID, status, notice) VALUES (4, 34, 'OOS', '');

#Assignment 5
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, truckID, status, notice) VALUES (5, 34, 'OOS', '');

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (5, 'Mechanic', 'AM', 'Mustafa Al Khaldi', '2020-02-21 04:00:00', '2020-02-21 16:00:00', FALSE, FALSE, FALSE);

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (5, 'Mechanic', 'AM', 'Steven Wong', '2020-02-21 04:00:00', '2020-02-21 16:00:00', FALSE, FALSE, FALSE);

#Assignment 6
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, towerID, position) VALUES (6, 1000, 1);

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (6, 'Tower Spotter', 'AM', 'Mustafa Al Khaldi', '2020-02-22 04:00:00', '2020-02-22 16:00:00', FALSE, FALSE, FALSE);

#Assignment 7
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, towerID, position) VALUES (7, 1001, 2);

#Assignment 8
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, towerID, position) VALUES (7, 1002, 3);

#Assignment 9
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, towerID, position) VALUES (9, 1003, 4);

#Assignment 10
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, towerID, position) VALUES (10, 1011, 5);

#Assignment 11
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, towerID, position) VALUES (11, 1012, 6);

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (11, 'Tower Spotter', 'AM', 'Mustafa Al Khaldi', '2020-02-23 04:00:00', '2020-02-23 16:00:00', FALSE, FALSE, FALSE);

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (11, 'Ice Man', 'PM', 'Steven Wong', '2020-02-23 04:00:00', '2020-02-23 16:00:00', FALSE, FALSE, FALSE);

#Assignment 12
INSERT INTO assignment (magID, date) VALUES (1 , current_date);

INSERT INTO equipment (assignmentID, towerID, position) VALUES (12, 1013, 7);

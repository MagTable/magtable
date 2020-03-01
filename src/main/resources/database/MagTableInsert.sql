/*
    Program Name: MagTableInsert
    Author: Mustafa Al Khaldi
    Created: February 21, 2020
    Description: Use Case two updated database inserts for the database.
 */

use magtabledev;

DELETE FROM BrixRecord;
DELETE FROM Shift;
DELETE FROM Equipment;
DELETE FROM Assignment;
DELETE FROM MagTableRecord;
DELETE FROM ParkingLocation;
DELETE FROM Tower;
DELETE FROM Truck;
DELETE FROM `User`;
DELETE FROM Role;



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

INSERT INTO truck (truckID, status, notice) VALUES  (6, 'CON', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (8, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (9, 'INOP', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (14, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (15, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (16, 'CON', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (17, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (18, 'INOP', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (19, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (20, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (21, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (22, 'INOP', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (23, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (24, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (25, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (26, 'INOP', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (27, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (28, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (29, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (30, 'INOP', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (31, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (32, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (33, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (34, 'INOP', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (35, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (36, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (37, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (38, 'INOP', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (39, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (40, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (41, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (42, 'INOP', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (43, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (44, 'GO', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (45, 'OOS', 'Equipment Conditional Status Message');
INSERT INTO truck (truckID, status, notice) VALUES  (46, 'GO', 'Equipment Conditional Status Message');

INSERT INTO tower (towerID, position) VALUES (1000, 'Tower Spotter');
INSERT INTO tower (towerID, position) VALUES (1001, 'EDA-CTM');
INSERT INTO tower (towerID, position) VALUES (1002, 'EDA-Ice Man');
INSERT INTO tower (towerID, position) VALUES (1003, 'EDA-Ice House');
INSERT INTO tower (towerID, position) VALUES (1011, 'WDA-CTM');
INSERT INTO tower (towerID, position) VALUES (1012, 'WDA-Ice Man');
INSERT INTO tower (towerID, position) VALUES (1013, 'WDA-Ice House');

INSERT INTO parkingLocation (id, apron, code) VALUES (1, 'WDA', 'AW1');
INSERT INTO parkingLocation (id, apron, code) VALUES (2, 'WDA', 'AE1');
INSERT INTO parkingLocation (id, apron, code) VALUES (3, 'WDA', 'BE');
INSERT INTO parkingLocation (id, apron, code) VALUES (4, 'WDA', 'BE1');
INSERT INTO parkingLocation (id, apron, code) VALUES (5, 'WDA', 'BE2');
INSERT INTO parkingLocation (id, apron, code) VALUES (6, 'WDA', 'BW');
INSERT INTO parkingLocation (id, apron, code) VALUES (7, 'WDA', 'BW1');
INSERT INTO parkingLocation (id, apron, code) VALUES (8, 'WDA', 'BW2');
INSERT INTO parkingLocation (id, apron, code) VALUES (9, 'WDA', 'CE');
INSERT INTO parkingLocation (id, apron, code) VALUES (10, 'WDA', 'CE2');
INSERT INTO parkingLocation (id, apron, code) VALUES (11, 'WDA', 'CE3');
INSERT INTO parkingLocation (id, apron, code) VALUES (12, 'WDA', 'CW');
INSERT INTO parkingLocation (id, apron, code) VALUES (13, 'WDA', 'CW2');
INSERT INTO parkingLocation (id, apron, code) VALUES (14, 'WDA', 'CW3');
INSERT INTO parkingLocation (id, apron, code) VALUES (15, 'WDA', 'D4');
INSERT INTO parkingLocation (id, apron, code) VALUES (16, 'WDA', 'D4');
INSERT INTO parkingLocation (id, apron, code) VALUES (17, 'EDA', 'AE1');
INSERT INTO parkingLocation (id, apron, code) VALUES (18, 'EDA', 'AC1');
INSERT INTO parkingLocation (id, apron, code) VALUES (19, 'EDA', 'AW1');
INSERT INTO parkingLocation (id, apron, code) VALUES (20, 'EDA', 'BE');
INSERT INTO parkingLocation (id, apron, code) VALUES (21, 'EDA', 'BE1');
INSERT INTO parkingLocation (id, apron, code) VALUES (22, 'EDA', 'BE3');
INSERT INTO parkingLocation (id, apron, code) VALUES (23, 'EDA', 'BC');
INSERT INTO parkingLocation (id, apron, code) VALUES (24, 'EDA', 'BC1');
INSERT INTO parkingLocation (id, apron, code) VALUES (25, 'EDA', 'BC3');
INSERT INTO parkingLocation (id, apron, code) VALUES (26, 'EDA', 'BW');
INSERT INTO parkingLocation (id, apron, code) VALUES (27, 'EDA', 'BW1');
INSERT INTO parkingLocation (id, apron, code) VALUES (28, 'EDA', 'BW3');
INSERT INTO parkingLocation (id, apron, code) VALUES (29, 'EDA', 'CE');
INSERT INTO parkingLocation (id, apron, code) VALUES (30, 'EDA', 'CE3');
INSERT INTO parkingLocation (id, apron, code) VALUES (31, 'EDA', 'CE4');
INSERT INTO parkingLocation (id, apron, code) VALUES (32, 'EDA', 'CC');
INSERT INTO parkingLocation (id, apron, code) VALUES (33, 'EDA', 'CC3');
INSERT INTO parkingLocation (id, apron, code) VALUES (34, 'EDA', 'CC4');
INSERT INTO parkingLocation (id, apron, code) VALUES (35, 'EDA', 'CW');
INSERT INTO parkingLocation (id, apron, code) VALUES (36, 'EDA', 'CW3');
INSERT INTO parkingLocation (id, apron, code) VALUES (37, 'EDA', 'CW4');
INSERT INTO parkingLocation (id, apron, code) VALUES (38, 'EDA', 'DE');
INSERT INTO parkingLocation (id, apron, code) VALUES (39, 'EDA', 'DE4');
INSERT INTO parkingLocation (id, apron, code) VALUES (40, 'EDA', 'DE6');
INSERT INTO parkingLocation (id, apron, code) VALUES (41, 'EDA', 'DC');
INSERT INTO parkingLocation (id, apron, code) VALUES (42, 'EDA', 'DC4');
INSERT INTO parkingLocation (id, apron, code) VALUES (43, 'EDA', 'DC6');
INSERT INTO parkingLocation (id, apron, code) VALUES (44, 'EDA', 'DW');
INSERT INTO parkingLocation (id, apron, code) VALUES (45, 'EDA', 'DW4');
INSERT INTO parkingLocation (id, apron, code) VALUES (46, 'EDA', 'DW6');
INSERT INTO parkingLocation (id, apron, code) VALUES (47, 'EDA', 'EE');
INSERT INTO parkingLocation (id, apron, code) VALUES (48, 'EDA', 'EE6');
INSERT INTO parkingLocation (id, apron, code) VALUES (49, 'EDA', 'EE7');
INSERT INTO parkingLocation (id, apron, code) VALUES (50, 'EDA', 'EC');
INSERT INTO parkingLocation (id, apron, code) VALUES (51, 'EDA', 'EC6');
INSERT INTO parkingLocation (id, apron, code) VALUES (52, 'EDA', 'EC7');
INSERT INTO parkingLocation (id, apron, code) VALUES (53, 'EDA', 'EW');
INSERT INTO parkingLocation (id, apron, code) VALUES (54, 'EDA', 'EW6');
INSERT INTO parkingLocation (id, apron, code) VALUES (55, 'EDA', 'EW7');
INSERT INTO parkingLocation (id, apron, code) VALUES (56, 'EDA', 'FE');
INSERT INTO parkingLocation (id, apron, code) VALUES (57, 'EDA', 'FE7');
INSERT INTO parkingLocation (id, apron, code) VALUES (58, 'EDA', 'FE9');
INSERT INTO parkingLocation (id, apron, code) VALUES (59, 'EDA', 'FC');
INSERT INTO parkingLocation (id, apron, code) VALUES (60, 'EDA', 'FC7');
INSERT INTO parkingLocation (id, apron, code) VALUES (61, 'EDA', 'FC9');
INSERT INTO parkingLocation (id, apron, code) VALUES (62, 'EDA', 'FW');
INSERT INTO parkingLocation (id, apron, code) VALUES (63, 'EDA', 'FW7');
INSERT INTO parkingLocation (id, apron, code) VALUES (64, 'EDA', 'FW9');
INSERT INTO parkingLocation (id, apron, code) VALUES (65, 'EDA', 'GE9');
INSERT INTO parkingLocation (id, apron, code) VALUES (66, 'EDA', 'GC9');
INSERT INTO parkingLocation (id, apron, code) VALUES (67, 'EDA', 'GW9');

/*
 These inserts are desgined to show a sample of data will appear and be stored in the database.
 This is the data you are trying to test for in order to stress test the database or find out how and where
 information is stored in the database.
 You are expected to check back on the inserts above to see if you are referencing a non existent tower or truck.
 Failure to do will result in a foreign key restraint being triggered.
 */

-- MagTableRecord 1
INSERT INTO magTableRecord (dailyMix, forecastLow, publishedBy, timePublished) VALUES (20, 5, 'Mustafa', '2020-02-22T04:00:00');

-- Assignment
INSERT INTO assignment (magID, parkingLocation) VALUES (1, 5);
INSERT INTO assignment (magID, parkingLocation) VALUES (1, 10);
INSERT INTO assignment (magID) VALUES (1);
INSERT INTO assignment (magID) VALUES (1);

-- Equipment
INSERT INTO equipment (id, assignmentID, status, notice) VALUES (24, 1, 'GO', '');
INSERT INTO equipment (id, assignmentID, status, notice) VALUES (27, 2, 'CON', 'Equipment Conditional Status Message');
INSERT INTO equipment (id, assignmentID, status, notice) VALUES (24, 3, 'INOP', '');
INSERT INTO equipment (id, assignmentID) VALUES (24, 4);

-- Shift
INSERT INTO shift (assignmentID, description, name, startTime, endTime, noAvop, isGreen) VALUES (1, 'Bay Lead', 'Arran Woodruff', '2020-02-22T04:00:00', '2020-02-22T16:00:00', FALSE, FALSE);
INSERT INTO shift (assignmentID, description, name, startTime, endTime, noAvop, isGreen) VALUES (1, 'Technician', 'David Ward', '2020-02-22T04:00:00', '2020-02-22T16:00:00', TRUE, TRUE);

INSERT INTO shift (assignmentID, description, name, startTime, endTime, noAvop, isGreen) VALUES (2, 'Technician', 'Steven Wong', '2020-02-22T16:00:00', '2020-02-23T04:00:00', FALSE, FALSE);

INSERT INTO shift (assignmentID, description, name, startTime, endTime, noAvop, isGreen) VALUES (4, 'Icehouse', 'Tower Spotter', '2020-02-22T04:00:00', '2020-02-22T16:00:00', FALSE, FALSE);

-- BrixRecord
INSERT INTO brixRecord (assignmentID, nozzle, type1, type4, litersPurged, timeMeasured) VALUES (1, 23.5, 53.1, 32.4, 56, '2020-02-22T04:12:33');

INSERT INTO brixRecord (assignmentID, nozzle, type1, type4, litersPurged, timeMeasured) VALUES (2, 21.2, 52.3, 32.4, 67, '2020-02-22T04:12:33');


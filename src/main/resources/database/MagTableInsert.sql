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

INSERT INTO truck (truckID, status, notice) VALUES  (6, 'CON', 'T4 Gauge not working; Burner won''t light; Tank Temp gauge read 60,,cold...OS S Cameron 02-26-20-');
INSERT INTO truck (truckID, status, notice) VALUES  (8, 'CON', 'contains mag 30s nozzle  /No charger in bucket blower inop due to screen issue');
INSERT INTO truck (truckID, status, notice) VALUES  (9, 'OOS', '');
INSERT INTO truck (truckID, status, notice) VALUES  (14, 'INOP', 'T4 Gauge not working; Burner won''t light; Tank Temp gauge read 60,,cold...OS S Cameron 02-26-20-');
INSERT INTO truck (truckID, status, notice) VALUES  (15, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (16, 'CON', 'No radio in lower cab. Radio not working in upper cab.  // Panel P59 intermittent. 17-Feb-2020 JK116');
INSERT INTO truck (truckID, status, notice) VALUES  (17, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (18, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (19, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (20, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (21, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (22, 'INOP', 'drives in Hydrostatic only, shifter for D and R broken / Intermittent Spraying and main engine repeatedly dies. ');
INSERT INTO truck (truckID, status, notice) VALUES  (23, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (24, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (25, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (26, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (27, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (28, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (29, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (30, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (31, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (32, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (33, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (34, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (35, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (36, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (37, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (38, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (39, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (40, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (41, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (42, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (43, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (44, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (45, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (46, 'GO', '');


INSERT INTO tower (towerID, position) VALUES (1000, 'Tower Spotter');
INSERT INTO tower (towerID, position) VALUES (1001, 'EDA CTM');
INSERT INTO tower (towerID, position) VALUES (1002, 'EDA Iceman');
INSERT INTO tower (towerID, position) VALUES (1003, 'EDA Icehouse');
INSERT INTO tower (towerID, position) VALUES (1011, 'WDA CTM');
INSERT INTO tower (towerID, position) VALUES (1012, 'WDA Iceman');
INSERT INTO tower (towerID, position) VALUES (1013, 'WDA Icehouse');

INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `right`) VALUES (1, 'WDA', 'A', TRUE, FALSE, TRUE, 1);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`) VALUES (2, 'WDA', 'B', TRUE, FALSE, TRUE, 1, 2);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`, `composite`) VALUES (3, 'WDA', 'C', TRUE, FALSE, TRUE, 2, 4, 3);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`, `double`) VALUES (4, 'WDA', 'D', TRUE, FALSE, FALSE, 4, TRUE);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west,`right`) VALUES (5, 'EDA', 'A', TRUE, TRUE, TRUE, 1);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`, `composite`) VALUES (6, 'EDA', 'B', TRUE, TRUE, TRUE, 1, 4, 2);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`) VALUES (7, 'EDA', 'C', TRUE, TRUE, TRUE, 3, 4);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`, `composite`) VALUES (8, 'EDA', 'D', TRUE, TRUE, TRUE, 4, 6, 5);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`) VALUES (9, 'EDA', 'E', TRUE, TRUE, TRUE, 6, 7);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`) VALUES (10, 'EDA', 'F', TRUE, TRUE, TRUE, 7, 9);
INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`) VALUES (11, 'EDA', 'G', TRUE, TRUE, TRUE, 9);

/*
 These inserts are desgined to show a sample of data will appear and be stored in the database.
 This is the data you are trying to test for in order to stress test the database or find out how and where
 information is stored in the database.
 You are expected to check back on the inserts above to see if you are referencing a non existent tower or truck.
 Failure to do will result in a foreign key restraint being triggered.
 */

-- MagTableRecord 1
-- INSERT INTO magTableRecord (dailyMix, forecastLow, publishedBy, timePublished) VALUES (20, 5, 'Mustafa', '2020-02-22T04:00:00');

-- Assignment
# INSERT INTO assignment (magID) VALUES (1);
# INSERT INTO assignment (magID) VALUES (1);
# INSERT INTO assignment (magID) VALUES (1);
# INSERT INTO assignment (magID) VALUES (1);
#
# -- Equipment
# INSERT INTO equipment (id, assignmentID, status, notice) VALUES (24, 1, 'GO', '');
# INSERT INTO equipment (id, assignmentID, status, notice) VALUES (27, 2, 'CON', 'Equipment Conditional Status Message');
# INSERT INTO equipment (id, assignmentID, status, notice) VALUES (24, 3, 'INOP', '');
# INSERT INTO equipment (id, assignmentID) VALUES (24, 4);
#
# -- Shift
# INSERT INTO shift (assignmentID, description, name, startTime, endTime, noAvop, isGreen) VALUES (1, 'Bay Lead', 'Arran Woodruff', '2020-02-22T04:00:00', '2020-02-22T16:00:00', FALSE, FALSE);
# INSERT INTO shift (assignmentID, description, name, startTime, endTime, noAvop, isGreen) VALUES (1, 'Technician', 'David Ward', '2020-02-22T04:00:00', '2020-02-22T16:00:00', TRUE, TRUE);
#
# INSERT INTO shift (assignmentID, description, name, startTime, endTime, noAvop, isGreen) VALUES (2, 'Technician', 'Steven Wong', '2020-02-22T16:00:00', '2020-02-23T04:00:00', FALSE, FALSE);
#
# INSERT INTO shift (assignmentID, description, name, startTime, endTime, noAvop, isGreen) VALUES (4, 'Icehouse', 'Tower Spotter', '2020-02-22T04:00:00', '2020-02-22T16:00:00', FALSE, FALSE);
#
# -- BrixRecord
# INSERT INTO brixRecord (assignmentID, nozzle, type1, type4, litersPurged, timeMeasured) VALUES (1, 23.5, 53.1, 32.4, 56, '2020-02-22T04:12:33');
#
# INSERT INTO brixRecord (assignmentID, nozzle, type1, type4, litersPurged, timeMeasured) VALUES (2, 21.2, 52.3, 32.4, 67, '2020-02-22T04:12:33');


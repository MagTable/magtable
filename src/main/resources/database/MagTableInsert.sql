/*
    Program Name: MagTableInsert
    Author: Mustafa Al Khaldi
    Created: February 21, 2020
    Description: Use Case two updated database inserts for the database.
 */

USE magtabledev;

DELETE
FROM BrixRecord;
DELETE
FROM Shift;
DELETE
FROM Assignment;
DELETE
FROM MagTableRecord;
DELETE
FROM Equipment;
DELETE
FROM `User`;
DELETE
FROM Role;

/*
 These inserts are inorder to set up the database in terms of dependencies. When data about assignments and shifts
 are inserted, these initials inserts prevent foreign key constraints from popping up and preventing testing.
 Make sure to use these data points when testing data or add more data points as you see fit.
 When adding data points, rerun the whole script inorder to spot any constraints you are triggering.
 */
INSERT INTO role
VALUES (1, 'System Administrator');
INSERT INTO role
VALUES (2, 'Personnel Manager');
INSERT INTO role
VALUES (3, 'Mechanic');

INSERT INTO `user` (`role`, username, password, resetflag)
VALUES (1, 'mustafa', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);
INSERT INTO `user` (role, username, password, resetflag)
VALUES (2, 'david', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);
INSERT INTO `user` (role, username, password, resetflag)
VALUES (3, 'steven', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);

-- SERVICE VEHICLES
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (1 , 'SVV', 'GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (2 , 'SVV', 'GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (3 , 'SVV', 'GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (7 , 'SVV', 'INOP', 'Nozzle Swapped with 36', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (10, 'SVV', 'GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (11, 'SVV', 'CON', 'at menzies escorting mag 30', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (13, 'SVV', 'GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (99, 'SVV', 'GO', '', true);
-- DEICE TRUCKS
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (6, 'ICE','CON', 'T4 Gauge not working; Burner won''t light; Tank Temp gauge read 60,,cold...OS S Cameron 02-26-20-', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (8, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (9, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (14, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (15, 'ICE','CON', 'contains mag 30s nozzle  /No charger in bucket blower inop due to screen issue', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (16, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (17, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (18, 'ICE','INOP', 'drives in Hydrostatic only, shifter for D and R broken / Intermittent Spraying and main engine repeatedly dies.', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (19, 'ICE','CON', 'T4 Gauge not working; Burner won''t light; Tank Temp gauge read 60,,cold...OS S Cameron 02-26-20-', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (20, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (21, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (22, 'ICE','CON', 'No radio in lower cab. Radio not working in upper cab.  // Panel P59 intermittent. 17-Feb-2020 JK116', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (23, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (24, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (25, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (26, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (27, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (28, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (29, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (30, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (31, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (32, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (33, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (34, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (35, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (36, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (37, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (38, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (39, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (40, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (41, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (42, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (43, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (44, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (45, 'ICE','GO', '', true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (46, 'ICE','GO', '', true);
-- TOWER EQUIPMENT
INSERT INTO Equipment (equipmentID, type, status, notice, active) VALUES (1000, 'Tower Spotter', null, null, true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) VALUES (1001, 'EDA CTM', null, null, true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) VALUES (1002, 'EDA Iceman', null, null, true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) VALUES (1003, 'EDA Icehouse', null, null, true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) VALUES (1011, 'WDA CTM', null, null, true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) VALUES (1012, 'WDA Iceman', null, null, true);
INSERT INTO Equipment (equipmentID, type, status, notice, active) VALUES (1013, 'WDA Icehouse', null, null, true);

# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `right`) VALUES (1, 'WDA', 'A', TRUE, FALSE, TRUE, 1);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`) VALUES (2, 'WDA', 'B', TRUE, FALSE, TRUE, 1, 2);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`, `composite`) VALUES (3, 'WDA', 'C', TRUE, FALSE, TRUE, 2, 4, 3);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`, `double`) VALUES (4, 'WDA', 'D', TRUE, FALSE, FALSE, 4, TRUE);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west,`right`) VALUES (5, 'EDA', 'A', TRUE, TRUE, TRUE, 1);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`, `composite`) VALUES (6, 'EDA', 'B', TRUE, TRUE, TRUE, 1, 4, 2);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`) VALUES (7, 'EDA', 'C', TRUE, TRUE, TRUE, 3, 4);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`, `composite`) VALUES (8, 'EDA', 'D', TRUE, TRUE, TRUE, 4, 6, 5);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`) VALUES (9, 'EDA', 'E', TRUE, TRUE, TRUE, 6, 7);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`,`right`) VALUES (10, 'EDA', 'F', TRUE, TRUE, TRUE, 7, 9);
# INSERT INTO parkinglocation (id, apron, phonetic, east, center, west, `left`) VALUES (11, 'EDA', 'G', TRUE, TRUE, TRUE, 9);

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
# INSERT INTO brixRecord (equipmentID, nozzle, type1, type4, litersPurged, timeMeasured) VALUES (23, 23.5, 53.1, 32.4, 56, '2020-02-22T04:12:33');
# INSERT INTO brixRecord (equipmentID, nozzle, type1, type4, litersPurged, timeMeasured) VALUES (36, 21.2, 52.3, 32.4, 67, '2020-02-22T04:12:33');
-- BrixChart
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (0, 0, 0, 10, 0);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (8.5, 12.8, -5, 5, 15);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (9.9, 15.0, -6, 4, 15);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (11.2, 17.0, -7, 3, 20);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (12.4, 19.0, -8, 2, 20);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (13.6, 20.8, -9, 1, 20);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (14.7, 22.6, -10, 0, 25);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (15.7, 24.3, -11, -1, 25);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (16.7, 25.9, -12, -2, 25);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (17.6, 27.4, -13, -3, 30);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (18.5, 28.8, -14, -4, 30);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (19.3, 30.2, -15, -5, 30);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (20.1, 31.5, -16, -6, 35);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (20.8, 32.8, -17, -7, 35);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (21.5, 34.0, -18, -8, 35);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (22.2, 35.2, -19, -9, 35);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (22.9, 36.3, -20, -10, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (23.5, 37.4, -21, -11, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (24.1, 38.5, -22, -12, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (24.7, 39.5, -23, -13, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (25.2, 40.5, -24, -14, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (25.8, 41.5, -25, -15, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (26.3, 42.4, -26, -16, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (26.8, 43.3, -27, -17, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (27.3, 44.2, -28, -18, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (27.8, 45.1, -29, -19, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (28.3, 46.0, -30, -20, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (28.8, 46.9, -31, -21, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (29.2, 47.4, -32, -22, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (29.7, 48.6, -33, -23, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (30.1, 49.4, -34, -24, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (30.5, 50.3, -35, -25, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (31.0, 51.1, -36, -26, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (31.4, 51.9, -37, -27, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (31.8, 52.7, -38, -28, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (32.2, 53.5, -39, -29, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (32.6, 54.3, -40, -30, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (33.1, 55.1, -41, -31, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (33.4, 55.9, -42, -32, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (33.8, 56.7, -43, -33, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (34.2, 57.4, -44, -34, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (34.6, 58.2, -45, -35, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (35.0, 58.9, -46, -36, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (35.3, 59.6, -47, -37, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (35.7, 60.3, -48, -38, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (36.0, 61.0, -49, -39, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (36.3, 61.7, -50, -40, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (36.6, 62.3, -51, -41, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (36.9, 63.0, -52, -42, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (37.2, 63.5, -53, -43, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (37.5, 64.1, -54, -44, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix)
values (37.7, 64.6, -55, -45, 65);



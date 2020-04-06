/*
    Program Name: MagTableInsert
    Author: Mustafa Al Khaldi, David Ward, Arran Woodruff
    Created: March 23, 2020
    Description: Use Case two updated database inserts for the database.
 */

use magtabledev;

DELETE FROM BrixRecord;
DELETE FROM Shift;
DELETE FROM assignment;
DELETE FROM MagTableRecord;
DELETE FROM assignment;
DELETE FROM Equipment;
DELETE FROM `User`;
DELETE FROM Role;
DELETE FROM parkingLocation;
DELETE FROM BrixChart;

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

-- SERVICE VEHICLES
INSERT INTO Equipment (equipmentID, type, status, notice, active) values (1 , 'SVV', 'GO', '', false);
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

INSERT INTO parkinglocation (zoneID,apron,phonetic, position, bay) values (1 ,'WDA', 'A', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (1 ,'WDA', 'A', 'W', null);

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (2 ,'WDA', 'B', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (2 ,'WDA', 'B', 'E', '1');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (2 ,'WDA', 'B', 'E', '2');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (2 ,'WDA', 'B', 'W', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (2 ,'WDA', 'B', 'W', '1');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (2 ,'WDA', 'B', 'W', '2');

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (3 ,'WDA', 'C', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (3 ,'WDA', 'C', 'E', '2');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (3 ,'WDA', 'C', 'E', '4');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (3 ,'WDA', 'C', 'W', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (3 ,'WDA', 'C', 'W', '2');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (3 ,'WDA', 'C', 'W', '4');

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (4 ,'WDA', 'D', 'E', '4A');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (4 ,'WDA', 'D', 'E', '4B');

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (5 ,'EDA', 'A', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (5 ,'EDA', 'A', 'C', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (5 ,'EDA', 'A', 'W', null);

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'E', '1');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'E', '3');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'C', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'C', '1');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'C', '3');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'W', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'W', '1');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (6 ,'EDA', 'B', 'W', '3');

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'E', '3');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'E', '4');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'C', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'C', '3');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'C', '4');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'W', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'W', '3');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (7 ,'EDA', 'C', 'W', '4');

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'E', '4');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'E', '6');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'C', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'C', '4');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'C', '6');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'W', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'W', '4');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (8 ,'EDA', 'D', 'W', '6');

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'E', '6');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'E', '7');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'C', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'C', '6');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'C', '7');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'W', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'W', '6');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (9 ,'EDA', 'E', 'W', '7');

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'E', '7');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'E', '9');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'C', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'C', '7');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'C', '9');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'W', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'W', '7');
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (10 ,'EDA','F', 'W', '9');

INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (11 ,'EDA','G', 'E', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (11 ,'EDA','G', 'C', null);
INSERT INTO parkingLocation (zoneID,apron,phonetic, position, bay) values (11 ,'EDA','G', 'W', null);


INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (0, 0, 0, 10, 0);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (8.5, 12.8, -5, 5, 15);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (9.9, 15.0, -6, 4, 15);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (11.2, 17.0, -7, 3, 20);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (12.4, 19.0, -8, 2, 20);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (13.6, 20.8, -9, 1, 25);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (14.7, 22.6, -10, 0, 25);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (15.7, 24.3, -11, -1, 25);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (16.7, 25.9, -12, -2, 30);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (17.6, 27.4, -13, -3, 30);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (18.5, 28.8, -14, -4, 30);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (19.3, 30.2, -15, -5, 35);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (20.1, 31.5, -16, -6, 35);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (20.8, 32.8, -17, -7, 35);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (21.5, 34.0, -18, -8, 35);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (22.2, 35.2, -19, -9, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (22.9, 36.3, -20, -10, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (23.5, 37.4, -21, -11, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (24.1, 38.5, -22, -12, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (24.7, 39.5, -23, -13, 40);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (25.2, 40.5, -24, -14, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (25.8, 41.5, -25, -15, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (26.3, 42.4, -26, -16, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (26.8, 43.3, -27, -17, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (27.3, 44.2, -28, -18, 45);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (27.8, 45.1, -29, -19, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (28.3, 46.0, -30, -20, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (28.8, 46.9, -31, -21, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (29.2, 47.4, -32, -22, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (29.7, 48.6, -33, -23, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (30.1, 49.4, -34, -24, 50);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (30.5, 50.3, -35, -25, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (31.0, 51.1, -36, -26, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (31.4, 51.9, -37, -27, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (31.8, 52.7, -38, -28, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (32.2, 53.5, -39, -29, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (32.6, 54.3, -40, -30, 55);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (33.1, 55.1, -41, -31, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (33.4, 55.9, -42, -32, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (33.8, 56.7, -43, -33, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (34.2, 57.4, -44, -34, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (34.6, 58.2, -45, -35, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (35.0, 58.9, -46, -36, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (35.3, 59.6, -47, -37, 60);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (35.7, 60.3, -48, -38, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (36.0, 61.0, -49, -39, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (36.3, 61.7, -50, -40, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (36.6, 62.3, -51, -41, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (36.9, 63.0, -52, -42, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (37.2, 63.5, -53, -43, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (37.5, 64.1, -54, -44, 65);
INSERT INTO BrixChart (brix, concentration, freezepoint, lout, recommendedmix) values (37.7, 64.6, -55, -45, 65);



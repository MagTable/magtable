use magtabledev;
/*
    Program Name: MagTableInsert
    Author: Mustafa Al Khaldi
    Created: February 21, 2020
    Description: Use Case two updated database inserts for the database.
 */

DELETE FROM user;
DELETE FROM role;
DELETE FROM tower;
DELETE FROM truck;
DELETE FROM shift;


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

INSERT INTO tower (towerID, position) VALUES (1000, 'Tower Spotter');
INSERT INTO tower (towerID, position) VALUES (1001, 'EDA-CTM');
INSERT INTO tower (towerID, position) VALUES (1002, 'EDA-Ice Man');
INSERT INTO tower (towerID, position) VALUES (1003, 'EDA-Ice House');
INSERT INTO tower (towerID, position) VALUES (1011, 'WDA-CTM');
INSERT INTO tower (towerID, position) VALUES (1012, 'WDA-Ice Man');
INSERT INTO tower (towerID, position) VALUES (1013, 'WDA-Ice House');


INSERT INTO truck (truckID, status, notice) VALUES  (6, 'GO', 'T4 Gauge not working; Burner won''t light; Tank Temp gauge read 60,,cold...OS S Cameron 02-26-20-');
INSERT INTO truck (truckID, status, notice) VALUES  (8, 'CON', 'fjkdshfjkdhgjkfdhsuigjjhduisjgfhruidshfreuiahfuireh gfh sfudbauyg frheusig hruis ghruyesgure');
INSERT INTO truck (truckID, status, notice) VALUES  (9, 'OOS', '');
INSERT INTO truck (truckID, status, notice) VALUES  (14, 'INOP', 'T4 Gauge not working; Burner won''t light; Tank Temp gauge read 60,,cold...OS S Cameron 02-26-20-');
INSERT INTO truck (truckID, status, notice) VALUES  (15, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (16, 'GO', 'No radio in lower cab. Radio not working in upper cab.  // Panel P59 intermittent. 17-Feb-2020 JK116');
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

/*
 These inserts are desgined to show a sample of data will appear and be stored in the database.
 This is the data you are trying to test for in order to stress test the database or find out how and where
 information is stored in the database.
 You are expected to check back on the inserts above to see if you are referencing a non existent tower or truck.
 Failure to do will result in a foreign key restraint being triggered.
 */

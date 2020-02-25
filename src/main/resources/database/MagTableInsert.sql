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

INSERT INTO tower (towerID, position) VALUES (1, 'Tower Spotter');
INSERT INTO tower (towerID, position) VALUES (2, 'EDA-CTM');
INSERT INTO tower (towerID, position) VALUES (3, 'EDA-Ice Man');
INSERT INTO tower (towerID, position) VALUES (4, 'EDA-Ice House');
INSERT INTO tower (towerID, position) VALUES (5, 'WDA-CTM');
INSERT INTO tower (towerID, position) VALUES (6, 'WDA-Ice Man');
INSERT INTO tower (towerID, position) VALUES (7, 'WDA-Ice House');


INSERT INTO truck (truckID, status, notice) VALUES  (24, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (26, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (32, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (34, 'GO', '');
INSERT INTO truck (truckID, status, notice) VALUES  (36, 'GO', '');

/*
 These inserts are desgined to show a sample of data will appear and be stored in the database.
 This is the data you are trying to test for in order to stress test the database or find out how and where
 information is stored in the database.
 You are expected to check back on the inserts above to see if you are referencing a non existent tower or truck.
 Failure to do will result in a foreign key restraint being triggered.
 */

use magtabledev;
/*
    Program Name: MagTableInsert
    Author: Mustafa Al Khaldi
    Created: February 4, 2020
    Description: Use Case one database inserts for the UserLevel and User tables.
 */

DELETE FROM Role;
DELETE FROM `User`;

INSERT INTO Role VALUES (1, 'System Administrator');
INSERT INTO Role VALUES (2, 'Personnel Manager');
INSERT INTO Role VALUES (3, 'Mechanic');

INSERT INTO `User` (`role`, username, password, resetflag) VALUES (1, 'mustafa', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);
INSERT INTO `User` (role, username, password,resetflag) VALUES (2, 'david', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);
INSERT INTO `User` (role, username, password, resetflag) VALUES (3, 'steven', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);

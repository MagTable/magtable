use magtabledev;
/*
    Program Name: MagTableInsert
    Author: Mustafa Al Khaldi
    Created: February 4, 2020
    Description: Use Case one database inserts for the UserLevel and User tables.
 */

DELETE FROM `user`;
DELETE FROM role;
DELETE FROM shift;
DELETE FROM equipment;
DELETE FROM brixrecord;
DELETE FROM assignment;
DELETE FROM magtablerecord;

INSERT INTO role VALUES (1, 'System Administrator');
INSERT INTO role VALUES (2, 'Personnel Manager');
INSERT INTO role VALUES (3, 'Mechanic');

INSERT INTO `user` (`role`, username, password, resetflag) VALUES (1, 'mustafa', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);
INSERT INTO `user` (role, username, password,resetflag) VALUES (2, 'david', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);
INSERT INTO `user` (role, username, password, resetflag) VALUES (3, 'steven', '$2a$10$p5Z.PzEZm2J6ikfp9T4lFeW6hdRjDQUfTdfqOiKK5xHRsd2C9GqKK', false);

INSERT INTO magtablerecord (dailyMix, forcastLow) VALUES (10, 15);

INSERT INTO assignment (magID, date) VALUES (1, current_date);

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (1, 'Mechanic', 'AM', 'MJ Kochuk', '2020-02-20 04:00:00', '2020-02-20 16:00:00', TRUE, TRUE, TRUE);

INSERT INTO shift (assignmentID, description, timeOfDay, employeeName, startTime, endTime, activeBaylead, hasAvop, isGreen)
VALUES (1, 'Iceman', 'PM', 'Arran Woodruff', '2020-02-20 04:00:00', '2020-02-20 16:00:00', TRUE, TRUE, TRUE);

INSERT INTO equipment (equipmentID, assignmentID, status, notice) VALUES (26, 1, '', 'GO');

INSERT INTO brixrecord (assignmentID, nozzle, type1, type4, litersPurged, timeMeasured)
VALUES (1, 24.5, 52.3, 32.4, 80, current_date);

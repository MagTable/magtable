/*
    Program Name: MagTableInsert
    Author: Mustafa Al Khaldi
    Created: February 4, 2020
    Description: Use Case one database inserts for the UserLevel and User tables.
 */

DELETE FROM `UserLevel`;
DELETE FROM `User`;

INSERT INTO `UserLevel` VALUES (1, 'System Manager');
INSERT INTO `UserLevel` VALUES (2, 'Personnel Manager');
INSERT INTO `UserLevel` VALUES (3, 'Mechanic');

INSERT INTO `User` VALUES(1, 1, 'mustafa', 'password');
INSERT INTO `User` VALUES(2, 2, 'david', 'password');
INSERT INTO `User` VALUES(3, 3, 'steven', 'password');

COMMIT;
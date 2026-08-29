ALTER TABLE `phoneContacts` ADD `address` text;
ALTER TABLE `phoneContacts` ADD `latitude` decimal(10,7);
ALTER TABLE `phoneContacts` ADD `longitude` decimal(10,7);
ALTER TABLE `phoneContacts` ADD `geocodedAt` timestamp;

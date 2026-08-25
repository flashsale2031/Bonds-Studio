ALTER TABLE `domains` ADD COLUMN `guestKey` varchar(64) NULL;
CREATE INDEX `domains_guest_key_idx` ON `domains` (`guestKey`,`updatedAt`);

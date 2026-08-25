CREATE TABLE `phoneCalls` (
	`id` int AUTO_INCREMENT NOT NULL,
	`ownerId` int NOT NULL,
	`guestKey` varchar(64),
	`contactId` int,
	`direction` enum('inbound','outbound') NOT NULL,
	`status` enum('initiated','ringing','connected','completed','failed','missed') NOT NULL DEFAULT 'initiated',
	`phoneNumber` varchar(32) NOT NULL,
	`durationSeconds` int,
	`providerCallId` varchar(160),
	`errorMessage` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `phoneCalls_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `phoneContacts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`ownerId` int NOT NULL,
	`guestKey` varchar(64),
	`name` varchar(160) NOT NULL,
	`phoneNumber` varchar(32) NOT NULL,
	`email` varchar(320),
	`notes` text,
	`favorite` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `phoneContacts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `phoneMessages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`ownerId` int NOT NULL,
	`guestKey` varchar(64),
	`contactId` int,
	`direction` enum('inbound','outbound') NOT NULL,
	`status` enum('queued','sent','delivered','failed') NOT NULL DEFAULT 'queued',
	`phoneNumber` varchar(32) NOT NULL,
	`body` text NOT NULL,
	`providerMessageId` varchar(160),
	`errorMessage` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `phoneMessages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `phone_calls_guest_key_idx` ON `phoneCalls` (`guestKey`,`createdAt`);--> statement-breakpoint
CREATE INDEX `phone_contacts_guest_key_idx` ON `phoneContacts` (`guestKey`,`updatedAt`);--> statement-breakpoint
CREATE INDEX `phone_messages_guest_key_idx` ON `phoneMessages` (`guestKey`,`createdAt`);
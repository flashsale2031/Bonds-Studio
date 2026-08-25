CREATE TABLE `aiConversations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`ownerId` int NOT NULL,
	`guestKey` varchar(64),
	`title` varchar(160) NOT NULL DEFAULT 'New conversation',
	`model` varchar(128),
	`reasoningLevel` enum('minimal','low','medium','high') NOT NULL DEFAULT 'low',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `aiConversations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `aiMessages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`conversationId` int NOT NULL,
	`role` enum('system','user','assistant','tool') NOT NULL,
	`content` text NOT NULL,
	`toolName` varchar(128),
	`toolStatus` enum('started','completed','failed'),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `aiMessages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `ai_conversations_guest_key_idx` ON `aiConversations` (`guestKey`,`updatedAt`);--> statement-breakpoint
CREATE INDEX `ai_conversations_owner_idx` ON `aiConversations` (`ownerId`,`updatedAt`);--> statement-breakpoint
CREATE INDEX `ai_messages_conversation_idx` ON `aiMessages` (`conversationId`,`createdAt`);
ALTER TABLE `aiConversations` ADD `executionStatus` enum('idle','planning','inspecting','synthesizing','reporting','completed','failed','paused') DEFAULT 'idle' NOT NULL;--> statement-breakpoint
ALTER TABLE `aiConversations` ADD `executionStep` varchar(64) DEFAULT 'idle' NOT NULL;--> statement-breakpoint
ALTER TABLE `aiConversations` ADD `executionProgress` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `aiConversations` ADD `executionRunId` varchar(64);--> statement-breakpoint
ALTER TABLE `aiConversations` ADD `executionSource` enum('typed','voice') DEFAULT 'typed' NOT NULL;--> statement-breakpoint
ALTER TABLE `aiConversations` ADD `executionInput` text;--> statement-breakpoint
ALTER TABLE `aiConversations` ADD `executionError` text;--> statement-breakpoint
ALTER TABLE `aiConversations` ADD `executionStartedAt` timestamp;--> statement-breakpoint
ALTER TABLE `aiConversations` ADD `executionCompletedAt` timestamp;
-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('ADMIN', 'SUPER_ADMIN', 'USER') NOT NULL DEFAULT 'ADMIN';

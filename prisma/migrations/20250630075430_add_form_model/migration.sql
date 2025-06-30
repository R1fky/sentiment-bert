/*
  Warnings:

  - Added the required column `formId` to the `question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `question` ADD COLUMN `formId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `question_formId_idx` ON `question`(`formId`);

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `form`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

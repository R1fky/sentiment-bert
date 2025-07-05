/*
  Warnings:

  - You are about to drop the column `question_category` on the `question` table. All the data in the column will be lost.
  - Added the required column `category` to the `form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `form` ADD COLUMN `category` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `question` DROP COLUMN `question_category`;

/*
  Warnings:

  - You are about to drop the column `quesiton_category` on the `question` table. All the data in the column will be lost.
  - Added the required column `question_category` to the `question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `question` DROP COLUMN `quesiton_category`,
    ADD COLUMN `question_category` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - You are about to alter the column `amount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `price` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - The `amenities` column on the `Property` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Payment_rentalRequestId_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "images" TEXT[],
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2),
DROP COLUMN "amenities",
ADD COLUMN     "amenities" TEXT[];

-- AlterTable
ALTER TABLE "RentalRequest" ADD COLUMN     "message" TEXT;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "rating" SET DEFAULT 5;

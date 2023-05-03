/*
  Warnings:

  - You are about to drop the column `pageid` on the `Page` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "itemid" INTEGER NOT NULL,
    "title" TEXT,
    "omekafn" TEXT NOT NULL,
    "ogfn" TEXT,
    "transcription" TEXT
);
INSERT INTO "new_Page" ("createdAt", "id", "itemid", "ogfn", "omekafn", "title", "transcription", "updatedAt") SELECT "createdAt", "id", "itemid", "ogfn", "omekafn", "title", "transcription", "updatedAt" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "pagecount" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL DEFAULT '/newberryn.png',
    "catalogLink" TEXT,
    "percentComplete" TEXT NOT NULL DEFAULT '0',
    "public" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Item" ("catalogLink", "createdAt", "description", "featured", "id", "image", "pagecount", "percentComplete", "public", "title", "updatedAt") SELECT "catalogLink", "createdAt", "description", "featured", "id", "image", "pagecount", "percentComplete", "public", "title", "updatedAt" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

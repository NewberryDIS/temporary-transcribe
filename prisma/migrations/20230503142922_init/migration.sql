-- CreateTable
CREATE TABLE "Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "itemid" INTEGER NOT NULL,
    "pageid" INTEGER NOT NULL,
    "title" TEXT,
    "omekafn" TEXT NOT NULL,
    "ogfn" TEXT,
    "transcription" TEXT
);

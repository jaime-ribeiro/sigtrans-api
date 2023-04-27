/*
  Warnings:

  - Added the required column `descricao` to the `alertas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_alertas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_alertas" ("createdAt", "id", "nome", "situacao", "status", "tipo", "updatedAt") SELECT "createdAt", "id", "nome", "situacao", "status", "tipo", "updatedAt" FROM "alertas";
DROP TABLE "alertas";
ALTER TABLE "new_alertas" RENAME TO "alertas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

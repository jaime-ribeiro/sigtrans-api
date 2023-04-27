/*
  Warnings:

  - You are about to drop the column `situacao` on the `veiculos` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_veiculos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "placa" TEXT NOT NULL,
    "chassi" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_veiculos" ("ano", "categoria", "chassi", "createdAt", "especie", "id", "marca", "modelo", "placa", "tipo", "uf", "updatedAt") SELECT "ano", "categoria", "chassi", "createdAt", "especie", "id", "marca", "modelo", "placa", "tipo", "uf", "updatedAt" FROM "veiculos";
DROP TABLE "veiculos";
ALTER TABLE "new_veiculos" RENAME TO "veiculos";
CREATE UNIQUE INDEX "veiculos_placa_key" ON "veiculos"("placa");
CREATE UNIQUE INDEX "veiculos_chassi_key" ON "veiculos"("chassi");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

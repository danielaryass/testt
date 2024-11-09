-- CreateTable
CREATE TABLE "Menus" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "makanan_pelengkap" TEXT NOT NULL,

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);

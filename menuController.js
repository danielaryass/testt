const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createMenu = async (req, res) => {
  const { deskripsi, nama, makanan_pelengkap, kategori } = req.body;
  try {
    const menu = await prisma.menus.create({
      data: {
        nama,
        deskripsi,
        kategori,
        makanan_pelengkap,
      },
    });
    return res.json(menu);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createMenu,
};

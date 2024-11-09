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

const getAllMenu = async (req, res) => {
  const menus = await prisma.menus.findMany();

  const responseJSON = {
    data: menus,
    status: 200,
    message: "success",
  };
  return res.json(menus);
};

module.exports = {
  createMenu,
  getAllMenu,
};

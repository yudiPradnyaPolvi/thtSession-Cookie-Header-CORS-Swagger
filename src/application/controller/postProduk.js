const path = require("path");
const fs = require("fs");
const postProduk = [
  {
    id: 1,
    nama: "Pulpen",
    harga: "1000",
    barcode: "asdadasdasdad",
    stok: 200,
    tipe: "alat_tulis",
  },
  {
    id: 2,
    nama: "Chitato",
    harga: "5000",
    barcode: "basdadadsa",
    stok: 50,
    tipe: "makanan",
  },
  {
    id: 3,
    nama: "Pocari",
    harga: "10000",
    barcode: "csdadasdasdad",
    stok: 90,
    tipe: "minuman",
  },
];
const dbPostProduk = require("../../database/postProduk");

function getPostProduk(req, res) {
  res.send(postProduk);
}
function addPostProduk(req, res) {
  const postProduk = req.body;
  console.log(postProduk);
  dbPostProduk.create(postProduk);
  res.send(postProduk);
}
function getOnePostProduk(req, res) {
  const produks = getPostProduk();
  const id = req.query.id;
  const produk = produks.find((produk) => produk.id === id);
  if (produk === produk.id) {
    res.send(produk);
  }
}
function editProduk(req, res) {
  const id = req.query.id;
  const nama = req.body.nama;
  const harga = req.body.harga;
  const barcode = req.body.barcode;
  const stok = req.body.stok;
  const tipe = req.body.tipe;
  const data = dbPostProdukProduk();

  const produk = data.findIndex((produk) => produk.id === id);
  data[produk] = newData;
  if (produk === produk.id) {
    produk.nama = nama;
    produk.harga = harga;
    produk.barcode = barcode;
    produk.stok = stok;
    produk.tipe = tipe;
  } else {
    console.log("error");
  }
  dbPostProduk = Produk.update(postProduk);
  res.send(postProduk);
}
function deleteProduk(req, res) {
  const produks = getPostProduk();
  const id = req.query.id;
  const produk = produks.findIndex((produk) => produks.id === id);
  data[produk] = newData;
  if (produk === produk.id) {
    newProduk = produk.destroy();
  } else {
    console.log("error");
  }
  res.send(produk);
}
function gambarProduk(req, res) {
  const metaData = req.file;
  const originalName = metaData.originalname;
  const oldPath = metaData.path;
  fs.renameSync(oldPath, path.resolve(`public/images/${originalName}`));
  res.send({ message: "ngirim gambar produk" });
}
module.exports = {
  getPostProduk,
  addPostProduk,
  getOnePostProduk,
  editProduk,
  deleteProduk,
  gambarProduk,
};

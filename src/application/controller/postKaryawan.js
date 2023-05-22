const postKaryawan = [
  {
    id: 1,
    nama: "Mitha",
    alamat: "Kuta",
    usia: 21,
    jenis_kelamin: "Perempuan",
  },
  {
    id: 2,
    nama: "Putrawan",
    alamat: "Karangasem",
    usia: 22,
    jenis_kelamin: "Laki-Laki",
  },
  {
    id: 3,
    nama: "Linda",
    alamat: "Buleleng",
    usia: 20,
    jenis_kelamin: "Perempuan",
  },
  {
    id: 4,
    nama: "Kiki",
    alamat: "Medan",
    usia: 21,
    jenis_kelamin: "Laki-Laki",
  },
];
const dbPostKaryawan = require("../../database/postKaryawan");

function getPostKaryawan(req, res) {
  res.send(postKaryawan);
}
function addPostKaryawan(req, res) {
  const postKaryawan = req.body;
  console.log(postKaryawan);
  dbPostKaryawan.create(postKaryawan);
  res.send(postKaryawan);
}
function getOnePostkaryawan(req, res) {
  const karyawans = getPostkaryawan();
  const id = req.query.id;
  const karyawan = karyawans.find((karyawan) => karyawan.id === id);
  if (karyawan === karyawan.id) {
    res.send(karyawan);
  }
}
function editKaryawan(req, res) {
  const id = req.query.id;
  const nama = req.body.nama;
  const harga = req.body.harga;
  const barcode = req.body.barcode;
  const stok = req.body.stok;
  const tipe = req.body.tipe;
  const data = readData();

  const karyawan = data.findIndex((karyawan) => karyawan.id === id);
  data[karyawan] = newData;
  if (karyawan === karyawan.id) {
    karyawan.nama = nama;
    karyawan.harga = harga;
    karyawan.barcode = barcode;
    karyawan.stok = stok;
    karyawan.tipe = tipe;
  } else {
    console.log("error");
  }
  dbPostkaryawan.update(postkaryawan);
  res.send(postkaryawan);
}
function deletekaryawan(req, res) {
  const karyawans = dbPostKaryawan();
  const id = req.query.id;
  const karyawan = karyawans.findIndex((karyawan) => karyawan.id === id);
  data[karyawan] = newData;
  if (karyawan === karyawan.id) {
    newKaryawan = karyawan.destroy();
  } else {
    console.log("error");
  }
  res.send(newKaryawan);
}

module.exports = {
  getPostKaryawan,
  addPostKaryawan,
  getOnePostkaryawan,
  editKaryawan,
  deletekaryawan,
};

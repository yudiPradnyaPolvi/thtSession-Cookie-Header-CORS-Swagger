function tambah(req, res) {
  console.log("req.body", req.body);
  const angka1 = parseInt(req.body.angka1);
  const angka2 = parseInt(req.body.angka2);
  const hasil = angka1 + angka2;
  res.send({ message: `hasil penjumlahan adalah ${hasil}` });
}

module.exports = {
  tambah,
};

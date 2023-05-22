function tambah(req, res) {
  const angka1 = parseFloat(req.query.angka1);
  const angka2 = parseFloat(req.query.angka2);
  const hasil = angka1 + angka2;
  res.send({ message: `hasil penjumlahan adalah ${hasil}` });
}
function kurang(req, res) {
  const angka = parseFloat(req.query.angka);
  const angka2 = parseFloat(req.query.angka2);
  const hasil = angka - angka2;
  res.send({ message: `hasil pengurangan adalah ${hasil}` });
}
function kali(req, res) {
  const angka1 = parseFloat(req.query.angka1);
  const angka2 = parseFloat(req.query.angka2);
  const hasil = angka1 * angka2;
  res.send({ message: `hasil kali adalah ${hasil}` });
}
function bagi(req, res) {
  const angka1 = parseFloat(req.query.angka1);
  const angka2 = parseFloat(req.query.angka2);
  const hasil = angka1.value.angka / angka2;
  res.send({ message: `hasil bagi adalah ${hasil}` });
}

module.exports = {
  tambah,
  kurang,
  kali,
  bagi,
};

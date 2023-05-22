const express = require("express");
const app = express.Router();
const multer = require("multer");
const path = require("path");

const cookieSessionCtrl = require("./controller/cookie-session");
const postCtrl = require("./controller/posts");
const auth = require("./middleware/auth");

const produkCtrl = require("./controller/postProduk");
const karyawanCtrl = require("./controller/postKaryawan");

const upload = multer({ dest: path.resolve("./tmp") });

app.use("/uploads", express.static(path.resolve(`public/images`)));
app.get("/", function (req, res) {
  res.send({ message: "hello dari route v3" });
});

app.get("/get-produk", produkCtrl.getPostProduk);
app.post("/post-produk", auth, produkCtrl.addPostProduk);
app.get("/getone-produk", produkCtrl.getOnePostProduk);
app.put("/edit-produk/:id", auth, produkCtrl.editProduk);
app.delete("/delete-produk/:id", auth, produkCtrl.deleteProduk);
app.post("/upload-gambar", upload.single("image"), produkCtrl.gambarProduk);

app.get("/get-karyawan", karyawanCtrl.getPostKaryawan);
app.post("/post-karyawan", auth, karyawanCtrl.addPostKaryawan);
app.put("/edit-karyawan/:id", auth, karyawanCtrl.editKaryawan);
app.delete("/delete-karyawan/:id", auth, karyawanCtrl.deletekaryawan);

app.get("/get-headers", (req, res) => {
  const headers = req.headers;
  res.send({ headers });
});
app.get("/set-headers", (req, res) => {
  res.header("x-backend", "productzilla-b5");
  res.send({ message: "header sent" });
});

module.exports = app;

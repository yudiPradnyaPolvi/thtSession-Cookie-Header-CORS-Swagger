const express = require("express");
const app = express.Router();

const matematikaCtrl = require("./controller/matematika");
const cookieSessionCtrl = require("./controller/cookie-session");
const postCtrl = require("./controller/posts");
const auth = require("./middleware/auth");
const bagiMiddleware = (req, res, next) => {
  if (req.query.angka2 == 0) {
    res.send({ message: "tidak bisa dibagi dengan 0" });
  } else {
    next();
  }
};

app.get("/", function (req, res) {
  res.send({ message: "hello dari route v1" });
});
app.get("/tambah", matematikaCtrl.tambah);
app.get("/kurang", matematikaCtrl.kurang);
app.get("/kali", matematikaCtrl.kali);
app.get("/bagi", bagiMiddleware, matematikaCtrl.bagi);
app.get("/set-cookie", cookieSessionCtrl.setCookie);
app.get("/get-cookie", cookieSessionCtrl.getCookie);
app.get("/set-session", cookieSessionCtrl.setSession);
app.get("/get-session", cookieSessionCtrl.getSession);

app.get("/posts", postCtrl.getPosts);
app.post("/posts", postCtrl.addPosts);

// header
app.get("/get-headers", (req, res) => {
  const headers = req.headers;
  res.send({ headers });
});
app.get("/set-headers", (req, res) => {
  res.header("x-backend", "productzilla-b5");
  res.send({ message: "header sent" });
});

module.exports = app;

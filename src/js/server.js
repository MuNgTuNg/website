/*

This file is running the actual server for now.

*/
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const htmlDir = "../html/";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, htmlDir + "index.html"));
});

app.get("/css/index.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../css/index.css"));
});

app.get("/js/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../js/index.js"));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); //

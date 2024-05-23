console.log("Web Serverni boshlash!");
const express = require("express");
const app = express();
const fs = require("fs");


let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("err here", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB connect

const db = require("./server").db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code

app.post("/create-item", (req, res) => {
  const new_reja = req.body.reja;
  console.log(req.body);
  db.collection("plans").insertOne({ reja: new_reja },(err,data)=> {
    if(err)console.log(err);
    else{
      res.end('success')
    }
  });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) console.log(err);
      else {
        console.log(data);
      }
    });
  res.render("reja");
});

module.exports = app;

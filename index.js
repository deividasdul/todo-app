import express from "express";
import fs from "fs";

const PORT = 3000;
const APP = express();

APP.use(express.static("public"));
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());

APP.listen(PORT, () => {
  console.log("Starting...");
});

APP.get("/", (req, res) => {
  res.render("index.ejs", {
    year: new Date().getFullYear(),
  });
});

var allTasks = [];
var listId = 0;

APP.post("/add", (req, res) => {
  var task = {
    tId: listId++,
    tName: req.body.tName,
    tDate: req.body.tDate,
    tDesc: req.body.tDesc,
  };

  allTasks.push(task);

  console.log(allTasks);
  console.log(allTasks.length);

  res.render("index.ejs", {
    tasks: allTasks,
    year: new Date().getFullYear(),
  });
});

APP.post("/delete", postDeleteProductPage);

function postDeleteProductPage(req, res) {
  const tId = req.body.productId;

  allTasks = allTasks.filter((task) => task.tId != tId);

  // fs.writeFileSync("index.ejs", JSON.stringify(allTasks));

  res.render("index.ejs", {
    tasks: allTasks,
    year: new Date().getFullYear(),
  });
}

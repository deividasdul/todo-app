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
    tasks: allTasks,
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

APP.post("/delete", (req, res) => {
  const tId = req.body.productId;

  allTasks = allTasks.filter((task) => {
    return task.tId != tId;
  });

  res.render("index.ejs", {
    tasks: allTasks,
    year: new Date().getFullYear(),
  });
});

APP.post("/update", (req, res) => {
  const tId = req.body.productId;

  allTasks.forEach((task) => {
    if (task.tId == tId) {
      task.tName = req.body.tNameUpdated;
      task.tDate = req.body.tDateUpdated;
      task.tDesc = req.body.tDescUpdated;
    }
  });

  res.render("index.ejs", {
    tasks: allTasks,
    year: new Date().getFullYear(),
  });
});

APP.get("/about", (req, res) => {
  res.render("about.ejs", {
    year: new Date().getFullYear(),
  });
});

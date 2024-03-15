import express from "express";

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

APP.post("/add", (req, res) => {
  var taskName = req.body.tName;
  var taskDate = req.body.tDate;
  var taskDescription = req.body.tDesc;
});

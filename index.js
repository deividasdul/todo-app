import express from "express";

const PORT = 3000;
const APP = express();

APP.use(express.static("public"));
APP.use(express.urlencoded({ extended: true }));

APP.listen(PORT, () => {
  console.log("Starting...");
});

APP.get("/", (req, res) => {
  res.render("index.ejs", {
    year: new Date().getFullYear(),
  });
});

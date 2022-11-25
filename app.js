require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs=require('fs');
const multer = require("multer");
const path= require('path');
const uploadFile=require('./s3');
const {UploadFile} = require("./s3");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
        cb(null, 'uploads')
      },
  filename: (req, file, cb) => {
    // console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({storage:storage });
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname));


app.get("/", function(req, res) {
  res.render("index");
});
app.get("/about", function(req, res) {
  res.render("about");
});
app.get("/contact", function(req, res) {
  res.render("contact");
});
app.get("/services", function(req, res) {
  res.render("services");
});
app.get("/file", function(req, res) {
  res.render("file");
});
app.post("/file"  , upload.single("file"),async function(req,res){
  console.log(req.file);
  const file=req.path
  console.log(file)
  const result =  await UploadFile.UploadFile("package.json")
  console.log(result)
  res.render("file");
});











app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running at 3000");
});

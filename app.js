const express = require("express");
const {Schema} = require("mongoose");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Admin:Catacomb@cluster0.mbgic6l.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true
});
const customerSchema={
    email: String,
    file:[]
}
const Customer = mongoose.model('Customer',customerSchema);
const bodyParser = require("body-parser");
const app = express();
const fs=require('fs');
const util=require('util')
const unlinkFile=util.promisify(fs.unlink)
const multer = require("multer");
const path= require('path');
const UploadFile = require("./s3");
const CompressFile = require("./compress");
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
app.get("/loggedin-mid", function(req, res) {
    res.render("loggedin-mid");
});
app.get("/file-upload", function(req, res) {
  res.render("file-upload");
});
app.get("/file-download", function(req, res) {
    res.render("file-download");
});
 app.post("/file-upload"  , upload.single("file"),async function(req,res){
  const file=req.file
  const com=file.filename
    await CompressFile.compress(com)
     // console.log(com)
   const result =  await UploadFile.Upload('uploads/'+com)
   // console.log(result)
   await unlinkFile(file.path);
   // fs.unlinkSync('compressed.txt');
   res.render("file-upload");
});





// exec('java -jar decompress.jar uploads/compressed.txt uploads/lorem.txt')





app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running at 3000");
});

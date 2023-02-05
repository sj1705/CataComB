const express = require("express");
const {decompress} = require("./compression");
const CompressFile = require("./compression");
const {exec} = require("child_process");
require('dotenv').config();
let currentUseremail=""
const mongoDBUrl = process.env.MONGODB_URL;
const mongoose = require("mongoose");
mongoose.connect(mongoDBUrl, {useNewUrlParser: true
});
const customerSchema={
    email: String,
    file:String
}
const Customer = mongoose.model('Customer',customerSchema);
const bodyParser = require("body-parser");
const app = express();
const fs=require('fs');
const util=require('util')
util.promisify(exec)
const unlinkFile=util.promisify(fs.unlink)
const multer = require("multer");
const path= require('path');
const UploadFile = require("./s3");
const {Download} = require("./s3");
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
    let currentUseremail=""
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
    Customer.findOne({
        email: currentUseremail
    }, function(err, foundCustomer) {
        if (!err) {
            if (foundCustomer == null) {
                const customerInfo = new Customer({
                    email: currentUseremail
                });
                customerInfo.save();
            } else {
            }
        }
    }).clone()
    res.render("loggedin-mid");
});
app.get("/file-upload", function(req, res) {
  res.render("file-upload");
});
app.get("/file-download/:filename",  async (req, res) => {
    await exec('java -jar decompress.jar downloads/a.txt downloads/a.txt')
    res.download("downloads/a.txt", "b.txt")
});
app.get("/file-download", async function (req, res) {
    let downloadkey;
    await Customer.findOne({email:currentUseremail}, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log("Result : ", docs);
            downloadkey=docs.file
            console.log(downloadkey)
        }
    }).clone()
    await Download(downloadkey)
    await exec('java -jar decryption.jar downloads/a.txt downloads/a.txt')
    await res.render("file-download");
});
app.get("/logged-in", function (req,res){
    res.render("logged-in")
});
app.post("/logged-in", function (req,res){
    const customerInfo = new Customer({
        email:req.body.currentuseremail
    });
    Customer.findOne({
        email: req.body.currentuseremail
    }, function(err, foundCustomer) {
        if (!err) {
            if (foundCustomer == null) {
                customerInfo.save();
                currentUseremail=req.body.currentuseremail
            } else {
                console.log(foundCustomer)
                currentUseremail=req.body.currentuseremail
            }
        }
    }).clone()
    console.log(req.body.currentuseremail)
    res.render("loggedin-mid")
});
app.post("/file-upload"  , upload.single("file"),async function(req,res){
  const file=req.file
  const com=file.filename
     await CompressFile.compress(com)
     await exec('java -jar encryption.jar uploads/' + com + ' uploads/'+com)
     await Customer.updateOne({email:currentUseremail},{file:currentUseremail+"uploads/"+com}).clone()
     await UploadFile.Upload('uploads/'+com,currentUseremail)
     await unlinkFile(file.path);
   res.render("file-upload");
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running at 3000");
});

const fs=require('fs');
require('dotenv').config();
const BUCKET_NAME="catacombuserdata"
const AWS= require('aws-sdk')
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const s3= new AWS.S3({
    accessKeyId,
    secretAccessKey
});

//uploading

 function Upload(file,currentUser){
    const fileStream=fs.readFileSync(file)
     const key=currentUser+file
     console.log(key)
    const uploadParams = {
        Bucket:BUCKET_NAME,
        Body:fileStream,
        Key:key
    }
    return s3.upload(uploadParams).promise()
}
exports.Upload = Upload


function Download(key){
     const downloadParams={
         Bucket: BUCKET_NAME,
         Key: key
     }
    console.log()
    let readStream = s3.getObject(downloadParams).createReadStream()
    let writeStream=fs.createWriteStream('downloads/a.txt');
    console.log("file downloaded")
     return readStream.pipe(writeStream)
}
exports.Download=Download


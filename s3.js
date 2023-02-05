const fs=require('fs');
const BUCKET_NAME="catacombuserdata"
const AWS= require('aws-sdk')
const s3= new AWS.S3({
    accessKeyId:"AKIAYMSTELQSRD7KP46Q",
    secretAccessKey:"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"
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


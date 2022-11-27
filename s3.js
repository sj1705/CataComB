const fs=require('fs');
const BUCKET_NAME="catacombuserdata56"
const AWS= require('aws-sdk')
const s3= new AWS.S3({
    accessKeyId:"AKIAV54O7BMNDESEOUPT",
    secretAccessKey:"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"
});

//uploading

 function Upload(file){
    const fileStream=fs.readFileSync(file)
    const uploadParams = {
        Bucket:BUCKET_NAME,
        Body:fileStream,
        Key:file
    }
    return s3.upload(uploadParams).promise()
}
exports.Upload = Upload
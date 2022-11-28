const fs=require('fs');
const BUCKET_NAME="catacombuserdata56"
const AWS= require('aws-sdk')
const s3= new AWS.S3({
    accessKeyId:"AKIAV54O7BMNGU2MPHMX",
    secretAccessKey:"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"
});

//uploading

 function Upload(file,currentUser){
    const fileStream=fs.readFileSync(file)
     const key=currentUser+file
    const uploadParams = {
        Bucket:BUCKET_NAME,
        Body:fileStream,
        Key:key
    }
    return s3.upload(uploadParams).promise()
}
exports.Upload = Upload
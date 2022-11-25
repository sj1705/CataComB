const fs=require('fs');
const BUCKET_NAME="catacombuserdata56"
const AWS= require('aws-sdk')
const s3= new AWS.S3({
    accessKeyId:"AKIAV54O7BMNCOYJZZ2W",
    secretAccessKey:"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"
});


const UploadFile = (filename) => {
    const fileContent = fs.readFileSync(filename)

    const params = {
        Bucket: BUCKET_NAME,
        Key:filename,
        Body: fileContent
        // ContentType:"image/JPG"
    }
    return s3.upload(params).promise()
}
exports.UploadFile=UploadFile
console.log(UploadFile("app.js"))








//uploading

// function UploadFile(file){
//     const fileStream=fs.createReadStream(file.path)
//
//     const uploadParams = {
//         Bucket:BUCKET_NAME,
//         Body:fileStream,
//         Key:file.filename
//     }
//
//     return s3.upload(uploadParams).promise()
// }
// exports.UploadFile = UploadFile
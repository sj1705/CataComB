const fs=require('fs');
const {promises} = require("fs");
const exec = require('child_process').exec;

 function compress(com) {
     return new Promise((resolve,reject)=>{
         exec('java -jar compress.jar uploads/' + com + ' uploads/'+com,(error,stdout,stderr)=>
         {
             if(error){
                 reject(error);
                 return;
             }
             resolve(stdout)
         })
     })
}
exports.compress=compress

async function decompress() {
    return await new Promise((resolve,reject)=>{
        exec('java -jar decompress.jar downloads/a.txt downloads/a.txt',(error,stdout,stderr)=>
        {
            if(error){
                reject(error);
                return;
            }
            resolve(stdout)
        })
    })
}
exports.decompress=decompress
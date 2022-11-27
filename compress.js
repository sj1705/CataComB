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

function decompress(com) {
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
exports.decompress=decompress
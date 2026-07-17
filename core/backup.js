const fs=require("fs");


function backup(file){


let data =
fs.readFileSync(file);



let name =
file.split("/")
.pop();



fs.writeFileSync(

"./storage/backup/"+Date.now()+"_"+name,

data

);


console.log(
"Backup berhasil"
);


}



module.exports={
backup
};

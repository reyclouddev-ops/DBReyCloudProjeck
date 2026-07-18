const fs = require("fs");

const config = require("../config/config");

function createFolder(path){

    if(!fs.existsSync(path)){

        fs.mkdirSync(path,{
            recursive:true
        });

    }

}

function initStorage(){

    createFolder("./storage");

    createFolder(config.storage);

    createFolder("./public");

    createFolder("./routes");

}

module.exports = {

    initStorage

}

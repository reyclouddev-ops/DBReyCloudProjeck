const fs = require("fs");
const path = require("path");
const config = require("../config/config");

class Database{

    constructor(id){

        this.id = id;

        this.path = path.join(
            config.storage,
            id
        );

        if(!fs.existsSync(this.path)){

            fs.mkdirSync(
                this.path,
                {recursive:true}
            );

        }

    }

    collection(name){

        const Collection = require("./collection");

        return new Collection(
            this.path,
            name
        );

    }

}

module.exports = Database;

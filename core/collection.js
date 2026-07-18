const fs = require("fs");
const path = require("path");

class Collection{

    constructor(databasePath,name){

        this.name = name;

        this.file = path.join(
            databasePath,
            `${name}.json`
        );

        if(!fs.existsSync(this.file)){

            fs.writeFileSync(
                this.file,
                "[]"
            );

        }

    }

    read(){

        return JSON.parse(
            fs.readFileSync(
                this.file
            )
        );

    }

    write(data){

        fs.writeFileSync(

            this.file,

            JSON.stringify(

                data,

                null,

                2

            )

        );

    }

}

module.exports = Collection;

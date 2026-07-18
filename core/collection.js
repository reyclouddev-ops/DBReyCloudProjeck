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

 insertOne(data){

    const Document =
    require("./document");

    const docs =
    this.read();

    const doc =
    Document.create(data);

    docs.push(doc);

    this.write(docs);

    return doc;

}
        
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

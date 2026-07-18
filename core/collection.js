const fs = require("fs");
const path = require("path");

class Collection {

    constructor(databasePath, name){

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
                this.file,
                "utf8"
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


    find(){

        return this.read();

    }


    findOne(id){

        return this
        .read()
        .find(x => x._id === id);

    }


    deleteOne(id){

        const docs =
        this.read();

        const index =
        docs.findIndex(
            x => x._id === id
        );

        if(index === -1)
            return false;


        docs.splice(index,1);

        this.write(docs);

        return true;

    }


    updateOne(id,data){

        const docs =
        this.read();

        const index =
        docs.findIndex(
            x => x._id === id
        );

        if(index === -1)
            return null;


        docs[index] = {

            ...docs[index],

            ...data,

            updatedAt:
            new Date()

        };


        this.write(docs);

        return docs[index];

    }

}


module.exports = Collection;

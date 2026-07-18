const crypto = require("crypto");

class Document{

    static id(){

        return crypto
        .randomBytes(8)
        .toString("hex");

    }

    static create(data){

        return{

            _id:this.id(),

            createdAt:
            new Date(),

            ...data

        };

    }

}

module.exports = Document;

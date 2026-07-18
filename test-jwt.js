const JWT = require("./core/jwt");

const token = JWT.create({

    id:"USR001",

    username:"Rey",

    role:"owner"

});

console.log(token);

console.log();

console.log(

JWT.verify(token)

);

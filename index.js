const DB =
require("./core/db");


const Auth =
require("./core/auth");


const Backup =
require("./core/backup");



Auth.checkKey(
"REY_PRIVATE_KEY_001"
);



const users =
new DB("users");



let user =
users.insert({

username:"Rey",

role:"owner",

project:"ReyCloud"

});



console.log(
"USER BARU:"
);

console.log(user);



console.log(
"CARI OWNER:"
);


console.log(
users.find({
role:"owner"
})
);



Backup.backup(
"./storage/users.json"
);

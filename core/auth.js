const config =
require("../config.json");


function checkKey(key){

console.log("KEY DARI REQUEST:", key);
console.log("KEY DARI CONFIG:", config.apiKey);


if(key !== config.apiKey){

throw Error(
"API KEY SALAH"
);

}


return true;

}


module.exports={
checkKey
};

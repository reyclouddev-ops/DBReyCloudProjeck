const config =
require("../config.json");


function checkKey(key){

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

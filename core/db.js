const fs = require("fs");


class DBReyCloudProjeck {


constructor(collection){

this.file =
`./storage/${collection}.json`;


if(!fs.existsSync(this.file)){

fs.writeFileSync(
this.file,
"[]"
);

}

}



read(){

return JSON.parse(
fs.readFileSync(this.file)
);

}



save(data){

fs.writeFileSync(
this.file,
JSON.stringify(data,null,2)
);

}



insert(data){

let db=this.read();


data.id =
Date.now();


data.createdAt =
new Date();


db.push(data);


this.save(db);


return data;

}



find(query){

let db=this.read();


return db.filter(item=>{

return Object.keys(query)
.every(key=>
item[key]===query[key]
);

});


}



update(id,data){

let db=this.read();


let index =
db.findIndex(
x=>x.id===id
);


if(index!==-1){

db[index]={
...db[index],
...data,
updatedAt:new Date()
};


this.save(db);

}


}



delete(id){

let db=this.read();


db =
db.filter(
x=>x.id!==id
);


this.save(db);

}


}


module.exports=
DBReyCloudProjeck;

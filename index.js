const express = require("express");
const cors = require("cors");

const config = require("./config/config");

const storage = require("./core/storage");

const api = require("./routes/api");

app.use("/api", api);

storage.initStorage();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use("/api", api);

app.listen(

config.port,

config.host,

()=>{

console.clear();

console.log("");

console.log("🚀 DBReyCloudProjeck v3.0");

console.log("");

console.log("STATUS     : ONLINE");

console.log("HOST       :",config.host);

console.log("PORT       :",config.port);

console.log("");

console.log("Dashboard  :");

console.log(`http://localhost:${config.port}`);

console.log("");

console.log("API        :");

console.log(`http://localhost:${config.port}/api`);

console.log("");

console.log("Storage    :");

console.log(config.storage);

console.log("");

}

);

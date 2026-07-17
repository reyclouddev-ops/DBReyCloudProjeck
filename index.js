const express = require("express");
const DB = require("./core/db");
const Auth = require("./core/auth");

console.log("INDEX.JS VERSI BARU JALAN");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Middleware API Key
function auth(req, res, next) {

    console.log("HEADERS:", req.headers);

    try {

        Auth.checkKey(req.headers["x-api-key"]);

        next();

    } catch (err) {

        return res.status(403).json({
            error: "API KEY INVALID"
        });

    }

}

// Status
app.get("/", (req, res) => {

    res.json({
        name: "DBReyCloudProjeck",
        version: "2.0.0",
        status: "online"
    });

});

// GET USERS
app.get("/users", auth, (req, res) => {

    const users = new DB("users");

    res.json(users.find({}));

});

// CREATE USER
app.post("/users", auth, (req, res) => {

    const users = new DB("users");

    const data = users.insert(req.body);

    res.json(data);

});

app.listen(PORT, "0.0.0.0", () => {

    console.log(`🚀 DBReyCloudProjeck Online : ${PORT}`);

});

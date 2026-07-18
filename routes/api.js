const express = require("express");

const router = express.Router();

const database = require("./database");
const collection = require("./collection");
const document = require("./document");
const auth = require("./auth");

router.use("/auth", auth);
router.use("/database", database);
router.use("/collection", collection);
router.use("/document", document);

router.get("/", (req, res) => {

    res.json({
        success: true,
        version: "3.0.0",
        message: "DBReyCloud API Ready"
    });

});

module.exports = router;

const express = require("express");
const Database = require("../core/database");

const router = express.Router();

router.post("/create", (req, res) => {

    const { databaseId } = req.body;

    if (!databaseId) {
        return res.status(400).json({
            success: false,
            message: "databaseId required"
        });
    }

    new Database(databaseId);

    res.json({
        success: true,
        databaseId
    });

});

module.exports = router;

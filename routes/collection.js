const express = require("express");
const Database = require("../core/database");

const router = express.Router();

router.post("/create", (req, res) => {

    const {
        databaseId,
        collection
    } = req.body;

    if (!databaseId || !collection) {

        return res.status(400).json({
            success: false
        });

    }

    const db = new Database(databaseId);

    db.collection(collection);

    res.json({

        success: true,

        databaseId,

        collection

    });

});

module.exports = router;

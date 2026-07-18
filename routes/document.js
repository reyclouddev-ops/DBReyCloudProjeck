const express = require("express");
const Database = require("../core/database");

const router = express.Router();

router.post("/insert", (req, res) => {

    const {

        databaseId,

        collection,

        data

    } = req.body;

    if (!databaseId || !collection || !data) {

        return res.status(400).json({

            success: false

        });

    }

    const db = new Database(databaseId);

    const col = db.collection(collection);

    const doc = col.insertOne(data);

    res.json({

        success: true,

        document: doc

    });

});

router.get("/find", (req, res) => {

    const {

        databaseId,

        collection

    } = req.query;

    const db = new Database(databaseId);

    const col = db.collection(collection);

    res.json(col.find());

});

router.patch("/update/:id", (req, res) => {

    const {

        databaseId,

        collection

    } = req.body;

    const db = new Database(databaseId);

    const col = db.collection(collection);

    const doc = col.updateOne(

        req.params.id,

        req.body.data

    );

    res.json(doc);

});

router.delete("/delete/:id", (req, res) => {

    const {

        databaseId,

        collection

    } = req.body;

    const db = new Database(databaseId);

    const col = db.collection(collection);

    res.json({

        success: col.deleteOne(req.params.id)

    });

});

module.exports = router;

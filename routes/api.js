const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{

    res.json({

        name:"DBReyCloudProjeck",

        version:"3.0.0",

        status:"online"

    });

});

module.exports = router;

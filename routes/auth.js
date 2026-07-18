const express = require("express");

const User = require("../core/user");
const ApiKey = require("../core/apikey");

const router = express.Router();

router.post("/register", (req, res) => {

    const {
        username,
        password
    } = req.body;

    const user =
        User.create(
            username,
            password
        );

    if (!user)
        return res.status(400).json({
            success: false,
            message: "Username sudah dipakai"
        });

    const apiKey =
        ApiKey.generate(user.id);

    res.json({
        success: true,
        user,
        apiKey
    });

});

router.post("/login", (req, res) => {

    const {
        username,
        password
    } = req.body;

    const user =
        User.login(
            username,
            password
        );

    if (!user)
        return res.status(401).json({
            success: false
        });

    res.json({
        success: true,
        user
    });

});

module.exports = router;

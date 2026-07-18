const jwt = require("jsonwebtoken");
const config = require("../config.json");

/**
 * Membuat JWT
 */
function create(user) {

    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role || "user"
        },
        config.jwtSecret,
        {
            expiresIn: config.jwtExpired
        }
    );

}

/**
 * Verifikasi JWT
 */
function verify(token) {

    return jwt.verify(
        token,
        config.jwtSecret
    );

}

/**
 * Decode JWT tanpa verifikasi
 */
function decode(token) {

    return jwt.decode(token);

}

module.exports = {
    create,
    verify,
    decode
};

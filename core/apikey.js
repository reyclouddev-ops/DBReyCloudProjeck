const crypto = require("crypto");
const fs = require("fs");

const file = "./storage/apikeys.json";

if (!fs.existsSync(file))
    fs.writeFileSync(file, "[]");

function read() {
    return JSON.parse(fs.readFileSync(file));
}

function save(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function generate(userId) {

    const keys = read();

    const apiKey =
        "DBRC_" +
        crypto.randomBytes(24).toString("hex");

    keys.push({
        userId,
        apiKey,
        createdAt: new Date()
    });

    save(keys);

    return apiKey;

}

function verify(apiKey) {

    return read().find(
        x => x.apiKey === apiKey
    );

}

module.exports = {
    generate,
    verify
};

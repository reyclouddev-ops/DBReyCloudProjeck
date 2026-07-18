const fs = require("fs");
const path = "./storage/users.json";
const crypto = require("crypto");

if (!fs.existsSync(path))
    fs.writeFileSync(path, "[]");

function read() {
    return JSON.parse(fs.readFileSync(path));
}

function save(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function hash(password) {
    return crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
}

function create(username, password) {

    const users = read();

    if (users.find(x => x.username === username))
        return null;

    const user = {
        id: crypto.randomUUID(),
        username,
        password: hash(password),
        createdAt: new Date()
    };

    users.push(user);

    save(users);

    return user;

}

function login(username, password) {

    return read().find(x =>
        x.username === username &&
        x.password === hash(password)
    );

}

module.exports = {
    create,
    login
};

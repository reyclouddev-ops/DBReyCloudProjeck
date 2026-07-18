module.exports = {

    host:
        process.env.HOST || "0.0.0.0",

    port:
        process.env.PORT || 3000,

    domain:
        process.env.DOMAIN || "",

    dashboard:
        true,

    docs:
        true,

    allowRegister:
        true,

    storage:
        "./storage/databases"

}

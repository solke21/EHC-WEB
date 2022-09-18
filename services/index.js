// ACCIONES SOBRE TABLAS

const router = require("express").Router();

module.exports = (db) => {
    router.use("/auth", require("./auth")(db));
    router.use("/events", require("./products")(db));

    return router;
};
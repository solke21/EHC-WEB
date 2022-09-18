// ACCIONES DE EVENTS

const router = require("express").Router();
const { checker } = require("../../middlewares");

const forms = {
    create: ['name_event', 'price', 'details', 'club_event'],
    update: ['name_event', 'price', 'details', 'club_event'],
    remove: ['name_event']
}

module.exports = (db) => {

    router.get("/get-all", require("./get-all")(db));
    router.post("/create", checker(...forms.create), require("./create")(db));
    router.post("/update", checker(...forms.update), require("./update")(db));
    router.post("/remove", checker(...forms.remove), require("./remove")(db));

    return router;
}
// ACCIONES REGISTRO / LOGIN / LOGOUT

const router = require("express").Router();
const { checker } = require("../../middlewares");

const forms = {
    register: ['nick_name', 'email', 'password'],
    login: ['nick_name', 'password']
}
module.exports = (db) => {
    router.post("/register", checker(...forms.register), require("./register")(db));
    router.post("/login", checker(...forms.login), require("./login")(db));
    router.post("/logout", authorizer, require("./logout")());

    return router;
};
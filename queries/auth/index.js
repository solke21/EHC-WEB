// ACCIONES SOBRE AUTH - USERS

const { selectFullUser, insertUser } = require("./queries");
const { queryCatcher } = require("../utils");

const getFullUser =
    (db) =>
    async({ email }) => {
        return await queryCatcher(
            db.maybeOne,
            "getFullUser"
        )(selectFullUser({ email }));
    };

const createUser =
    (db) =>
    async({ nick_name, email, password_user }) => {
        const user = await getFullUser(db)({ email });

        if (user.data)
            return {
                ok: false,
                code: "duplication",
            };

        return await queryCatcher(
            db.query,
            "createUser"
        )(insertUser({ nick_name, email, password_user }));
    };

const getCorrectUser = (db) => async({ email, compareFn }) => {
    const user = await getFullUser(db)({ email });

    if (!user.data) {
        return {
            ok: false,
            code: "unknown",
        };
    }

    const isPasswordCorrect = await compareFn(user.data.password);

    if (!isPasswordCorrect) {
        return {
            ok: false,
            code: "unknown",
        };
    }

    return {
        ok: true,
        data: { email: user.data.email },
    };
};


module.exports = {
    getFullUser,
    createUser,
    getCorrectUser,
};
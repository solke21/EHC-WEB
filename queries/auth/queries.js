// QUERIES DE USERS

const { sql } = require("slonik");

const selectFullUser = ({ email }) => {
    return sql `
    SELECT * FROM users
    WHERE email = ${email};
  `;
};

const insertUser = ({ nick_name, email, password_user }) => {
    return sql `
    INSERT INTO users (
        nick_name, email, password_user
    ) VALUES (
      ${nick_name}, ${email}, ${password_user}
    );
  `;
};

module.exports = {
    selectFullUser,
    insertUser,
};
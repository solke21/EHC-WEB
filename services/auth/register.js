// REALIZAR REGISTRO

const { createUser } = require('../../queries/auth');
const { hash } = require('../../utils');
const { register } = require('../../errors/auth');
const errors = require('../../errors/commons');

module.exports = db => async(req, res, next) => {
    const { nick_name, email, password } = req.body;

    const queryResult = await createUser(db)({
        nick_name,
        email,
        password: await hash.encrypt(password),
    });
    if (!queryResult.ok) return next(register[queryResult.code] || errors[500]);

    const message = 'Welcome to Esencia! Te mantendremos informad@ de todos nuestros eventos.';

    // try {
    //   await sendEmail({
    //     email,
    //     subject: 'Bienvenido a mi Ecommerce, gracias por registrarte',
    //     message,
    //   });
    // } catch (error) {
    //   console.log('> error: ', error.message);
    // }

    res.status(200).json({
        success: true,
    });
};
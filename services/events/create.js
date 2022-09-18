// CREAR EVENTO

const { createEvent, getOneEvent } = require("../../queries/events");
const errors = require("../../errors/events")


module.exports = (db) => async(req, res, next) => {

    const { name_event, price, details, club_event } = req.body

    const event = await getOneEvent(db)({ ref });

    if (event.data.length) return next(errors[401]);

    const queryResult = await createEvent(db)({
        name_event,
        price,
        details,
        club_event
    })

    if (!queryResult.ok) return next(errors[400]);

    res.status(200).json({
        success: true,

    });
}
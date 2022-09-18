// MODIFICAR EVENTO

const { updateEvent } = require("../../queries/events");
const errors = require("../../errors/events")

module.exports = (db) => async(req, res, next) => {

    const { name_event, price, details, club_event } = req.body;

    const queryResult = await updateEvent(db)({
        name_event,
        price,
        details,
        club_event

    })

    if (!queryResult.ok) return next(errors[403]);


    res.status(200).json({
        success: true,
        message: 'Event modificado',
    });
}
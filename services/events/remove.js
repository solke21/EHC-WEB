// ELIMINAR EVENTO

const { getOneEvent, deleteEvent } = require("../../queries/events");
const errors = require("../../errors/events");
const server = require("../../errors/commons")

module.exports = (db) => async(req, res, next) => {

    const { name_event } = req.body;

    const event = await getOneEvent(db)({ name_event });

    if (!event.data.length) return next(errors[402]);

    const queryResult = await deleteEvent(db)({ name_event });

    if (!queryResult.ok) return next(server[500]);

    res.status(200).json({
        success: true,
        message: 'Evento eliminado',
    });
}
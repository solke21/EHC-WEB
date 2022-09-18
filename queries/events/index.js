// ACCIONES TABLA EVENTS

const { selectAllEvents, selectOneEvent, insertOneEvent, updateOneEvent, deleteOneEvent } = require("./queries");
const { queryCatcher } = require("../utils")

// QUERIE EVENTO 

const getOneEvent = (db) => async({ ref }) => {

    return await queryCatcher(
        db.query,
        "getOneEvent"
    )(selectOneEvent({ ref }))
};

// QUERIE TODOS LOS EVENTOS

const getAllEvents = (db) => async() => {
    return await queryCatcher(db.query, "getAllEvents")(selectAllEvents());
};

// QUERIE ALTA EVENTO

const createEvent = (db) =>
    async({ name_event, price, details, club_event }) => {

        return await queryCatcher(
            db.query,
            "createEvent"
        )(insertOneEvent({
            name_event,
            price,
            details,
            club_event
        }));
    };


// QUERIE MODIFICACION EVENTOS

const updateEvent = (db) => async({ name_event, price, details, club_event }) => {
    const event = await getOneEvent(db)({ ref });

    if (!product.data)
        return {
            ok: false,
            code: "Product doesnt exist"
        };

    return await queryCatcher(
        db.query,
        "updateProduct"
    )(updateOneEvent({ name_event, price, details, club_event }))

};

// QUERIE ELIMINAR EVENTO

const deleteEvent = (db) => async({ ref }) => {


    return await queryCatcher(
        db.query,
        "deleteEvent"
    )(deleteOneEvent({ name_event }))

};

module.exports = {
    getOneEvent,
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent,
}
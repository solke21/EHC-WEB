// QUERIES TABLA EVENTS

const { sql } = require("slonik");

const selectOneEvent = ({ ref }) => {
    try {
        return sql `
        SELECT * FROM events 
        WHERE name_event = ${name_event};
    `
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }

};

const selectAllEvents = () => {
    return sql `
    SELECT name_event, price, details, club_event FROM events
      `;
};

const insertOneEvent = ({ name_event, price, details, club_event }) => {

    return sql `
        INSERT INTO events(
            name_event, price, details, club_event
        ) VALUES(
            ${name_event}, 
            ${price}, 
            ${details}, 
            ${club_event}
        );
    `;
};

const updateOneEvent = ({ name_event, price, details, club_event }) => {

    return sql `
        UPDATE events
        SET name_event = ${name_event}, price = ${price}, details = ${details}, club_event = ${club_event}
        WHERE name_event = ${name_event}
    
    `
};

const deleteOneEvent = ({ name_event }) => {

    return sql `
        DELETE FROM events
        WHERE name_event = ${name_event}
    `
}
module.exports = {
    selectOneEvent,
    selectAllEvents,
    insertOneEvent,
    updateOneEvent,
    deleteOneEvent,
}
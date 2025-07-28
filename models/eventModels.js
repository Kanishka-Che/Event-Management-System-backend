

import db from '../config/database.js';

const Event = {
  getAll: (callback) => {
    db.query('SELECT * FROM events', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM events WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO events SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE events SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM events WHERE id = ?', [id], (err)=>{
      if (err) return callback(err);
      callback(null, { msg: "Event deleted successfully" });
    });
  },
  registerAttendee: (eventId, attendee, callback) => {
    db.query('INSERT INTO attendees (event_id, name) VALUES (?, ?)', [eventId, attendee], callback);
  },
  getAttendees: (eventId, callback) => {
    db.query('SELECT * FROM attendees WHERE event_id = ?', [eventId], callback);
  }
};

export default Event;

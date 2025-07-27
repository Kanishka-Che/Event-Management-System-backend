

import Event from '../models/eventModels.js';

export function getAllEvents(req, res)  {
  Event.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export function getEvent (req, res){
  Event.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};

export function createEvent(req, res) {
  Event.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, ...req.body });
  });
};

export function  updateEvent (req, res) {
  Event.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ msg: "Updated successfully" });
  });
};

export function deleteEvent(req, res) {
  Event.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ msg: "Deleted successfully" });
  });
};

export function registerAttendee(req, res){
  const { name } = req.body;
  Event.registerAttendee(req.params.id, name, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ msg: "Attendee registered successfully" });
  });
};

export function getAttendees(req, res){
  Event.getAttendees(req.params.id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};




import express from 'express';
import {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  registerAttendee,
  getAttendees
} from '../controllers/eventController.js';

const router = express.Router();

router.get('/events', getAllEvents);
router.get('/events/:id', getEvent);
router.post('/events',createEvent);
router.put('/events/:id',updateEvent);
router.delete('/events/:id', deleteEvent);
router.post('/events/:id/attendees', registerAttendee);
router.get('/events/:id/attendees', getAttendees);

export default router;
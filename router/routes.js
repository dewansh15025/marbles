const express = require("express");
const router = express.Router();

// Import Controllers
const noteController = require("../controller/noteController");

// Note Routes
/**
 * @swagger
 * /allNotes:
 *   get:
 *     summary: Get a list of notes
 *     description: Retrieve a list of notes from the database.
 *     responses:
 *       200:
 *         description: message and content list with all notes.
 */
router.get("/allNotes", noteController.get_all_notes);

//done
/**
 * @swagger
 * /allNotes:
 *   get:
 *     summary: Get a list of notes
 *     description: Retrieve a list of notes from the database.
 *     responses:
 *       200:
 *         description: message and content list with all notes.
 */
router.post("/addNote", noteController.add_note);
//done
/**
 * @swagger
 * /allNotes:
 *   get:
 *     summary: Get a list of notes
 *     description: Retrieve a list of notes from the database.
 *     responses:
 *       200:
 *         description: message and content list with all notes.
 */
router.get("/notes", noteController.get_note);

/**
 * @swagger
 * /allNotes:
 *   get:
 *     summary: Get a list of notes
 *     description: Retrieve a list of notes from the database.
 *     responses:
 *       200:
 *         description: message and content list with all notes.
 */
router.get("/notes/:noteId",noteController.get_get_note_by_id);

/**
 * @swagger
 * /notes/{noteId}:
 *   put:
 *     summary: Edit note with note id
 *     description: edit a note with note id in path param and object to be updated with in request body
 *     parameters:
        - in: path
          name: noteId
          type: uuid
          required: true
          description: uuids of the Not to be edited.
 *     responses:
 *       200:
 *         description: message and content with updated note
 */
router.put("/notes/:noteId",noteController.update_note);


// Exports
module.exports = router;
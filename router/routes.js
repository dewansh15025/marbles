const express = require("express");
const router = express.Router();

// Import Controllers
const noteController = require("../controller/noteController");

// Note Routes
/**
 * @swagger
 * /allNotes:
 *   get:
 *     description: Retrieve the full list of notes
 *     tags:
 *       - Note
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: notes
 *         schema:
 *           $ref: '#/definitions/Note'
 */
router.get("/allNotes", noteController.getAllNotes);

/**
 * @swagger
 * /addNote:
 *   post:
 *     description: Create a new note
 *     tags:
 *       - Note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: note
 *         description: note object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Note'
 *     responses:
 *       200:
 *         description: new note object
 *         schema:
 *           $ref: '#/definitions/Note'
 */
router.post("/addNote", noteController.addNote);
//done
/**
 * @swagger
 * /notes/?title=abc:
 *   get:
 *     description: Retrieve notes containing substring
 *     tags:
 *       - Note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: substring of title
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: list of notes
 *         schema:
 *           $ref: '#/definitions/Note'
 */
router.get("/notes", noteController.getNote);

/**
 * @swagger
 * /notes/{notesId}:
 *   get:
 *     description: Retrieve an specific note
 *     tags:
 *       - Note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: noteId
 *         description: uuid of the note to retrieve
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: note
 *         schema:
 *           $ref: '#/definitions/Note'
 */
router.get("/notes/:noteId",noteController.getNoteById);

/**
 * @swagger
 * /notes/{noteId}:
 *   put:
 *     description: Update title,body field of a note
 *     tags:
 *       - Note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: noteId
 *         description: noteId of the note to update
 *         in: path
 *         required: true
 *         type: string
 *       - name: note object
 *         description: new note object,  updates will be pushed to db
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Note'
 *     responses:
 *       200:
 *         description: updated note
 *         schema:
 *           $ref: '#/definitions/Note'
 */

router.put("/notes/:noteId",noteController.updateNote);


// Exports
module.exports = router;
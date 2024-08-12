const express = require("express");
const router = express.Router();

// Import Controllers
const noteController = require("../controller/noteController");

// Note Routes
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
//router.get("/allNotes", noteController.get_all_notes);

//done
router.post("/addNote", noteController.add_note);
//done
router.get("/notes", noteController.get_note);

router.get("/notes/:noteId",noteController.get_get_note_by_id);

router.put("/notes/:noteId",noteController.update_note);


// Exports
module.exports = router;
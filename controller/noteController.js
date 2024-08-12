const Note = require("../models/notes");
const db = require('../database.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const get_all_notes = (req, res) => {
   const users =  Note.findAll().then((result)=>{
    if (result.length > 0) {
                 res.json({
                 msg: "All notes have been fetched successfully!",
                 content: result,
               });
             } else {
               res.json({ msg: "No notes to show!" });
             }
   }).catch((error) => res.json({ msg: error.message }));;
  };

  const  get_get_note_by_id = async(req,res) => {

    const note = await  Note.findByPk(req.params.noteId);
    if (note === null) {
      res.status(404)
        return res.json(
            {msg: "Note not Found!",
            content: null}
            );
    } else {
      return res.json(
                    {msg: "Note Found!",
                    content: note}
                    );
    }

   };

  const get_note = async (req, res) => {

    const users = await Note.findAll({
        where: {
          title: {
            [Op.like]: `%${req.query.title}%`
          }
        }
      }).then((result)=>{
     if (result.length > 0) {
                  res.json({
                  msg: `All notes containing "${req.query.title}" been fetched successfully!`,
                  content: result,
                });
              } else {
                res.json({ msg: "No notes to show!" });
              }
    }).catch((error) => res.json({ msg: error.message }));;
   };
  
  // To add a new note to the database
  const add_note = async(req, res) => {
    

    const jane =await Note.create({ title: req.body.title, body: req.body.body }).then((result)=>{
        res.json({
            msg: "Your note was saved successfully!",
            content: result, 
        })
    }).catch((error) => res.json({ msg: error.message }));;
  };

  const update_note = async (req, res) => {
    const id = req.params.noteId;

    const note = await  Note.findByPk(req.params.noteId);
    if (note === null) {
        return res.json(
            {msg: "Note not Found!",
            content: null}
            );
    } else {
      await note.update(req.body);
      return res.json({
        msg: "The note was updated successfully!",
        content: note,
      });
    }
  };
  


  module.exports = {
    get_all_notes,
    add_note,
    get_note,
    get_get_note_by_id,
    update_note,
  };
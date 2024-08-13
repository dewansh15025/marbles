const Note = require("../models/notes");
const db = require('../database.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const getAllNotes = (req, res) => {
   const users =  Note.findAll().then((result)=>{
    if (result.length > 0) {
                 res.send({
                 msg: "All notes have been fetched successfully!",
                 content: result,
               });
             } else {
               res.status(204).send({ msg: "No notes to show!" });
             }
   }).catch((error) => res.status(500).send({ msg: error.message }));;
  };

  const  getNoteById = async(req,res) => {

    console.log(req.params.noteId)
    const note = await  Note.findByPk(req.params.noteId);
    console.log(note)
    if (note === null) {
      
        return res.status(404).send(
            {msg: "Note not Found!",
            content: null}
            );
    } else {
      return res.status(200).send(
                    {msg: "Note Found!",
                    content: note}
                    );
    }

   };

  const getNote = async (req, res) => {

    const users = await Note.findAll({
        where: {
          title: {
            [Op.like]: `%${req.query.title}%`
          }
        }
      }).then((result)=>{
     if (result.length > 0) {
                  res.send({
                  msg: `All notes containing "${req.query.title}" been fetched successfully!`,
                  content: result,
                });
              } else {
                res.status(204).send({ msg: "No notes to show!" });
              }
    }).catch((error) => res.status(500).send({ msg: error.message || "Some error occurred while retrieving notes."}));;
   };
  
  // To add a new note to the database
  const addNote = async(req, res) => {
    console.log(req.body)
    if(Object.keys(req.body).length === 0||!req.body?.title || !req.body?.body) {
      return res.status(400).send({
          msg: "Note must have body and title"
      });
  }

    const jane =await Note.create({ title: req.body.title, body: req.body.body }).then((result)=>{
        res.send({
            msg: "Your note was saved successfully!",
            content: result, 
        })
    }).catch((error) => res.status(500).send({ msg: error.message || "Some error occurred while creating the Note."}));;
  };

  const updateNote = async (req, res) => {
    const id = req.params.noteId;
console.log(id)
    const note = await  Note.findByPk(id);
    if (note === null) {
        return res.status(404).send(
            {msg: "Note not Found!",
            content: null}
            );
    } else {
      if(!req.body){
        return res.status(400).send({msg:"Note must not be empty"})
      }
      await note.update(req.body).catch(error=>{msg: error.message||"something went wrong"});
      return res.status(200).send({
        msg: "The note was updated successfully!",
        content: note,
      });
    }
  };
  


  module.exports = {
    getAllNotes,
    addNote,
    getNote,
    getNoteById,
    updateNote,
  };
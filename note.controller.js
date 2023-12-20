// const db = require("./db");

// // Importing local components
// const notesController = require("./note.controller");

// /** */
// exports.createNote = async (req, res) => {
//   try {
//     const { description } = req.body;

//     const result = await db.query(
//       "INSERT INTO notes (description) VALUES ($1) RETURNING *",
//       [description]
//     );

//     const newNote = result.rows[0];

//     return res.json(newNote);
//   } catch (error) {
//     console.error(error);
//   }
// };

// /** */
// exports.getAllNotes = async (req, res) => {
//   try {
//     const result = await db.query("SELECT * FROM notes");
//     res.json(result.rows);
//   } catch (error) {
//     console.error(error);
//   }
// };

// /** */
// exports.getOneNotes = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await db.query("SELECT * FROM notes WHERE id = $1", [id]);

//     const note = result.rows[0];

//     res.json(note);
//   } catch (error) {
//     console.error(error);
//   }
// };

// /** */
// exports.updateNote = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;

//     const result = await db.query(
//       "UPDATE notes SET description = $1 WHERE id = $2",
//       [description, id]
//     );

//     res.json("Note Updated");
//   } catch (error) {
//     console.error(error);
//   }
// };

// /** */
// exports.deleteNote = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await db.query("DELETE FROM notes WHERE id = $1", [id]);

//     res.json("Note Deleted");
//   } catch (error) {
//     console.error(error);
//   }
// };

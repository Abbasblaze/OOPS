const db = require("../db");
const User = require("../models/user.model.js");

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "This can't be empty!",
      });
      return;
    }
    const data = await User.create(req.body);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while creating the user.",
    });
  }
};

// Delete a User
exports.delete = (req, res) => {
  User.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete user with id " + req.params.id,
        });
      }
    } else res.send({ message: `user is deleted successfully!` });
  });
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const data = await User.create(req.body);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating the user.",
    });
  }
};

// Geting all Users
exports.getAll = (req, res) => {
  const id = req.query.id;
  User.getAll(id, (err, data) => {
    if (err)
      res.status(500).send({
        message: "Some error occurred while retrieving users.",
      });
    else res.send(data);
  });
};

// Find a single user by Id
exports.getUserById = (req, res) => {
  User.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).json({
          message: `No user with id ${req.params.id}.`,
        });
      } else {
        return res.status(500).json({
          message: "Error retrieving user with id " + req.params.id,
        });
      }
    }

    res.json(data);
  });
};

// exports.createUser = async (req, res) => {
//   try {
// const result = await db.query(`
//   INSERT INTO users (email , password , id)
//   VALUES ('${req.body.email}', '${req.body.password}', '${req.body.id}');
// `);
//     res.status(200).json({
//       success: true,
//       message: "The new user is created",
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Get User

// exports.getUser = async (req, res) => {
//   try {
//     const result = await db.query(`SELECT * FROM "users"`);

//     res.status(200).json({
//       success: true,
//       message: "The users table is given below",
//       data: result.rows,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// //User Update

// exports.updateUser = async (req, res) => {
//   try {
//     const result = await db.query(
// `SELECT * FROM "users"
//      WHERE
//        id = '${req.body.id}' AND
//        email = '${req.body.email}' AND
//        password = '${req.body.password}' AND
//     `
//     );

//     res.status(200).json({
//       success: true,
//       message: "The user is updated",
//       data: result,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// // delete user

// exports.deleteUser = async (req, res) => {
//   try {
//   const result = await db.query(
// `DELETE FROM users WHERE id = ${req.params.id}`
//   );

//   res.status(200).json({
//     success: true,
//     message: "The user is deleted",
//     data: result,
//   });
// } catch (error) {
//   console.error(error);
// }
// // };

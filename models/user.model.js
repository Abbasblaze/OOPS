const db = require("../db");

// constructor
class Users {
  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
  }
}

exports.create = (req, result) => {
  db.query(
    `INSERT INTO "users" (email, password, id) 
    VALUES ('${req.email}', '${req.password}', '${req.id}')`,
    (err) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
    }
  );
};

exports.delete = (id, result) => {
  db.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the id
      result({ kind: "not_found" }, null);
      return;
    }
  });
};

// Working
exports.update = (id, userData, result) => {
  db.query(
    `UPDATE users SET email = '${userData.email}', password = '${userData.password}' WHERE id = '${id}'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
    }
  );
};

// working
exports.getAll = (id, result) => {
  let query = "SELECT * FROM users";

  if (id) {
    query += ` WHERE id = ${id}`;
  }

  db.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

exports.getById = (req, result) => {
  db.query(`SELECT * FROM users WHERE id = ${req}`, (err, res) => {
    if (err) {
      result({ kind: "not_found" }, null);
    } else {
      return result(null, res.rows);
    }
  });
};

const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");
const secretKey = "abbas";

/** get custoemer */

exports.getCustomer = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM "customer"`);

    res.status(200).json({
      success: true,
      message: "The customers table is given below",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

/** create customer */

exports.createCustomer = async (req, res) => {
  try {
    const result = await db.query(`
    INSERT INTO customer (customername, customerid, contactname, orderid)
    VALUES ('${req.body.customername}', ${req.body.customerid}, '${req.body.contactname}', '${req.body.orderid}');
  `);

    res.status(200).json({
      success: true,
      message: "The new customer is created",
    });
  } catch (error) {
    console.error(error);
  }
};

/**update customer */

exports.updateCustomer = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM "customer" 
         WHERE 
           customername = '${req.body.customername}' AND
           customerid = '${req.body.customerid}' AND
           contactname = '${req.body.contactname}' AND
           orderid = '${req.body.orderid}'
        `
    );

    res.status(200).json({
      success: true,
      message: "The user is updated",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

/**delete customer */

exports.deleteCustomer = async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM customer WHERE id = ${req.params.id}`
    );

    res.status(200).json({
      success: true,
      message: "The customer is deleted",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

//Product

//params

/**get only one customer */

exports.getByCustomer = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM "customer" WHERE id = ${req.params.id}`
    );

    res.status(200).json({
      success: true,
      message: "The id you searched for is given below",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);
  }
};

/**Login */

exports.userLogIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const foundUser = await db.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    if (!foundUser) {
      return res.status(400).json({
        success: false,
        message: "Email not exists",
      });
    }

    if (password === password) {
      return res.status(400).json({
        success: false,
        message: "Email not exists",
      });
    }

    // JWT token
    jwt.sign({ email }, secretKey, { expiresIn: "300s" }, (error, token) => {
      if (error) {
        console.log("Error JWT is not assigned ", error);
        return res.status(500).json({
          success: false,
          message: "Server Error",
        });
      }
      if (token) {
        res.status(200).json({
          success: true,
          message: "User login successful",
          data: {
            password: token,
            email: email,
          },
        });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

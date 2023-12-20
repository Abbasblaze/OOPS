/**
 * APis
 * database querys
 */

// Endpoints
// app.get("/notes", notesController.getAllNotes);
// app.get("/notes/:id", notesController.getOneNotes);
// app.post("/notes/create", notesController.createNote);
// app.patch("/notes/:id", notesController.updateNote);
// app.delete("/notes/:id", notesController.deleteNote);

// Customer
// app.get("/customer", customerController.getCustomer);
// app.get("/customer/order/:id", customerController.getOrderid);
// app.get("/customer/order", customerController._getCustomer);
// app.get("/customer/product", customerController.getProduct);

// exports.getCustomer = async (req, res) => {

//   try {
//     const result = await db.query(
//       `SELECT * from "customer"`
//     );

//     res.status(404).json({
//       success: true,
//       message: "The list of all customers are given below",
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// exports.getProduct = async (req, res) => {
//   try {
//     const result = await db.query(
//       "SELECT product_name FROM product INNER JOIN customer"
//     );
//     console.log(result);

//     res.status(404).json({
//       success: true,
//       message: "add your last name ",
//       data: {
//         LASTNAME: result,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// exports.getOrderid = async (req, res) => {
//   try {
//     const result = await db.query(
//       "SELECT customer:id FROM customer AS customer:id = ci"
//     );
//     res.status(404).json({
//       success: true,
//       message: "User login successfully",
//       data: {
//         customerid: result,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// exports.getCustomerName = async (req, res) => {
//   try {
//     const result = await db.query(
//       `SELECT * FROM public."Customers"`
//     );

//     res.status(404).json({
//       success: true,
//       message: "The information you put is wrong",
//       data: result.rows,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// exports.createCustomer = async (req, res) => {
//     try {
//       const result = await db.query(
//         'INSERT INTO customer (customername, customerid, contactname, orderid) VALUES ($1, $2, $3, $4)',
//         [req.body.customername, req.body.customerid, req.body.contactname, req.body.orderid]
//       );

//       // Handle the result as needed
//       res.status(200).json({ success: true, result: result.rows });
//     } catch (error) {
//       console.error('Error creating customer:', error);
//       res.status(500).json({ success: false, error: 'Internal Server Error' });
//     }
//   };

//app.get("/customer/:name", (req, res) => {
//     res.send(req.params.name);
// });
// app.get("/customer/:address", (req, res) => {
//   res.send(req.params.name);
// });

// const db = require("your-database-module"); // replace 'your-database-module' with the actual module you're using

// app.get("/customer/:id", (req, res) => {
//   res.send(req.params.id);
// });

// exports.getOneCustomer = async (req, res) => {
//   try {
//     const result = await db.query("SELECT * FROM customer WHERE id = ?", [
//       req.params.id,
//     ]);

//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// UPDATE Customer
// SET contactname = 'New Contact Name'
// WHERE customerid = $1

// app.get("/customer/:id", customerController.getOneCustomer  (req, res) => {
//   res.send(req.params.id);
// });

// exports.deleteCustomer = async (req, res) => {
// try {
//   const result = await db.query(
//     'DELETE FROM Customer WHERE customerid = ?',
//     [req.params.id]
//   );

//       // Handle the result or send a response as needed

//       res.status(200).json({ message: 'Customer deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting customer:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };

// = '${req.body.customername}',
// = ${req.body.customerid},
// = '${req.body.contactname}',
// = '${req.body.orderid}'

// exports.createCustomer = async (req, res) => {
//     try {
//   const result = await db.query(`
//     INSERT INTO customer (customername, customerid, contactname, orderid)
//     VALUES ('${req.body.customername}', ${req.body.customerid}, '${req.body.contactname}', '${req.body.orderid}');
//   `);

//       // Log the data
//       console.log('Created customer data:', req.body);

//       res.status(200).json({
//         success: true,
//         message: "The new customer is created!",
//         data: result.rows,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

// customername = ${req.body.customername}',
// customerid =  ${req.body.customerid},
// contactid = ${req.body.contactname},
// orderid = ${req.body.orderid}
// `

// if (!user)
// res.status(200).json({
//   success: true,
//   message: "User login successful",
//   data: {
//     token: accessToken,
//     email: user.email,
//     data: result.rows,
//   },
// });
// } catch (error) {
// return next(new errorResponse(error, 500));
// }

// exports.customerLogIn = async (req, res, next) => {
//     try{
//         const result = await debug.query(`SELECT * FROM user WHERE email = ${email}`);
//          if(!user){

//          }
//     }
// }

// const token = await Users.createUser({ email: foundUser.email }, { $set: { refreshToken: refreshToken } });
// if (matchPassword && token)
//     res.status(200).json({
//         success: true,
//         message: "User login successful",
//         data: {
//             token: accessToken,
//             email: foundUser.email,
//             role: roles,
//         },
//     });

// const jwt = require("jsonwebtoken");

// // Your secret key to sign the token (keep it secret)
// const secretKey = "your_secret_key";

// // Assuming 'email' is a variable containing the email address
// const email = "user@example.com";

// Set the expiration time for the token (e.g., 300 seconds)
// const expiresIn = "300s";

// jwt.sign({ email }, secretKey, { expiresIn }, (error, token) => {
//   if (error) {
//     console.log("Error JWT is not assigned ", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }

//   if (token) {
//     res.status(200).json({
//       success: true,
//       message: "User login successful",
//       data: {
//         token: token,
//         email: email,
//       },
//     });
//   }
// });

/** User working APIS */

// // Create a user
// const newUser = new User({
//   id: req.body.id,
//   email: req.body.email,
//   password: req.body.password,
// });

// exports.create = (req, result) => {
//     if (!req.body || !req.body.email || !req.body.password || !req.body.id) {
//       result(
//         {
//           message: "Invalid 'email', 'password', and 'id'.",
//         },
//         null
//       );
//       return;
//     }

//     const values = [req.body.email, req.body.password, req.body.id];

//     db.query(query, values, (err) => {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         return;
//       }

//       result(null, { message: "User created successfully" });
//     });
//   };

// exports.create = (req, result) => {
//     db.query(
//       `INSERT INTO "users" (email, password, id)
//       VALUES ('${req.body.email}', '${req.body.password}', '${req.body.id}')`,
//       (err) => {
//         if (err) {
//           console.log("error: ", err);
//           result(err, null);
//           return;
//         }
//       }
//     );
//   };

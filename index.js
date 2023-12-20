// Importing Third party libraries
const express = require("express");

const customerController = require("./controllers/customer.controller");
const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");
const notificationController = require("./controllers/notification.controller");
const settingsController = require("./controllers/settings.controller");

const app = express();

// JSON MIDDLEWARE - Allows us to return JSON from the APIs
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logger Middleware
app.use((req, _, next) => {
  console.log(req.url);
  next();
});

//Customer APIs

app.get("/customer", customerController.getCustomer);
app.post("/customer/create", customerController.createCustomer);
app.patch("/customer/:id", customerController.updateCustomer);
app.delete("/customer/:id", customerController.deleteCustomer);

// product

app.get("/product", productController.getProduct);
app.post("/product/create", productController.createProduct);
app.patch("/product/:id", productController.updateProduct);

//join APIs

app.get("/product/name", productController.productName);
app.get("/product/order", productController.productOrder);

// res params

app.get("/customer/:id", customerController.getByCustomer);

//login

app.post("/users/login", customerController.userLogIn);

//user APIs

app.post("/user/create", userController.create);
app.delete("/user/:id", userController.delete);
app.patch("/user/:id", userController.updateUser);
app.get("/user", userController.getAll);
app.get("/user/:id", userController.getUserById);
//Notification APIs

app.get("/notification", notificationController.allNotification);
app.post("/new/notification", notificationController.createNotification);
app.delete("/notification/:id", notificationController.deleteNotification);

//Settings APIs
app.post("/settings", settingsController.createSettings);
app.get("/chat/All", settingsController.chatAll);
app.get("/help", settingsController.helpReq);
app.get("/account/info", settingsController.accountInfo);

// Listening to PORT: 8080
app.listen(8081, function () {
  console.log("⚡️ Server is running on port 8081");
});

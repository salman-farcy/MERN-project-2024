
//*express.Router
//? In Express.js, express.Router() is a mini Express application all the server cinfiguration but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize yuor routes and middleware to keep your code prganized and maintainable.
//* https://express.js.com/guide/routing.html
//? Use the express.Router class to create modular, mountable route handlers. A Router Instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".




const express = require("express");
const router = express.Router()

// router.get("/", (req, res) => {
//      res
//           .status(200)
//           .send("Welcome to world best mern series by salman farcy USING router");
// });

//! Method Two
router.route("/").get((req, res) => {
     res.status(200).send("Welcome to world best mern series by salman farcy USING router");
});

//! Method One
router.get("/register", (req, res) => {
     res.status(200).send("Welcome to registration page");
});



module.exports = router;
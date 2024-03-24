//*express.Router
//? In Express.js, express.Router() is a mini Express application all the server cinfiguration but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize yuor routes and middleware to keep your code prganized and maintainable.
//* https://express.js.com/guide/routing.html
//? Use the express.Router class to create modular, mountable route handlers. A Router Instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".


const express = require("express");
const router = express.Router()
const authcontrollers = require("../controllers/auth-controllers");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-meddleware")


router.route("/").get(authcontrollers.home);

router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema), authcontrollers.login);

router.route("/about").get(authcontrollers.about);


module.exports = router;
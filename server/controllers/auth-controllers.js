const User = require('../models/user-modle');
const bcrypt = require("bcryptjs");




//* Home Page Logic
const home = async (req, res) => {
     try {
          res.status(200).send("Home Welcome to world best mern series by salman farcy USING router");
     }
     catch (error) {
          console.log(error);
     }
}


// *-------------------------------
// * User Registration Logic 📝
// *-------------------------------
//? 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
// 2. Check Email Existence: 📋 Check if the email is already registered.
// 3. Hash Password: 🔒 Securely hash the password.
// 4. Create User: 📝 Create a new user with hashed password.
// 5. Save to DB: 💾 Save user data to the database.
// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

//* Register
const register = async (req, res) => {
     try {
          const { username, email, phone, password } = req.body;
          const userExist = await User.findOne({ email });

          if (userExist) {
               return res.status(400).json({ msg: "Email Already Exists" })
          }
          const userCreated = await User.create({ username, email, phone, password });
          
          res.status(201)
               .json({
                    msg: "Registration Successful",
                    token: await userCreated.generateToken(),
                    userId: userCreated._id.toString(),
               });
     }
     catch (error) {
          res.status(500).json("internal server error");

     }
}

//*Login
const login = async (req, res) => {
     try {
          const { email, password } = req.body;
          const userExist = await User.findOne({ email });

          if (!userExist) {
               return res.status(400).send({ message: "Invalid Credentials" })
          }

          //* Password Comparator method one
          // const user = await bcrypt.compare(password, userExist.password);

          //* Password Comparator method Two
          const user = await userExist.comparePassword(password);

          if (user) {
               res.status(200).send({
                    message: "Login Successful",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString(),
               });
          }
          else {
               res.status(401).send({ message: "Invalid emali or password" })
          }
     } catch (error) {
          res.status(500).send("internal server error");
     }
}

//* About 
const about = async (req, res) => {
     try {
          res.status(400).send({ msg: 'this is a bad requiest' })
     }
     catch (error) {
          console.log(error);
     }
}


module.exports = { home, register, login, about }
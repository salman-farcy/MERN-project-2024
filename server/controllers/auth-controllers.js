const User = require('../models/user-modle')




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
               return res.status(400).json({ msg: "email already Exists" })
          }

          const userCreated = await User.create({ username, email, phone, password });

          console.log(userCreated);
          res.status(200).send({ msg: userCreated });
     }
     catch (error) {
          console.log(error);
          res.status(500).json("internal server error")
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


module.exports = { home, register, about }
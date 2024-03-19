
const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
     },
     phone: {
          type: String,
          required: true
     },
     password: {
          type: String,
          required: true,
     },
     isAdmin: {
          type: Boolean,
          default: false,
     }
});

//? secure the password with the bcrypt
userSchema.pre('save', async function (next) {
     console.log("pre mathod", this);
     const user = this;

     if (!user.isModified('password')) {
          next();
     }

     try {
          //*hash the password
          const saltRound = await bcrypt.genSalt(10);
          const hash_password = await bcrypt.hash(user.password, saltRound);
          user.password = hash_password;
     } catch (error) {
          next(error)
     }
});


//TODO: What is JWT?
//* JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
//* JWTs are often used for authentication and authorization in web applications.
//?     Authentication: Verifying the identity of a user or client.
//?     Authorization: Determining what actions a user or client is allowed to perform.

//TODO: Components of a JWT:
//? Header: Contains metadata about the token, such as the type of token and the signing algorithm being used.
//? Payload: Contains claims or statements about an entity (typically, the user) and additional data. Common claims include user ID, username, and expiration time.
//? Signature: To verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way, a signature is included.


//define the model or the collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;
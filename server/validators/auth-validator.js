
const { z } = require("zod");


//* Creating An Object Schema
const signupSchema = z
     .object({
          username: z
               .string({ required_error: "Name is required" })
               .trim()
               .min(3, { message: "Name Must be at lest of 3 Character" })
               .max(255, { message: "Name Must not be more than 255 Character" }),

          email: z
               .string({ required_error: "Name is required" })
               .trim()
               .email({ message: "Invalid email address" })
               .min(3, { message: "email Must be at lest of 3 Character" })
               .max(40, { message: "email Must not be more than 40 Character" }),

          phone: z
               .string({ required_error: "Name is required" })
               .trim()
               .min(11, { message: "Phone Must be at lest of 11 Character" })
               .max(20, { message: "Phone Must not be more than 20 Character" }),

          password: z
               .string({ required_error: "Name is required" })
               .trim()
               .min(8, { message: "Password Must be at lest of 8 Character" })
               .max(1024, { message: "Password Must not be more than 1024 Character" })
     });


module.exports = signupSchema ;
// require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 5000;
const router = require('./router/auth-router');
const connectDb = require("./utils/db");


//*Middleware
app.use(express.json());

//?Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use('/', router)

connectDb().then(() => {
     app.listen(PORT, () => {
          console.log(`server is running at port ${PORT}`);
     });
})
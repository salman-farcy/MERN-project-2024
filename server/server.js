const express = require("express");
const app = express();
const PORT = 5000;
const router = require('./router/auth-router');
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


//*Middleware
app.use(express.json());

//?Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use('/', router)
//*error Middleware
app.use(errorMiddleware);

connectDb().then(() => {
     app.listen(PORT, () => {
          console.log(`server is running at port ${PORT}`);
     });
});
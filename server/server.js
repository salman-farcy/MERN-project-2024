const express = require("express");
const app = express();
const PORT = 5000;
const router = require('./router/auth-router')

//?Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use('/api/auth', router)


app.listen(PORT, () => {
     console.log(`server is running at port ${PORT}`);
}); 
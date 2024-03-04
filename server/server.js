const express = require("express");
const app = express();
const PORT = 5000;



app.get("/", (req, res) => {
     res.status(200).send("Welcome to world best mern series by salman farcy");
});

app.listen(PORT, () => {
     console.log(`server is running at port ${PORT}`);
});
require('dotenv').config()
const mongoose = require("mongoose");
 


// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const uri = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_USER_PASSWORD}@cluster0.rb5g6hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log("connnection successful to DB");

    }
    catch (error) {
        console.error("database connection failed");
        process.exit(0)
    }
};

module.exports = connectDb;
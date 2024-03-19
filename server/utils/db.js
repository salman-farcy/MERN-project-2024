require('dotenv').config()
const mongoose = require("mongoose");
 


// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_USER_PASSWORD}@cluster0.rb5g6hh.mongodb.net/${process.env.MONGODB_COLLECTION_NAME}?retryWrites=true&w=majority&appName=Cluster0`


const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connnection successful to DB");

    }
    catch (error) {
        console.error("database connection failed");
        process.exit(0)
    }
};

module.exports = connectDb; 
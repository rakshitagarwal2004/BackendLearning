const mongoose = require("mongoose");

require("dotenv").config();// loads environment variables from a .env file into process.env

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);// This will stop the application if the database connection fails
    } );
}

module.exports = dbConnect;
// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js

const express = require("express");//instance of express
const app = express();

const mongoose = require("mongoose");   // step7 - npm i mongoose
// used to parse req.
const bodyParser = require("body-parser");//middleware to parse JSON data
// parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server Establish at 3000 Port");
});

// Routes
app.get("/", (req, res) => {
  res.send("hello from the server");
});

// test using postman 
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Submitted Successfully");
});

mongoose.connect("mongodb://localhost:27017/dbname")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

  
/*  
mongoose.connect("mongodb://localhost:27017/dbname",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));
*/
// Note: Replace "dbname" with your actual database name
// Note: Ensure MongoDB is running on your local machine or adjust the connection string accordingly.
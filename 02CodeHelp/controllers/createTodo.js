//import th model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {// async function to handle asynchronous operations
    try {
            //extract title and description from request body
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Todo.create({title,description});//create a new Todo document in the database
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        // Internal Server Error
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
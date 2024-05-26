const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://saketranjan2002:GgiA6h4msBWRNLkQ@cluster0.gcnrlvh.mongodb.net/To_Do_App')

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    todos    : [{
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Todo'
    }]
})

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const User = mongoose.model("User",UserSchema);
const Todo = mongoose.model("Todo",TodoSchema);

module.exports = {
    User,
    Todo
};
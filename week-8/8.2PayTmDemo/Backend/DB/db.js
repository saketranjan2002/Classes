const mongoose = require('mongoose');
const URL = "mongodb+srv://saketranjan2002:GgiA6h4msBWRNLkQ@cluster0.gcnrlvh.mongodb.net/PayTM"

function connectDB(){
    try{
        mongoose.connect(URL);
    } catch (error){
        console.log(error);
    }
}

module.exports = {connectDB}


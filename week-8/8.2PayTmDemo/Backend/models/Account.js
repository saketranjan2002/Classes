const mongoose = require("mongoose");
const User = require("./User");

const accountSchema = new mongoose.Schema({
    username : {
        type : mongoose.SchemaTypes.ObjectId,
        ref  : User
    },
    balance : Number
});

module.exports = mongoose.model('Account',accountSchema);
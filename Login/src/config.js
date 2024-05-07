const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://0.0.0.0:27017/");

connect.then(() => {
    console.log("Database connected Successfully");
})
.catch(err => {
    console.log(err);
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("logindata", LoginSchema);
module.exports = collection;
const mongoose = require("mongoose")

const uri = "mongodb+srv://User:User@cluster0.xgg1s.mongodb.net/Linkskeeper?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/linkeeper";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


module.exports;
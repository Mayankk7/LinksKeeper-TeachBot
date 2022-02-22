const mongoose = require("mongoose")

const uri = "mongodb+srv://teachbot:teachbot@cluster0.3jmmd.mongodb.net/LinksKeeper?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/linkeeper";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


module.exports;
const mongoose = require("mongoose");

// Connect
mongoose.connect("mongodb://localhost/testdb");


mongoose.connection.once("open", function(){
    console.log("Connection has successfully");
}).on("error", function(){
    console.log("Connection error: ", error);
});
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// connect before test
before(function(done){
    // Connect
    mongoose.connect("mongodb://localhost/testdb");


    mongoose.connection.once("open", function(){
        console.log("Connection successfully");
        done();
    }).on("error", function(){
        console.log("Connection error: ", error);
    });
})

// Drop collection
beforeEach(function(done){
    mongoose.connection.collections.narutochars.drop(function(){
        done();
    });
});
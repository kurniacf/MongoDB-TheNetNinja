const assert = require("assert");
const NarutoChar = require("../models/narutocharacter");

describe("Saving Records", function(){
    // Create
    it("Save record to the database", function(done){
        const char = new NarutoChar({
            name: "Naruto"
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });



});
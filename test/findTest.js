const assert = require("assert");
const NarutoChar = require("../models/narutocharacter");

describe("Finding records", function(){

    let char;

    beforeEach(function(done){
        char = new NarutoChar({
            name: "Naruto"
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });

    // Find
    it("Find one record from database", function(done){
        NarutoChar.findOne({
            name: "Naruto"
        }).then(function(result){
            assert(result.name === "Naruto");
            done();
        });
    });

    it("Find one record by ID from the database", function(done){
        NarutoChar.findOne({
            _id: char._id
        }).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });



});
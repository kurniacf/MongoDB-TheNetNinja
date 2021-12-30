const assert = require("assert");
const NarutoChar = require("../models/narutocharacter");

describe("Update records", function(){

    let char;

    beforeEach(function(done){
        char = new NarutoChar({
            name: "Naruto"
        });
        char.save().then(function(){
            done();
        });
    });

    // Update
    it("Updates one record from database", function(done){
        NarutoChar.findOneAndUpdate(
        {
            name: "Naruto"
        }, 
        {
            name: "Sasuke"
        }
        ).then(function(){
            NarutoChar.findOne({
                _id: char._id
            }).then(function(result){
                assert(result.name === "Sasuke");
                done();
            })
        });
    });

});
const assert = require("assert");
const NarutoChar = require("../models/narutocharacter");

describe("Update records", function(){

    let char;

    beforeEach(function(done){
        char = new NarutoChar({
            name: "Naruto",
            age: 17
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

    it("Increments the age by 1", function(done){
        NarutoChar.update({}, {
            $inc: {
                age: 1
            }
        }).then(function(){
            NarutoChar.findOne({
                name: "Naruto"
            }).then(function(record){
                assert(record.age === 18);
                done();
            });
        })
    });

});
const assert = require("assert");
const NarutoChar = require("../models/narutocharacter");

describe("Delete records", function(){

    let char;

    beforeEach(function(done){
        char = new NarutoChar({
            name: "Naruto"
        });
        char.save().then(function(){
            done();
        });
    });

    // Delete
    it("Delete one record from database", function(done){
        NarutoChar.findOneAndRemove({
            name: "Naruto"
        }).then(function(){
            NarutoChar.findOne({
                name: "Naruto"
            }).then(function(result){
                assert(result === null);
                done();
            })
        })
    });

});
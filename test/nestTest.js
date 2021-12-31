const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

// Descripe
describe("Nesting record", function(){

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    });

    it("Create author", function(done){
        let publish = new Author({
            name: "Harry Tanoe",
            books: ({
                title: "Laut Bercerita", 
                yearPublished: 2019
            })
        });
        publish.save().then(function(){
            Author.findOne({
                name: "Harry Tanoe"
            }).then(function(record){
                assert(record.books.length === 1);
                done();
            })
        });
    });

    it("Add Book", function(done){
        let publish = new Author({
            name: "Harry Tanoe",
            books: ({
                title: "Laut Bercerita", 
                yearPublished: 2019
            })
        });
        publish.save().then(function(){
            Author.findOne({
                name: "Harry Tanoe"
            }).then(function(record){
                // add book
                record.books.push({
                    title: "Hujan di Bulan Juni", 
                    yearPublished: 2017
                });
                record.save().then(function(){
                    Author.findOne({
                        name: "Harry Tanoe"
                    }).then(function(result){
                        assert(result.books.length === 2);
                        done();
                    })
                })
            });
        });
    });
});
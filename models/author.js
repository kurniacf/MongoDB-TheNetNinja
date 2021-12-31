const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
    title: String,
    yearPublished: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

const Author = mongoose.model("author", AuthorSchema);

module.exports = Author;

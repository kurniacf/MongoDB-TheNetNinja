const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NarutoSchema = new Schema({
    name: String,
    age: Number,
    element: String
});

const NarutoChar = mongoose.model("narutochar", NarutoSchema);

module.exports = NarutoChar;

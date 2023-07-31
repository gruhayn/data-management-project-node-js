const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const descriptionSchema = new Schema({
    'Job ID': String,
    'Job Description': String 
});

const Description = mongoose.model('Description', descriptionSchema, 'Descriptions');

module.exports = Description;
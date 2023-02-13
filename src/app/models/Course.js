const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: {
        type: String,
        maxLength: 255,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    slug: {
        type: String,
    },
    videoId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Course', Course);

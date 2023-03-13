const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: {
            type: String,
            maxLength: 255,
            required: true,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
        slug: {
            type: String,
            slug: 'name',
            unique: true,
        },
        videoId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);

Course.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);

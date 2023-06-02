const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

const mongoose_delete = require('mongoose-delete');

const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        _id: {
            type: Number,
        },
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
        _id: false,
        timestamps: true,
    },
);

CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;
};

// add slug plugin
mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', CourseSchema);

const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        _id: {
            type: Number,
        },
        username: {
            type: String,
            maxLength: 255,
            required: true,
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

// add slug plugin
mongoose.plugin(slug);

UserSchema.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('User', UserSchema);

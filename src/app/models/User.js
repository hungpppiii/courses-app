const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

const mongoose_delete = require('mongoose-delete');
const randomPassword = require('../../helpers/randomPassword');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        username: {
            type: String,
            maxLength: 255,
            required: true,
        },
        password: {
            type: String,
        },
        googleId: {
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

UserSchema.statics.findOrCreate = async function (condition) {
    const user = await this.findOne(condition);
    if (!user) {
        const newUser = await this.create({
            password: randomPassword(12),
            ...condition,
        });
        return newUser;
    }

    return user;
};

module.exports = mongoose.model('User', UserSchema);

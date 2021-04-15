const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: '🤪 YoU NeED tO ProVidE a UseRnaME!',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: '🤪 YoU NeED tO ProVidE aN eMAiL!',
            match: [/.+\@.+\..+/, '👎 NoT A vaLid eMAil!']
        },
        thoughts: [
            // an array of _id values referencing the thought model
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        friends: [
            // an array of values referencing the User model (self reference)
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
)

const User = model('User', UserSchema);

module.exports = User;
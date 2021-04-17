const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactonId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: "📝 ReaCtIOn TeXt ReQuiRed!",
      trim: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: "👤 USErnaMe REquIred!",
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = ReactionSchema;

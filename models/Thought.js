const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "📝 ThOt teXt REquIred!",
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
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.reduce(
    (total, reaction) => total + reaction.length + 1,
    0
  );
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

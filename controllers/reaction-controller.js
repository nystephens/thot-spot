const { Thought } = require('../models');

const ReactionController = {
  // add Reaction to Thought
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No Thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // remove Reaction
  removeReaction( {params}, res) {
    Thought.findOneAndUpdate(
    { _id: params.id },
    { $pull: { reactions: { reactionId: params.reactionId } } }
  )
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => res.json(err));
  }
};

module.exports = ReactionController;

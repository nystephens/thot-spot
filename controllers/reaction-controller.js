const { Reaction, Thought } = require('../models');

const ReactionController = {
  // add Reaction to Thought
  addReaction({ params, body }, res) {
    console.log(body);
    Reaction.create(body)
      .then(({ _id }) => {
        return Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $push: { Reactions: _id } },
          { new: true, runValidators: true }
        );
      })
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
  removeReaction({ params }, res) {
    Reaction.findOneAndDelete({ _id: params.ReactionId })
      .then(deletedReaction => {
        if (!deletedReaction) {
          return res.status(404).json({ message: 'No Reaction with this id!' });
        }
        return Thought.findOneAndUpdate(
          { _id: params.ThoughtId },
          { $pull: { Reactions: params.ReactionId } },
          { new: true }
        );
      })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No Thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  }
};

module.exports = ReactionController;

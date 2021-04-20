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

  // remove Reaction = err 500 MongooseError: Callback must be a function, got [object Object]
  // removeReaction( {params}, res) {
  //   Thought.findOneAndUpdate(
  //   { _id: params.id },
  //   { $pull: { reactions: { reactionId: params.reactionId } } },
  //   { new: true, runValidators: true }
  // )
  //   .then(dbThoughtData => res.json(dbThoughtData))
  //   .catch(err => res.json(err));
  // }

  // Shellies route to delete a reaction = err no thought found!
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $pull: { reactions: { _id: params.reactionId } } },
      { new: true }
    )
    // put populate and select in to see if it would work.. it did not
      // .populate({ path: 'reactions', select: '-__v' })
      // .select('-__v')
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this ID!' });
          return;
        };
        res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
  }
};

module.exports = ReactionController;

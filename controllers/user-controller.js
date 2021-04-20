const { User } = require('../models');

const UserController = {
  // get all Users
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: 'friends',
        select: '_id'
      })
      // trying to populate doc with thoughts subdoc
      // .populate({
      //   path: 'thoughts',
      //   select: 'thoughtText'
      // })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one User by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'friends',
        select: '_id'
      })
      .then(dbUserData => {

        if (!dbUserData) {
          return res.sendStatus(400).json({ message: 'No User found with this id!' });
        }

        res.json(dbUserData)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400).json({ message: 'No User found with this id!' });
      });
  },

  // add friends
  addFriend({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: { _id: params.friendId } } },
      { new: true, runValidators: true }
    )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(404).json({ message: 'No User found with this id!' }));
  },

  // delete friends deletes entire user
  // deleteFriend({ params }, res) {
  //   User.findOneAndRemove(
  //     { _id: params.userId }, 
  //     {$pull: { friends: { _id: params.friendId }} }, 
  //     // {runValidators: true }
  //     )
  //     .then(dbUserData => res.json(dbUserData))
  //     .catch(err => res.status(404).json({ message: 'No User found with this id!' }));
  // },

  // shellies code: 
  // Route to delete a friend = returns no user found.
  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .populate({ path: 'friends', select: '-__v' })
      .select('-__v')
      .then(dbFriendData => {
        if (!dbFriendData) {
          res.status(404).json({ message: 'No user found with this ID!' });
          return;
        };
        res.json(dbFriendData);
      })
      .catch(err => res.statu(400).json(err));
  },


  // createUser
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // update User by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      body,
      { new: true, runValidators: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete User
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(404).json({ message: 'No User found with this id!' }));
  }
};


module.exports = UserController;


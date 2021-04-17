const { User } = require('../models');

const UserController = {
    // get all Users
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: 'reactions',
        select: '-__v'
      })
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
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => {
          
        if (!dbUserData) {
            return res.sendStatus(400).json({ message: 'No User found with this id!' });
        }
        
        res.json(dbUserData)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400).json({ message: 'No User found with this id!' });
      });
  },

  // add friends
  addFriend({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId }, 
      {$push: {friends: { _id: params.friendId }} },
      { new: true, runValidators: true }
      )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(404).json({ message: 'No User found with this id!' }));
  },

  deleteFriend({ params }, res) {
    User.findOneAndRemove(
      { _id: params.userId }, 
      {$pull: { friends: { _id: params.friendId }} }, 
      { new: true, runValidators: true }
      )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(404).json({ message: 'No User found with this id!' }));
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


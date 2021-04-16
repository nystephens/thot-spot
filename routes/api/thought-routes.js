const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  getAllThought
} = require('../../controllers/thought-controller');

const {
  addReaction,
  removeReaction
} = require('../../controllers/reaction-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:id/reactions')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
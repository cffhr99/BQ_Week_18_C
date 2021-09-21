const router = require('express').Router();
const { 
getAllTought,
addTought,
getToughtByID,
updateThought,
removeThought,
addReaction,
removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllTought)
    .post(addTought)

router
    .route('/:id')
    .get(getToughtByID)
    .put(updateThought)
    .delete(removeThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)


router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;
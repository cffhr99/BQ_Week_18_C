const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/user-controller');
  

const router = require('express').Router();

// Set up GET all and POST at /api/pizzas
// /api/pizzas
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
// /api/pizzas/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
  
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);
module.exports = router;
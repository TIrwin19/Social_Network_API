const router = require('express').Router()
const user_controller = require('../controllers/user_controller')

router.get('/', user_controller.getAllUsers)

router.get('/:id', user_controller.getSingleUser)

router.post('/', user_controller.newUser)

router.put('/:id', user_controller.updateUser)

router.delete('/:id', user_controller.deleteUser)

router.post('/:userId/friend/:friendId', user_controller.addFriend)

router.delete('/:userId/friend/:friendId', user_controller.removeFriend)

module.exports = router
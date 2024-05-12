const router = require('express').Router()
const thought_controller = require('../controllers/thought_controller')

router.get('/', thought_controller.getAllThoughts)

router.get('/:id', thought_controller.getSingleThought)

router.post('/', thought_controller.newThought)

router.put('/:id', thought_controller.updateThought)

router.delete('/:id', thought_controller.deleteThought)

router.post('/:thoughtId/reactions', thought_controller.reactToThought)

router.delete('/:thoughtId/reactions/:reactionId', thought_controller.deleteReaction)

module.exports = router
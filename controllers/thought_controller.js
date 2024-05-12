const Thought = require('../models/Thought')
const User = require('../models/User')

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const allThoughts = await Thought.find({})

      if (!allThoughts) {
        return res.status(404).json({ message: 'No thoughts exist' })
      }

      res.status(202).json(allThoughts)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async getSingleThought(req, res) {
    try {
      const thoughtId = req.params.id

      const thought = await Thought.findById({ _id: thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id exists' })
      }

      const singleThought = await Thought.findOne({ _id: thoughtId })

      res.status(202).json(singleThought)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async newThought(req, res) {
    try {
      const data = req.body

      const newThought = await Thought.create(data)

      if (!newThought) {
        return res.status(404).json({ message: 'Please enter a thought' })
      }

      const thoughtId = newThought._id
      const username = newThought.username

      await User.findOneAndUpdate(
        { username: username },
        { $push: { thoughts: thoughtId } },
        { new: true }
      )

      res.status(202).json(newThought)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async updateThought(req, res) {
    try {
      const thoughtId = req.params.id
      const update = req.body

      const thought = await Thought.findById({ _id: thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id exists' })
      }

      if (!update) {
        return res.status(404).json({ message: 'No update was entered' })
      }

      const updatedThought = await Thought.findByIdAndUpdate({ _id: thoughtId }, { $set: update })

      res.status(202).json(updatedThought)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async deleteThought(req, res) {
    try {
      const thoughtId = req.params.id

      const thought = await Thought.findById({ _id: thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id exists' })
      }

      await Thought.findByIdAndDelete({ _id: thoughtId })

      res.status(202).json({ message: 'Your thought has been deleted' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async reactToThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId
      const data = req.body

      const thought = await Thought.findById({ _id: thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id exists' })
      }

      thought.reactions.push(data)

      await thought.save()

      res.status(202).json({ message: 'Reaction added successfully!' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async deleteReaction(req, res) {
    try {
      const thoughtId = req.params.thoughtId
      const reactionId = req.params.reactionId

      const thought = await Thought.findById({ _id: thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id exists' })
      }

      await Thought.findByIdAndUpdate(
        { _id: thoughtId },
        { $pull: { reactions: { reactionId: reactionId } } },
        { new: true }
      )

      res.status(202).json({ message: 'Reaction removed successfully!' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}

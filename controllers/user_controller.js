const User = require('../models/User')
const Thought = require('../models/Thought')


module.exports = {
  async getAllUsers(req, res) {
    try {
      const allUsers = await User.find({})

      if (!allUsers) {
        return res.status(404).json({ message: 'No users exist' })
      }

      res.status(202).json(allUsers)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  async getSingleUser(req, res) {
    try {
      const userId = req.params.id

      const singleUser = await User.findOne({ _id: userId })

      if (!singleUser) {
        return res.status(404).json({ message: 'No user exists with that id' })
      }

      res.status(202).json(singleUser)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async newUser(req, res) {
    try {
      const data = req.body

      const newUser = await User.create(data)

      res.status(202).json(newUser)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async updateUser(req, res) {
    try {
      const userId = req.params.id
      const update = req.body

      if (!userId) {
        return res.status(404).json({ message: 'A user id was not supplied' })
      }

      const updatedUser = await User.findByIdAndUpdate({ _id: userId }, { $set: update })

      res.status(202).json(updatedUser)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async deleteUser(req, res) {
    try {
      const userId = req.params.id

      const userToDelete = await User.findByIdAndDelete({ _id: userId })

      if (!userToDelete) { //If no user 
        return res.status(404).json({ message: 'User does not exist' })
      }

      // Delete all thoughts associated with this user
      await Thought.deleteMany({ _id: { $in: userToDelete.thoughts } });

      res.status(202).json({ message: 'User has been deleted' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async addFriend(req, res) {
    const userId = req.params.userId
    const friendId = req.params.friendId

    try {
      const user = await User.findById(userId)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      user.friends.push(friendId)

      await user.save()

      res.status(202).json({ message: 'Friend added successfully!' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },

  async removeFriend(req, res) {
    const userId = req.params.userId
    const friendId = req.params.friendId

    try {
      const user = await User.findById(userId)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      user.friends = user.friends.filter(id => id.toString() !== friendId)

      await user.save()

      res.status(202).json({ message: 'Friend removed successfully!' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
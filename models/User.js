const { model, Schema } = require('mongoose')
// User model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thoughts'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
},
  {
    toJSON: {
      virtuals: true
    }
  }
)

// Virtual for friend count
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

// Declare User model
const User = model('User', userSchema)

module.exports = User
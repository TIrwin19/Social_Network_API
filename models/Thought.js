const { model, Schema } = require('mongoose')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (value) { //Format the createAt date when qureied
      return new Date(value).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    }
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }

)

// Reaction count virtual
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})
// Create the Thought model
const Thought = model('Thought', thoughtSchema)

module.exports = Thought
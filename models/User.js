const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');
// similar like add new object by class.
const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      trim: true,
      unique:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
      trim:true
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


// create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;
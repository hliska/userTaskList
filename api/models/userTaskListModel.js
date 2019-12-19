'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: 'Enter Username'
  }
});

var TaskSchema = new Schema({
  id: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: 'Enter task description'
  },
  state: {
    type: [{
      type: String,
      enum: ['todo', 'done']
    }],
    default: ['done']
  },
  user_id: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Users', UserSchema);
module.exports = mongoose.model('Tasks', TaskSchema);
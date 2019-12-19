'use strict';
var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    Task = mongoose.model('Tasks');


//TASKS

//Lists all Tasks assigned to one user
exports.listTasks = function(req, res) {
  Task.findById(req.params.userID, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//Creates a Task for a user
exports.createTask = function(req, res) {
  var newTask = new Task(req.body);
  newTask.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


//Updates a task a user is assigned
exports.updateTask = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskID}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//Deletes a task a user is assigned
exports.deleteTask = function(req, res) {
  Task.remove({
    _id: req.params.taskID
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task has been deleted!' });
  });


//USERS

//Lists all Users
exports.listUsers = function(req, res) {
  User.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

//Creates a user
exports.createUser = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


//Updates a user
exports.updateUser = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userID}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//Deletes a user
exports.deleteUser = function(req, res) {
  User.remove({
    _id: req.params.userID
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User has been deleted!' });
  });
};
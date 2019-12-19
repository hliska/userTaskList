'use strict';
module.exports = function(app) {
  var taskList = require('../controllers/userTaskListController');

  app.route('/users')
     .get(taskList.listUsers)
     .put(taskList.updateUser);
     .post(taskList.createUser);
     .delete(taskList.deleteUser);

  app.route('/users/:userID')
     .get(taskList.listTasks)
     .put(taskList.updateTask)
     .post(taskList.createTask);
     .delete(taskList.deleteTask);
};
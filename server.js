var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    tasks = require('./api/models/userTaskListModel'),
    routes = require('./api/routes/userTaskListRoutes');
    app = express(),
    port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userTaskListDB'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

console.log('(RESTful API) userTaskList server started on: ' + port);
var express = require('express'), //基本
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser'); //解析附加參數

mongoose.Promise = global.Promise; //用mongoose 做連線到mongodb
mongoose.connect('mongodb://localhost/Tododb'); //連到 mongodb


app.use(bodyParser.urlencoded({ extended: true }));//解析uri
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); // routes 導向到/api/routes/todoListRoutes 
routes(app); //把服務導向到api/routes/todoListRoutes 


app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.listen(port);


console.log('todo list RESTful API server started on: ' + port); //開API的port號
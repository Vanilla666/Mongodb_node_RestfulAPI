'use strict';


var mongoose = require('mongoose'), //用 mongoose 管理mongodb
    Task = mongoose.model('Tasks'); //引用 Tasks model (表) model 只要用 mongoose.model() 將 model 讀出來，便可以對他進行操作了

exports.list_all_tasks = function (req, res) { //查詢所有任務
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};




exports.create_a_task = function (req, res) { //增加單個任務
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.read_a_task = function (req, res) { //查詢單個任務
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_task = function (req, res) { //更新單個任務
    Task.findOneAndUpdate(req.params.taskId, req.body, { new: true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_task = function (req, res) { //刪除任務


    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};
'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController'); //實作做事 todoListController


    // todoList Routes
    app.route('/tasks') //路由
        .get(todoList.list_all_tasks) //查詢所有任務
        .post(todoList.create_a_task);//增加單個任務


    app.route('/tasks/:taskId')//路由 
        .get(todoList.read_a_task)//查詢單個任務
        .put(todoList.update_a_task)//更新單個任務
        .delete(todoList.delete_a_task);//刪除任務
};
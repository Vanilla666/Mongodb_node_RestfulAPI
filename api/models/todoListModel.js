'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({ //實際創建資料表 以及資料形式
    name: { //它指出了數據集（表）應該包含一個名稱，它的類型應該是string，還包括了創建日期
        type: String,
        Required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending'] //每個任務被創建的時候都有默認值pending
    }
});

module.exports = mongoose.model('Tasks', TaskSchema); // TaskSchema表 輸出到外面變成 Tasks model
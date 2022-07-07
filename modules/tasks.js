const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description:{
        required: true,
        type: String
    },
    completed:{
        required: true,
        type: Boolean
    }
},{timestamps:true});



const Task = mongoose.model('Task',taskSchema);
module.exports = Task;
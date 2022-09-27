import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    },
    comments: [String],
    createdAt: {
        type: Date,
        default: Date()
    }
})

const Task = mongoose.model('Task', taskSchema);

export default Task;
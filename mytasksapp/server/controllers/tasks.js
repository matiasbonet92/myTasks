import Task from "../models/Task.js";

export const getTasks = async (req,res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

export const createTasks = async (req,res) => {
    const data = req.body;
    const newTask = new Task(data);
    try{
        await newTask.save();
        res.status(200).json(newTask);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}
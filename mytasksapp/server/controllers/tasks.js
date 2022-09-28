import Task from "../models/Task.js";
import mongoose from 'mongoose'

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

export const getTaskById = async (req,res) => {
    const {id} = req.params;
    console.log(id);
    try {
        const task = await Task.findById(id);
        console.log(task);
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

export const deleteTask = async (req,res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const taskDeleted = await Task.findByIdAndDelete(id);
        res.status(200).json(taskDeleted);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

export const updateTask = async (req, res) => {
    const { id: _id } = req.params;
    const taskToUpdate = req.body;
    console.log(_id);
    if(mongoose.Types.objectId.isValid(_id)) return res.status(404).send("No task with that id");
    try {
        const updatedPost = await Task.findByIdAndUpdate(_id, taskToUpdate, {new: true});
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}
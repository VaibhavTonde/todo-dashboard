import asyncHandler from 'express-async-handler'
import Task from '../model/taskModel.js'


const createTask = asyncHandler(async (req, res) => {
    const { title, description, initialStatus, plannedStartDate, plannedCompletionDate, priority, comments, smsNotification, emailNotification } = req.body;
    const taskExists = await Task.findOne({ title })
    if (taskExists) {
        res.status(400).json({ msg: "Task already exists" })
    } else {
        const task = await Task.create({ title, description, initialStatus, plannedStartDate, plannedCompletionDate, priority, comments, smsNotification, emailNotification })

        if (task) {
            res.status(200).json({ _id: task._id, msg: "Task created successfully!" })
        } else {
            res.status(404).json({ msg: "Task not created" })
        }
    }
})

const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    if (tasks) {
        res.status(200).json(tasks)
    } else {
        res.status(404).json({ msg: "No task found" })
    }
})

export { createTask, getAllTasks }
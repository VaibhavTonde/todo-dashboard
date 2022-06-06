import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    //userCreated:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'User'},
    title: { type: String, required: true },
    description: { type: String, required: true },
    initialStatus: { type: String, required: true },
    //curentStatus: { type: String, required: true },
    plannedStartDate: { type: Date, required: true },
    plannedCompletionDate: { type: Date, required: true },
    //actualStartDate: { type: Date, required: true },
    //actualCompletionDate: { type: Date, required: true },
    priority: { type: String, required: true },
    comments: { type: String, required: true },
    smsNotification: { type: Boolean },
    emailNotification: { type: Boolean },
})

const Task = mongoose.model('task', taskSchema)

export default Task;
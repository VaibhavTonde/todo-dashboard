import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API IS RUNNING!')
})

app.use(express.json({ extended: false }))

app.use('/api/task', taskRoutes)
app.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`)
})
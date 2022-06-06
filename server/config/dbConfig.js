import mongoose from "mongoose";

const connectDB = () => {
    const dbURI = process.env.MONGO_URI;
    try {
        const con = mongoose.connect(dbURI)
        console.log(`-------MongoDB connection successfull-------`);
    } catch (error) {
        console.log(`-------MongoDB Connection to Database Failed! : ${error.message}-------`);
        process.exit(1);
    }
}

export default connectDB
import mongoose from "mongoose";

const ConnectToDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) return;

        console.log('Connecting to MongoDB...');
        await mongoose.connect("mongodb://localhost:27017/Nabeghe");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

export default ConnectToDB;

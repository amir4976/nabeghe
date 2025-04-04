import mongoose from "mongoose";

const ConnectToDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) return;

        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

export default ConnectToDB;

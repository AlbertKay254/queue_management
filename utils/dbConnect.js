import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/queueManagement";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

export default connectDB;

import mongoose from "mongoose";
import dns from "dns";

// Use Google DNS to resolve MongoDB SRV records (Windows DNS issue workaround)
dns.setServers(['8.8.8.8', '8.8.4.4']);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.error("Error connecting to MONGODB:", error.message);

        process.exit(1); // Exit process with failure
    }
}

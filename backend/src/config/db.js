/**
 * MongoDB Connection using Mongoose
 * (Uses Google DNS for Windows MongoDB Atlas SRV compatibility)
 */

import mongoose from "mongoose";
import dns from "dns";

// Windows DNS workaround for MongoDB Atlas
dns.setServers(["8.8.8.8", "8.8.4.4"]);

/**
 * Connect to MongoDB database
 */
export const connectDB = async () => {
  try {
    // Connect to MongoDB using connection string from environment variables
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Error connecting to MONGODB:", error.message);

    // Exit process with failure code
    // This prevents the server from starting without a database connection
    process.exit(1);
  }
};

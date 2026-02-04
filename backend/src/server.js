import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9999;

app.use(cors({
  origin: "http://localhost:5173", // Allow requests from this origin

}));
app.use(express.json()); // TThis middleware to parse JSON bodies
app.use(rateLimiter);
// app.use((req,res,next) => {
//   console.log(`Req Method is ${req.method} & Req URL is ${req.path}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
  });  
});

 

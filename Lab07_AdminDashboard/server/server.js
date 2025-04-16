import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.VITE_PORT || 5000;

app.use(cors());
app.use(express.json());

// connect mongodb
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

// routes
app.get("/api", (req, res) => {
    res.json({message: "Welcome to the API"});
});

app.use("/api/users", userRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
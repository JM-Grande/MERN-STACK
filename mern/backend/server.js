import express from "express";
import dotenv from "dotenv";
// DB connection
import connectDB from "./config/db.js";
// routes
import workoutRoutes from "./routes/workoutRoutes.js";

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

app.listen(port, console.log(`server is running on port ${port}`));

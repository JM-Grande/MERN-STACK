import express from "express";

//controller
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET workout by id
router.get("/:id", getWorkout);

// POST a new workouts
router.post("/", createWorkout);

// DELETE a new workouts
router.delete("/:id", deleteWorkout);

// UPDATE a new workouts
router.patch("/:id", updateWorkout);
export default router;

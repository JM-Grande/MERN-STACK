import express from "express";

import Workout from "../models/workoutModel.js";

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "workouts ni yow" });
});

//GET workout by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id: `${id}` });
});

// POST a new workouts
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a new workouts
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a new workouts" });
});

// UPDATE a new workouts
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a new workouts" });
});
export default router;

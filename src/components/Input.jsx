import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styling/input.scss";

export default function Input({ addToList }) {
  const [workout, setWorkout] = useState({
    id: "",
    bodyPart: "",
    workoutName: "",
    weight: "",
    sets: "",
    reps: "",
    completed: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setWorkout({
      ...workout,
      [e.target.name]: value,
    });
    console.log(workout);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      workout.workoutName.trim() ||
      workout.weight.trim() ||
      workout.sets.trim() ||
      workout.reps.trim()
    ) {
      addToList({ ...workout, id: { uuidv4 } });
      //to clear fields
      setWorkout({
        ...workout,
        bodyPart: "",
        workoutName: "",
        weight: "",
        sets: "",
        reps: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bodyPart">Body Part:</label>
      <select onChange={handleChange} name="bodyPart">
        <option value="select">Select One</option>
        <option value="back">Back</option>
        <option value="chest">Chest</option>
        <option value="shoulder">Shoulders</option>
        <option value="bicep">Bicep</option>
        <option value="tricep">Tricep</option>
        <option value="forearm">Forearms</option>
        <option value="quad">Quads</option>
        <option value="hamstring">Hamstring</option>
        <option value="calves">Calves</option>
        <option value="glutes">Glutes</option>
        <option value="abs">Abs</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="workoutName">Workout Name:</label>
      <input onChange={handleChange} name="workoutName" type="text" />

      <label htmlFor="weight">Weight:</label>
      <input onChange={handleChange} name="weight" type="number" />

      <label htmlFor="sets">Sets:</label>
      <input onChange={handleChange} name="sets" type="number" />

      <label htmlFor="reps">Reps:</label>
      <input onChange={handleChange} type="number" name="reps" />

      <button type="submit">Post</button>
    </form>
  );
}

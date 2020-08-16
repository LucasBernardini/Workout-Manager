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
        completed: false,
      });
    } else {
        alert('please complete all of the fields')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bodyPart">Body Part:</label>
      <select value={workout.bodyPart} onChange={handleChange} name="bodyPart">
        <option value="select">Select One</option>
        <option value="Back">Back</option>
        <option value="Chest">Chest</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Biceps">Bicep</option>
        <option value="Triceps">Tricep</option>
        <option value="Forearms">Forearms</option>
        <option value="Quads">Quads</option>
        <option value="Hamstrings">Hamstring</option>
        <option value="Calves">Calves</option>
        <option value="Glutes">Glutes</option>
        <option value="Abs">Abs</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="workoutName">Workout Name:</label>
      <input value={workout.workoutName} onChange={handleChange} name="workoutName" type="text" />

      <label htmlFor="weight">Weight:</label>
      <input value={workout.weight} onChange={handleChange} name="weight" type="number" />

      <label htmlFor="sets">Sets:</label>
      <input value={workout.sets} onChange={handleChange} name="sets" type="number" />

      <label htmlFor="reps">Reps:</label>
      <input value={workout.reps} onChange={handleChange} type="number" name="reps" />

      <button type="submit">Post</button>
    </form>
  );
}

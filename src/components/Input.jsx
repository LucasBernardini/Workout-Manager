import React, {useState} from "react";
import './styling/input.scss'

export default function Input() {

    const [workout, setWorkout] = useState({
        id: "",
        bodyPart: "",
        workoutName: "",
        weight: "",
        sets: "",
        reps: "",
        completed: false
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setWorkout({
            ...workout,
            [e.target.name]: value
        });
        console.log(workout)
    }

  return (
    <form>
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

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styling/input.scss";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
      alert("please complete all of the fields");
    }
  };

  return (
      <form className="form" onSubmit={handleSubmit}>
    <FormControl>
      <InputLabel htmlFor="bodyPart">Body Part:</InputLabel>
      <Select value={workout.bodyPart} onChange={handleChange} name="bodyPart">
        <MenuItem value="Back">Back</MenuItem>
        <MenuItem value="Chest">Chest</MenuItem>
        <MenuItem value="Shoulders">Shoulders</MenuItem>
        <MenuItem value="Biceps">Bicep</MenuItem>
        <MenuItem value="Triceps">Tricep</MenuItem>
        <MenuItem value="Forearms">Forearms</MenuItem>
        <MenuItem value="Quads">Quads</MenuItem>
        <MenuItem value="Hamstrings">Hamstring</MenuItem>
        <MenuItem value="Calves">Calves</MenuItem>
        <MenuItem value="Glutes">Glutes</MenuItem>
        <MenuItem value="Abs">Abs</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>

      <TextField
        value={workout.workoutName}
        onChange={handleChange}
        label="Workout Name"
        name="workoutName"
        type="text"
      />

      <TextField
        value={workout.weight}
        onChange={handleChange}
        label="Weight"
        name="weight"
        type="number"
      />

      <TextField
        value={workout.sets}
        onChange={handleChange}
        label="Sets"
        name="sets"
        type="number"
      />

      <TextField
        value={workout.reps}
        onChange={handleChange}
        label="Reps"
        type="number"
        name="reps"
      />
      <div className="form__button">
      <Button fullWidth={true} variant="contained" type="submit">Post</Button>
      </div>

    </FormControl>
      </form>
  );
}

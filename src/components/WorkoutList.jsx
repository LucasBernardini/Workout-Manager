import React from "react";

export default function WorkoutList({ list }) {
  return (
    <div>
      {list.map((item) => (
        <div>
          <p>{item.bodyPart}</p>
          <p>{item.workoutName}</p>
          <p>{item.weight}</p>
          <p>{item.sets}</p>
          <p>{item.reps}</p>
        </div>
      ))}
    </div>
  );
}

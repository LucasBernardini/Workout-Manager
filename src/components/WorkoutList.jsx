import React from "react";
import "./styling/workoutList.scss";

export default function WorkoutList({ list }) {
  return (
    <div className="workout">
      {list.map((item) => (
        <div className="workout__item">
          <p className="workout__content">Body Part: {item.bodyPart}</p>
          <p className="workout__content">Name: {item.workoutName}</p>
          <p className="workout__content">Weight: {item.weight}</p>
          <p className="workout__content">Sets: {item.sets}</p>
          <p className="workout__content">Reps: {item.reps}</p>
        </div>
      ))}
    </div>
  );
}

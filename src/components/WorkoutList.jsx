import React from "react";
import Workout from "./workout";
import "./styling/workoutList.scss";

export default function WorkoutList({ list, toggleCompleted, removeItem }) {
  return (
    <div className="workout">
      {list.map((item) => (
        <Workout 
          key={item.id}
          item={item}
          removeItem={removeItem}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

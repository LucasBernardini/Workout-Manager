import React from "react";
import "./styling/workoutList.scss";

export default function WorkoutList({ list, toggleCompleted, removeItem }) {
  function handleCheckClick() {
    toggleCompleted(list.id)
  }

  function handleRemoveClick() {
    removeItem(list.id);
  }

  return (
    <div className="workout">
      {list.map((item) => (
        <div className="workout__item" 
          style={{
            textDecoration: item.completed ? 'line-through' : null
          }}
        >
          <input type="checkbox" onClick={handleCheckClick}/>
          <p className="workout__content">Body Part: {item.bodyPart}</p>
          <p className="workout__content">Name: {item.workoutName}</p>
          <p className="workout__content">Weight: {item.weight}</p>
          <p className="workout__content">Sets: {item.sets}</p>
          <p className="workout__content">Reps: {item.reps}</p>
          <button onClick={handleRemoveClick} >Delete</button>
        </div>
      ))}
    </div>
  );
}

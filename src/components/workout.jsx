import React from 'react'

export default function Workout({item, toggleCompleted, removeItem}) {
    function handleCheckClick() {
        toggleCompleted(item.id)
      }
    
      function handleRemoveClick() {
        removeItem(item.id);
      }


    return (
            <div className="workout__item" >
          <input type="checkbox" onClick={handleCheckClick}/>
          <div style={{
            textDecoration: item.completed ? 'line-through' : null
          }}> 
          <p className="workout__content">Body Part: {item.bodyPart}</p>
          <p className="workout__content">Name: {item.workoutName}</p>
          <p className="workout__content">Weight: {item.weight}</p>
          <p className="workout__content">Sets: {item.sets}</p>
          <p className="workout__content">Reps: {item.reps}</p>
          </div>
          <button onClick={handleRemoveClick} >Delete</button>
        </div>
    )
}

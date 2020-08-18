import React from 'react'
import { Button, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import './styling/workoutList.scss'

export default function Workout({item, toggleCompleted, removeItem}) {
    function handleCheckClick() {
        toggleCompleted(item.id)
      }
    
      function handleRemoveClick() {
        removeItem(item.id);
      }


    return (
            <div className="workout__item" >
          <Checkbox className="workout__item--check" type="checkbox" onClick={handleCheckClick}/>
          <Typography variant="body1" style={{
            textDecoration: item.completed ? 'line-through' : null
          }}> 
          <p className="workout__content">Body Part: {item.bodyPart}</p>
          <p className="workout__content">Name: {item.workoutName}</p>
          <p className="workout__content">Weight: {item.weight}</p>
          <p className="workout__content">Sets: {item.sets}</p>
          <p className="workout__content">Reps: {item.reps}</p>
          </Typography>
          <Button onClick={handleRemoveClick} >Delete</Button>
        </div>
    )
}

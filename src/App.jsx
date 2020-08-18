import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import WorkoutList from "./components/WorkoutList";

import 'fontsource-roboto';

import "./App.scss";

const LOCAL_STORAGE_KEY = "workout-plan";

function App() {
  const [list, setList] = useState([]);
  console.log(list)
  //On load / inital render

  useEffect(() => {
    const workoutStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (workoutStorage) {
      setList(workoutStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);
    
  function addToList(item) {
    setList([item, ...list]);
  }

  function toggleCompleted(id) {
    setList(
      list.map(item => {
        if (item.id === id) {
          return{
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    )
  }

  function removeItem(id){
    setList(list.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <Input addToList={addToList} />
      <WorkoutList list={list} toggleCompleted={toggleCompleted} removeItem={removeItem}/>
      <Footer />
    </div>
  );
}

export default App;

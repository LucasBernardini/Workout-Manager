import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import WorkoutList from "./components/WorkoutList";

import "./App.css";

const LOCAL_STORAGE_KEY = "workout-plan";

function App() {
  const [list, setList] = useState([]);
  
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

  return (
    <div className="App">
      <Header />
      <Input addToList={addToList} />
      <WorkoutList list={list} />
      <Footer />
    </div>
  );
}

export default App;

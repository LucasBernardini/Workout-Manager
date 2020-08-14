import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';
import WorkoutList from './components/WorkoutList';

import './App.css';

function App() {

  const [list, setList] = useState([]);

  function addToList(item) {
    setList([item, ...list]);
  }

  return (
    <div className="App">
      <Header />
      <Input addToList={addToList} />
      <WorkoutList list={list}/>
      <Footer />
    </div>
  );
}

export default App;

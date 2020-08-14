import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';
import WorkoutList from './components/WorkoutList';

import './App.css';

function App() {

  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Input />
      <WorkoutList />
      <Footer />
    </div>
  );
}

export default App;

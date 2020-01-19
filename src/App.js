import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Topstrip from './components/Header/Top-strip/Topstrip';
import Maninavbar from './components/Header/Main-navigation/Maninavbar';
import HomePage from './components/Page/Home/HomePage';

function App() {
  return (
    <div className='App'>
      <Topstrip />
      <Maninavbar />
      <HomePage />
    </div>
  );
}

export default App;

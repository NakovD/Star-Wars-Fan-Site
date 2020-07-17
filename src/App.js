import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterForm from './Components/CharacterForm/CharacterForm.js';
import AuthPage from './Components/Auth/AuthPage.js';

function App() {
  return (
    <div className="app_container">
      <CharacterForm type="edit"/>
    </div>
  );
}

export default App;

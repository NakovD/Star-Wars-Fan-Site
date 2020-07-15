import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AuthForm from './Components/Auth/AuthForm.js';
// import ErrorNotification from './Components/ErrorNot/ErrorNotification.js';

function App() {
  return (
    <div className="app_container">
      {/* <ErrorNotification error={staTE.error} text={staTE.errMessage}/> */}
      <AuthForm type="register"/>
    </div>
  );
}

export default App;

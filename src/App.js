import React from 'react';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <LoginForm />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.css';
import Router from './routes/router';
import MessageBox from './components/MessageBox/index';

function App() {
  return (
    <div className="App">
      <Router />
      <MessageBox />
    </div>
  );
}

export default App;

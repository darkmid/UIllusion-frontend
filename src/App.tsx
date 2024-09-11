import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/chat-windows/ChatWindow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatWindow/>
      </header>
    </div>
  );
}

export default App;

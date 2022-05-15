import React from 'react';
import './index.css';
//components
import Header from './components/Header';
import Nav from "./components/Nav";
import Body from './components/Body.jsx';
function App() {
  return (
    <div className="App">
      <Nav /> 
      <Header />
      <Body />
        
       
      
    </div>
  );
}

export default App;

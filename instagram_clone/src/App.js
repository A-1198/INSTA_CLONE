import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Post from './Post';
function App() {
  return (
    <div className="App">
      <div className='app_header'>
        <img className='app_headerimage' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt=''/>
      </div>
      <h1>Hemlo</h1>
      <Post/>
    </div>
  );
}

export default App;

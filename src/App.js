import React from 'react';
import './App.css'
import Profile from './Components/Profile';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

const App = () => {
    return(
        <div className='wrapper' >
          <Header/>
          <Navigation/>
          <Profile/>
        </div>
      )
}

export default App;

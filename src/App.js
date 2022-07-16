import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/shared/Header/Header';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div className="App">weather
      <Header />

      <Routes>
        <Route exact path="/" 
          element = {<Home />}
        /> 
          
        
        <Route exact path="/stats" 
          element = {<Stats />} 
        />
        
        
      </Routes>
    </div>
  );
}

export default App;

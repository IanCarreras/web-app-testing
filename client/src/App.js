import React, { useState, useEffect } from 'react';

import Display from './components/Display'
import Dashboard from './components/Dashboard'

import './App.css';

function App() {
  const [display, setDisplay] = useState({
    'ball': 0,
    'strike': 0
  })

  useEffect(() => {
    if (display.ball === 4) setDisplay({...display, 'ball': 0}) 
    if (display.strike === 3) setDisplay({...display, 'strike': 0})
  }, [display])

  return (
    <div className="App">
      <Display display={display}/>
      <Dashboard setDisplay={setDisplay} display={display} />
    </div>
  );
}

export default App;
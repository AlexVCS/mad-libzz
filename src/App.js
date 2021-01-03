import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ blanks, setBlanks ] = useState([])
  const [ values, setValues ] = useState([])
  const [ newValues, setNewValues ] = useState([])

  useEffect(async () => {
    const res = await fetch('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=15%27');
    const data = await res.json();
    console.log(data);
    setBlanks(data.blanks)
    setValues(data.value)
  }, []);

  const handleValueChange = (event) => {
    console.log(setNewValues(event.target.value))
  }

  return (
    <div className="app">
    <div className="header">Madlibzz Game</div>
      {blanks.map((blank, i) =>
        <div className="input-group" key={i}>
          <div className="wordTypeText">
          {blank}
          </div>
          <span>
          <input onChange={handleValueChange} placeholder={`Enter ${blank}`} type="text"/>
          </span>
        </div>
        )}
        <div className="submitButton">Submit</div>
    </div>
  );
}

export default App;

// store onChange in state
// third state called values, track everything that's changed in the input and store it in the state
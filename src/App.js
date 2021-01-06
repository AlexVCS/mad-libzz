import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ blanks, setBlanks ] = useState([])
  const [ values, setValues ] = useState([])
  const [ inputs, setInputs ] = useState([])

  useEffect(async () => {
    const res = await fetch('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=15%27');
    const data = await res.json();
    console.log(data);
    setBlanks(data.blanks)
    setValues(data.value)
  }, []);

  const handleValueChange = (event, index) => {
    const newInputs = [...inputs]
    newInputs[index] = event.target.value
    setInputs(newInputs)
  }

  // const renderStory = () => {

  // }

  return (
    <div className="app">
    <div className="header">Madlibzz Game</div>
      {blanks.map((blank, index) =>
        <div className="input-group" key={index}>
          <div className="wordTypeText">
          {blank}
          </div>
          <span>
          <input onChange={(event) => {handleValueChange(event, index)}} placeholder={`Enter ${blank}`} type="text"/>
          </span>
        </div>
        )}
        <div className="submitButton">Submit</div>
    </div>
  );
}

export default App;

// add a button for where when you click the button it displays the whole story
// try to trim off extra spaces
// hide blanks and inputs
// maybe a button for a new game which fetches a brand new api
{/* <div onClick={}>New Game</div> */}
// add an alert if the button is clicked but not all inputs have text in them
// alert('Please fill in all the blanks!')
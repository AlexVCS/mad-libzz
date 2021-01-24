import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ blanks, setBlanks ] = useState([])
  const [ values, setValues ] = useState([])
  const [ inputs, setInputs ] = useState([])
  const [ title, setTitle] = useState([])
  const [ story, setStory ] = useState([])
  // const [ errors, setErrors ] = useState([])
  // const [ showErrors, setShowErrors ] = useState(true)

  async function fetchData() {
    const res = await fetch('https://madlibz.herokuapp.com/api/random?minlength=5&maxlength=15%27');
    const data = await res.json();
      setBlanks(data.blanks)
      setValues(data.value)
      setTitle(data.title)
      setStory([])
      setInputs([])
    }
        useEffect(() => {
          fetchData();
        }, []);

  const handleValueChange = (event, index) => {
    const newInputs = [...inputs]
    newInputs[index] = event.target.value
    setInputs(newInputs)
  }

  const onSubmit = () => {
    const arr = []
    for (let i = 0; i < values.length - 1; i++) {
      arr.push(values[i])
      arr.push(inputs[i])
    }
      setStory(arr)
      const instructions = document.getElementsByClassName('instruction-text')
      instructions.innerText = ''

      // const error = blanks.map((blank, i) => values[i])
      // setErrors(error)
  }

  

  return (
    <div className="app">
      <div className="header">Mad Libzz Game
        { story.length === 0
          ? <div className="instruction-text">Fill in each blank with the right kind of word & click submit 😃</div>
          : ''
        }
      </div>
        {!story.length && blanks.map((blank, index) =>
          <div className="input-group" key={index}>
            <div className="wordTypeText">
              {blank}
            </div>
            <span>
            <input onChange={(event) => {handleValueChange(event, index)}} placeholder={`Enter ${blank}`} className="story-blank" type="text"/>
            {/* {setShowErrors && values[index] && <div className="error-text" >Please fill this out</div>} */}
            </span>
          </div>
        )}
            {!!story.length &&
              <>
                <div className="story-title">{title}</div>
                <div className="story-text">{story}</div>
              </>
            }
     
            { story.length === 0
              ? <div onClick={onSubmit} className="submitAndNewGameButton">Submit</div>
              : <div onClick={fetchData} className="submitAndNewGameButton">New Game</div>
            }
    </div>
  );
}

export default App;
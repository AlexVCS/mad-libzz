import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ fields, setFields ] = useState([])

  useEffect(async () => {
    const res = await fetch('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=15%27');
    console.log(res);
    // console.log(res.headers);
  }, []);

  return (
    <div className="App">
      {fields.map(field =>
        <div key={fields.id}>
          <span>
          <input placeholder="Add your here" type="text"/>
          </span>
        </div>
        )}
      Bonjour
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(async () => {
    const res = await fetch('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=15%27');
    console.log(res);
  }, []);

  return (
    <div className="App">
      {/* {res.map(field =>
        <div key={}>
          <span></span>
        </div>
      )} */}
      Bonjour
    </div>
  );
}

export default App;
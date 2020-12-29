import React, { useEffect } from 'react';
import './App.css';

function GetApiData() {
useEffect(() => {
async function fetchData() {
  const res = await fetch('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=15');
 }
 fetchData();
}, []);
}

console.log(GetApiData);
console.log(res);

function App() {
  return (
    <div className="App">
      Bonjour
    </div>
  );
}

export default App;

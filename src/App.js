import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect( () => {fetch(`http://localhost:3000/cards`)
  .then(r => r.json())
  .then(data => console.log(data))} , []
  )
  return (
    <div>this is a test</div>
  );
}

export default App;

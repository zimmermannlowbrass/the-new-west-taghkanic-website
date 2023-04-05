import React, { useEffect, useState } from 'react';
import ItemList from './Components/ItemList';

function App() {

  const [items, setItems] = useState([])

  useEffect( () => {fetch(`http://localhost:3000/breakfast`)
  .then(r => r.json())
  .then(items => setItems(items))} , []
  )


  return (
    <div>
      <ItemList items = {items} />
    </div>
  );
}

export default App;

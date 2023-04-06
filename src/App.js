import React, { useEffect, useState } from 'react';
import ItemList from './Components/ItemList';
import NavBar from './Components/NavBar';
import About from './Components/About';
import { Route, Switch } from 'react-router-dom';


function App() {

  const [items, setItems] = useState([])

  useEffect( () => {fetch(`http://localhost:3000/breakfast`)
  .then(r => r.json())
  .then(items => setItems(items))} , []
  )


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ItemList items = {items} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import About from './Components/About';
import MealItemList from './Components/MealItemList';
import DrinkItemList from './Components/DrinkItemList';


function App() {

  const [items, setItems] = useState([])

  const mealItems = items.filter(item => item.type === 'meal')
  const drinkItems = items.filter(item => item.type === 'drink')

  useEffect( () => {fetch(`http://localhost:3000/breakfast`)
  .then(r => r.json())
  .then(items => setItems(items))} , []
  )


  return (
    <div>
      <Banner />
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route path='/meals'>
          <MealItemList items = {mealItems} />
        </Route>
        <Route path='/drinks'>
          <DrinkItemList items = {drinkItems} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

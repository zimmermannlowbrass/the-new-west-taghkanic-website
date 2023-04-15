import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import MealItemList from './Components/FoodAndDrinkStuff/MealItemList';
import DrinkItemList from './Components/FoodAndDrinkStuff/DrinkItemList';
import CheckOut from './Components/Checkout/CheckOut';
import About from './Components/About/About';


function App() {

  const [items, setItems] = useState([])
  const [checkOutCart, setCheckOutCart] = useState([])

  useEffect( () => {fetch(`http://localhost:3000/breakfast`)
  .then(r => r.json())
  .then(setItems)
  },[])

  function handleAddItem(newItem) {
    fetch(`http://localhost:3000/breakfast`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newItem)
    })
    .then(r => r.json())
    .then((newItem) => {
      const newItems = [...items, newItem]
      setItems(newItems)
    })
  }

  function handleDeleteItem(deletedItem) {
    fetch(`http://localhost:3000/breakfast/${deletedItem.id}`, {
      method : "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const newItems = items.filter(item => item.id !== deletedItem.id)
      setItems(newItems)
    })
  }

  function handleCheckOutCartChange(quantity, item, total) {
    const newCartItem = {
      quantity: quantity, 
      name: item.name, 
      image: item.image,
      price: total
    }
    setCheckOutCart([...checkOutCart, newCartItem])
  }



  const mealItems = items.filter(item => item.type === 'meal')
  const drinkItems = items.filter(item => item.type === 'drink')
 
  return (
    <div className='App'>
      <Banner />
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/meals'>
          <MealItemList 
          items = {mealItems}
          onAddItem = {handleAddItem}
          onDeleteItem = {handleDeleteItem}
          onChangeCheckOutCart = {handleCheckOutCartChange}
           />
        </Route>
        <Route path='/drinks'>
          <DrinkItemList 
          items = {drinkItems} 
          onAddItem = {handleAddItem}
          onDeleteItem = {handleDeleteItem}
          onChangeCheckOutCart = {handleCheckOutCartChange}
          />
        </Route>
        <Route path='/checkout'>
          <CheckOut 
          checkOutCart={checkOutCart}/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

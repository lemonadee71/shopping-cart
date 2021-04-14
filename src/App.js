import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Shop from './components/Shop';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
// import Catalog from './components/Catalog';

function App() {
  const [data, setData] = useState([]);
  const [itemsInCart, setItemsInCart] = useState({});

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();

    setData(photos.slice(0, 100));
  };

  const addItemsToCart = ({ id, quantity, price }) => {
    const item = {
      price,
      quantity: (itemsInCart[id] ? itemsInCart[id].quantity : 0) + quantity,
    };

    setItemsInCart({ ...itemsInCart, [id]: item });
    console.log(itemsInCart);
  };

  const removeItemsFromCart = ({ id, quantity }) => {
    const newQuantity = Math.max(
      0,
      (itemsInCart[id] ? itemsInCart[id].quantity : 0) - quantity
    );

    setItemsInCart({
      ...itemsInCart,
      [id]: { quantity: newQuantity, price: itemsInCart[id].price },
    });

    console.log(itemsInCart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <NavBar />
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/shop">
            <Shop data={data} />
          </Route>
          <Route path="/shop/:id">
            <Shop data={data} />
          </Route>
          <Route exact path="/cart">
            <Cart
              items={itemsInCart}
              data={data}
              removeFromCart={removeItemsFromCart}
              addToCart={addItemsToCart}
            />
          </Route>
          <Route exact path="/products/:id">
            <ProductDetail data={data} addToCart={addItemsToCart} />
          </Route>
          <Route exact path="/about" component={About} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

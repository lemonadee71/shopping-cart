import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Shop from './components/Shop';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
// import Catalog from './components/Catalog';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();

    setData(photos);
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
          <Route exact path="/products/:id">
            <ProductDetail data={data} />
          </Route>
          <Route exact path="/about" component={About} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

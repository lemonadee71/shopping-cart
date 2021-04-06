import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Shop from './components/Shop';
import About from './components/About';
import ProductDetail from './components/ProductDetail';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos?albumId=1'
    );
    const photos = await response.json();

    setData(photos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/shop">
            <Shop data={data} />
          </Route>
          <Route exact path="/products/:id">
            <ProductDetail data={data} />
          </Route>
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

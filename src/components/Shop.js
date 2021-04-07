import React from 'react';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Catalog from './Catalog';

const Shop = ({ data }) => {
  // let match = useRouteMatch();

  return (
    // <Switch>
    //   <Route exact path={match.path}>
    //     <Catalog data={data} />
    //   </Route>
    //   <Route exact path={`${match.path}/:id`}>
    //     <Catalog data={data} />
    //   </Route>
    // </Switch>
    <>
      <Catalog data={data} />
    </>
  );
};

export default Shop;

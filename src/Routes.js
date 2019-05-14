import React from 'react';
import {Router, Route} from 'react-router';

import OfferList from './OfferList';

const Routes = props => {
  return (
    <Router>
      <Route path="/" exact component={OfferList} />
    </Router>
  );
};

export default Routes;

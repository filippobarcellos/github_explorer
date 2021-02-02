import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import User from '../Pages/User';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/:user" component={User} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;